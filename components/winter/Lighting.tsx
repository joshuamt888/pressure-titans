"use client";

import { Fragment, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useHiRes } from "./useHiRes";

gsap.registerPlugin(ScrollTrigger);

// One clip, three locked-off shots with cuts at 3.0s (house to tree) and 6.46s (tree to office). Each shot starts with the
// lights off and ends fully lit. The page owns the clock: scroll plays a chapter's stretch of the clip, holds the lit frame,
// then whips sideways with motion blur at the cut.
const VIDEO = "/winter/journey-scrub.mp4";
const VIDEO_HI = "/winter/journey-hi.mp4";
const POSTER = "/winter/journey-poster.jpg";
const START = [0, 3.0, 6.46];
const END = [2.9, 6.35, 10.0];

const CH = [
  { name: "Rooflines", line: "Every peak, gutter line and porch edge, drawn in light." },
  { name: "Trees", line: "Trunks and limbs wrapped, so the tree glows from the inside." },
  { name: "Storefronts & offices", line: "Entrances, windows and rooflines for businesses. Design, installation, maintenance and takedown, all handled." },
];

const SENTENCE = ["Rooflines,", "trees", "and", "storefronts.", "Hung,", "lit", "and", "taken", "down", "by", "one", "crew."];
const HOT = new Set(["Rooflines,", "lit", "down"]);
const INTRO = 0.2; // share of the scroll the sentence and the wipe take

const clamp = gsap.utils.clamp(0, 1);
const clipTime = (q: number) => {
  const n = CH.length;
  const i = Math.min(n - 1, Math.floor(q * n));
  const t = clamp((q * n - i) / 0.7);
  return START[i] + (END[i] - START[i]) * t;
};

/**
 * One pinned film. It opens on the sentence (words rise out of a mask, no fades), the sentence panel then wipes upward
 * and reveals the house, and from there the page plays house, tree, office as you scroll, whipping sideways at each cut.
 */
