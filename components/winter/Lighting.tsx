"use client";

import { Fragment, useEffect, useRef, useState } from "react";

// One film, three locked-off shots (house, tree, office), each going from lights off to fully lit. Your scroll position
// IS the film: scroll down and the lights come up, scroll back and they go back down. Josh, 11/16: "as I scroll it lights
// up the rooflines more, the trees more", not a video you watch.
//
// Built the way Oil & Water's "Your project, start to finish" is (Josh: it worked very well): a frame sequence drawn on a
// canvas, never a <video>. iPhones will not scrub a paused video smoothly, and swapping its source mid-scroll reloads it
// (the "double load" on Storefronts). One rAF loop eases toward the scroll position and draws only when the frame changes;
// frames load every 6th first, then every 3rd, then the rest, and a missing frame borrows its nearest loaded neighbour, so
// it never goes blank. Phones load the 720px set at half the frames (3.8 MB), laptops the 1280px set (15 MB).
// Frames: public/winter/seq/{sm,lg}/fNNN.webp, cut from the 1080p film (24 fps, 241 frames) by scripts/film-frames.py, grade baked in.
const SETS = { sm: { n: 121, fps: 12 }, lg: { n: 241, fps: 24 } } as const;
const frameSrc = (set: keyof typeof SETS, i: number) => `/winter/seq2/${set}/f${String(i).padStart(3, "0")}.webp`;
const POSTER = "/winter/journey-poster.jpg";
// cuts at 3.0s (house to tree) and 6.46s (tree to office); each chapter plays START to END, then holds its lit frame
const START = [0, 3.0, 6.46];
const END = [2.9, 6.35, 10.0];

const CH = [
  { name: "Rooflines", line: "Every peak, gutter line and porch edge, drawn in light." },
  { name: "Trees", line: "Trunks and limbs wrapped, so the tree glows from the inside." },
  { name: "Storefronts & offices", line: "Entrances, windows and rooflines for businesses. Design, installation, maintenance and takedown, all handled." },
];

const SENTENCE = ["Rooflines,", "trees", "and", "storefronts.", "Hung,", "lit", "and", "taken", "down", "by", "one", "crew."];
const HOT = new Set(["Rooflines,", "lit", "down"]);
// The sentence rises while the section is still sliding up into view (so there is never an empty dark screen on a fast
// flick), holds as it pins, then wipes up off the film over the first INTRO of the pinned scroll.
const INTRO = 0.1;

const clamp = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v);
/** chapter progress q (0..1 over all three) to a time in the clip: 75% of each chapter lights it, the rest holds it lit */
const clipTime = (q: number) => {
  const i = Math.min(CH.length - 1, Math.floor(q * CH.length));
  const t = clamp((q * CH.length - i) / 0.75);
  return START[i] + (END[i] - START[i]) * t;
};

