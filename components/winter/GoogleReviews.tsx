"use client";

import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// The Christmas light reviews on Pressure Titans' Google Business Profile (48 reviews, 5.0, checked 2026-10-26), word for word as
// Google shows them, with the owner's reply. Same pattern as steadyscaling.com's Google reviews: one white Google-style card at a time.
const REVIEWS = [
  {
    name: "Randy Olson",
    text: "We are absolutely thrilled with the holiday lighting purchased through and installed by Pressure Titans!! Just as with the gutter cleaning services that he did for us for the first time this year, Michael’s quality of work, attention to …",
    reply: "It was our pleasure to light up your home and yard!!",
  },
  {
    name: "Kali O’Keeffe",
    text: "… soft washed the exterior of my house to remove all the overgrowth from the warm months, cleaned my gutters, AND hung Christmas lights! He is easy to work with, flexible, timely, and does a wonderful job.. would recommend him to many …",
    reply: "It was our pleasure to light up your recently purchased new home!",
  },
  {
    name: "Clare Kelly",
    text: "Michael placed Christmas lights on our house this year for the holiday season. He was very professional and knowledgeable. Very happy with how everything turned out!! Highly recommend!!",
    reply: "Thank you for choosing Pressure Titans for your holiday lighting needs!",
  },
];

const GBP_URL = "https://www.google.com/maps/place/Pressure+Titans/@44.9833485,-93.719369,9z/data=!4m8!3m7!1s0x68ba74e0c3bd65e5:0xf5e2288cbaada241!8m2!3d44.9833485!4d-93.719369!9m1!1b1!16s%2Fg%2F11y3v6bwts";
const AVATAR = ["#1A73E8", "#EA4335", "#188038"];

const Star = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 md:w-[18px] md:h-[18px]" aria-hidden><path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8z" fill="#FBBC04" /></svg>
);

const GMark = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden>
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
);

/** Three real Christmas light reviews, one white Google card at a time on a slow rotation, dots to jump between them. */
export function GoogleReviews() {
  const ref = useRef<HTMLElement>(null);
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const N = REVIEWS.length;

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setTimeout(() => setI((v) => (v + 1) % N), 9000);
    return () => clearTimeout(t);
  }, [i, paused, N]);

  useGSAP(() => {
    gsap.to(".gr-up", { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 72%" } });
  }, { scope: ref });

  return (
    <section ref={ref} id="reviews" className="relative bg-navy pb-20 md:pb-28 pt-20 md:pt-28 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <h2 data-hide className="gr-up flex flex-wrap items-center justify-center gap-x-[0.3em] gap-y-1 text-[7.6vw] md:text-[clamp(33px,3.18vw,58px)] leading-[1.05] tracking-[-0.03em] font-medium text-center" style={{ opacity: 0, transform: "translateY(26px)" }}>
          <span className="basis-full text-center">What our customers say{" "}</span>
          <span className="inline-flex items-center gap-[0.3em] whitespace-nowrap">
            on
            <a href={GBP_URL} target="_blank" rel="noopener noreferrer" aria-label="See Pressure Titans on Google" className="hover:opacity-80 transition-opacity">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/winter/google.svg" alt="Google" className="h-[0.9em] w-auto translate-y-[0.04em]" />
            </a>
          </span>
        </h2>

        <div data-hide className="gr-up mt-8 md:mt-10" style={{ opacity: 0, transform: "translateY(26px)" }} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <div className="flex justify-center gap-2">
            {REVIEWS.map((x, k) => (
              <button
                key={x.name} type="button" aria-label={`Show review ${k + 1}`} onClick={() => setI(k)}
                className={`h-2.5 rounded-full transition-all ${k === i ? "w-7 bg-glow" : "w-2.5 bg-bone/30 hover:bg-bone/55"}`}
              />
            ))}
          </div>
          <div className="mt-5 grid">
            {REVIEWS.map((r, k) => {
              const on = k === i;
              return (
                <figure
                  key={r.name} aria-hidden={!on}
                  className={`[grid-area:1/1] self-start rounded-xl border border-[#dadce0] bg-white p-6 md:px-12 md:py-9 flex flex-col transition-opacity duration-700 ${on ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                >
                  <div className="flex items-start gap-3">
                    <span className="w-11 h-11 shrink-0 rounded-full text-white flex items-center justify-center text-lg font-medium" style={{ background: AVATAR[k % AVATAR.length] }}>{r.name[0]}</span>
                    <div className="min-w-0">
                      <p className="text-base font-medium text-[#202124] leading-tight">{r.name}</p>
                      <div className="mt-1 flex gap-0.5" role="img" aria-label="5 out of 5 stars">{[0, 1, 2, 3, 4].map((n) => (<Star key={n} />))}</div>
                    </div>
                    <a href={GBP_URL} target="_blank" rel="noopener noreferrer" aria-label="See this review on Google" tabIndex={on ? 0 : -1} className="ml-auto hover:opacity-80 transition-opacity"><GMark /></a>
                  </div>
                  <blockquote className="mt-4 text-[#202124] leading-relaxed text-base md:text-xl">{r.text}</blockquote>
                  <div className="mt-5 rounded-lg bg-[#f1f3f4] px-4 py-3">
                    <p className="text-base md:text-lg font-medium text-[#5f6368]">Response from the owner</p>
                    <p className="mt-1 text-base md:text-lg text-[#202124]">{r.reply}</p>
                  </div>
                </figure>
              );
            })}
          </div>
          <p className="mt-5 text-center text-base md:text-lg text-bone/90">5.0 on Google, 48 reviews across everything we do.</p>
        </div>
      </div>
    </section>
  );
}
