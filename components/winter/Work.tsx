"use client";

import { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { WORK, type WorkPhoto } from "./workPhotos";

/**
 * "Our work": Mike's real holiday lighting photos in a row that rotates on its own (one photo every 3.5 s, loops).
 * Swipe or scroll it by hand and it waits 10 s; it stops while the pointer is over it, while it is off screen, and with reduced motion.
 * Photos keep their own shape (no cropping into portraits), snap into place, and each file appears once.
 */
export function Work({
  photos = WORK,
  title = "Our",
  accent = "work.",
  eyebrow = "Holiday lighting, installed by our crew",
  sub = "Real homes across the Twin Cities, lit by Pressure Titans. Every photo is one of our own jobs.",
  tint = "bg-night",
  link = true,
  id = "our-work",
}: {
  photos?: WorkPhoto[];
  title?: string;
  accent?: string;
  eyebrow?: string;
  sub?: string;
  tint?: string;
  link?: boolean;
  id?: string;
}) {
  const track = useRef<HTMLDivElement>(null);
  const pausedUntil = useRef(0);
  const hover = useRef(false);
  const visible = useRef(false);

  const step = useCallback((dir: 1 | -1) => {
    const el = track.current;
    if (!el || el.children.length < 2) return;
    const a = el.children[0] as HTMLElement, b = el.children[1] as HTMLElement;
    const w = b.offsetLeft - a.offsetLeft;
    const max = el.scrollWidth - el.clientWidth;
    let next = el.scrollLeft + dir * w;
    if (dir === 1 && el.scrollLeft >= max - 6) next = 0;
    if (dir === -1 && el.scrollLeft <= 6) next = max;
    el.scrollTo({ left: next, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { visible.current = e.isIntersecting; }, { threshold: 0.35 });
    io.observe(el);
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hold = () => { pausedUntil.current = Date.now() + 10000; };
    const over = () => { hover.current = true; };
    const out = () => { hover.current = false; };
    el.addEventListener("pointerdown", hold); el.addEventListener("wheel", hold, { passive: true }); el.addEventListener("touchstart", hold, { passive: true });
    el.addEventListener("mouseenter", over); el.addEventListener("mouseleave", out);
    const t = calm ? 0 : window.setInterval(() => {
      if (hover.current || !visible.current || document.hidden || Date.now() < pausedUntil.current) return;
      step(1);
    }, 3500);
    return () => {
      io.disconnect(); if (t) clearInterval(t);
      el.removeEventListener("pointerdown", hold); el.removeEventListener("wheel", hold); el.removeEventListener("touchstart", hold);
      el.removeEventListener("mouseenter", over); el.removeEventListener("mouseleave", out);
    };
  }, [step]);

  const btn = "grid place-items-center w-12 h-12 rounded-full border border-bone/30 text-bone hover:bg-bone/10 hover:text-glow transition-colors active:scale-95";
  const hold = () => { pausedUntil.current = Date.now() + 10000; };

  return (
    <section id={id} className={`${tint} py-16 md:py-24 overflow-hidden`} aria-label="Our holiday lighting work">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 flex items-end justify-between gap-6">
        <div>
          <p className="text-base md:text-lg tracking-[0.14em] uppercase text-glow">{eyebrow}</p>
          <h2 className="mt-3 text-[10vw] md:text-[4.2vw] leading-[1.02] tracking-[-0.035em] font-medium">
            {title} <span className="font-serif italic font-normal warm">{accent}</span>
          </h2>
          <p className="mt-4 text-xl md:text-2xl text-bone/90 leading-relaxed max-w-[48ch]">{sub}</p>
        </div>
        <div className="hidden md:flex gap-3 shrink-0 pb-2">
          <button type="button" aria-label="Previous photo" className={btn} onClick={() => { hold(); step(-1); }}>
            <svg aria-hidden width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 5l-7 7 7 7" /></svg>
          </button>
          <button type="button" aria-label="Next photo" className={btn} onClick={() => { hold(); step(1); }}>
            <svg aria-hidden width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>

      <div
        ref={track}
        tabIndex={0}
        aria-roledescription="carousel"
        className="mt-10 md:mt-12 flex gap-3 md:gap-5 overflow-x-auto snap-x snap-mandatory px-5 md:px-10 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{ scrollPaddingLeft: "max(1.25rem, calc((100vw - 1200px) / 2 + 2.5rem))" }}
      >
        {photos.map((p, i) => (
          <figure
            key={p.src}
            className="snap-start shrink-0 h-[54svh] min-h-[300px] max-h-[520px] md:h-[min(58vh,540px)] max-w-[88vw] overflow-hidden rounded-xl bg-navy"
            style={{ aspectRatio: `${p.w} / ${p.h}` }}
          >
            <Image src={p.src} alt={p.alt} width={p.w} height={p.h} sizes="(max-width: 768px) 88vw, 720px" priority={i < 2} className="h-full w-full object-cover" />
          </figure>
        ))}
        {link && (
          <a href="/portfolio" className="snap-start shrink-0 grid place-items-center h-[54svh] min-h-[300px] max-h-[520px] md:h-[min(58vh,540px)] w-[70vw] md:w-[340px] rounded-xl border border-bone/25 bg-navy text-center px-6 hover:border-glow transition-colors">
            <span className="text-3xl md:text-4xl leading-tight tracking-[-0.02em] font-medium">See every <span className="font-serif italic font-normal warm">project.</span><span className="block mt-3 text-lg text-glow">Open the portfolio</span></span>
          </a>
        )}
      </div>
    </section>
  );
}
