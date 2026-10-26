"use client";

import { useRef } from "react";
import Image from "next/image";
import { Bulb } from "./Bulb";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// From the holiday lighting page on pressuretitans.com.
const ITEMS = [
  { t: "Custom design", d: "A lighting plan that matches your style and budget." },
  { t: "Professional installation", d: "Our crew handles every ladder, clip and connection." },
  { t: "Season-long maintenance", d: "A burnt bulb or loose strand gets fixed at no extra charge." },
  { t: "Complete takedown", d: "Everything comes down, organized, and the property is left spotless." },
  { t: "Light storage", d: "We can store your lights so next year is one call." },
  { t: "Commercial displays", d: "Storefronts, offices and HOAs, at any scale." },
];

/** Everything in the price, as a list that lights up bulb by bulb, beside one of the real installs. */
export function Included() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    gsap.to(".in-up", { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 75%" } });
    gsap.utils.toArray<HTMLElement>(".in-row").forEach((el) => {
      const bulb = el.querySelector<SVGElement>(".in-bulb")!;
      if (reduced) { bulb.setAttribute("data-on", "true"); return; }
      ScrollTrigger.create({ trigger: el, start: "top 82%", once: true, onEnter: () => bulb.setAttribute("data-on", "true") });
    });
  }, { scope: ref });

  return (
    <section ref={ref} id="included" className="bg-night py-20 md:py-28">
      <div className="max-w-[1300px] mx-auto px-5 md:px-10 grid md:grid-cols-12 gap-10 md:gap-16 items-center">
        <div className="md:col-span-5">
          <div data-hide className="in-up relative aspect-[4/5] overflow-hidden rounded-xl bg-night" style={{ opacity: 0, transform: "translateY(26px)" }}>
            <Image src="/winter/house-night.webp" alt="A finished install: warm white lights along every peak of a two-story house at night" fill sizes="(max-width: 768px) 100vw, 40vw" className="object-cover object-[55%_50%]" />
          </div>
        </div>
        <div className="md:col-span-7">
          <h2 data-hide className="in-up text-[10vw] md:text-[4.2vw] leading-[1.02] tracking-[-0.035em] font-medium max-w-[16ch]" style={{ opacity: 0, transform: "translateY(26px)" }}>
            All in one <span className="font-serif italic warm">price.</span>
          </h2>
          <p data-hide className="in-up mt-5 text-base md:text-lg text-bone/90 leading-relaxed max-w-[46ch]" style={{ opacity: 0, transform: "translateY(26px)" }}>
            Installation, maintenance and takedown are one quote, with a detailed breakdown before we start.
          </p>
          <ul className="mt-9 md:mt-12 space-y-5 md:space-y-6">
            {ITEMS.map((it) => (
              <li key={it.t} className="in-row relative pl-[42px] md:pl-[56px]">
                <Bulb upright className="in-bulb absolute left-0 top-[2px] md:top-[3px] w-[22px] md:w-[30px]" />
                <h3 className="text-2xl md:text-[1.9vw] leading-[1.15] tracking-[-0.02em] font-medium">{it.t}</h3>
                <p className="mt-1 text-base md:text-lg text-bone/90 leading-relaxed max-w-[44ch]">{it.d}</p>
              </li>
            ))}
          </ul>
          <a href="/process" className="mt-10 md:mt-12 inline-flex items-center gap-3 rounded-full border-2 border-glow text-glow text-xl font-medium px-8 py-4 hover:bg-glow hover:text-navy transition-colors active:scale-[0.98]">See our process <span aria-hidden>&rarr;</span></a>
        </div>
      </div>
    </section>
  );
}
