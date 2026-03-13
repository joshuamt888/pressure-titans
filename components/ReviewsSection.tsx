"use client";

import { useState, useCallback, useRef } from "react";

const reviews = [
  {
    name: "Tiffany B.",
    text: "Michael did an amazing job the before and after was evident! He was thorough and timely. His level of customer service was above and beyond.",
  },
  {
    name: "Randy O.",
    text: "We are absolutely thrilled with the holiday lighting purchased through and installed by Pressure Titans!! Michael's quality of work and attention to detail is outstanding.",
  },
  {
    name: "Owen C.",
    text: "Pressure Titans did a great job, bought a pretty run down place near Excelsior that needed a deep pressure washing. It was way better than I thought possible!",
  },
  {
    name: "Kali O.",
    text: "Michael was wonderful! He soft washed the exterior of my house, cleaned my gutters, AND hung Christmas lights! Easy to work with, flexible, timely, and does a wonderful job.",
  },
  {
    name: "Jesse P.",
    text: "Did a great job on our gutters. Worked me in next day, communicated, sent pictures, very easy to work with. Would definitely use again.",
  },
  {
    name: "Tim R.",
    text: "We had Michael come over today and clean our gutters and we could NOT be happier. He was prompt, courteous, and his work was impeccable!",
  },
  {
    name: "K L.",
    text: "Logan did a fantastic job pressure washing my 850-foot PVC split rail fence. Very knowledgeable about what it takes to do the job right. Efficient and thorough.",
  },
  {
    name: "Susan O.",
    text: "Michael was so fantastic! He listened to my concerns and followed through on everything! Our house looks amazing. I highly recommend Pressure Titans!",
  },
  {
    name: "Kathy P.",
    text: "I feel like we have all new siding! Every single spot gone! Gave great care to items close to the house. Highly recommend!",
  },
  {
    name: "Abe K.",
    text: "Pressure Titans did a great job soft washing the exterior sidings of my home. They were professional, prompt, explained the process, and took care in cleaning up.",
  },
  {
    name: "Michael B.",
    text: "I heard someone talking about how great of a job they did and how fair the price was. I'll admit I was a bit nervous but they exceeded every expectation.",
  },
  {
    name: "Jay J.",
    text: "Michael did a great job power washing my deck and patio. Really appreciate the extra time he took on the railings and wiping down the windows. Top notch!",
  },
];

function getCardStyle(offset: number): React.CSSProperties {
  // offset: 0 = center, 1 = far right, -1 = far left
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
  // Hidden cards — kept in DOM for smooth transition in
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
  // Wrap around for circular carousel
  if (diff > total / 2) diff -= total;
  if (diff < -total / 2) diff += total;
  return diff;
}

export default function ReviewsSection() {
  const [current, setCurrent] = useState(0);
  const animating = useRef(false);

  const go = useCallback((dir: number) => {
    if (animating.current) return;
    animating.current = true;
    setCurrent((c) => (c + dir + reviews.length) % reviews.length);
    setTimeout(() => { animating.current = false; }, 550);
  }, []);

  return (
    <section className="py-16 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-titan-accent font-semibold uppercase tracking-widest text-sm mb-3">
            What Our Clients Say
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-4">
            Google Reviews
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-slate-400 text-sm font-medium ml-1">
              5.0 &middot; 25+ Reviews
            </span>
          </div>
        </div>

        {/* 3D Card Carousel */}
        <div className="relative" style={{ perspective: "1200px" }}>
          <div className="relative h-[320px] sm:h-[280px]">
            {reviews.map((review, i) => {
              const offset = getOffset(i, current, reviews.length);
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
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 sm:p-10 h-full flex flex-col justify-between shadow-sm">
                    <div>
                      <div className="flex gap-0.5 mb-4">
                        {[...Array(5)].map((_, si) => (
                          <svg key={si} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                        &ldquo;{review.text}&rdquo;
                      </p>
                    </div>
                    <div className="mt-6 flex items-center gap-3">
                      <div className="w-10 h-10 bg-titan-accent rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-slate-900 font-semibold">{review.name}</p>
                        <p className="text-slate-400 text-xs">Google Review</p>
                      </div>
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
            className="w-12 h-12 bg-slate-100 hover:bg-titan-accent border border-slate-200 hover:border-titan-accent rounded-full flex items-center justify-center text-slate-600 hover:text-white transition-all"
            aria-label="Previous review"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <p className="text-slate-400 text-sm">
            {current + 1} / {reviews.length}
          </p>
          <button
            onClick={() => go(1)}
            className="w-12 h-12 bg-slate-100 hover:bg-titan-accent border border-slate-200 hover:border-titan-accent rounded-full flex items-center justify-center text-slate-600 hover:text-white transition-all"
            aria-label="Next review"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        <div className="text-center mt-6">
          <a
            href="https://www.google.com/maps/place/Pressure+Titans/@44.9833485,-93.719369,9z/data=!4m8!3m7!1s0x68ba74e0c3bd65e5:0xf5e2288cbaada241!8m2!3d44.9833485!4d-93.719369!9m1!1b1!16s%2Fg%2F11y3v6bwts?entry=ttu&g_ep=EgoyMDI2MDIwOC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-titan-accent border border-slate-900 hover:border-titan-accent text-white font-semibold px-8 py-4 rounded-xl transition-all"
          >
            See All Reviews
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
