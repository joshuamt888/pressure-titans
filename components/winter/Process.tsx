"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useHiRes } from "./useHiRes";
import { Bulb } from "./Bulb";
import { PHONE, TEL } from "./phone";

gsap.registerPlugin(ScrollTrigger);

const POSTER = "/winter/process-poster.jpg";
const VIDEO = "/winter/process-scrub.mp4";
const VIDEO_HI = "/winter/process-hi.mp4";

// Scroll progress -> fraction of the clip. Steps 1-2 sit on the bare house, step 3 runs the install, step 4 holds the lit
// house, step 5 plays it backward (the lights come down). Piecewise linear between these points.
const MAP: [number, number][] = [[0, 0], [0.2, 0], [0.4, 0.1], [0.7, 0.85], [0.85, 0.98], [1, 0]];
const clipAt = (p: number) => {
  for (let i = 1; i < MAP.length; i++) {
    const [p1, f1] = MAP[i];
    if (p <= p1) { const [p0, f0] = MAP[i - 1]; return f0 + ((p - p0) / (p1 - p0 || 1)) * (f1 - f0); }
  }
  return 0;
};

const STEPS = [
  { n: "01", t: "Design consultation", d: "Tell us your vision. We visit your property, take measurements and send a custom lighting plan with a clear quote." },
  { n: "02", t: "Schedule installation", d: "We lock in your install date well before the season starts, so your display is glowing when you want it." },
  { n: "03", t: "We install", d: "Our crew arrives on schedule with all materials and equipment and installs every strand, clip and timer. You do not lift a finger." },
  { n: "04", t: "Enjoy and we maintain", d: "Flip the switch. If a bulb burns out or a strand comes loose, we come back and fix it at no extra charge." },
  { n: "05", t: "Takedown and storage", d: "After the holidays we take everything down and leave your property spotless. We can store your lights for next year." },
];

/**
 * Christmas lights, start to finish. The whole list is on screen at once; scroll pushes the camera toward the front
 * door (the clip's time follows the scroll) and lights each step as the house comes closer.
 */
export function Process({ page = false }: { page?: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  useHiRes(video, VIDEO_HI);
  const [active, setActive] = useState(0);
  const last = useRef(0);

  useGSAP(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    gsap.to(".pr-head", { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 70%" } });
    if (reduced) { setActive(STEPS.length - 1); gsap.set(".pr-fill", { scaleY: 1 }); return; }

    const v = video.current!;
    let raf = 0;
    ScrollTrigger.create({
      trigger: ".pr-outer", start: "top top", end: "bottom bottom", scrub: true,
      onUpdate: (self) => {
        const p = self.progress;
        gsap.set(".pr-fill", { scaleY: p });
        const i = Math.min(STEPS.length - 1, Math.floor(p * STEPS.length));
        if (i !== last.current) { last.current = i; setActive(i); }
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          if (v.readyState >= 1 && Number.isFinite(v.duration)) v.currentTime = clipAt(p) * v.duration * 0.995;
        });
      },
    });
  }, { scope: ref });

  return (
    <section ref={ref} id="process" className="bg-night">
      <div className="pr-outer relative" style={{ height: "400vh" }}>
        <div className="sticky top-0 h-[100svh] overflow-hidden">
          <video
            ref={video} muted playsInline preload="auto" poster={POSTER}
            aria-label="A house at dusk as Christmas lights go up along the roofline, porch and trees, then come down again"
            className="absolute inset-0 w-full h-full object-cover object-[50%_55%]"
          >
            <source src={VIDEO} type="video/mp4" />
          </video>
          <div aria-hidden className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to right, rgba(5,10,20,0.92) 0%, rgba(5,10,20,0.78) 34%, rgba(5,10,20,0.15) 66%, rgba(5,10,20,0) 100%), linear-gradient(to top, rgba(5,10,20,0.7) 0%, rgba(5,10,20,0) 40%)" }} />

          <div className="relative z-10 h-full max-w-[1400px] mx-auto px-5 md:px-10 flex flex-col justify-center">
            <p className="text-base md:text-lg tracking-[0.08em] uppercase text-bone/90 mb-4">Christmas lights, start to finish</p>
            {(() => {
              const H = page ? "h1" : "h2";
              return (
                <H data-hide className="pr-head text-[12vw] md:text-[5vw] leading-[1] tracking-[-0.035em] font-medium mb-8 md:mb-12" style={{ opacity: 0, transform: "translateY(26px)" }}>
                  Our <span className="font-serif italic warm">process.</span>
                </H>
              );
            })()}

            <div className="relative pl-12 md:pl-16 max-w-[520px]">
              <span aria-hidden className="absolute left-[13px] md:left-[19px] top-2 bottom-2 w-[2px] bg-bone/15" />
              <span aria-hidden className="pr-fill absolute left-[13px] md:left-[19px] top-2 bottom-2 w-[2px] bg-glow origin-top shadow-[0_0_14px_2px_rgba(255,200,120,0.5)]" style={{ transform: "scaleY(0)" }} />
              <ol className="space-y-3 md:space-y-5">
                {STEPS.map((s, i) => {
                  const on = i <= active;
                  const cur = i === active;
                  return (
                    <li key={s.n} className="relative">
                      <Bulb on={on} className="absolute -left-[35px] md:-left-[45px] top-[3px] md:top-[5px] w-[30px] md:w-[40px]" />
                      <div className="flex items-baseline gap-3 transition-opacity duration-500" style={{ opacity: cur ? 1 : on ? 0.6 : 0.4 }}>
                        <span className="text-base md:text-lg tracking-[0.08em] text-bone/90 tabular-nums">{s.n}</span>
                        <h3 className="text-[6.6vw] md:text-[2.2vw] leading-[1.1] tracking-[-0.025em] font-medium">{s.t}</h3>
                      </div>
                      <div className={`grid transition-[grid-template-rows] duration-500 motion-reduce:grid-rows-[1fr] ${cur ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                        <p className="overflow-hidden text-base md:text-lg text-bone/90 leading-relaxed max-w-[40ch] pt-1 md:pt-2">{s.d}</p>
                      </div>
                    </li>
                  );
                })}
              </ol>
              <div className="mt-6 md:mt-9 flex flex-wrap gap-3">
                <a href="#quote" className="rounded-full bg-glow text-navy font-medium px-6 py-3 hover:bg-bone transition-colors active:scale-[0.98]">Get my free quote</a>
                <a href={TEL} className="rounded-full border border-bone/30 bg-bone/5 backdrop-blur-md px-6 py-3 hover:bg-bone/15 transition-colors active:scale-[0.98]">{PHONE}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
