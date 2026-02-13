"use client";

import { useState, useCallback, useRef } from "react";
import Image from "next/image";

const photos = [
  { src: "/images/projects/bastoneflooramazing.webp", label: "Stone Patio" },
  { src: "/images/projects/bafrontstepsgood.webp", label: "Front Steps" },
  { src: "/images/projects/badeck6good.webp", label: "Deck Restoration" },
  { src: "/images/projects/bawalkwaygood.webp", label: "Walkway" },
  { src: "/images/projects/bafrontstepsgood.webp", label: "Exterior Walls" },
  { src: "/images/projects/baguttercleaned.webp", label: "Gutter Cleaning" },
  { src: "/images/projects/bagutterclean.webp", label: "Gutter Before & After" },
  { src: "/images/projects/badriveway.webp", label: "Driveway" },
  { src: "/images/projects/barailing.webp", label: "Railing" },
  { src: "/images/projects/basidewalk.webp", label: "Sidewalk" },
  { src: "/images/projects/basidedoor.webp", label: "Side Entry" },
  { src: "/images/projects/badeckstairs.webp", label: "Deck Stairs" },
  { src: "/images/projects/badeck.webp", label: "Deck" },
  { src: "/images/projects/badeck2.webp", label: "Deck Surface" },
  { src: "/images/projects/badeck3.webp", label: "Deck Boards" },
  { src: "/images/projects/badeck4.webp", label: "Deck Detail" },
  { src: "/images/projects/badeck5.webp", label: "Deck Planks" },
  { src: "/images/projects/bafrontdoorsteps.webp", label: "Front Door Steps" },
  { src: "/images/projects/bafrontdoorsteps2.webp", label: "Entryway Steps" },
  { src: "/images/projects/bafrontdoorsteps3.webp", label: "Porch Steps" },
  { src: "/images/projects/bafrontdoorsteps4.webp", label: "Step Detail" },
  { src: "/images/projects/bafrontdoorwaterfountain.webp", label: "Water Fountain" },
  { src: "/images/projects/bahouseoutsidewalls3.webp", label: "Exterior Cleaning" },
  { src: "/images/projects/bagutter3.webp", label: "Gutter Debris" },
  { src: "/images/projects/bagutter4.webp", label: "Gutter Flush" },
  { src: "/images/projects/bagutter5.webp", label: "Gutter Result" },
  { src: "/images/projects/babackyardbonfire.webp", label: "Backyard Patio" },
];

function getCardStyle(offset: number): React.CSSProperties {
  if (offset === 0) {
    return {
      transform: "translateX(0) scale(1)",
      zIndex: 30,
      opacity: 1,
      visibility: "visible" as const,
    };
  }
  if (Math.abs(offset) === 1) {
    return {
      transform: `translateX(${offset > 0 ? "100%" : "-100%"}) scale(0.75)`,
      zIndex: 10,
      opacity: 0.5,
      visibility: "visible" as const,
    };
  }
  return {
    transform: offset > 0
      ? "translateX(110%) scale(0.6)"
      : "translateX(-110%) scale(0.6)",
    zIndex: 0,
    opacity: 0,
    visibility: "hidden" as const,
  };
}

function getOffset(index: number, current: number, total: number): number {
  let diff = index - current;
  if (diff > total / 2) diff -= total;
  if (diff < -total / 2) diff += total;
  return diff;
}

export default function BeforeAfterCarousel() {
  const [current, setCurrent] = useState(0);
  const animating = useRef(false);

  const go = useCallback((dir: number) => {
    if (animating.current) return;
    animating.current = true;
    setCurrent((c) => (c + dir + photos.length) % photos.length);
    setTimeout(() => { animating.current = false; }, 550);
  }, []);

  return (
    <section className="py-16 sm:py-24 bg-navy overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-titan-light font-semibold uppercase tracking-widest text-sm mb-3">
            Real Results
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
            Before &amp; After
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Every image tells the story. See the difference professional cleaning makes.
          </p>
        </div>

        <div className="relative">
          <div className="relative h-[350px] sm:h-[420px] md:h-[480px]">
            {photos.map((photo, i) => {
              const offset = getOffset(i, current, photos.length);
              const style = getCardStyle(offset);
              const isVisible = Math.abs(offset) <= 2;

              if (!isVisible) return null;

              return (
                <div
                  key={i}
                  className="absolute inset-0 mx-auto w-full max-w-2xl"
                  onClick={offset === -1 ? () => go(-1) : offset === 1 ? () => go(1) : undefined}
                  style={{
                    ...style,
                    transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                    pointerEvents: Math.abs(offset) <= 1 ? "auto" : "none",
                    cursor: Math.abs(offset) === 1 ? "pointer" : undefined,
                  }}
                >
                  <div className="relative h-full rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src={photo.src}
                      alt={`${photo.label} before and after pressure washing`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 672px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="text-white font-heading font-bold text-lg">{photo.label}</span>
                      <span className="block text-white/70 text-sm">Before &amp; After</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Arrows + Counter */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            onClick={() => go(-1)}
            className="w-12 h-12 bg-white/10 hover:bg-titan-accent border border-white/20 hover:border-titan-accent rounded-full flex items-center justify-center text-white transition-all"
            aria-label="Previous photo"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <p className="text-white/40 text-sm">
            {current + 1} / {photos.length}
          </p>
          <button
            onClick={() => go(1)}
            className="w-12 h-12 bg-white/10 hover:bg-titan-accent border border-white/20 hover:border-titan-accent rounded-full flex items-center justify-center text-white transition-all"
            aria-label="Next photo"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="text-center mt-6">
          <a
            href="/portfolio"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-titan-accent border border-white/20 hover:border-titan-accent text-white font-semibold px-8 py-4 rounded-xl transition-all"
          >
            View Full Portfolio
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
