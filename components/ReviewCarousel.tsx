"use client";

import { useState, useEffect } from "react";

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

export default function ReviewCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mt-10 max-w-xl">
      {/* Stars + badge */}
      <div className="flex items-center gap-3 mb-4">
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <span className="text-white/70 text-sm font-medium">
          25+ Reviews &middot; Perfect 5-Star Rating
        </span>
      </div>

      {/* Review text — all reviews rendered in a grid stack so the container
          always matches the tallest review. Only the active one is visible. */}
      <div className="relative grid">
        {reviews.map((review, i) => (
          <div
            key={i}
            className="col-start-1 row-start-1 transition-opacity duration-500"
            style={{ opacity: i === current ? 1 : 0 }}
            aria-hidden={i !== current}
          >
            <p className="text-white/80 text-sm sm:text-base leading-relaxed italic">
              &ldquo;{review.text}&rdquo;
            </p>
            <p className="text-white/60 text-sm mt-3 font-medium">
              — {review.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
