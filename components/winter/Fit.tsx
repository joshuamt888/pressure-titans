"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { LightString } from "./LightString";

gsap.registerPlugin(ScrollTrigger);

const OPTIONS = [
  { key: "roof", name: "Rooflines", line: "Every peak, gutter line and porch edge, drawn in light.", src: "/winter/house-night.webp", alt: "A finished roofline of warm white lights along every peak of a two-story house" },
  { key: "tree", name: "Trees", line: "Trunks and limbs wrapped, so the tree glows from the inside.", src: "/winter/tree-night.webp", alt: "A large oak wrapped in warm white Christmas lights at night" },
  { key: "shop", name: "Storefronts & offices", line: "Entrances, windows and rooflines for businesses. Ask for a commercial quote.", src: "", alt: "" },
] as const;

/** One question, three answers. The photo swaps hard, no fade, and every answer ends at the quote. */
export function Fit() {
  const ref = useRef<HTMLElement>(null);
  const [i, setI] = useState(0);
  const cur = OPTIONS[i];

  useGSAP(() => {
    gsap.to(".ft-up", { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 75%" } });
  }, { scope: ref });

  return (
    <section ref={ref} id="light" className="bg-navy py-20 md:py-32">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <h2 data-hide className="ft-up text-[10vw] md:text-[4.6vw] leading-[1.02] tracking-[-0.035em] font-medium max-w-[16ch]" style={{ opacity: 0, transform: "translateY(26px)" }}>
          What are we <span className="font-serif italic warm">lighting?</span>
        </h2>

        <div data-hide role="tablist" aria-label="What we light" className="ft-up mt-8 md:mt-10 flex flex-wrap gap-3" style={{ opacity: 0, transform: "translateY(26px)" }}>
          {OPTIONS.map((o, k) => (
            <button
              key={o.key} role="tab" type="button" aria-selected={i === k}
              onClick={() => setI(k)}
              className={`rounded-full px-5 py-2.5 text-sm md:text-base border transition-colors active:scale-[0.98] ${i === k ? "bg-glow text-navy border-glow" : "border-bone/25 text-bone/80 hover:border-bone/60"}`}
            >
              {o.name}
            </button>
          ))}
        </div>

        <div data-hide className="ft-up mt-8 md:mt-10 grid md:grid-cols-12 gap-6 md:gap-10 items-end" style={{ opacity: 0, transform: "translateY(26px)" }}>
          <div className="md:col-span-8 relative aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-xl bg-night">
            {cur.src ? (
              <Image key={cur.key} src={cur.src} alt={cur.alt} fill sizes="(max-width: 768px) 100vw, 66vw" className="object-cover" />
            ) : (
              <div key={cur.key} className="absolute inset-0" aria-hidden>
                {[0, 1, 2, 3, 4].map((n) => (
                  <div key={n} className="h-[20%] overflow-hidden" style={{ transform: `translateX(${(n % 2 ? 1 : -1) * n * 40}px)` }}>
                    <LightString onScroll className="w-[130%] h-full" />
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="md:col-span-4">
            <h3 className="text-3xl md:text-4xl tracking-[-0.02em] font-medium"><span className="font-serif italic font-normal warm">{cur.name}</span></h3>
            <p className="mt-3 text-bone/70 leading-relaxed text-base md:text-lg max-w-[30ch]">{cur.line}</p>
            <a href="#quote" className="mt-7 inline-block rounded-full bg-glow text-navy font-medium px-7 py-4 hover:bg-bone transition-colors active:scale-[0.98]">Quote this</a>
          </div>
        </div>
      </div>
    </section>
  );
}
