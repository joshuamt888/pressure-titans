"use client";

import { Fragment, useRef, useState } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Mike, 10/26: "We offer pretty much everything roygbiv. We just don't do the color changing."
// Photos: one of our installs (the warm white original) and edited previews of the same house in four colors.
// Mike, 11/6: add a warm white and green mix, and a multicolor of red, green, orange and blue. g is the swatch when it is more than one color.
// Mike, 11/14: add red & white and red & green. Their photos are the warm white install re-lit bulb by bulb (scripts/recolor-lights.py).
type Color = { n: string; h: string; c: string; g?: string; img: "white" | "red" | "orange" | "yellow" | "green" | "blue" | "indigo" | "purple" | "mix" | "multi" | "redwhite" | "redgreen"; copy: string };
const COLORS: Color[] = [
  { n: "Warm white", h: "Warm white Christmas lights", c: "#ffe2b0", img: "white", copy: "Warm white is the classic Christmas light color and the one most Minnesota homeowners ask for first. It outlines rooflines, gables, trees and porch columns without fighting your siding, and it looks right with snow on the ground. Warm white Christmas lights work on traditional homes, modern builds, storefronts and HOA entrances." },
  { n: "Red", h: "Red Christmas lights", c: "#ff3b3b", img: "red", copy: "Red Christmas lights are the color most people picture at the holidays. Red looks great along a roofline, on porch columns and around a front door wreath, and it pairs with green or warm white for the classic Christmas look. Red is also a strong pick for storefronts and offices that want a bold seasonal display." },
  { n: "Orange", h: "Orange Christmas lights", c: "#ff8a1f", img: "orange", copy: "Orange Christmas lights give a warm, glowing look that suits homes with brick, stone or cedar. Orange works well as an accent on trees and bushes next to warm white, and it fits late-fall and early-winter displays." },
  { n: "Yellow", h: "Yellow Christmas lights", c: "#ffd21f", img: "yellow", copy: "Yellow Christmas lights read bright and cheerful on dark siding and look great against fresh snow. Yellow works on rooflines and in trees, and it is an easy accent beside warm white or green." },
  { n: "Green", h: "Green Christmas lights", c: "#2fd36b", img: "green", copy: "Green Christmas lights bring a classic holiday look and are an easy match with red or warm white. Green stands out on light siding and snow, and it highlights evergreens, bushes and railings. Many homeowners use green on gables, porch lines and trees." },
  { n: "Blue", h: "Blue Christmas lights", c: "#2f8bff", img: "blue", copy: "Blue Christmas lights give an icy winter look that stands out against snow. Blue is popular for winter-themed displays and for modern homes with white or gray siding, and it pairs well with warm white on a roofline." },
  { n: "Indigo", h: "Indigo Christmas lights", c: "#5a4bff", img: "indigo", copy: "Indigo Christmas lights are a deep blue-violet that looks dramatic on a dark roofline and in trees at night. Indigo makes a strong accent when mixed with blue, purple and white." },
  { n: "White & green", h: "Warm white and green Christmas lights", c: "#2fd36b", g: "linear-gradient(90deg, #ffe2b0 50%, #2fd36b 50%)", img: "mix", copy: "Warm white and green alternate bulb by bulb, so you get the classic warm glow with a festive green pop. It reads like Christmas from the street without going full color, and it looks great on rooflines, gables and porch lines against snow." },
  { n: "Red & white", h: "Red and white Christmas lights", c: "#ff3b3b", g: "linear-gradient(90deg, #ff3b3b 50%, #ffe2b0 50%)", img: "redwhite", copy: "Red and warm white alternate bulb by bulb, the candy cane look. It is bright and festive from the street but still classic, and it suits white trim, brick and dark siding alike. Red and white works on rooflines, gables, porch lines and storefronts." },
  { n: "Red & green", h: "Red and green Christmas lights", c: "#2fd36b", g: "linear-gradient(90deg, #ff3b3b 50%, #2fd36b 50%)", img: "redgreen", copy: "Red and green alternate bulb by bulb, the traditional Christmas pairing. It reads as Christmas from a block away and looks great against snow on rooflines, gables and porch lines. The bulbs stay one color each, no color-changing." },
  { n: "Multicolor", h: "Multicolor Christmas lights", c: "#ff8a1f", g: "conic-gradient(#ff3b3b 0 25%, #2fd36b 0 50%, #ff8a1f 0 75%, #2f8bff 0)", img: "multi", copy: "Red, green, orange and blue in a repeating pattern, the old-school multicolor look a lot of families grew up with. Multicolor is fun on rooflines and trees and makes the whole house feel like the holidays. The bulbs stay one color each, no color-changing." },
  { n: "Violet", h: "Violet and purple Christmas lights", c: "#b24dff", img: "purple", copy: "Purple Christmas lights are bold and unexpected, which makes your house the one people remember on the street. Violet and purple work on rooflines, gables and trees, and they pair well with white or blue for a winter-night look." },
];

