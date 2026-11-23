import Image from "next/image";
import { PHONE, TEL } from "./phone";
import { Nav } from "./Nav";
import { Snow } from "./Snow";
import { GoogleReviews } from "./GoogleReviews";
import { Faq } from "./Faq";
import { Close } from "./Close";
import { SiteFooter } from "./SiteFooter";
import { JsonLd } from "./JsonLd";
import { HOUSES, WORK_PAIR } from "./workPhotos";
import { faqsFor } from "./seo";
import { projects } from "@/lib/portfolioProjects";
import { crumbs, faqLd } from "@/lib/seoExtras";
import VideoCarousel from "@/components/VideoCarousel";

const h2 = "text-[9vw] md:text-[3.6vw] leading-[1.04] tracking-[-0.035em] font-medium";
const sec = "max-w-[1200px] mx-auto px-5 md:px-10";

/**
 * Portfolio in Variant B: holiday lighting first (every one of Mike's lighting photos, each once), then the washing,
 * deck and gutter before and afters, then the videos. Same dark look as the rest of the winter site.
 */
export function WinterPortfolio() {
  const faqs = faqsFor();
  return (
    <>
      <JsonLd data={[faqLd(faqs.map((f) => ({ question: f.q, answer: f.a }))), crumbs([{ name: "Home", path: "/" }, { name: "Portfolio", path: "/portfolio" }])]} />
      <Nav />
      <main>
        <section className="relative overflow-hidden bg-night text-bone pt-36 md:pt-44 pb-16 md:pb-24">
          <Snow className="absolute inset-0 w-full h-full pointer-events-none" count={60} />
          <div className={`relative z-10 ${sec}`}>
            <p className="text-lg md:text-xl tracking-[0.06em] uppercase text-bone/95 mb-5">Portfolio</p>
            <h1 className="text-[11vw] md:text-[6vw] leading-[0.98] tracking-[-0.04em] font-medium max-w-[16ch]">
              Holiday lighting, <span className="font-serif italic font-normal warm hero-glow">installed.</span>
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-bone/95 leading-relaxed max-w-[44ch]">Real Christmas light installs by Pressure Titans across the Twin Cities. Every photo is one of our own jobs.</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="/contact" className="rounded-full bg-glow text-navy text-xl font-medium px-8 py-4 hover:bg-bone transition-colors active:scale-[0.98]">Get a free quote</a>
              <a href={TEL} className="hidden md:inline-block rounded-full border border-bone/40 bg-bone/10 backdrop-blur-md text-xl px-8 py-4 hover:bg-bone/20 transition-colors">{PHONE}</a>
            </div>
          </div>
        </section>

        <section className="bg-night pb-20 md:pb-28">
          <div className={sec}>
            <h2 className={h2}>Holiday lighting <span className="font-serif italic font-normal warm">gallery.</span></h2>
            <p className="mt-5 text-xl md:text-2xl text-bone/90 leading-relaxed max-w-[52ch]">Rooflines, wrapped trees and full-property displays. Warm white, purple and white, red and amber.</p>
            {/* justified rows: every row the same height and edge to edge, each photo as wide as its own shape (same-house photos stay in sequence) */}
            <div className="mt-10 md:mt-14 flex flex-wrap gap-2 md:gap-3 [--h:105px] sm:[--h:200px] md:[--h:260px] after:content-[''] after:grow-[1000]">
              {[...HOUSES.flat(), WORK_PAIR].map((p, i) => (
                <figure key={p.src} className="relative overflow-hidden rounded-xl bg-navy" style={{ flexGrow: p.w / p.h, flexBasis: `calc(var(--h) * ${(p.w / p.h).toFixed(3)})` }}>
                  <div style={{ paddingBottom: `${((p.h / p.w) * 100).toFixed(2)}%` }} />
                  <Image src={p.src} alt={p.alt} fill sizes="(max-width: 768px) 60vw, 480px" priority={i < 4} className="object-cover" />
                </figure>
              ))}
            </div>
          </div>
        </section>

        <GoogleReviews />

        <section className="bg-navy py-20 md:py-28">
          <div className={sec}>
            <p className="text-base md:text-lg tracking-[0.14em] uppercase text-glow">The rest of the year</p>
            <h2 className={`mt-3 ${h2}`}>Washing and <span className="font-serif italic font-normal warm">restoration.</span></h2>
            <p className="mt-5 text-xl md:text-2xl text-bone/90 leading-relaxed max-w-[52ch]">Before and after results on driveways, decks, siding, walkways and gutters. The same crew, the same care.</p>
            <div className="mt-10 md:mt-14 grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
              {projects.map((p) => (
                <figure key={p.src}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-night">
                    <Image src={p.src} alt={p.alt} fill sizes="(max-width: 1024px) 50vw, 380px" className="object-cover" />
                  </div>
                  <figcaption className="mt-3 text-base md:text-lg text-bone/85 text-center">{p.label}<span className="text-bone/50"> &mdash; Before &amp; After</span></figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-night py-20 md:py-28 overflow-hidden">
          <div className="max-w-5xl mx-auto px-5 md:px-10">
            <h2 className={`${h2} text-center`}>See us <span className="font-serif italic font-normal warm">in action.</span></h2>
            <p className="mt-5 mb-12 text-xl md:text-2xl text-bone/90 leading-relaxed text-center max-w-[52ch] mx-auto">Watch the dirt disappear in real time.</p>
            <VideoCarousel />
          </div>
        </section>

        <Faq items={faqs} />
      </main>
      <Close />
      <SiteFooter />
    </>
  );
}
