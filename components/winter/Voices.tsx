"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { LightString } from "./LightString";

gsap.registerPlugin(ScrollTrigger);

/** Real Google reviews, word for word, from pressuretitans.com. No invented numbers, no invented awards. */
const REVIEWS = [
  { n: "Randy O.", t: "We are absolutely thrilled with the holiday lighting purchased through and installed by Pressure Titans!! Michael's quality of work and attention to detail is outstanding." },
  { n: "Kali O.", t: "Michael was wonderful! He soft washed the exterior of my house, cleaned my gutters, AND hung Christmas lights! Easy to work with, flexible, timely, and does a wonderful job." },
  { n: "Clare K.", t: "Michael placed Christmas lights on our house this year for the holiday season. He was very professional and knowledgeable. Very happy with how everything turned out!! Highly recommend!!" },
  { n: "Tiffany B.", t: "Michael did an amazing job the before and after was evident! He was thorough and timely. His level of customer service was above and beyond." },
  { n: "Susan O.", t: "Michael was so fantastic! He listened to my concerns and followed through on everything! Our house looks amazing. I highly recommend Pressure Titans!" },
  { n: "Jesse P.", t: "Did a great job on our gutters. Worked me in next day, communicated, sent pictures, very easy to work with. Would definitely use again." },
  { n: "Abe K.", t: "Pressure Titans did a great job soft washing the exterior sidings of my home. They were professional, prompt, explained the process, and took care in cleaning up." },
  { n: "Michael B.", t: "I heard someone talking about how great of a job they did and how fair the price was. I'll admit I was a bit nervous but they exceeded every expectation." },
  { n: "Jay J.", t: "Michael did a great job power washing my deck and patio. Really appreciate the extra time he took on the railings and wiping down the windows. Top notch!" },
  { n: "Tim R.", t: "We had Michael come over today and clean our gutters and we could NOT be happier. He was prompt, courteous, and his work was impeccable!" },
  { n: "Kathy P.", t: "I feel like we have all new siding! Every single spot gone! Gave great care to items close to the house. Highly recommend!" },
];
const GOOGLE_URL = "https://www.google.com/maps/place/Pressure+Titans/@44.9833485,-93.719369,9z/data=!4m8!3m7!1s0x68ba74e0c3bd65e5:0xf5e2288cbaada241!8m2!3d44.9833485!4d-93.719369!9m1!1b1!16s%2Fg%2F11y3v6bwts";

function Stars() {
  return (
    <span className="flex gap-[3px]" role="img" aria-label="5 out of 5 stars">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 24 24" aria-hidden><path fill="#fbbc04" d="M12 2.2l2.9 6.2 6.8.8-5 4.7 1.3 6.7L12 17.1 6 20.6l1.3-6.7-5-4.7 6.8-.8L12 2.2z" /></svg>
      ))}
    </span>
  );
}

/** The Google "G" mark, so each card reads as a Google review and not a random quote. */
function GoogleG() {
  return (
    <svg width="26" height="26" viewBox="0 0 48 48" aria-hidden>
      <path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9.1 3.6l6.8-6.8C35.8 2.4 30.3 0 24 0 14.6 0 6.5 5.4 2.6 13.2l7.9 6.1C12.4 13.6 17.7 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.7c-.6 3-2.3 5.5-4.8 7.2l7.5 5.8c4.4-4.1 7.1-10.1 7.1-17.5z" />
      <path fill="#FBBC05" d="M10.5 28.7c-.5-1.5-.8-3.1-.8-4.7s.3-3.2.8-4.7l-7.9-6.1C.9 16.4 0 20.1 0 24s.9 7.6 2.6 10.8l7.9-6.1z" />
      <path fill="#34A853" d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.5-5.8c-2.1 1.4-4.8 2.3-8.4 2.3-6.3 0-11.6-4.2-13.5-9.9l-7.9 6.1C6.5 42.6 14.6 48 24 48z" />
    </svg>
  );
}

const ROW_A = REVIEWS.slice(0, 6);
const ROW_B = REVIEWS.slice(6);

function Rail({ items, reverse }: { items: typeof REVIEWS; reverse?: boolean }) {
  return (
    <div className="overflow-hidden" style={{ maskImage: "linear-gradient(to right, transparent, #000 6%, #000 94%, transparent)" }}>
      <div className={`marq flex w-max gap-5 ${reverse ? "marq-rev" : ""}`}>
        {[0, 1].map((d) => (
          <div key={d} className="flex gap-5" aria-hidden={d === 1}>
            {items.map((r) => (
              <a
                key={r.n + d}
                href={GOOGLE_URL}
                target="_blank" rel="noopener noreferrer"
                aria-label={`${r.n}, five-star Google review. Opens Pressure Titans on Google Maps.`}
                tabIndex={d === 1 ? -1 : 0}
                className="block w-[78vw] md:w-[430px] shrink-0 rounded-xl border border-bone/12 bg-night/60 p-6 md:p-8 hover:border-glow/50 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <Stars />
                  <GoogleG />
                </div>
                <blockquote className="text-base md:text-lg text-bone/90 leading-relaxed">&ldquo;{r.t}&rdquo;</blockquote>
                <p className="text-sm tracking-[0.1em] text-bone/75 mt-5">{r.n} &nbsp;/&nbsp; <span className="text-bone/90">Google review</span></p>
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Voices() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.to(".vo-up", { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 72%" } });
  }, { scope: ref });

  return (
    <section ref={ref} id="reviews" className="relative bg-navy pb-20 md:pb-28 pt-4 overflow-hidden">
      <LightString onScroll className="w-full h-[70px] md:h-[100px]" />
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 mt-14 md:mt-20">
        <h2 data-hide className="vo-up text-[10vw] md:text-[4.2vw] leading-[1.04] tracking-[-0.035em] font-medium max-w-[18ch] mb-10 md:mb-14" style={{ opacity: 0, transform: "translateY(26px)" }}>
          From the people <span className="font-serif italic warm">we work for.</span>
        </h2>
      </div>
      <div data-hide className="vo-up space-y-5" style={{ opacity: 0, transform: "translateY(26px)" }}>
        <Rail items={ROW_A} />
        <Rail items={ROW_B} reverse />
      </div>
    </section>
  );
}
