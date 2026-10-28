// run: npx tsx lib/attribution.check.ts
import { attributionLines } from "./attribution";

const assert = (c: boolean, m: string) => { if (!c) { console.error("FAIL", m); process.exit(1); } };
assert(attributionLines(undefined).length === 0 && attributionLines("x").length === 0 && attributionLines(null).length === 0, "garbage in gives no lines");
const l = attributionLines({ utm_source: "google", utm_medium: "cpc", utm_campaign: "holiday", gclid: "abc", landing: "/start", referrer: "", junk: "<script>" });
assert(l.join("|") === "Source: google / cpc|Campaign: holiday|Google Ads click: yes|Landing page: /start", "tagged lead: " + l.join("|"));
assert(attributionLines({ landing: "/contact", referrer: "https://www.google.com/" }).join("|") === "Landing page: /contact|Referrer: https://www.google.com/", "organic lead");
assert(attributionLines({ utm_source: "x".repeat(500) })[0].length <= 210, "capped");
console.log("attribution checks passed");
