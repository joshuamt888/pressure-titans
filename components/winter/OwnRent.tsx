"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Mike, 11/15: "Own vs Rent section. Use the attached PDF for the layout and wording." Every line below is the PDF's wording.
// The chart is an illustration with no numbers (the PDF's own bar heights); each estimate carries the real prices.
// Series colors pass the dataviz validator on the navy surface (2026-11-16): own #c47d24, rent #4a8bef.
const OWN = "#c47d24";
const RENT = "#4a8bef";

const PLANS = [
  { k: "own", name: "Own", rows: [["Year 1", "Lights + install fee"], ["Year 2+", "Install fee only"]], lead: "Lowest cost over time.", text: "The lights are yours to keep, and we store them for you between seasons.", best: "homeowners planning to stay a few years.", color: OWN },
  { k: "rent", name: "Rent", badge: "New", rows: [["Year 1", "Annual rental fee"], ["Year 2+", "Same annual fee"]], lead: "Nothing to buy up front.", text: "Lights are included. It costs a bit more per year than owning.", best: "first-timers, or if you might move soon.", color: RENT },
];

const STEPS = [
  { t: "Install", d: "We professionally install your holiday lights.", icon: "M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z" },
  { t: "Maintain", d: "In-season fixes are included all season.", icon: "M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4z" },
  { t: "Remove", d: "We carefully take down and inspect every strand.", icon: "M12 3v12M7 10l5 5 5-5M5 21h14" },
  { t: "Store", d: "Your lights stay safe in our facility until next year.", icon: "M21 8l-9-5-9 5v8l9 5 9-5zM3 8l9 5 9-5M12 13v8" },
];

// [own, rent] as a share of the tallest bar, read off the PDF's chart
const BARS: [string, number, number][] = [["Year 1", 1, 0.58], ["Year 2", 0.4, 0.58], ["Year 3+", 0.4, 0.58]];

