"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { PHONE, TEL } from "./phone";

gsap.registerPlugin(ScrollTrigger);

const WORD = "PRESSURE TITANS";

/** Quote CTA, a magnetic call button, then the wordmark switching on letter by letter. */
export function Close() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    gsap.to(".cl-up", { opacity: 1, y: 0, duration: 0.9, stagger: 0.1, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 75%" } });
    const lit = { color: "#ffe2b0", textShadow: "0 0 36px rgba(255,190,100,0.75)" };
    const mid = { color: "#8a7a62", textShadow: "0 0 10px rgba(255,190,100,0.25)" };
    const dim = { color: "#2a3447", textShadow: "0 0 0px rgba(255,190,100,0)" };
    if (reduced) { gsap.set(".cl-letter", lit); return; }
    // every letter warms up like a bulb that has just been plugged in: a few stutters, then it holds
    ScrollTrigger.create({
      trigger: ".cl-word", start: "top 92%", once: true,
      onEnter: () => {
        gsap.utils.toArray<HTMLElement>(".cl-letter").forEach((el, i) => {
          gsap.to(el, {
            keyframes: [
              { ...mid, duration: 0.05 }, { ...dim, duration: 0.09 }, { ...lit, duration: 0.05 }, { ...dim, duration: 0.14 },
              { ...mid, duration: 0.06 }, { ...lit, duration: 0.04 }, { ...mid, duration: 0.07 }, { ...lit, duration: 0.35 },
            ],
            ease: "none", delay: i * 0.11 + Math.random() * 0.35,
          });
        });
      },
    });
  }, { scope: ref });

  return (
    <footer ref={ref} id="quote" className="bg-night pt-24 md:pt-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 text-center">
        <h2 data-hide className="cl-up text-[10vw] md:text-[4.6vw] leading-[1.04] tracking-[-0.03em] font-medium max-w-[16ch] mx-auto" style={{ opacity: 0, transform: "translateY(26px)" }}>
          Send the address. <span className="font-serif italic warm">We&rsquo;ll bring the lights.</span>
        </h2>
        <p data-hide className="cl-up text-base md:text-lg text-bone/90 mt-6 max-w-[48ch] mx-auto" style={{ opacity: 0, transform: "translateY(26px)" }}>
          Homes and businesses across the west metro. Text the address or a photo of the house.
        </p>
        <div data-hide className="cl-up mt-12 flex flex-wrap justify-center gap-4" style={{ opacity: 0, transform: "translateY(26px)" }}>
          <a href="/contact" className="rounded-full bg-glow text-navy text-xl font-medium px-10 py-5 hover:bg-bone transition-colors active:scale-[0.98]">Get a free quote</a>
          <a href={TEL} className="hidden md:inline-block rounded-full border border-bone/40 bg-bone/10 text-bone text-xl px-10 py-5 hover:bg-bone/20 transition-colors active:scale-[0.98]">{PHONE}</a>
        </div>
      </div>

      <div className="cl-word mt-16 md:mt-20 px-5 md:px-8 pb-6 md:pb-8" role="img" aria-label="Pressure Titans">
        <div aria-hidden className="flex justify-between items-baseline leading-[0.95]" style={{ fontSize: "clamp(26px, 9.6vw, 200px)" }}>
          {WORD.split("").map((c, i) =>
            c === " " ? (
              <span key={i} className="inline-block w-[0.34em]" />
            ) : (
              <span key={i} className="cl-letter inline-block font-medium tracking-[-0.04em]" style={{ color: "#2a3447", textShadow: "0 0 0px rgba(255,190,100,0)" }}>{c}</span>
            ),
          )}
        </div>
      </div>

    </footer>
  );
}