/**
 * Brightness (Mike, 11/14, he and Josh picked a dimmer over a straight before/after): the same house, unlit, sits under
 * the chosen color, and the slider fades the lights in from off to full. It brings itself up once as it arrives (reused
 * from the first Dimmer). touch-pan-y, never touch-none: a vertical swipe over the slider must still scroll the page.
 *
 * The color options. Options and the selected color's details sit on the left, one photo on the right. Warm white is the
 * default so the visitor knows what a normal install looks like; a new photo wipes in over the old one, hard-edged.
 */
export function Colors() {
  const ref = useRef<HTMLElement>(null);
  const [sel, setSel] = useState(0);
  const [cur, setCur] = useState<Color["img"]>("white");
  const [prev, setPrev] = useState<Color["img"]>("white");
  const lit = useRef<HTMLDivElement>(null);
  const dark = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const fill = useRef<HTMLDivElement>(null);
  const thumb = useRef<HTMLDivElement>(null);
  const lv = useRef({ p: 1 });

  // straight to the DOM, no React render: the slider raises itself during scroll and must not re-render the section
  const apply = (p: number) => {
    lv.current.p = p;
    const pc = Math.round(p * 100);
    if (lit.current) lit.current.style.opacity = String(p);
    if (dark.current) dark.current.style.opacity = String((1 - p) * 0.45);
    if (fill.current) fill.current.style.width = `${pc}%`;
    const t = thumb.current;
    if (t) {
      t.style.left = `${pc}%`;
      t.setAttribute("aria-valuenow", String(pc));
      t.setAttribute("aria-valuetext", pc < 3 ? "Lights off" : `${pc}% brightness`);
    }
  };
  const fromX = (x: number) => {
    const r = track.current!.getBoundingClientRect();
    gsap.killTweensOf(lv.current);
    apply(Math.max(0, Math.min(1, (x - r.left) / r.width)));
  };

  const pick = (k: number) => {
    setSel(k);
    const img = COLORS[k].img;
    if (img && img !== cur) { setPrev(cur); setCur(img); }
  };

  useGSAP(() => {
    gsap.set(".co-w", { y: 0, yPercent: 110 });
    gsap.to(".co-w", { yPercent: 0, duration: 0.6, stagger: 0.05, ease: "power4.out", scrollTrigger: { trigger: ref.current, start: "top 92%" } });
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    apply(0);
    ScrollTrigger.create({
      trigger: ".co-photo", start: "top 85%", once: true,
      onEnter: () => gsap.to(lv.current, { p: 1, duration: 1.6, ease: "power2.inOut", onUpdate: () => apply(lv.current.p) }),
    });
  }, { scope: ref });

  const chosen = COLORS[sel];
  const shown = COLORS.find((c) => c.img === cur)!;

  return (
    <section ref={ref} id="colors" className="bg-night py-20 md:py-28">
      <div className="max-w-[1300px] mx-auto px-5 md:px-10 grid md:grid-cols-12 gap-10 md:gap-14 items-start">
        <div className="md:col-span-5 md:sticky md:top-28">
          <h2 className="text-[10vw] md:text-[3.6vw] leading-[1.03] tracking-[-0.035em] font-medium">
            {["Every", "color", "of", "the"].map((w) => (
              <Fragment key={w}><span className="inline-block overflow-hidden align-bottom pb-[0.12em]"><span className="co-w inline-block" style={{ transform: "translateY(110%)" }}>{w}</span></span>{" "}</Fragment>
            ))}
            <span className="inline-block overflow-hidden align-bottom pb-[0.12em] pr-[0.14em]"><span className="co-w inline-block font-serif italic font-normal warm" style={{ transform: "translateY(110%)" }}>rainbow.</span></span>
          </h2>
          <p className="mt-5 text-xl md:text-2xl text-bone/90 leading-relaxed max-w-[40ch]">
            Pick a color. We install all of them along rooflines, gables, trees and storefronts. We just don&rsquo;t do color-changing lights.
          </p>

          <div role="radiogroup" aria-label="Light color" className="mt-8 grid grid-cols-2 gap-3 md:gap-3.5 max-w-[520px]">
            {COLORS.map((c, k) => (
              <button
                key={c.n} type="button" role="radio" aria-checked={sel === k} onClick={() => pick(k)}
                className={`flex items-center gap-3 rounded-full border px-5 py-3.5 text-lg md:text-xl text-left transition-colors active:scale-[0.98] ${sel === k ? "border-glow bg-glow text-navy font-medium" : "border-bone/35 text-bone hover:border-bone/75"}`}
              >
                <span aria-hidden className="w-4 h-4 rounded-full shrink-0" style={{ background: c.g ?? c.c, boxShadow: sel === k ? "none" : `0 0 10px ${c.c}` }} />
                {c.n}
              </button>
            ))}
          </div>
        </div>

        <div className="md:col-span-7">
          <div className="co-photo relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-night">
            <Image src="/winter/colors-off.webp" alt="" fill sizes="(max-width: 768px) 100vw, 58vw" className="object-cover" />
            <div ref={dark} aria-hidden className="absolute inset-0 bg-night" style={{ opacity: 0 }} />
            <div ref={lit} className="absolute inset-0">
            <Image key={`p${prev}`} src={`/winter/colors-${prev}.webp`} alt="" fill sizes="(max-width: 768px) 100vw, 58vw" className="object-cover" />
            <Image
              key={`c${cur}`} src={`/winter/colors-${cur}.webp`}
              alt={`A two-story house with its Christmas lights in ${shown.n.toLowerCase()}`}
              fill sizes="(max-width: 768px) 100vw, 58vw" className={`object-cover ${cur !== prev ? "wipein" : ""}`}
            />
            </div>
            <p className="absolute left-3 bottom-3 md:left-5 md:bottom-5 text-lg md:text-xl rounded-full bg-night/80 backdrop-blur px-5 py-2 text-bone">
              {shown.n}{cur === "white" ? " (our standard)" : ""}
            </p>
          </div>

          <div className="mt-5 flex items-center gap-4 md:gap-5">
            <span className="text-base md:text-lg text-bone/75 shrink-0">Off</span>
            <div
              ref={track}
              className="relative flex-1 h-12 mx-[18px] touch-pan-y select-none cursor-pointer"
              onPointerDown={(e) => { if (e.pointerType === "mouse" && e.button !== 0) return; e.currentTarget.setPointerCapture(e.pointerId); fromX(e.clientX); }}
              onPointerMove={(e) => { if (e.currentTarget.hasPointerCapture(e.pointerId)) fromX(e.clientX); }}
            >
              <div aria-hidden className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-2 rounded-full bg-bone/15 overflow-hidden">
                <div ref={fill} className="h-full rounded-full" style={{ width: "100%", background: `linear-gradient(90deg, rgba(255,226,176,0.25), ${shown.c})` }} />
              </div>
              <div
                ref={thumb} role="slider" tabIndex={0} aria-label="Light brightness" aria-valuemin={0} aria-valuemax={100} aria-valuenow={100} aria-valuetext="100% brightness"
                onKeyDown={(e) => {
                  const step = { ArrowRight: 10, ArrowUp: 10, ArrowLeft: -10, ArrowDown: -10, PageUp: 25, PageDown: -25 }[e.key];
                  const to = e.key === "Home" ? 0 : e.key === "End" ? 1 : step !== undefined ? Math.max(0, Math.min(1, lv.current.p + step / 100)) : null;
                  if (to === null) return;
                  e.preventDefault(); gsap.killTweensOf(lv.current); apply(to);
                }}
                className="absolute top-1/2 w-9 h-9 -translate-x-1/2 -translate-y-1/2 rounded-full bg-glow border-2 border-bone outline-none focus-visible:ring-2 focus-visible:ring-bone focus-visible:ring-offset-2 focus-visible:ring-offset-night"
                style={{ left: "100%", boxShadow: `0 0 14px ${shown.c}` }}
              />
            </div>
            <span className="text-base md:text-lg text-glow shrink-0">Full</span>
          </div>
          <p className="mt-1 text-sm md:text-base text-bone/60">Slide to light the house, from off to full brightness.</p>

          <div className="mt-7 md:mt-8">
            {COLORS.map((c, k) => (
              <div key={c.n} hidden={sel !== k}>
                <h3 className="overflow-hidden pb-[0.1em] pr-[0.1em] text-[8vw] md:text-[2.4vw] leading-[1.1] tracking-[-0.02em] font-medium">
                  <span key={sel === k ? "on" : "off"} className="rise inline-block font-serif italic font-normal warm">{c.h}</span>
                </h3>
                <p key={sel === k ? "on" : "off"} className="rise mt-3 text-xl md:text-2xl text-bone/90 leading-relaxed max-w-[48ch]">{c.copy}</p>
              </div>
            ))}
          </div>

          <a href="#quote" className="mt-8 inline-block rounded-full bg-glow text-navy text-xl font-medium px-9 py-4 hover:bg-bone transition-colors active:scale-[0.98]">Get a quote in {chosen.n.toLowerCase()}</a>
        </div>
      </div>
    </section>
  );
}
