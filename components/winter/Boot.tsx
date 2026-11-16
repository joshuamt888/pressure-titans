"use client";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Marks the document as scripted (turns the CSS failsafes off) and stops GSAP catching up after a tab blur.
 * Trigger positions are measured once fonts and images have settled, so reveals fire where they should; the phone
 * address bar showing and hiding no longer re-measures mid-scroll. Never refresh on scroll (gsap-scroll skill).
 */
export function Boot() {
  useEffect(() => {
    document.documentElement.classList.add("js-ready");
    gsap.ticker.lagSmoothing(0);
    ScrollTrigger.config({ ignoreMobileResize: true });
    const refresh = () => ScrollTrigger.refresh();
    document.fonts?.ready.then(refresh);
    if (document.readyState === "complete") refresh(); else window.addEventListener("load", refresh, { once: true });
    return () => window.removeEventListener("load", refresh);
  }, []);
  return null;
}
