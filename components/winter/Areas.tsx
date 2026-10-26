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
    gsap.to(".ar-up", { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 75%" } });
    if (reduced) { gsap.set(".ar-city", { opacity: 1 }); return; }
    gsap.to(".ar-city", { opacity: 1, stagger: 0.07, ease: "none", scrollTrigger: { trigger: ".ar-block", start: "top 80%", end: "bottom 55%", scrub: 0.6 } });
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
        <p className="mt-12 text-lg md:text-xl text-bone/80 leading-relaxed max-w-[75ch]">
          Christmas light installation near me: we install and hang Christmas lights in every city above, plus Minneapolis, St. Paul and across the Twin Cities.
        </p>
        <p className="mt-6 text-lg md:text-xl text-bone/80 leading-relaxed max-w-[75ch]">
          Popular searches we answer: Christmas light installation Minneapolis, Christmas light installation Minnesota, Christmas light installers Minnesota, holiday light installation Twin Cities, commercial Christmas lights near me, commercial Christmas lights LED, holiday lighting for house, and Christmas light installation cost.
        </p>
      </div>
    </section>
  );
}