export function Lighting() {
  const ref = useRef<HTMLElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  useHiRes(video, VIDEO_HI);
  const last = useRef(0);
  const headDone = useRef(false);
  const [active, setActive] = useState(0);

  useGSAP(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = ref.current!;
    const words = gsap.utils.toArray<HTMLElement>(".lg-w");
    const hw = gsap.utils.toArray<HTMLElement>(".lg-hw");
    const intro = root.querySelector<HTMLElement>(".lg-intro")!;
    const sw = root.querySelector<HTMLElement>(".lg-swoosh")!;
    if (reduced) {
      gsap.set(words, { yPercent: 0 }); gsap.set(hw, { yPercent: 0 }); intro.style.display = "none";
      const v = video.current; if (v) v.addEventListener("loadedmetadata", () => { v.currentTime = END[0]; }, { once: true });
      return;
    }
    // GSAP owns the transforms from here: clear the inline starting offsets and start every word below its mask
    gsap.set([...words, ...hw], { y: 0, yPercent: 110 });
    let raf = 0;
    ScrollTrigger.create({
      trigger: ".lg-outer", start: "top top", end: "bottom bottom", scrub: true,
      onUpdate: (self) => {
        const p = self.progress;
        // intro: words rise one after another, hold, then the whole panel wipes upward
        const qi = clamp(p / INTRO);
        const r = clamp(qi / 0.45);
        words.forEach((el, k) => { const a = clamp((r - (k / words.length) * 0.7) / 0.3); gsap.set(el, { yPercent: (1 - a) * 110 }); });
        const wipe = clamp((qi - 0.62) / 0.38);
        intro.style.clipPath = `inset(0 0 ${wipe * 100}% 0)`;
        intro.style.visibility = wipe >= 1 ? "hidden" : "visible";
        // heading words rise once the wipe has passed the middle
        if (wipe > 0.55 && !headDone.current) { headDone.current = true; gsap.to(hw, { yPercent: 0, duration: 0.7, stagger: 0.09, ease: "power4.out" }); }
        if (wipe < 0.25 && headDone.current) { headDone.current = false; gsap.to(hw, { yPercent: 110, duration: 0.35, ease: "power2.in" }); }
        // chapters
        const q = clamp((p - INTRO) / (1 - INTRO));
        const i = Math.min(CH.length - 1, Math.floor(q * CH.length));
        if (i !== last.current) { last.current = i; setActive(i); }
        let x = 0, s = 0;
        for (let b = 1; b < CH.length; b++) {
          const d = q - b / CH.length;
          const k = clamp(1 - Math.abs(d) / 0.04);
          if (k > s) { s = k; x = d < 0 ? -1 : 1; }
        }
        const e = s * s;
        sw.style.transform = `translate3d(${x * -e * 9}%,0,0) scaleX(${1 + 0.2 * e})`;
        sw.style.filter = e > 0.01 ? `blur(${e * 16}px) brightness(${1 + 0.15 * e})` : "none";
        const v = video.current;
        if (v) { cancelAnimationFrame(raf); raf = requestAnimationFrame(() => { if (v.readyState >= 1 && Number.isFinite(v.duration)) v.currentTime = Math.min(v.duration * 0.995, clipTime(q)); }); }
      },
    });
  }, { scope: ref });

  return (
    <section ref={ref} id="light" className="bg-night">
      <div className="lg-outer relative" style={{ height: "460vh" }}>
        <div className="sticky top-0 h-[100svh] overflow-hidden bg-night">
          {/* phones: the film sits on top as its own frame, the words go underneath; laptops: full-bleed behind the words */}
          <div className="absolute inset-x-0 top-[72px] h-[36svh] md:top-0 md:inset-0 md:h-full overflow-hidden">
          <div className="lg-swoosh absolute inset-0 will-change-transform" style={{ transformOrigin: "50% 50%" }}>
            <video
              ref={video} muted playsInline preload="auto" poster={POSTER}
              aria-label="A house, a tree and an office building at dusk, each one lighting up in warm white Christmas lights"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ filter: "brightness(1.06) contrast(1.1) saturate(1.1)" }}
            >
              <source src={VIDEO} type="video/mp4" />
            </video>
          </div>
          <div aria-hidden className="absolute inset-0 pointer-events-none" style={{ background: "rgba(5,10,20,0.10)" }} />
          </div>

          <div className="relative z-10 h-full max-w-[1400px] mx-auto px-5 md:px-10 flex flex-col justify-start pt-[calc(72px+36svh+18px)] pb-16 md:pt-0 md:pb-0 md:justify-center">
            <h2 className="text-[8.6vw] md:text-[4.2vw] leading-[1.02] tracking-[-0.035em] font-medium mb-5 md:mb-10">
              {["What", "are", "we"].map((w) => (
                <Fragment key={w}><span className="inline-block overflow-hidden align-bottom pb-[0.12em]"><span className="lg-hw inline-block" style={{ transform: "translateY(110%)" }}>{w}</span></span>{" "}</Fragment>
              ))}
              <span className="inline-block overflow-hidden align-bottom pb-[0.12em] pr-[0.18em]"><span className="lg-hw inline-block font-serif italic font-normal warm" style={{ transform: "translateY(110%)" }}>lighting?</span></span>
            </h2>
            <ol className="space-y-2 md:space-y-4 max-w-[560px]">
              {CH.map((c, i) => {
                const on = i === active;
                return (
                  <li key={c.name}>
                    <div className="flex items-baseline gap-3">
                      <span className={`text-base md:text-lg tracking-[0.08em] tabular-nums ${on ? "text-glow" : "text-bone"}`}>0{i + 1}</span>
                      <h3 className="overflow-hidden pb-[0.1em] text-[6.8vw] md:text-[3.1vw] leading-[1.08] tracking-[-0.03em] font-medium">
                        <span key={on ? "on" : "off"} className={`inline-block ${on ? "rise font-serif italic font-normal warm" : "text-bone"}`}>{c.name}</span>
                      </h3>
                    </div>
                    <div className={`grid transition-[grid-template-rows] duration-500 motion-reduce:grid-rows-[1fr] ${on ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                      <div className="overflow-hidden"><p key={on ? "on" : "off"} className={`text-base md:text-xl text-bone/90 leading-relaxed max-w-[44ch] pl-9 md:pl-11 pt-1 ${on ? "rise" : ""}`}>{c.line}</p></div>
                    </div>
                  </li>
                );
              })}
            </ol>
            <div className="hidden md:block">
              <a href="#quote" className="mt-6 md:mt-9 inline-block rounded-full bg-glow text-navy font-medium px-7 py-3.5 hover:bg-bone transition-colors active:scale-[0.98]">Quote this</a>
            </div>
          </div>

          {/* the sentence: it sits on top, then wipes upward off the film */}
          <div className="lg-intro absolute inset-0 z-20 bg-night flex items-center justify-center px-5 md:px-10" style={{ clipPath: "inset(0 0 0% 0)" }}>
            <p className="max-w-[1100px] text-center text-[9.4vw] md:text-[5.2vw] leading-[1.08] tracking-[-0.035em] font-medium" aria-label="Rooflines, trees and storefronts. Hung, lit and taken down by one crew.">
              {SENTENCE.map((w, k) => (
                <span key={k} aria-hidden className="inline-block overflow-hidden align-bottom pb-[0.12em] pr-[0.1em] mx-[0.08em]">
                  <span className={`lg-w inline-block ${HOT.has(w) ? "font-serif italic font-normal warm" : ""}`} style={{ transform: "translateY(110%)" }}>{w}</span>
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
