export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import { SNSClient, PublishCommand } from "@aws-sdk/client-sns";

const RATE_LIMIT_MAP = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = RATE_LIMIT_MAP.get(ip);
  if (!entry || now > entry.resetAt) {
    RATE_LIMIT_MAP.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  if (entry.count >= RATE_LIMIT_MAX) return true;
  entry.count++;
  return false;
}

// Detect gibberish: too many consecutive consonants = bot-generated random string
function isGibberish(value: string): boolean {
  if (!value) return false;
  const lower = value.toLowerCase();
  // Flag strings with 5+ consecutive consonants (no real name does this)
  if (/[^aeiou\s\d\W]{5,}/.test(lower)) return true;
  // Flag strings that are >80% non-vowel alpha characters (random char strings)
  const alpha = lower.replace(/[^a-z]/g, "");
  if (alpha.length >= 6) {
    const vowels = (alpha.match(/[aeiou]/g) ?? []).length;
    const ratio = vowels / alpha.length;
    if (ratio < 0.1) return true; // less than 10% vowels = random garbage
  }
  return false;
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // --- SPAM LAYER 1: Honeypot — bots fill hidden fields, humans don't ---
  const honeypot = String(body.website ?? "").trim();
  if (honeypot) {
    // Silently accept so bots think it worked
    return NextResponse.json({ success: true });
  }

  // --- SPAM LAYER 2: Timing check — bots submit instantly, humans don't ---
  const formLoadTime = Number(body._formLoadTime ?? 0);
  const elapsed = formLoadTime > 0 ? Date.now() - formLoadTime : Infinity;
  if (elapsed < 4000) {
    // Also silent — don't give bots a signal
    return NextResponse.json({ success: true });
  }

  const name = String(body.name ?? "").trim().slice(0, 100);
  const email = String(body.email ?? "").trim().slice(0, 200);
  const phone = String(body.phone ?? "").trim().slice(0, 30);
  const service = String(body.service ?? "").trim().slice(0, 100);
  const address = String(body.address ?? "").trim().slice(0, 300);
  const message = String(body.message ?? "").trim().slice(0, 2000);

  if (!name || !email || !phone) {
    return NextResponse.json({ error: "Name, email, and phone are required." }, { status: 400 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  // --- SPAM LAYER 3: Gibberish detection — random char strings fail this ---
  if (isGibberish(name) || isGibberish(address)) {
    console.warn("Spam blocked (gibberish):", { name, email, ip });
    return NextResponse.json({ success: true }); // silent rejection
  }

  // --- SPAM LAYER 4: Basic phone sanity check ---
  const phoneDigits = phone.replace(/\D/g, "");
  if (phoneDigits.length < 10 || phoneDigits.length > 15) {
    return NextResponse.json({ error: "Please enter a valid phone number." }, { status: 400 });
  }

  const awsCreds = {
    region: (process.env.AWS_REGION ?? "us-east-2").trim(),
    credentials: {
      accessKeyId: (process.env.AWS_ACCESS_KEY_ID ?? "").trim(),
      secretAccessKey: (process.env.AWS_SECRET_ACCESS_KEY ?? "").trim(),
    },
  };

  const ses = new SESClient(awsCreds);
  const sns = new SNSClient(awsCreds);

  const notifyEmail = (process.env.NOTIFY_EMAIL ?? "").trim();
  const notifyPhone = (process.env.NOTIFY_PHONE ?? "").trim();
  const snsFrom = (process.env.SNS_ORIGINATION_NUMBER ?? "").trim();

  const subject = `New Quote Request from ${name} — Pressure Titans`;
  const textBody = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Address: ${address || "Not provided"}`,
    `Service: ${service || "Not specified"}`,
    `Message: ${message || "None"}`,
  ].join("\n");
  // Include all key fields so Mike can follow up without opening email
  const smsBody = `New PT lead! ${name} | ${phone} | ${email} | ${service || "No service selected"} | ${address || "No address"}`.slice(0, 160);

  try {
    await ses.send(new SendEmailCommand({
      Source: "noreply@steadyscaling.com",
      Destination: { ToAddresses: [notifyEmail] },
      Message: {
        Subject: { Data: subject },
        Body: { Text: { Data: textBody } },
      },
    }));

    // Send SMS via SNS (non-blocking — don't fail the form if SMS fails)
    sns.send(new PublishCommand({
      PhoneNumber: notifyPhone,
      Message: smsBody,
      MessageAttributes: {
        "AWS.MM.SMS.OriginationNumber": {
          DataType: "String",
          StringValue: snsFrom,
        },
      },
    })).catch((snsErr) => console.error("SNS error:", snsErr));

    return NextResponse.json({ success: true });
  } catch (err) {
    const e = err as Error & { Code?: string };
    console.error("SES send error:", e.message, e.Code);
    return NextResponse.json({ error: "Failed to send message. Try again." }, { status: 500 });
  }
}
