import type { ReactNode } from "react";
import Image from "next/image";
import { PHONE, TEL } from "./phone";
import { Nav } from "./Nav";
import { Snow } from "./Snow";
import { Work } from "./Work";
import { GoogleReviews } from "./GoogleReviews";
import { Close } from "./Close";
import { SiteFooter } from "./SiteFooter";

const h2 = "text-[9vw] md:text-[3.6vw] leading-[1.04] tracking-[-0.035em] font-medium";
const sec = "max-w-[1200px] mx-auto px-5 md:px-10";
const acc = "font-serif italic font-normal warm";
const card = "rounded-2xl border border-bone/15 bg-navy p-6 md:p-9";

type Stat = { value: string; label: string };
type Diff = { title: string; description: string; icon: ReactNode };
type Value = { name: string; text: string };

/** About page in Variant B: hero, holiday lighting first, then the owner story, values, numbers and what sets us apart. */
export function WinterAbout({ stats, differentiators, values }: { stats: Stat[]; differentiators: Diff[]; values: Value[] }) {
  return (
    <>
      <Nav />
      <main>
        <section className="relative overflow-hidden bg-night text-bone pt-36 md:pt-44 pb-16 md:pb-24">
          <Snow className="absolute inset-0 w-full h-full pointer-events-none" count={60} />
          <div className={`relative z-10 ${sec}`}>
            <h1 className="text-[11vw] md:text-[6vw] leading-[0.98] tracking-[-0.04em] font-medium max-w-[16ch]">
              About <span className={`${acc} hero-glow`}>Pressure Titans</span>
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-bone/95 leading-relaxed max-w-[44ch]">Built on hustle, driven by results</p>
          </div>
        </section>

        <Work eyebrow="Holiday lighting, installed by our crew" title="Our" accent="work." tint="bg-night" />

        <section className="bg-navy text-bone py-16 md:py-24">
          <div className={sec}>
            <h2 className={h2}>Holiday lighting <span className={acc}>comes first.</span></h2>
            <p className="mt-5 text-xl md:text-2xl text-bone/90 leading-relaxed max-w-[52ch]">
              Christmas lights are the lead service at Pressure Titans: design, installation, in-season repairs, takedown and storage. Holiday lighting starting at $650. The washing, gutter and exterior work below is still what we do the rest of the year.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="/services/holiday-lighting" className="rounded-full bg-glow text-navy text-xl font-medium px-8 py-4 hover:bg-bone transition-colors active:scale-[0.98]">See holiday lighting</a>
              <a href="/contact" className="rounded-full border border-bone/40 bg-bone/10 backdrop-blur-md text-xl px-8 py-4 hover:bg-bone/20 transition-colors">Get a free quote</a>
            </div>
          </div>
        </section>

        <GoogleReviews />

        <section className="bg-night text-bone py-16 md:py-28">
          <div className={`${sec} grid lg:grid-cols-2 gap-10 lg:gap-16 items-center`}>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-bone/15 bg-navy">
              <Image src="/images/team/owner.webp" alt="Michael, owner of Pressure Titans" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
            <div>
              <p className="text-lg md:text-xl tracking-[0.06em] uppercase text-bone/95 mb-4">Our Story</p>
              <h2 className={h2}>Locally Owned. <span className={acc}>Driven by Excellence.</span></h2>
              <div className="mt-6 space-y-5 text-xl text-bone/90 leading-relaxed">
                <p>Pressure Titans is a locally owned and operated pressure washing and exterior home services company based in Chanhassen, Minnesota, proudly serving Carver County and surrounding areas. Founded by a 22-year-old entrepreneur, we bring fresh energy and a strong commitment to excellence in every project.</p>
                <p>Our focus is on building lasting customer relationships through clear, constant communication — listening carefully to your needs, addressing concerns upfront, and ensuring you&apos;re completely satisfied from the free estimate to the final walkthrough.</p>
                <p>We deliver top-quality services like pressure washing, soft washing, gutter cleaning, holiday lighting installations, and more, using professional equipment and techniques to safely remove dirt, mold, mildew, algae, and buildup from driveways, decks, fences, siding, roofs, patios, and beyond — all at competitive, great-value prices.</p>
                <p>As a leader in the exterior home service industry, we partner with local landscapers, construction companies, and pest control experts to offer comprehensive, one-stop solutions for anything on the outside of your home. Whether it&apos;s a one-time deep clean or ongoing maintenance, Pressure Titans is dedicated to spotless results, reliability, and making every customer a raving fan.</p>
              </div>
              <blockquote className="mt-8 pl-6 border-l-4 border-glow">
                <p className="text-2xl md:text-3xl font-serif italic text-glow leading-snug">&ldquo;We don&apos;t cut corners — because our name is on every job.&rdquo;</p>
              </blockquote>
            </div>
          </div>
        </section>

        <section className="bg-navy text-bone py-16 md:py-28">
          <div className={sec}>
            <p className="text-lg md:text-xl tracking-[0.06em] uppercase text-bone/95 mb-4">What We Stand For</p>
            <h2 className={h2}>Our Core <span className={acc}>Values</span></h2>
            <p className="mt-5 text-xl md:text-2xl text-bone/90 leading-relaxed max-w-[52ch]">These aren&apos;t just words on a wall. They&apos;re the standards we hold ourselves to on every single job.</p>
            <div className="mt-10 grid md:grid-cols-3 gap-5">
              {values.map((v) => (
                <div key={v.name} className={card}>
                  <h3 className="text-2xl font-serif italic text-glow">{v.name}</h3>
                  <p className="mt-3 text-xl text-bone/90 leading-relaxed">{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-night text-bone py-16 md:py-28">
          <div className={sec}>
            <h2 className={h2}>The Numbers <span className={acc}>Speak</span></h2>
            <p className="mt-5 text-xl md:text-2xl text-bone/90 leading-relaxed max-w-[52ch]">Real results, earned one property at a time.</p>
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
              {stats.map((s) => (
                <div key={s.label} className={`${card} text-center`}>
                  <div className="text-4xl md:text-5xl font-medium text-glow whitespace-nowrap">{s.value}</div>
                  <div className="mt-2 text-base md:text-lg uppercase tracking-wide text-bone/80">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-navy text-bone py-16 md:py-28">
          <div className={sec}>
            <p className="text-lg md:text-xl tracking-[0.06em] uppercase text-bone/95 mb-4">The Pressure Titans Difference</p>
            <h2 className={h2}>What Sets Us <span className={acc}>Apart</span></h2>
            <p className="mt-5 text-xl md:text-2xl text-bone/90 leading-relaxed max-w-[52ch]">We don&apos;t just clean surfaces — we deliver an experience you can trust.</p>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {differentiators.map((d) => (
                <div key={d.title} className={card}>
                  <div className="w-14 h-14 rounded-2xl bg-bone/10 text-glow flex items-center justify-center mb-5">{d.icon}</div>
                  <h3 className="text-2xl font-medium">{d.title}</h3>
                  <p className="mt-3 text-lg text-bone/85 leading-relaxed">{d.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-night text-bone py-16 md:py-24">
          <div className={`${sec} text-center`}>
            <h2 className={h2}>Ready to See <span className={acc}>What We Can Do?</span></h2>
            <p className="mt-5 text-xl md:text-2xl text-bone/90 leading-relaxed max-w-[44ch] mx-auto">Get a free quote with no pressure and no obligation. Just honest pricing and results you&apos;ll love.</p>
            <div className="mt-9 flex flex-wrap gap-4 justify-center">
              <a href="/contact" className="rounded-full bg-glow text-navy text-xl font-medium px-8 py-4 hover:bg-bone transition-colors active:scale-[0.98]">Get Your Free Quote</a>
              <a href={TEL} className="rounded-full border border-bone/40 bg-bone/10 backdrop-blur-md text-xl px-8 py-4 hover:bg-bone/20 transition-colors">Call {PHONE}</a>
            </div>
          </div>
        </section>
      </main>
      <Close />
      <SiteFooter />
    </>
  );
}
