"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TEXT = "Rooflines, trees and storefronts. Hung, lit and taken down by one crew.";
const HOT = new Set(["Rooflines,", "lit", "down"]);

/** The sentence switches on word by word as it crosses the screen, like a string of bulbs. */
export function Statement() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { gsap.set(".st-w", { opacity: 1 }); return; }
    gsap.to(".st-w", {
      opacity: 1, stagger: 0.12, ease: "none",
      scrollTrigger: { trigger: ref.current, start: "top 72%", end: "bottom 55%", scrub: 0.6 },
    });
  }, { scope: ref });

  return (
    <section ref={ref} className="bg-night py-20 md:py-28">
      <div className="max-w-[1100px] mx-auto px-5 md:px-10 text-center">
        <p className="text-[9.4vw] md:text-[5.2vw] leading-[1.08] tracking-[-0.035em] font-medium">
          {TEXT.split(" ").map((w, i) => (
            <span key={i} data-hide className={`st-w inline-block mx-[0.12em] ${HOT.has(w) ? "font-serif italic font-normal warm" : ""}`} style={{ opacity: 0.14 }}>{w}</span>
          ))}
        </p>
      </div>
    </section>
  );
}
