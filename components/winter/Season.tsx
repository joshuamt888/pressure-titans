"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  { n: "01", t: "Send the address", d: "Text the address or a photo of the house and get a quote." },
  { n: "02", t: "The crew hangs it", d: "Every strand along the roofline, the trees and the entrances, put up by the Pressure Titans crew." },
  { n: "03", t: "Switch on", d: "Dusk, then the switch. That's the whole point." },
  { n: "04", t: "Down when it's over", d: "When the season ends, the crew comes back and takes it all down." },
];

/** A wire runs down the page and a bulb lights at each step as you reach it. */
export function Season() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    gsap.to(".se-head", { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 75%" } });
    if (reduced) { gsap.set(".se-fill", { scaleY: 1 }); gsap.set(".se-bulb", { backgroundColor: "#ffe2b0" }); gsap.set(".se-step", { opacity: 1, y: 0 }); return; }
    gsap.to(".se-fill", { scaleY: 1, ease: "none", scrollTrigger: { trigger: ".se-list", start: "top 60%", end: "bottom 60%", scrub: true } });
    gsap.utils.toArray<HTMLElement>(".se-step").forEach((el) => {
      const bulb = el.querySelector<HTMLElement>(".se-bulb")!;
      ScrollTrigger.create({
        trigger: el, start: "top 62%",
        onEnter: () => {
          gsap.to(el, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" });
          gsap.to(bulb, { backgroundColor: "#ffe2b0", boxShadow: "0 0 26px 8px rgba(255,200,120,0.65)", duration: 0.4 });
        },
        onLeaveBack: () => {
          gsap.to(el, { opacity: 0.25, y: 14, duration: 0.4 });
          gsap.to(bulb, { backgroundColor: "#3a4152", boxShadow: "0 0 0px 0px rgba(255,200,120,0)", duration: 0.3 });
        },
      });
    });
  }, { scope: ref });

  return (
    <section ref={ref} id="season" className="bg-night py-20 md:py-32">
      <div className="max-w-[1100px] mx-auto px-5 md:px-10">
        <h2 data-hide className="se-head text-[10vw] md:text-[4.6vw] leading-[1.02] tracking-[-0.035em] font-medium max-w-[18ch] mb-14 md:mb-20" style={{ opacity: 0, transform: "translateY(26px)" }}>
          Up for the season. <span className="font-serif italic warm">Down after.</span>
        </h2>
        <div className="se-list relative pl-14 md:pl-24">
          <span aria-hidden className="absolute left-[19px] md:left-[31px] top-2 bottom-2 w-[2px] bg-bone/10" />
          <span aria-hidden className="se-fill absolute left-[19px] md:left-[31px] top-2 bottom-2 w-[2px] bg-glow origin-top shadow-[0_0_14px_2px_rgba(255,200,120,0.5)]" style={{ transform: "scaleY(0)" }} />
          <ol className="space-y-16 md:space-y-28">
            {STEPS.map((s) => (
              <li key={s.n} data-hide className="se-step relative" style={{ opacity: 0.25, transform: "translateY(14px)" }}>
                <span aria-hidden className="se-bulb absolute -left-[54px] md:-left-[94px] top-1 w-[22px] h-[22px] md:w-[30px] md:h-[30px] rounded-full" style={{ backgroundColor: "#3a4152", boxShadow: "0 0 0 0 rgba(255,200,120,0)" }} />
                <p className="text-xs tracking-[0.3em] text-bone/65 mb-2">{s.n}</p>
                <h3 className="text-[7.4vw] md:text-[3.2vw] leading-[1.08] tracking-[-0.03em] font-medium">{s.t}</h3>
                <p className="mt-3 text-base md:text-lg text-bone/65 leading-relaxed max-w-[48ch]">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
