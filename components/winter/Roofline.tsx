"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Every line of one of Mike's real installs, read off the photo (1200 x 532). The SVG shares the photo's viewBox,
// so the traced bulbs sit on the roofline the crew actually lit.
export const LINES = [
  "M12 342 L276 80 L452 330",
  "M432 205 L560 66 L684 214",
  "M628 112 L722 16 L872 183",
  "M940 185 L1018 80 L1152 215",
  "M770 362 L914 182 L1066 352",
  "M22 382 L440 378",
  "M440 350 L680 347",
  "M1068 358 L1175 356",
];

/**
 * The lights come on in the order a crew hangs them. Scrubbed, short pin: the bare house first, the roofline traced
 * in bulbs line by line, then the real photo of the finished install takes over.
 */
export function Roofline() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    gsap.to(".rl-head", { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 70%" } });
    if (reduced) {
      gsap.set(".rl-mask", { strokeDashoffset: 0 });
      gsap.set(".rl-on", { opacity: 1 });
      gsap.set(".rl-svg", { opacity: 0 });
      gsap.set(".rl-cap", { opacity: 1, y: 0 });
      return;
    }
    const tl = gsap.timeline({
      scrollTrigger: { trigger: ".rl-pin", start: "top top", end: "bottom bottom", scrub: 0.5 },
    });
    tl.to(".rl-mask", { strokeDashoffset: 0, duration: 1.4, stagger: 0.55, ease: "none" }, 0)
      .to(".rl-on", { opacity: 1, duration: 2.2, ease: "none" }, 5.3)
      .to(".rl-svg", { opacity: 0, duration: 1.6, ease: "none" }, 6.6)
      .to(".rl-cap", { opacity: 1, y: 0, duration: 1, ease: "none" }, 7.4)
      .to({}, { duration: 1.2 });
  }, { scope: ref });

  return (
    <section ref={ref} id="roofline" className="bg-night">
      <div className="rl-pin relative" style={{ height: "260vh" }}>
        <div className="sticky top-0 h-[100svh] flex flex-col justify-center overflow-hidden">
          <div className="max-w-[1400px] w-full mx-auto px-5 md:px-10">
            <h2 data-hide className="rl-head text-[10vw] md:text-[4.6vw] leading-[1.02] tracking-[-0.035em] font-medium max-w-[18ch] mb-6 md:mb-9" style={{ opacity: 0, transform: "translateY(26px)" }}>
              Every line, <span className="font-serif italic warm">lit.</span>
            </h2>
          </div>
          <div className="w-full max-w-[1500px] mx-auto">
            <div className="relative w-full" style={{ aspectRatio: "1200 / 532" }}>
              <Image src="/winter/dusk-off.webp" alt="A two-story house in the snow with its roofline unlit" fill sizes="100vw" className="object-cover" priority={false} />
              <div data-hide className="rl-on absolute inset-0" style={{ opacity: 0 }}>
                <Image src="/winter/dusk-on.webp" alt="The same house with a Pressure Titans Christmas light install switched on" fill sizes="100vw" className="object-cover" />
              </div>
              <svg className="rl-svg absolute inset-0 w-full h-full" viewBox="0 0 1200 532" aria-hidden style={{ filter: "drop-shadow(0 0 5px rgba(255,200,120,0.95))" }}>
                <defs>
                  {LINES.map((d, i) => (
                    <mask key={i} id={`rl-m${i}`} maskUnits="userSpaceOnUse" x="0" y="0" width="1200" height="532">
                      <path className="rl-mask" d={d} pathLength={1} fill="none" stroke="#fff" strokeWidth="14" strokeLinecap="butt" strokeDasharray="1" style={{ strokeDashoffset: 1 }} />
                    </mask>
                  ))}
                </defs>
                {LINES.map((d, i) => (
                  <path key={i} d={d} fill="none" stroke="#ffe2b0" strokeWidth="5.5" strokeLinecap="round" strokeDasharray="0.1 11" mask={`url(#rl-m${i})`} />
                ))}
              </svg>
            </div>
          </div>
          <div className="max-w-[1400px] w-full mx-auto px-5 md:px-10 mt-6 md:mt-9">
            <p data-hide className="rl-cap text-base md:text-lg text-bone/70 leading-relaxed max-w-[46ch]" style={{ opacity: 0, transform: "translateY(16px)" }}>
              Gables, eaves and porch lines, one strand at a time. One of our real installs, not a render.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
