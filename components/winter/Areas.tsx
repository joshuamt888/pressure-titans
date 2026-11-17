"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { CITIES as REAL, cityHref } from "./siteData";

gsap.registerPlugin(ScrollTrigger);

// The cities with Christmas light pages on pressuretitans.com.
const CITIES = REAL;

/** The service area as one block of type that switches on city by city. */
export function Areas({ current }: { current?: string } = {}) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    gsap.to(".ar-up", { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 92%" } });
    if (reduced) { gsap.set(".ar-city", { opacity: 1 }); return; }
    gsap.to(".ar-city", { opacity: 1, duration: 0.4, stagger: 0.03, ease: "power1.out", scrollTrigger: { trigger: ".ar-block", start: "top 92%" } });
  }, { scope: ref });

  return (
    <section ref={ref} id="areas" className="bg-night py-20 md:py-28">
      <div className="max-w-[1300px] mx-auto px-5 md:px-10">
        <h2 data-hide className="ar-up text-[10vw] md:text-[4.2vw] leading-[1.02] tracking-[-0.035em] font-medium max-w-[18ch] mb-10 md:mb-14" style={{ opacity: 0, transform: "translateY(26px)" }}>
          Where we hang <span className="font-serif italic warm">lights.</span>
        </h2>
        <p className="ar-block text-[4.4vw] md:text-[2.05vw] leading-[1.18] tracking-[-0.03em] font-medium">
          {CITIES.map((c, i) => (
            <span key={c.s} data-hide className="ar-city inline-block mr-[0.5em]" style={{ opacity: 0.16 }}>
              <a href={cityHref(c.s)} className={`hover:text-glow transition-colors ${current === c.s ? "font-serif italic font-normal warm" : ""}`}>{c.n}</a>{i < CITIES.length - 1 ? <span className="text-glow/60">,</span> : "."}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
