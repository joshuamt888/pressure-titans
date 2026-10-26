"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// From the holiday lighting page on pressuretitans.com, word for word.
const FAQS = [
  { q: "When should I book holiday lighting installation?", a: "The earlier, the better. We start booking for the holiday season in September and October. Early bookings get priority scheduling and the widest selection of design options. If you wait until November, availability is limited and you risk not having your display ready for the start of the season." },
  { q: "Do you provide the lights or do I need to supply them?", a: "We provide everything: lights, clips, extension cords, timers, and all hardware. We use commercial-grade LED lights that are brighter, more energy-efficient, and longer-lasting than retail options. If you have existing lights you love, we are happy to incorporate them into the design." },
  { q: "How much does professional holiday lighting cost?", a: "Pricing depends on the size of your property, the design complexity, and the type of lights used. We provide detailed quotes after a design consultation so you know exactly what you are getting and what it costs." },
  { q: "What if a light burns out or a strand falls down?", a: "We include full maintenance throughout the season at no extra charge. If you notice a burnt bulb, a flickering section, or anything that does not look right, call or text us and we will come out to fix it promptly." },
  { q: "Do you install holiday lighting on commercial properties?", a: "Yes. We work with storefronts, office buildings, restaurants, HOAs, and commercial properties of all sizes. We handle the entire process: design, installation, maintenance, and takedown." },
];

export function Faq({ items }: { items?: { q: string; a: string }[] } = {}) {
  const list = items ?? FAQS;
  const ref = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(0);

  useGSAP(() => {
    gsap.to(".fq-up", { opacity: 1, y: 0, duration: 0.8, stagger: 0.08, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 75%" } });
  }, { scope: ref });

  return (
    <section ref={ref} id="faq" className="bg-navy py-20 md:py-28">
      <div className="max-w-[1000px] mx-auto px-5 md:px-10">
        <h2 data-hide className="fq-up text-[10vw] md:text-[4.2vw] leading-[1.02] tracking-[-0.035em] font-medium max-w-[16ch] mb-10 md:mb-14" style={{ opacity: 0, transform: "translateY(26px)" }}>
          Good <span className="font-serif italic warm">questions.</span>
        </h2>
        <div className="border-t border-bone/12">
          {list.map((f, i) => {
            const on = open === i;
            return (
              <div key={f.q} data-hide className="fq-up border-b border-bone/12" style={{ opacity: 0, transform: "translateY(26px)" }}>
                <h3>
                  <button type="button" aria-expanded={on} onClick={() => setOpen(on ? -1 : i)} className="w-full flex items-center justify-between gap-6 text-left py-6 md:py-7">
                    <span className="text-xl md:text-[1.7vw] leading-[1.2] tracking-[-0.02em] font-medium">{f.q}</span>
                    <span aria-hidden className={`shrink-0 grid place-items-center w-9 h-9 rounded-full border border-bone/25 text-glow text-xl leading-none transition-transform duration-300 ${on ? "rotate-45" : ""}`}>+</span>
                  </button>
                </h3>
                <div className={`grid transition-[grid-template-rows] duration-400 ${on ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <p className="overflow-hidden text-base md:text-lg text-bone/90 leading-relaxed max-w-[62ch] pb-0" style={{ paddingBottom: on ? "1.75rem" : 0 }}>{f.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
