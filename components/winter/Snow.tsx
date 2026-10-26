"use client";

import { useEffect, useRef } from "react";

/** Falling snow on a canvas. Sleeps when it's off screen, stays still under reduced motion. */
export function Snow({ count = 90, className = "" }: { count?: number; className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = ref.current!;
    const ctx = c.getContext("2d");
    if (!ctx || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0, h = 0, raf = 0, vis = true, t = 0;
    const flakes = Array.from({ length: count }, () => ({
      x: Math.random(), y: Math.random(), r: 0.6 + Math.random() * 2.1, s: 0.3 + Math.random() * 0.9, p: Math.random() * 6.28, d: 0.3 + Math.random() * 0.9,
    }));
    const size = () => {
      const r = c.getBoundingClientRect();
      w = r.width; h = r.height;
      c.width = w * dpr; c.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const tick = () => {
      if (!vis) { raf = 0; return; }
      t += 0.016;
      ctx.clearRect(0, 0, w, h);
      for (const f of flakes) {
        f.y += f.s * 0.0011;
        f.x += Math.sin(t * f.d + f.p) * 0.00045;
        if (f.y > 1.02) { f.y = -0.02; f.x = Math.random(); }
        ctx.fillStyle = `rgba(255,255,255,${0.28 + f.r / 4})`;
        ctx.beginPath();
        ctx.arc(f.x * w, f.y * h, f.r, 0, 6.283);
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };
    size();
    const ro = new ResizeObserver(size);
    ro.observe(c);
    const io = new IntersectionObserver(([e]) => { vis = e.isIntersecting; if (vis && !raf) raf = requestAnimationFrame(tick); });
    io.observe(c);
    return () => { cancelAnimationFrame(raf); ro.disconnect(); io.disconnect(); };
  }, [count]);

  return <canvas ref={ref} aria-hidden className={`pointer-events-none ${className}`} />;
}
