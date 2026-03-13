"use client";

import Image from "next/image";
import Link from "next/link";

const partners = [
  {
    name: "Oil and Water Decks",
    logo: "/images/partners/oil-and-water-decks.png",
    href: "https://www.oilandwaterdecks.com/",
  },
  {
    name: "Shine Window Cleaning",
    logo: "/images/partners/shine-window-cleaning.png",
    href: "https://shine-windowcleaning.com/location/Minnetonka/",
  },
  {
    name: "Silver Pines Construction",
    logo: "/images/partners/silver-pines-construction.png",
    href: "https://www.silverpinesconstruction.com/",
  },
  {
    name: "Freshwater Landscaping",
    logo: "/images/partners/freshwater-landscaping.png",
    href: "https://freshwaterlandscaping.com/",
  },
];

// Triple for seamless infinite scroll (animate -33.33% = exactly one set)
const allPartners = [...partners, ...partners, ...partners];

export default function PartnersSection() {
  return (
    <section className="py-16 sm:py-20 bg-navy overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <p className="text-titan-light font-semibold uppercase tracking-widest text-sm mb-3">
          Trusted Network
        </p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
          Our Partners
        </h2>
        <p className="text-white/60 mt-3 max-w-xl mx-auto">
          We work alongside trusted local businesses to deliver complete solutions for your home and property.
        </p>
      </div>

      {/* Scrolling track */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-navy to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-navy to-transparent z-10 pointer-events-none" />

        <div className="flex animate-partners-scroll" style={{ width: "max-content" }}>
          {allPartners.map((partner, i) => (
            <Link
              key={`${partner.name}-${i}`}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 mx-6 group"
              aria-label={partner.name}
            >
              <div className="bg-white/8 border border-white/10 rounded-2xl px-10 py-6 w-56 h-28 flex items-center justify-center group-hover:bg-white/15 group-hover:border-titan-accent/50 transition-all duration-300">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={160}
                  height={80}
                  className="max-h-16 w-auto object-contain brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes partners-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-partners-scroll {
          animation: partners-scroll 20s linear infinite;
          will-change: transform;
        }
        .animate-partners-scroll:hover {
          animation-play-state: paused;
        }
        .bg-white\/8 {
          background-color: rgb(255 255 255 / 0.08);
        }
      `}</style>
    </section>
  );
}

// Compact version for footer use
export function PartnersFooterStrip() {
  return (
    <div className="py-8 border-t border-slate-700">
      <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest text-center mb-6">
        Our Partners
      </p>
      <div className="flex flex-wrap justify-center items-center gap-6">
        {partners.map((partner) => (
          <Link
            key={partner.name}
            href={partner.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={partner.name}
            className="opacity-60 hover:opacity-100 transition-opacity duration-300"
          >
            <Image
              src={partner.logo}
              alt={partner.name}
              width={120}
              height={50}
              className="max-h-10 w-auto object-contain brightness-0 invert"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
