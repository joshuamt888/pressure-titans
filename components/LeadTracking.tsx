"use client";
// Intent signals for sites whose lead form we can't see into (Jobber iframe) and for phone taps.
import { useEffect } from "react";

export default function LeadTracking() {
  useEffect(() => {
    const g = (name: string) => (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag?.("event", name);
    const click = (e: MouseEvent) => {
      if ((e.target as Element | null)?.closest?.("a[href^='tel:']")) {
        g("phone_click");
        (window as unknown as { clarity?: (...a: unknown[]) => void }).clarity?.("event", "phone_click");
      }
    };
    const blur = () =>
      setTimeout(() => {
        const a = document.activeElement;
        if (a?.tagName === "IFRAME" && /getjobber/.test((a as HTMLIFrameElement).src)) g("form_start");
      }, 0);
    document.addEventListener("click", click);
    window.addEventListener("blur", blur);
    return () => {
      document.removeEventListener("click", click);
      window.removeEventListener("blur", blur);
    };
  }, []);
  return null;
}
