"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const W = 1400;
const SWAGS = 8;
const PER = 5;
const COLORS = ["#ffe2b0", "#ffc66b", "#fff1d6", "#ffd9a0"];
const SW = W / SWAGS;

// Bulbs sit along each swag of the wire: a quadratic curve from (x0,14) dipping to y=92 and back up.
const BULBS = Array.from({ length: SWAGS }, (_, k) =>
  Array.from({ length: PER }, (_, j) => {
    const t = (j + 1) / (PER + 1);
    const x0 = k * SW, x1 = x0 + SW, cx = x0 + SW / 2;
    const x = (1 - t) ** 2 * x0 + 2 * (1 - t) * t * cx + t * t * x1;
    const y = (1 - t) ** 2 * 14 + 2 * (1 - t) * t * 92 + t * t * 14;
    const i = k * PER + j;
    return { x, y, c: COLORS[i % COLORS.length], d: (i * 0.37) % 2.6 };
  })
).flat();
const WIRE = "M0 14" + Array.from({ length: SWAGS }, (_, k) => ` Q ${k * SW + SW / 2} 92 ${(k + 1) * SW} 14`).join("");

/** A string of Christmas lights that switches on bulb by bulb, left to right, then twinkles. */
export function LightString({ className = "", onScroll = false }: { className?: string; onScroll?: boolean }) {
  const ref = useRef<SVGSVGElement>(null);

  useGSAP(() => {
    const on = gsap.utils.toArray<SVGElement>(".ls-on", ref.current);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { gsap.set(on, { opacity: 1 }); return; }
    gsap.to(on, {
      opacity: 1, duration: 0.35, stagger: { each: 0.035 }, ease: "power1.out", delay: onScroll ? 0 : 0.25,
      scrollTrigger: onScroll ? { trigger: ref.current, start: "top 88%" } : undefined,
    });
  }, { scope: ref });

  return (
    <svg ref={ref} viewBox={`0 0 ${W} 120`} preserveAspectRatio="xMidYMin slice" className={className} aria-hidden>
      <path d={WIRE} fill="none" stroke="rgba(255,226,176,0.22)" strokeWidth="2" />
      {BULBS.map((b, i) => (
        <g key={i} transform={`translate(${b.x} ${b.y})`}>
          <rect x="-2.2" y="-1" width="4.4" height="6" fill="#2a303c" />
          <ellipse cx="0" cy="11" rx="4.8" ry="7.2" fill="#3a4152" />
          <g data-hide className="ls-on" style={{ opacity: 0 }}>
            <circle cx="0" cy="11" r="17" fill={b.c} opacity="0.26" className="bulb-glow" style={{ animationDelay: `${b.d}s` }} />
            <ellipse cx="0" cy="11" rx="4.8" ry="7.2" fill={b.c} />
          </g>
        </g>
      ))}
    </svg>
  );
}
