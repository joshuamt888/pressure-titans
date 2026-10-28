const KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid"] as const;
export type Attribution = Partial<Record<(typeof KEYS)[number] | "landing" | "referrer", string>>;
const STORE = "pt_attribution";

/** Browser: remember where the visitor came from for this session (the first page, or any page carrying ad tags). */
export function captureAttribution() {
  try {
    const q = new URLSearchParams(location.search);
    const tagged = KEYS.some((k) => q.get(k));
    if (sessionStorage.getItem(STORE) && !tagged) return;
    const a: Attribution = { landing: location.pathname, referrer: document.referrer };
    for (const k of KEYS) { const v = q.get(k); if (v) a[k] = v; }
    sessionStorage.setItem(STORE, JSON.stringify(a));
  } catch { /* storage blocked: the lead still goes through, just without a source */ }
}

export function getAttribution(): Attribution {
  try { return JSON.parse(sessionStorage.getItem(STORE) ?? "{}"); } catch { return {}; }
}

/** Server: the source lines appended to the lead email. Only what is present, each trimmed and capped. */
export function attributionLines(raw: unknown): string[] {
  const a = (raw && typeof raw === "object" ? raw : {}) as Record<string, unknown>;
  const s = (k: string) => String(a[k] ?? "").trim().slice(0, 200);
  const src = [s("utm_source"), s("utm_medium")].filter(Boolean).join(" / ");
  return [
    src && `Source: ${src}`,
    s("utm_campaign") && `Campaign: ${s("utm_campaign")}`,
    s("utm_term") && `Keyword: ${s("utm_term")}`,
    s("utm_content") && `Ad: ${s("utm_content")}`,
    s("gclid") && "Google Ads click: yes",
    s("landing") && `Landing page: ${s("landing")}`,
    s("referrer") && `Referrer: ${s("referrer")}`,
  ].filter(Boolean) as string[];
}
