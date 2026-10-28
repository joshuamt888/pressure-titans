declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

// Google Ads conversion for Mike's account. Paste the "AW-XXXXXXXXX/label" from the
// conversion action's tag here; until then only the GA4 event fires.
const ADS_SEND_TO = "";

/** Call once when a quote request goes through (the API accepted it). */
export function trackLead(source: string) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", "generate_lead", { form_source: source });
  if (ADS_SEND_TO) window.gtag("event", "conversion", { send_to: ADS_SEND_TO });
}
