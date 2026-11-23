import Image from "next/image";
import { crumbs, serviceExtra } from "@/lib/seoExtras";
import { PHONE, TEL } from "./phone";
import { Nav } from "./Nav";
import { Snow } from "./Snow";
import { Bulb } from "./Bulb";
import { Work } from "./Work";
import { GoogleReviews } from "./GoogleReviews";
import { Faq } from "./Faq";
import { Close } from "./Close";
import { SiteFooter } from "./SiteFooter";
import { JsonLd } from "./JsonLd";

export type WashCfg = {
  slug: string;
  badge: string;
  h1a: string;
  sub: string;
  itemsTitle: string;
  itemsSub: string;
  items: { name: string; detail: string }[];
  galleryEyebrow?: string;
  galleryTitle?: string;
  gallerySub?: string;
  gallery?: { src: string; alt: string; label?: string }[];
  why?: { title: string; text: string; benefits: string[]; cta: string };
  processSub: string;
  steps: { step: number; title: string; description: string }[];
  pricingTitle: string;
  p1: string;
  p2: string;
  factors: string[];
  faqTitle: string;
  faqSub: string;
  faqs: { q: string; a: string }[];
  ctaTitle: string;
  ctaText: string;
  crumb: { name: string; path: string };
  serviceLd?: object;
};

const sec = "max-w-[1200px] mx-auto px-5 md:px-10";
const h2 = "text-[9vw] md:text-[3.6vw] leading-[1.04] tracking-[-0.035em] font-medium";
const lead = "mt-5 text-xl md:text-2xl text-bone/90 leading-relaxed max-w-[52ch]";
const h3 = "text-2xl md:text-[1.8vw] leading-[1.15] tracking-[-0.02em] font-medium";
const btn = "inline-block rounded-full bg-glow text-navy text-xl font-medium px-8 py-4 hover:bg-bone transition-colors active:scale-[0.98]";
const btn2 = "inline-block rounded-full border border-bone/40 bg-bone/10 text-xl px-8 py-4 hover:bg-bone/20 transition-colors";

