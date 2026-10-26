import { Fragment } from "react";
import { PHONE, TEL } from "./phone";
import { Nav } from "./Nav";
import { Snow } from "./Snow";
import { Bulb } from "./Bulb";
import { Included } from "./Included";
import { Colors } from "./Colors";
import { GoogleReviews } from "./GoogleReviews";
import { Faq } from "./Faq";
import { Areas } from "./Areas";
import { Close } from "./Close";
import { SiteFooter } from "./SiteFooter";
import { CITIES, LIVE, cityHref } from "./siteData";
import { Lighting } from "./Lighting";
import { getLightingCity } from "./cityData";
import { SeoSections } from "./SeoSections";
import { JsonLd } from "./JsonLd";
import { blocks, faqsFor, jsonLd, descFor } from "./seo";

const rise = (i: number): React.CSSProperties => ({ animationDelay: `${0.08 + i * 0.09}s` });

/**
 * A city page in Variant B: Christmas lights first. Same winter look as the homepage; the city name leads the headline and
 * the copy. The sections below are the same real content the homepage uses, so the page reads the same everywhere.
 */
export function CityPage({ slug }: { slug: string }) {
  const i = CITIES.findIndex((c) => c.s === slug);
  const city = CITIES[i].n;
  const data = getLightingCity(slug);
  const nearby = (data?.nearby ?? []).map((n) => CITIES.find((c) => c.s === n)).filter(Boolean) as { n: string; s: string }[];
  const near = nearby.length >= 3 ? nearby.map((c) => c.n) : [1, 2, 3].map((k) => CITIES[(i + k) % CITIES.length].n);
  const words = ["Christmas", "light", "installation", "in"];
  const faqs = faqsFor(city);
  const ld = jsonLd({ name: `Christmas light installation in ${city}, MN`, description: descFor.city(city), url: `${LIVE}${cityHref(slug)}`, area: city, faqs });

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
            <p className="text-lg md:text-xl tracking-[0.06em] uppercase text-bone/95 mb-5">Serving {city}, MN</p>
            <h1 className="text-[11vw] md:text-[6.4vw] leading-[0.98] tracking-[-0.04em] font-medium max-w-[16ch]">
              {words.map((w, k) => (
                <Fragment key={w}><span className="inline-block overflow-hidden align-bottom pb-[0.1em]"><span className="rise inline-block" style={rise(k)}>{w}</span></span>{" "}</Fragment>
              ))}
              <span className="block overflow-hidden pb-[0.12em] pr-[0.16em]"><span className="rise inline-block font-serif italic font-normal warm hero-glow" style={rise(5)}>{city}.</span></span>
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-bone/95 leading-relaxed max-w-[40ch]">Design, installation, season-long maintenance and takedown for homes and businesses in {city}, done by our crew.</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="/contact" className="rounded-full bg-glow text-navy text-xl font-medium px-8 py-4 hover:bg-bone transition-colors active:scale-[0.98]">Get a free quote</a>
              <a href={TEL} className="hidden md:inline-block rounded-full border border-bone/40 bg-bone/10 backdrop-blur-md text-xl px-8 py-4 hover:bg-bone/20 transition-colors">{PHONE}</a>
            </div>
          </div>
        </section>


        <Lighting />
        <Included />
        <Colors />
        <GoogleReviews />
        <Faq items={faqs} />
        <SeoSections list={blocks(city, "city")} />
        <Areas current={slug} />

        <section className="bg-night py-16 md:py-24">
          <div className="max-w-[1000px] mx-auto px-5 md:px-10">
            <h2 className="text-[8.4vw] md:text-[3.2vw] leading-[1.05] tracking-[-0.03em] font-medium">Christmas lights for {city}, <span className="font-serif italic font-normal warm">start to finish.</span></h2>
            <div className="mt-8 space-y-5 text-xl md:text-2xl leading-relaxed text-bone/90">
              <p>Pressure Titans designs, installs, maintains and takes down Christmas lights for homes and businesses in {city}, Minnesota. Our crew handles every ladder, clip and connection. We provide the lights, clips, extension cords, timers and all hardware, so you do not lift a finger.</p>
              <p>Installation, maintenance and takedown are one quote, with a detailed breakdown before we start. If a bulb burns out or a strand comes loose during the season, we come back and fix it at no extra charge. After the holidays we take everything down, and we can store your lights for next year.</p>
              {data && <p>{data.intro}</p>}
              <p>We also install in {near.slice(0, 3).join(", ")} and across the west metro. Book in September or October for the widest choice of dates.</p>
            </div>
            {data && (
              <>
                <h3 className="mt-12 text-2xl md:text-3xl font-medium tracking-[-0.02em]">Homes and properties we light in {city}</h3>
                <ul className="mt-5 grid sm:grid-cols-2 gap-x-8 gap-y-3">
                  {data.spots.map((sp) => <li key={sp} className="flex items-start gap-3 text-xl text-bone/90"><Bulb upright on className="w-[18px] shrink-0 mt-1" />{sp}</li>)}
                </ul>
              </>
            )}
            {nearby.length > 0 && (
              <p className="mt-10 text-xl text-bone/90">Also near {city}:{" "}
                {nearby.map((c, k) => <span key={c.s}><a href={cityHref(c.s)} className="underline underline-offset-4 decoration-bone/40 hover:text-glow hover:decoration-glow transition-colors">Christmas lights in {c.n}</a>{k < nearby.length - 1 ? ", " : "."}</span>)}
              </p>
            )}
          </div>
        </section>
      </main>
      <Close />
      <SiteFooter />
      
    </>
  );
}

export const cityLink = cityHref;
