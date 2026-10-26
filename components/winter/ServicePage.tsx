import Image from "next/image";
import { PHONE, TEL } from "./phone";
import { Nav } from "./Nav";
import { Snow } from "./Snow";
import { Bulb } from "./Bulb";
import { Colors } from "./Colors";
import { GoogleReviews } from "./GoogleReviews";
import { Faq } from "./Faq";
import { Areas } from "./Areas";
import { Close } from "./Close";
import { SiteFooter } from "./SiteFooter";
import { BASE, LIVE } from "./siteData";
import type { Cfg } from "./services";
import { Fragment } from "react";
import { SeoSections } from "./SeoSections";
import { JsonLd } from "./JsonLd";
import { blocks, faqsFor, jsonLd, descFor } from "./seo";

const rise = (i: number): React.CSSProperties => ({ animationDelay: `${0.08 + i * 0.09}s` });
const sec = "max-w-[1200px] mx-auto px-5 md:px-10";
const h2 = "text-[9vw] md:text-[3.6vw] leading-[1.04] tracking-[-0.035em] font-medium";
const lead = "mt-5 text-xl md:text-2xl text-bone/90 leading-relaxed max-w-[52ch]";

/** A lighting service page in the winter look, built from the live service page's real copy. */
export function ServicePage({ cfg }: { cfg: Cfg }) {
  const commercial = cfg.slug.startsWith("commercial");
  const faqs = commercial ? [faqsFor(undefined, true)[1], ...(cfg.faqs ?? [])] .map((f) => ("q" in f ? f : f)) : faqsFor();
  const ld = jsonLd({ name: commercial ? "Commercial Christmas light installation" : "Christmas light installation", description: commercial ? descFor.commercial : descFor.holiday, url: `${LIVE}/services/${cfg.slug}`, faqs });
  return (
    <>
      <JsonLd data={ld} />
      <Nav />
      <main>
        <section className="relative min-h-[100svh] overflow-hidden flex items-center bg-night text-bone">
          <video autoPlay muted loop playsInline preload="auto" poster="/winter/hero-poster.jpg" aria-hidden className="absolute inset-0 w-full h-full object-cover object-[50%_55%]">
            <source src="/winter/hero.mp4" type="video/mp4" />
          </video>
          <div aria-hidden className="absolute inset-0" style={{ background: "rgba(5,10,20,0.40)" }} />
          <Snow className="absolute inset-0 w-full h-full z-[3] pointer-events-none" count={80} />
          <div className="relative z-10 w-full max-w-[1400px] mx-auto px-5 md:px-10 pt-36 pb-20">
            <p className="text-lg md:text-xl tracking-[0.06em] uppercase text-bone/95 mb-5">{cfg.kicker}</p>
            <h1 className="text-[10.5vw] md:text-[5.8vw] leading-[0.98] tracking-[-0.04em] font-medium max-w-[18ch]">
              {cfg.h1.map((w, k) => (
                <Fragment key={w}><span className="inline-block overflow-hidden align-bottom pb-[0.1em]"><span className="rise inline-block" style={rise(k)}>{w}</span></span>{" "}</Fragment>
              ))}
              <span className="block overflow-hidden pb-[0.12em] pr-[0.16em]"><span className="rise inline-block font-serif italic font-normal warm hero-glow" style={rise(cfg.h1.length)}>{cfg.accent}</span></span>
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-bone/95 leading-relaxed max-w-[44ch]">{cfg.sub}</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="/contact" className="rounded-full bg-glow text-navy text-xl font-medium px-8 py-4 hover:bg-bone transition-colors active:scale-[0.98]">{cfg.quoteLabel}</a>
              <a href={TEL} className="hidden md:inline-block rounded-full border border-bone/40 bg-bone/10 backdrop-blur-md text-xl px-8 py-4 hover:bg-bone/20 transition-colors">{PHONE}</a>
            </div>
          </div>
        </section>

        <section className="bg-night py-16 md:py-24">
          <div className={`${sec} grid md:grid-cols-12 gap-10 md:gap-16 items-center`}>
            <div className="md:col-span-7">
              <h2 className={h2}>{cfg.introTitle} <span className="font-serif italic font-normal warm">{cfg.introAccent}</span></h2>
              {cfg.intro.map((t) => <p key={t} className={lead}>{t}</p>)}
              {cfg.introList && (
                <>
                  <h3 className="mt-10 text-2xl md:text-3xl font-medium tracking-[-0.02em]">{cfg.introList.title}</h3>
                  <ul className="mt-5 grid sm:grid-cols-2 gap-x-8 gap-y-3">
                    {cfg.introList.items.map((it) => (
                      <li key={it} className="flex items-start gap-3 text-xl text-bone/90"><Bulb upright on className="w-[18px] shrink-0 mt-1" />{it}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
            <div className="md:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-night">
                <Image src={cfg.photo} alt={commercial ? "Commercial Christmas light installation near me by Pressure Titans" : "Christmas light installation near me: a house lit by Pressure Titans"} fill sizes="(max-width: 768px) 100vw, 40vw" className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-navy py-16 md:py-24">
          <div className={sec}>
            <h2 className={h2}>{cfg.includedTitle}</h2>
            <p className={lead}>{cfg.includedSub}</p>
            <ul className="mt-12 grid md:grid-cols-2 gap-x-14 gap-y-10">
              {cfg.included.map((it) => (
                <li key={it.name} className="flex items-start gap-4">
                  <Bulb upright on className="w-[24px] md:w-[28px] shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl md:text-[1.8vw] leading-[1.15] tracking-[-0.02em] font-medium">{it.name}</h3>
                    <p className="mt-2 text-lg md:text-xl text-bone/85 leading-relaxed">{it.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {cfg.why && (
          <section className="bg-night py-16 md:py-24">
            <div className={sec}>
              <h2 className={h2}>{cfg.why.title}</h2>
              <div className="mt-12 grid md:grid-cols-2 gap-x-14 gap-y-10">
                {cfg.why.items.map((it) => (
                  <div key={it.title} className="border-t border-bone/20 pt-6">
                    <h3 className="text-2xl md:text-[1.8vw] leading-[1.15] tracking-[-0.02em] font-medium"><span className="font-serif italic font-normal warm">{it.title}</span></h3>
                    <p className="mt-3 text-lg md:text-xl text-bone/85 leading-relaxed">{it.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="bg-navy py-16 md:py-24">
          <div className={sec}>
            <h2 className={h2}>{cfg.galleryTitle}</h2>
            <p className={lead}>{cfg.gallerySub}</p>
            <div className="mt-12 grid grid-cols-2 gap-3 md:gap-5">
              {[1, 2, 3, 4].map((n) => (
                <div key={n} className="relative aspect-[4/5] md:aspect-[4/3] overflow-hidden rounded-xl bg-night">
                  <Image src={`/winter/work-${n}.webp`} alt={`${commercial ? "Commercial holiday lighting" : "Holiday lighting for house"} installed by Pressure Titans, project ${n}`} fill sizes="(max-width: 768px) 50vw, 560px" className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-night py-16 md:py-24">
          <div className={sec}>
            <h2 className={h2}>{cfg.processTitle}</h2>
            <p className={lead}>{cfg.processSub}</p>
            <ol className="mt-12 grid md:grid-cols-2 gap-x-14 gap-y-12">
              {cfg.process.map((s, i) => (
                <li key={s.title} className="flex gap-5">
                  <span className="font-serif italic text-[14vw] md:text-[5vw] leading-[0.9] warm shrink-0 w-[1.1em]">{i + 1}</span>
                  <div>
                    <h3 className="text-2xl md:text-[1.8vw] leading-[1.15] tracking-[-0.02em] font-medium">{s.title}</h3>
                    <p className="mt-2 text-lg md:text-xl text-bone/85 leading-relaxed">{s.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {cfg.pricing && (
          <section className="bg-navy py-16 md:py-24">
            <div className={`${sec} grid md:grid-cols-12 gap-10 md:gap-16`}>
              <div className="md:col-span-6">
                <h2 className={h2}>{cfg.pricing.title}</h2>
                <p className={lead}>{cfg.pricing.text}</p>
                <a href="/contact" className="mt-8 inline-block rounded-full bg-glow text-navy text-xl font-medium px-8 py-4 hover:bg-bone transition-colors active:scale-[0.98]">Request your free quote</a>
              </div>
              <div className="md:col-span-6">
                <p className="text-xl md:text-2xl text-bone/90 leading-relaxed">{cfg.pricing.sub}</p>
                <ul className="mt-6 space-y-3">
                  {cfg.pricing.factors.map((f) => <li key={f} className="flex items-start gap-3 text-xl text-bone/90"><Bulb upright on className="w-[18px] shrink-0 mt-1" />{f}</li>)}
                </ul>
              </div>
            </div>
          </section>
        )}

        <Colors />
        <GoogleReviews />
        <Faq items={faqs} />
        <SeoSections list={blocks(undefined, commercial ? "commercial" : "holiday")} tint="bg-night" />
        <Areas />
      </main>
      <Close />
      <SiteFooter />
      
    </>
  );
}
