"use client";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Marks the document as scripted (turns the CSS failsafes off). GSAP keeps its default lag smoothing: after a hitch on a
 * phone, tweens carry on from where they were instead of jumping ahead (lagSmoothing(0) made them jump).
 * Trigger positions are measured once fonts and images have settled, so reveals fire where they should; the phone
 * address bar showing and hiding no longer re-measures mid-scroll. Never refresh on scroll (gsap-scroll skill).
 */
export function Boot() {
  useEffect(() => {
    document.documentElement.classList.add("js-ready");
    ScrollTrigger.config({ ignoreMobileResize: true });
    const refresh = () => ScrollTrigger.refresh();
    document.fonts?.ready.then(refresh);
    if (document.readyState === "complete") refresh(); else window.addEventListener("load", refresh, { once: true });
    return () => window.removeEventListener("load", refresh);
  }, []);
  return null;
}