export function Lighting() {
  const ref = useRef<HTMLElement>(null);
  const outer = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const root = ref.current!, box = outer.current!, c = canvas.current!;
    const ctx = c.getContext("2d");
    if (!ctx) return;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const desktop = matchMedia("(min-width: 768px)").matches;
    const set: keyof typeof SETS = desktop ? "lg" : "sm";
    const { n: N, fps } = SETS[set];
    const words = [...root.querySelectorAll<HTMLElement>(".lg-w")];
    const hw = [...root.querySelectorAll<HTMLElement>(".lg-hw")];
    const intro = root.querySelector<HTMLElement>(".lg-intro")!;
    const sw = root.querySelector<HTMLElement>(".lg-swoosh")!;

    const imgs: (HTMLImageElement | undefined)[] = new Array(N);
    let lead = 0.25, target = 0, shown = 0, raf = 0, drawn = -1, chapter = -1, dead = false, w = 0, h = 0, headUp = false, near = false;

    const draw = (want: number) => {
      let k = -1;
      for (let d = 0; d < N && k < 0; d++) { if (imgs[want - d]) k = want - d; else if (imgs[want + d]) k = want + d; }
      if (k < 0 || !w) return;
      const im = imgs[k]!;
      const sc = Math.max(w / im.naturalWidth, h / im.naturalHeight);
      const dw = im.naturalWidth * sc, dh = im.naturalHeight * sc;
      ctx.drawImage(im, (w - dw) / 2, (h - dh) / 2, dw, dh);
      drawn = k === want ? want : -1; // a borrowed frame gets redrawn once the real one arrives
      c.dataset.frame = String(k);
    };
    const size = () => {
      const dpr = Math.min(devicePixelRatio || 1, 2);
      w = Math.round(c.clientWidth * dpr); h = Math.round(c.clientHeight * dpr);
      c.width = w; c.height = h; drawn = -1;
    };

    // load order: the first frame, every 6th, every 3rd, then the rest; six at a time
    const order: number[] = [];
    const seen = new Set<number>();
    for (const step of [6, 3, 1]) for (let i = 0; i < N; i += step) if (!seen.has(i)) { seen.add(i); order.push(i); }
    let next = 0, inflight = 0;
    const pump = () => {
      while (!dead && inflight < 6 && next < order.length) {
        const i = order[next++];
        const im = new Image();
        im.decoding = "async";
        inflight++;
        // decoded off the main thread before the canvas ever sees it, so drawing a new frame mid-scrub never stalls
        const done = () => { inflight--; if (im.naturalWidth) { imgs[i] = im; if (drawn < 0) wake(); } pump(); };
        im.onload = () => { im.decode().then(done, done); };
        im.onerror = done;
        im.src = frameSrc(set, i);
      }
    };

    const read = () => {
      const r = box.getBoundingClientRect();
      // one number from "section top at the bottom of the screen" (0) to "pin ends" (1); pin starts at `lead`
      lead = innerHeight / Math.max(1, r.height);
      target = clamp((innerHeight - r.top) / Math.max(1, r.height));
    };

    const render = (p: number) => {
      // the sentence: words rise in order across the first part of the intro, then the panel wipes up off the film
      const r = clamp((p - lead * 0.25) / (lead * 0.65));
      const pin = clamp((p - lead) / (1 - lead));
      const qi = clamp(pin / INTRO);
      words.forEach((el, k) => { el.style.transform = `translate3d(0,${(1 - clamp((r - (k / words.length) * 0.7) / 0.3)) * 110}%,0)`; });
      const wipe = clamp((qi - 0.35) / 0.65);
      intro.style.clipPath = `inset(0 0 ${wipe * 100}% 0)`;
      intro.style.visibility = wipe >= 1 ? "hidden" : "visible";
      const up = wipe > 0.5;
      if (up !== headUp) { headUp = up; hw.forEach((el, k) => { el.style.transitionDelay = up ? `${k * 60}ms` : "0ms"; el.style.transform = up ? "translate3d(0,0,0)" : "translate3d(0,110%,0)"; }); }
      // chapters and the film
      const q = clamp((pin - INTRO) / (1 - INTRO));
      const i = Math.min(CH.length - 1, Math.floor(q * CH.length));
      if (i !== chapter) { chapter = i; setActive(i); }
      const want = Math.min(N - 1, Math.round((reduced ? END[i] : clipTime(q)) * fps));
      if (want !== drawn) draw(want);
      // a quick sideways whip as you pass each cut (translate only on phones; laptops add a motion blur)
      if (reduced) return;
      let x = 0, s = 0;
      for (let b = 1; b < CH.length; b++) {
        const d = q - b / CH.length;
        const k = clamp(1 - Math.abs(d) / 0.035);
        if (k > s) { s = k; x = d < 0 ? -1 : 1; }
      }
      // only while moving: stop on a cut and the picture settles sharp, never parked mid-whip
      const e = s * s * clamp(Math.abs(target - shown) * 120);
      sw.style.transform = e > 0.001 ? `translate3d(${x * -e * 8}%,0,0) scaleX(${1 + 0.15 * e})` : "none";
      if (desktop) sw.style.filter = e > 0.01 ? `blur(${e * 14}px)` : "none";
    };

    const tick = () => {
      shown += (target - shown) * 0.2;
      if (Math.abs(target - shown) < 0.0004) shown = target;
      render(shown);
      raf = Math.abs(target - shown) > 0 || drawn < 0 ? requestAnimationFrame(tick) : 0;
    };
    // only while the section is on or near the screen; everywhere else on the page a scroll costs nothing here
    function wake() { if (!near) return; read(); if (reduced) shown = target; if (!raf) raf = requestAnimationFrame(tick); }

    size(); read(); shown = target; pump(); render(shown);
    const io = new IntersectionObserver(([en]) => { near = en.isIntersecting; wake(); }, { rootMargin: "50% 0px" });
    io.observe(box);
    addEventListener("scroll", wake, { passive: true });
    const ro = new ResizeObserver(() => { size(); wake(); });
    ro.observe(c);
    return () => { dead = true; cancelAnimationFrame(raf); io.disconnect(); ro.disconnect(); removeEventListener("scroll", wake); };
  }, []);

  return (
    <section ref={ref} id="light" className="bg-night">
      <div ref={outer} className="lg-outer relative h-[380svh] md:h-[460vh]">
        <div className="sticky top-0 h-[100svh] overflow-hidden bg-night">
          {/* phones: the film sits on top as its own frame, the words go underneath; laptops: full-bleed behind the words */}
          <div className="absolute inset-x-0 top-[72px] h-[36svh] md:top-0 md:inset-0 md:h-full overflow-hidden">
            <div className="lg-swoosh absolute inset-0 will-change-transform" style={{ transformOrigin: "50% 50%" }}>
              <canvas
                ref={canvas}
                role="img"
                aria-label="A house, a tree and an office building at dusk, each one lighting up in warm white Christmas lights as you scroll"
                className="lg-canvas absolute inset-0 w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${POSTER})` }}
              />
            </div>
            <div aria-hidden className="absolute inset-0 pointer-events-none" style={{ background: "rgba(5,10,20,0.10)" }} />
          </div>

          <div className="relative z-10 h-full max-w-[1400px] mx-auto px-5 md:px-10 flex flex-col justify-start pt-[calc(72px+36svh+18px)] pb-16 md:pt-0 md:pb-0 md:justify-center">
            <h2 className="text-[8.6vw] md:text-[4.2vw] leading-[1.02] tracking-[-0.035em] font-medium mb-5 md:mb-10">
              {["What", "are", "we"].map((w) => (
                <Fragment key={w}><span className="inline-block overflow-hidden align-bottom pb-[0.12em]"><span className="lg-hw inline-block transition-transform duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] motion-reduce:!transform-none" style={{ transform: "translate3d(0,110%,0)" }}>{w}</span></span>{" "}</Fragment>
              ))}
              <span className="inline-block overflow-hidden align-bottom pb-[0.12em] pr-[0.18em]"><span className="lg-hw inline-block font-serif italic font-normal warm transition-transform duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] motion-reduce:!transform-none" style={{ transform: "translate3d(0,110%,0)" }}>lighting?</span></span>
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
                      <div className="overflow-hidden"><p className="text-base md:text-xl text-bone/90 leading-relaxed max-w-[44ch] pl-9 md:pl-11 pt-1">{c.line}</p></div>
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
          <div className="lg-intro absolute inset-0 z-20 bg-night flex items-center justify-center px-5 md:px-10 motion-reduce:hidden" style={{ clipPath: "inset(0 0 0% 0)" }}>
            <p className="max-w-[1100px] text-center text-[9.4vw] md:text-[5.2vw] leading-[1.08] tracking-[-0.035em] font-medium" aria-label="Rooflines, trees and storefronts. Hung, lit and taken down by one crew.">
              {SENTENCE.map((w, k) => (
                <span key={k} aria-hidden className="inline-block overflow-hidden align-bottom pb-[0.12em] pr-[0.1em] mx-[0.08em]">
                  <span className={`lg-w inline-block will-change-transform ${HOT.has(w) ? "font-serif italic font-normal warm" : ""}`} style={{ transform: "translate3d(0,110%,0)" }}>{w}</span>
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