const hide: React.CSSProperties = { opacity: 0, transform: "translateY(26px)" };
const Icon = ({ d, className = "" }: { d: string; className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden className={className}><path d={d} /></svg>
);

/** Own or rent your holiday lights: the two plans, what we handle every season, and what you pay each year. */
export function OwnRent() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.utils.toArray<HTMLElement>(".or-group").forEach((g) => {
      gsap.to(g.querySelectorAll(".or-up"), { opacity: 1, y: 0, duration: 0.6, stagger: 0.06, ease: "power3.out", scrollTrigger: { trigger: g, start: "top 92%" } });
    });
    gsap.to(".or-bar", { scaleY: 1, duration: 0.7, stagger: 0.06, ease: "power3.out", scrollTrigger: { trigger: ".or-chart", start: "top 90%" } });
  }, { scope: ref });

  return (
    <section ref={ref} id="own-or-rent" className="bg-navy py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <div className="or-group">
          <p data-hide className="or-up text-base md:text-lg tracking-[0.14em] uppercase text-glow" style={hide}>Pressure Titans</p>
          <h2 data-hide className="or-up mt-3 text-[10vw] md:text-[4.2vw] leading-[1.02] tracking-[-0.035em] font-medium max-w-[18ch]" style={hide}>
            Own or rent your <span className="font-serif italic font-normal warm">holiday lights.</span>
          </h2>
          <p data-hide className="or-up mt-5 text-xl md:text-2xl text-bone/90 leading-relaxed max-w-[52ch]" style={hide}>
            Your estimate shows both prices side by side. Same professional service either way. The only difference is who owns the lights.
          </p>

          <div className="mt-10 md:mt-14 grid md:grid-cols-2 gap-6 md:gap-8">
            {PLANS.map((p) => (
              <article key={p.k} data-hide className="or-up rounded-2xl border-2 bg-night p-6 md:p-9" style={{ ...hide, borderColor: p.color }}>
                <div className="flex items-center justify-between gap-4">
                  <h3 className="flex items-center gap-3 text-[9vw] md:text-[2.8vw] leading-none tracking-[-0.03em] font-medium">
                    <Icon d={p.k === "own" ? "M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z" : "M20 12a8 8 0 1 1-2.3-5.7M20 4v5h-5"} className="w-8 h-8 md:w-9 md:h-9 shrink-0" />
                    {p.name}
                  </h3>
                  {p.badge && <span className="rounded-md bg-titan px-3 py-1 text-sm font-semibold tracking-[0.14em] uppercase text-bone">{p.badge}</span>}
                </div>
                <dl className="mt-6">
                  {p.rows.map(([y, v]) => (
                    <div key={y} className="flex items-baseline justify-between gap-4 border-b border-bone/15 py-3.5">
                      <dt className="text-lg md:text-xl font-semibold tracking-[0.04em] uppercase">{y}</dt>
                      <dd className="text-lg md:text-xl text-bone/90 text-right">{v}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-5 text-lg md:text-xl text-bone/85 leading-relaxed"><strong className="font-semibold text-bone">{p.lead}</strong> {p.text}</p>
                <p className="mt-5 rounded-xl bg-navy px-5 py-4 text-lg text-bone/90 leading-relaxed"><span className="font-semibold text-glow">Best for:</span> {p.best}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="or-group mt-20 md:mt-28">
          <h3 data-hide className="or-up text-[8vw] md:text-[2.8vw] leading-[1.05] tracking-[-0.03em] font-medium" style={hide}>
            What we handle <span className="font-serif italic font-normal warm">every season.</span>
          </h3>
          <ol className="mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {STEPS.map((s, i) => (
              <li key={s.t} data-hide className="or-up relative rounded-2xl border border-titan-lt/45 bg-night p-6" style={hide}>
                <Icon d={s.icon} className="w-8 h-8 text-glow" />
                <h4 className="mt-4 text-xl md:text-2xl font-semibold tracking-[0.04em] uppercase">{i + 1} &middot; {s.t}</h4>
                <p className="mt-2 text-lg text-bone/85 leading-relaxed">{s.d}</p>
              </li>
            ))}
          </ol>
          <p data-hide className="or-up mt-7 flex items-center justify-center gap-3 text-center text-base md:text-lg font-semibold tracking-[0.1em] uppercase text-glow" style={hide}>
            <Icon d="M20 12a8 8 0 1 1-2.3-5.7M20 4v5h-5" className="w-6 h-6 shrink-0" />
            Repeats every season &mdash; no storage bins in your garage
          </p>
        </div>

        <div className="or-group mt-20 md:mt-28 grid md:grid-cols-12 gap-10 md:gap-14 items-end">
          <div className="md:col-span-4">
            <h3 data-hide className="or-up text-[8vw] md:text-[2.8vw] leading-[1.05] tracking-[-0.03em] font-medium" style={hide}>
              What you pay <span className="font-serif italic font-normal warm">each year.</span>
            </h3>
            <p data-hide className="or-up mt-4 text-lg md:text-xl text-bone/85 leading-relaxed" style={hide}>
              Owning costs more in year one, then drops to the lowest yearly price. Renting stays the same every year.
            </p>
            <ul data-hide className="or-up mt-6 space-y-2 text-lg" style={hide}>
              <li className="flex items-center gap-3"><span aria-hidden className="w-4 h-4 rounded-[4px]" style={{ background: OWN }} />Own</li>
              <li className="flex items-center gap-3"><span aria-hidden className="w-4 h-4 rounded-[4px]" style={{ background: RENT }} />Rent</li>
            </ul>
          </div>
          <figure className="or-chart md:col-span-8">
            <div role="img" aria-label="Illustration: in year 1 owning costs more than renting. In year 2 and year 3 and after, owning costs less than renting, and renting stays the same every year." className="grid grid-cols-3 gap-4 md:gap-10 h-[240px] md:h-[300px] border-b-2 border-bone/30">
              {BARS.map(([label, own, rent]) => (
                <div key={label} className="flex items-end justify-center gap-[2px]">
                  {[["Own", own, OWN], ["Rent", rent, RENT]].map(([n, h, c]) => (
                    <div key={n as string} data-hide className="or-bar relative w-[38%] max-w-[64px] rounded-t-[4px] origin-bottom" style={{ height: `${(h as number) * 100}%`, background: c as string, transform: "scaleY(0)" }}>
                      {label === "Year 1" && <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-sm text-bone/80">{n as string}</span>}
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div aria-hidden className="grid grid-cols-3 gap-4 md:gap-10 mt-3">
              {BARS.map(([label]) => <span key={label} className="text-center text-lg md:text-xl font-semibold tracking-[0.04em] uppercase">{label}</span>)}
            </div>
            <figcaption className="mt-4 text-center text-sm md:text-base text-bone/60">Illustration only. Your estimate shows your actual prices.</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
