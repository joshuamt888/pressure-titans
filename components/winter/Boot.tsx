"use client";

import { useEffect } from "react";
import gsap from "gsap";

/** Marks the document as scripted (turns the CSS failsafes off) and stops GSAP catching up after a tab blur. */
export function Boot() {
  useEffect(() => {
    document.documentElement.classList.add("js-ready");
    gsap.ticker.lagSmoothing(0);
  }, []);
  return null;
}
