"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { LightString } from "./LightString";

gsap.registerPlugin(ScrollTrigger);

const TILES = [
  { src: "/winter/house-night.webp", alt: "A finished roofline of warm white lights along every peak of a two-story house", name: "Rooflines", line: "Every peak, gutter line and porch edge, drawn in light." },
  { src: "/winter/tree-path.webp", alt: "A garden path at night with a large tree wrapped in warm white lights", name: "Trees", line: "Trunks and limbs wrapped, so the tree glows from the inside." },
];

/** Each photo starts graded dark and the lights come on from the ground up as it arrives. */
export function Light() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    gsap.to(".lt-up", { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 75%" } });
    gsap.utils.toArray<HTMLElement>(".lt-lit").forEach((el) => {
      if (reduced) { gsap.set(el, { clipPath: "inset(0% 0 0 0)" }); return; }
      gsap.fromTo(el, { clipPath: "inset(100% 0 0 0)" }, { clipPath: "inset(0% 0 0 0)", duration: 1.6, ease: "power2.inOut", scrollTrigger: { trigger: el, start: "top 80%" } });
    });
  }, { scope: ref });

  return (
    <section ref={ref} id="light" className="bg-navy py-20 md:py-32">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <h2 data-hide className="lt-up text-[10vw] md:text-[4.6vw] leading-[1.02] tracking-[-0.035em] font-medium max-w-[14ch] mb-12 md:mb-16" style={{ opacity: 0, transform: "translateY(26px)" }}>
          Anything with an <span className="font-serif italic warm">outline.</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {TILES.map((t) => (
            <div key={t.name} data-hide className="lt-up" style={{ opacity: 0, transform: "translateY(26px)" }}>
              <div className="relative aspect-[4/4.4] md:aspect-[4/5] overflow-hidden rounded-xl bg-night">
                <Image src={t.src} alt="" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" style={{ filter: "brightness(0.2) saturate(0.5)" }} />
                <div data-hide className="lt-lit absolute inset-0" style={{ clipPath: "inset(100% 0 0 0)" }}>
                  <Image src={t.src} alt={t.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                </div>
              </div>
              <h3 className="mt-5 text-2xl md:text-3xl tracking-[-0.02em] font-medium"><span className="font-serif italic font-normal warm">{t.name}</span></h3>
              <p className="mt-2 text-bone/65 leading-relaxed max-w-[34ch]">{t.line}</p>
            </div>
          ))}
          <div data-hide className="lt-up" style={{ opacity: 0, transform: "translateY(26px)" }}>
            <div className="relative aspect-[4/4.4] md:aspect-[4/5] overflow-hidden rounded-xl bg-night border border-bone/10 flex items-start">
              <div className="w-full">
                {[0, 1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-[84px] md:h-[104px] overflow-hidden" style={{ transform: `translateX(${(i % 2 ? 1 : -1) * i * 46}px)` }}>
                    <LightString onScroll className="w-[130%] h-full" />
                  </div>
                ))}
              </div>
            </div>
            <h3 className="mt-5 text-2xl md:text-3xl tracking-[-0.02em] font-medium"><span className="font-serif italic font-normal warm">Storefronts &amp; offices</span></h3>
            <p className="mt-2 text-bone/65 leading-relaxed max-w-[34ch]">Entrances, windows and rooflines for businesses. Ask for a commercial quote.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
