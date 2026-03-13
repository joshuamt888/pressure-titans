export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

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

  const name = String(body.name ?? "").trim().slice(0, 100);
  const email = String(body.email ?? "").trim().slice(0, 200);
  const phone = String(body.phone ?? "").trim().slice(0, 30);
  const service = String(body.service ?? "").trim().slice(0, 100);
  const message = String(body.message ?? "").trim().slice(0, 2000);

  if (!name || !email || !phone) {
    return NextResponse.json({ error: "Name, email, and phone are required." }, { status: 400 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  const ses = new SESClient({
    region: "us-east-2",
    credentials: {
      accessKeyId: (process.env.AWS_SES_ACCESS_KEY_ID ?? "").trim(),
      secretAccessKey: (process.env.AWS_SES_SECRET_ACCESS_KEY ?? "").trim(),
    },
  });

  try {
    await ses.send(new SendEmailCommand({
      Source: `"Pressure Titans Website" <${process.env.SES_FROM_EMAIL}>`,
      Destination: { ToAddresses: [process.env.SES_TO_EMAIL!] },
      Message: {
        Subject: { Data: `New Quote Request from ${name}` },
        Body: {
          Text: {
            Data: [
              `Name: ${name}`,
              `Email: ${email}`,
              `Phone: ${phone}`,
              `Service: ${service || "Not specified"}`,
              `Message: ${message || "None"}`,
            ].join("\n"),
          },
          Html: {
            Data: `
              <h2>New Quote Request — Pressure Titans</h2>
              <table cellpadding="8" style="border-collapse:collapse;font-family:sans-serif;font-size:15px;">
                <tr><td><strong>Name</strong></td><td>${name}</td></tr>
                <tr><td><strong>Email</strong></td><td>${email}</td></tr>
                <tr><td><strong>Phone</strong></td><td>${phone}</td></tr>
                <tr><td><strong>Service</strong></td><td>${service || "Not specified"}</td></tr>
                <tr><td><strong>Message</strong></td><td>${message || "None"}</td></tr>
              </table>
            `,
          },
        },
      },
    }));

    return NextResponse.json({ success: true });
  } catch (err) {
    const e = err as Error & { Code?: string };
    console.error("SES send error:", e.message, e.Code);
    return NextResponse.json({ error: "Failed to send message. Try again." }, { status: 500 });
  }
}
