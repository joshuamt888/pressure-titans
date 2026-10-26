"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { PHONE, TEL } from "./phone";
import { Snow } from "./Snow";

gsap.registerPlugin(ScrollTrigger);

type Word = { t: string; serif?: boolean };
const LINE_1: Word[] = [{ t: "Flip" }, { t: "the" }];
const LINE_2: Word[] = [{ t: "switch.", serif: true }];

const POSTER = "/winter/hero-poster.jpg";
const VIDEO = "/winter/hero.mp4";

/** A lit house at dusk, slowly pushing in, with snow drifting over it. Nothing gates the headline or the house. */
export function Hero() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    const root = ref.current!;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) root.querySelectorAll("video").forEach((v) => v.pause());

    const tl = gsap.timeline({ paused: true, delay: 0.1 });
    tl.to(".hero-word", { y: "0%", duration: 0.85, stagger: 0.06, ease: "power4.out" }, 0)
      .to(".hero-in", { opacity: 1, y: 0, duration: 0.75, stagger: 0.08, ease: "power3.out" }, 0.4);
    if (reduced) tl.progress(1); else tl.play();

    const st = { trigger: root, start: "top top", end: "bottom top", scrub: true };
    gsap.to(".hero-bgwrap", { yPercent: 9, ease: "none", scrollTrigger: st });
    gsap.to(".hero-content", { y: -110, opacity: 0, ease: "none", scrollTrigger: { ...st } });
  }, { scope: ref });

  return (
    <section ref={ref} id="top" className="relative min-h-[100svh] overflow-hidden flex items-center bg-night text-bone">
      <div className="hero-bgwrap absolute inset-0">
        <div className="hero-bg absolute inset-0">
          <video
            autoPlay muted loop playsInline preload="auto" poster={POSTER}
            aria-label="A large house at dusk with Christmas lights along the roofline, trees and front door, slowly pushing in"
            className="absolute inset-0 w-full h-full object-cover object-[50%_55%]"
          >
            <source src={VIDEO} type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 z-[3] pointer-events-none" style={{ background: "linear-gradient(to top, rgba(5,10,20,0.9) 0%, rgba(5,10,20,0.5) 38%, rgba(5,10,20,0.1) 70%, rgba(5,10,20,0.45) 100%), linear-gradient(to right, rgba(5,10,20,0.55) 0%, rgba(5,10,20,0) 60%)" }} />
        <Snow className="absolute inset-0 w-full h-full z-[4]" count={100} />
      </div>

      <div className="hero-content relative z-10 w-full max-w-[1400px] mx-auto px-5 md:px-10 pt-28 pb-20 md:pt-32 md:pb-28 pointer-events-none">
        <h1 className="text-[17vw] md:text-[9vw] leading-[0.9] tracking-[-0.045em] font-medium">
          <span data-hide className="hero-in block text-lg md:text-xl tracking-[0.06em] uppercase text-bone/95 mb-5 font-normal leading-normal" style={{ opacity: 0, transform: "translateY(18px)" }}>Christmas light installation in Minnesota</span>
          {[LINE_1, LINE_2].map((line, i) => (
            <span key={i} className="block overflow-hidden pb-[0.1em]">
              {line.map((w, j) => (
                <span key={j} data-hide className={`hero-word inline-block mr-[0.2em] ${w.serif ? "font-serif italic font-normal warm hero-glow" : ""}`} style={{ transform: "translateY(110%)" }}>{w.t}{" "}</span>
              ))}
            </span>
          ))}
        </h1>
        <div className="mt-7 md:mt-9 grid md:grid-cols-12 gap-5 items-end">
          <p data-hide className="hero-in md:col-span-6 text-xl md:text-2xl text-bone/95 leading-relaxed max-w-[40ch]" style={{ opacity: 0, transform: "translateY(18px)" }}>
            Christmas light installation for homes and businesses across the west metro. Hung, lit and taken down by our crew.
          </p>
          <div data-hide className="hero-in md:col-span-6 flex flex-wrap gap-3 md:justify-end pointer-events-auto" style={{ opacity: 0, transform: "translateY(18px)" }}>
            <a href="#quote" className="rounded-full bg-glow text-navy text-xl font-medium px-8 py-4 hover:bg-bone transition-colors active:scale-[0.98]">Get my free quote</a>
            <a href={TEL} className="rounded-full border border-bone/40 bg-bone/10 backdrop-blur-md text-xl px-8 py-4 hover:bg-bone/15 transition-colors active:scale-[0.98]">{PHONE}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
