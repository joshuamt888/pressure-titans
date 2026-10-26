"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * One of Mike's real installs, the same house with the lights off and on. Drag the line or flip the switch.
 * touch-pan-y, never touch-none: the page must still scroll from a vertical swipe over the photo.
 */
export function Switch() {
  const ref = useRef<HTMLElement>(null);
  const frame = useRef<HTMLDivElement>(null);
  const pos = useRef({ p: 0 });
  const drag = useRef(false);

  const apply = (p: number) => {
    pos.current.p = p;
    const lit = frame.current!.querySelector<HTMLElement>(".sw-lit")!;
    const bar = frame.current!.querySelector<HTMLElement>(".sw-bar")!;
    lit.style.clipPath = `inset(0 ${100 - p}% 0 0)`;
    bar.style.left = `${p}%`;
    frame.current!.querySelector<HTMLElement>(".sw-handle")!.setAttribute("aria-valuenow", String(Math.round(p)));
  };
  const fromEvent = (e: React.PointerEvent) => {
    const r = frame.current!.getBoundingClientRect();
    apply(Math.max(0, Math.min(100, ((e.clientX - r.left) / r.width) * 100)));
  };
  const tweenTo = (p: number) => gsap.to(pos.current, { p, duration: 1.1, ease: "power2.inOut", onUpdate: () => apply(pos.current.p) });

  useGSAP(() => {
    gsap.to(".sw-up", { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 75%" } });
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // it flips itself on once as it arrives, so the first thing seen is the effect
    ScrollTrigger.create({
      trigger: frame.current, start: "top 70%", once: true,
      onEnter: () => { if (reduced) apply(100); else tweenTo(62); },
    });
  }, { scope: ref });

  return (
    <section ref={ref} id="switch" className="bg-navy py-20 md:py-32">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <h2 data-hide className="sw-up text-[10vw] md:text-[4.6vw] leading-[1.02] tracking-[-0.035em] font-medium max-w-[16ch]" style={{ opacity: 0, transform: "translateY(26px)" }}>
          Drag the line. <span className="font-serif italic warm">Light the house.</span>
        </h2>
        <div
          data-hide
          ref={frame}
          className="sw-up relative mt-10 md:mt-14 w-full aspect-[4/3] md:aspect-[1200/532] overflow-hidden rounded-xl bg-night touch-pan-y select-none cursor-ew-resize"
          style={{ opacity: 0, transform: "translateY(26px)" }}
          onPointerDown={(e) => { drag.current = true; gsap.killTweensOf(pos.current); e.currentTarget.setPointerCapture(e.pointerId); fromEvent(e); }}
          onPointerMove={(e) => { if (drag.current) fromEvent(e); }}
          onPointerUp={() => { drag.current = false; }}
          onPointerCancel={() => { drag.current = false; }}
        >
          <Image src="/winter/dusk-off.webp" alt="A two-story house in the snow with its roofline unlit" fill sizes="(max-width: 1200px) 100vw, 1200px" className="object-cover pointer-events-none" draggable={false} />
          <div className="sw-lit absolute inset-0" style={{ clipPath: "inset(0 100% 0 0)" }}>
            <Image src="/winter/dusk-on.webp" alt="The same house with a Pressure Titans Christmas light install switched on" fill sizes="(max-width: 1200px) 100vw, 1200px" className="object-cover pointer-events-none" draggable={false} />
          </div>
          <span className="absolute left-3 top-3 text-[10px] md:text-xs tracking-[0.25em] uppercase bg-night/70 backdrop-blur px-3 py-1.5 rounded-full text-glow">Lit</span>
          <span className="absolute right-3 top-3 text-[10px] md:text-xs tracking-[0.25em] uppercase bg-night/70 backdrop-blur px-3 py-1.5 rounded-full text-bone/70">Off</span>
          <div className="sw-bar absolute top-0 bottom-0 w-[2px] -translate-x-1/2 bg-glow shadow-[0_0_24px_4px_rgba(255,200,120,0.7)]" style={{ left: "0%" }}>
            <button
              type="button"
              role="slider"
              aria-label="Drag to switch the lights on"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={0}
              onKeyDown={(e) => { if (e.key === "ArrowRight") apply(Math.min(100, pos.current.p + 6)); if (e.key === "ArrowLeft") apply(Math.max(0, pos.current.p - 6)); }}
              className="sw-handle absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid place-items-center w-12 h-12 rounded-full bg-glow text-navy shadow-[0_0_30px_6px_rgba(255,200,120,0.55)]"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M9 6l-6 6 6 6M15 6l6 6-6 6" /></svg>
            </button>
          </div>
        </div>
        <div data-hide className="sw-up mt-6 flex flex-wrap items-center justify-between gap-4" style={{ opacity: 0, transform: "translateY(26px)" }}>
          <p className="text-sm text-bone/70">A Pressure Titans install. Same house, same frame.</p>
          <button type="button" onClick={() => tweenTo(pos.current.p > 50 ? 0 : 100)} className="rounded-full border border-glow/50 text-glow text-sm px-5 py-2.5 hover:bg-glow hover:text-navy transition-colors active:scale-[0.98]">
            Flip the switch
          </button>
        </div>
      </div>
    </section>
  );
}
