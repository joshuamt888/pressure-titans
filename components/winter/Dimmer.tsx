"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SRC = "/winter/tree-path.webp";

/**
 * One of Mike's real trees. The slider is a dimmer: the same photo graded dark underneath, the lit original on top at
 * the slider's opacity. It brings itself up once as it arrives so the first thing seen is the effect.
 */
export function Dimmer() {
  const ref = useRef<HTMLElement>(null);
  const lit = useRef<HTMLDivElement>(null);
  const v = useRef({ p: 0 });
  const [pct, setPct] = useState(0);

  const apply = (p: number) => {
    v.current.p = p;
    if (lit.current) lit.current.style.opacity = String(p);
    setPct(Math.round(p * 100));
  };

  useGSAP(() => {
    gsap.to(".dm-up", { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 75%" } });
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    ScrollTrigger.create({
      trigger: ".dm-frame", start: "top 70%", once: true,
      onEnter: () => {
        if (reduced) { apply(1); return; }
        gsap.to(v.current, { p: 1, duration: 2.2, ease: "power2.inOut", onUpdate: () => apply(v.current.p) });
      },
    });
  }, { scope: ref });

  const state = pct < 6 ? "Off" : pct < 60 ? "Dusk" : "Full glow";

  return (
    <section ref={ref} id="glow" className="bg-night py-20 md:py-32">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 grid md:grid-cols-12 gap-10 md:gap-14 items-center">
        <div className="md:col-span-5 md:order-2">
          <h2 data-hide className="dm-up text-[10vw] md:text-[4.2vw] leading-[1.02] tracking-[-0.035em] font-medium max-w-[12ch]" style={{ opacity: 0, transform: "translateY(26px)" }}>
            Set the <span className="font-serif italic warm">glow.</span>
          </h2>
          <p data-hide className="dm-up mt-5 text-base md:text-lg text-bone/70 leading-relaxed max-w-[38ch]" style={{ opacity: 0, transform: "translateY(26px)" }}>
            Wrapped trunks and limbs, lit from the inside. Slide it down to see the tree before the crew shows up.
          </p>
          <div data-hide className="dm-up mt-9" style={{ opacity: 0, transform: "translateY(26px)" }}>
            <div className="flex items-baseline justify-between mb-3">
              <label htmlFor="dm-range" className="text-sm tracking-[0.14em] uppercase text-bone/75">Dimmer</label>
              <span className="text-sm text-glow tabular-nums" aria-live="polite">{state}</span>
            </div>
            <input
              id="dm-range"
              className="dm-range w-full"
              type="range" min={0} max={100} value={pct}
              onChange={(e) => { gsap.killTweensOf(v.current); apply(Number(e.target.value) / 100); }}
              aria-label="Lights dimmer"
            />
          </div>
        </div>
        <div className="md:col-span-7 md:order-1">
          <div data-hide className="dm-up dm-frame relative aspect-[3/4] md:aspect-[4/4.6] overflow-hidden rounded-xl bg-night" style={{ opacity: 0, transform: "translateY(26px)" }}>
            <Image src={SRC} alt="" fill sizes="(max-width: 768px) 100vw, 58vw" className="object-cover" style={{ filter: "brightness(0.16) saturate(0.45)" }} />
            <div ref={lit} className="absolute inset-0" style={{ opacity: 0 }}>
              <Image src={SRC} alt="A garden path at night with a large tree wrapped in warm white Christmas lights" fill sizes="(max-width: 768px) 100vw, 58vw" className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