/** One washing/service page in the winter look: lighting leads, the page's own washing content stays complete below. */
export function WashService({ cfg }: { cfg: WashCfg }) {
  const all = [...cfg.faqs, ...serviceExtra.map((f) => ({ q: f.question, a: f.answer }))];
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: all.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  const ld: object[] = [faqSchema];
  if (cfg.serviceLd) ld.push(cfg.serviceLd);
  ld.push(crumbs([{ name: "Home", path: "/" }, cfg.crumb]));

  return (
    <>
      <JsonLd data={ld} />
      <Nav />
      <main>
        <section className="relative overflow-hidden bg-night text-bone pt-32 md:pt-40 pb-16 md:pb-24">
          <Snow className="absolute inset-0 w-full h-full pointer-events-none" count={60} />
          <div className={`relative z-10 ${sec}`}>
            <p className="text-lg md:text-xl tracking-[0.06em] uppercase text-bone/95 mb-5">{cfg.badge}</p>
            <h1 className="text-[10.5vw] md:text-[5.8vw] leading-[0.98] tracking-[-0.04em] font-medium max-w-[18ch]">
              {cfg.h1a}
              <span className="block font-serif italic font-normal warm pr-[0.16em]">Minneapolis, MN</span>
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-bone/95 leading-relaxed max-w-[44ch]">{cfg.sub}</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="/contact" className={btn}>Get a Free Estimate</a>
              <a href={TEL} className={btn2}>{PHONE}</a>
            </div>
          </div>
        </section>

        <Work />

        <section className="bg-navy py-14 md:py-20">
          <div className={sec}>
            <h2 className={h2}>Holiday lighting <span className="font-serif italic font-normal warm">leads our winter season.</span></h2>
            <p className={lead}>Holiday lighting starting at $650.</p>
            <a href="/services/holiday-lighting" className={`mt-8 ${btn}`}>See holiday lighting</a>
          </div>
        </section>

        <GoogleReviews />

        <section className="bg-night py-16 md:py-24">
          <div className={sec}>
            <h2 className={h2}>{cfg.itemsTitle}</h2>
            <p className={lead}>{cfg.itemsSub}</p>
            <ul className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {cfg.items.map((it) => (
                <li key={it.name} className="rounded-2xl border border-bone/15 bg-navy p-6 md:p-9">
                  <div className="flex items-start gap-3">
                    <Bulb upright on className="w-[18px] shrink-0 mt-1.5" />
                    <h3 className={h3}>{it.name}</h3>
                  </div>
                  <p className="mt-3 text-lg md:text-xl text-bone/85 leading-relaxed">{it.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {cfg.why && (
          <section className="bg-navy py-16 md:py-24">
            <div className={sec}>
              <h2 className={h2}>{cfg.why.title}</h2>
              <p className={lead}>{cfg.why.text}</p>
              <ul className="mt-8 space-y-3 max-w-[52ch]">
                {cfg.why.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-xl text-bone/90"><Bulb upright on className="w-[18px] shrink-0 mt-1.5" />{b}</li>
                ))}
              </ul>
              <a href="/contact" className={`mt-10 ${btn}`}>{cfg.why.cta}</a>
            </div>
          </section>
        )}

        {cfg.gallery && (
          <section className="bg-navy py-16 md:py-24">
            <div className={sec}>
              {cfg.galleryEyebrow && <p className="text-lg md:text-xl tracking-[0.06em] uppercase text-bone/95 mb-4">{cfg.galleryEyebrow}</p>}
              <h2 className={h2}>{cfg.galleryTitle}</h2>
              <p className={lead}>{cfg.gallerySub}</p>
              <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                {cfg.gallery.map((g) => (
                  <figure key={g.src} className="rounded-2xl border border-bone/15 bg-night p-3">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-night">
                      <Image src={g.src} alt={g.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
                    </div>
                    {g.label && (
                      <figcaption className="mt-3 px-1 text-lg text-bone/90 text-center">
                        {g.label}
                        <span className="text-bone/70"> &mdash; Before &amp; After</span>
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="bg-night py-16 md:py-24">
          <div className={sec}>
            <h2 className={h2}>Our <span className="font-serif italic font-normal warm">Process</span></h2>
            <p className={lead}>{cfg.processSub}</p>
            <ol className="mt-12 grid md:grid-cols-2 gap-x-14 gap-y-12">
              {cfg.steps.map((s) => (
                <li key={s.step} className="flex gap-5">
                  <span className="font-serif italic text-[14vw] md:text-[5vw] leading-[0.9] warm shrink-0 w-[1.1em]">{s.step}</span>
                  <div>
                    <h3 className={h3}>{s.title}</h3>
                    <p className="mt-2 text-lg md:text-xl text-bone/85 leading-relaxed">{s.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-navy py-16 md:py-24">
          <div className={`${sec} grid md:grid-cols-12 gap-10 md:gap-16`}>
            <div className="md:col-span-6">
              <h2 className={h2}>{cfg.pricingTitle}</h2>
              <p className={lead}>{cfg.p1}</p>
              <p className={lead}>{cfg.p2}</p>
              <a href="/contact" className={`mt-8 ${btn}`}>Request Your Free Quote</a>
            </div>
            <div className="md:col-span-6 rounded-2xl border border-bone/15 bg-night p-6 md:p-9 self-start">
              <h3 className="text-2xl md:text-3xl font-medium tracking-[-0.02em]">Factors That Affect Your Price</h3>
              <ul className="mt-6 space-y-3">
                {cfg.factors.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-xl text-bone/90"><Bulb upright on className="w-[18px] shrink-0 mt-1.5" />{f}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-night pt-16 md:pt-24">
          <div className={sec}>
            <h2 className={h2}>{cfg.faqTitle}</h2>
            <p className={lead}>{cfg.faqSub}</p>
          </div>
        </section>
        <Faq items={all} />

        <section className="bg-night py-16 md:py-24">
          <div className={sec}>
            <h2 className={h2}>{cfg.ctaTitle}</h2>
            <p className={lead}>{cfg.ctaText}</p>
            <p className="mt-4 text-xl text-bone/85">Call, text, or fill out our form. We respond within 24 hours — usually sooner.</p>
            <p className="mt-4 text-lg text-bone/85">
              Or email us at{" "}
              <a href="mailto:pressuretitans@gmail.com" className="text-glow underline">pressuretitans@gmail.com</a>
            </p>
          </div>
        </section>
      </main>
      <Close />
      <SiteFooter />
    </>
  );
}
