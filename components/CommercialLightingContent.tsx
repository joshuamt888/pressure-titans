import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import ReviewCarousel from "@/components/ReviewCarousel";
import StatsBar from "@/components/StatsBar";
import ScrollReveal from "@/components/ScrollReveal";
import FaqAccordion from "@/components/FaqAccordion";
import Footer from "@/components/Footer";
import { lightingCities, type LightingCity } from "@/lib/commercial-lighting-cities";
import { cityLightingPath, COMMERCIAL_LIGHTING_PATH, type FaqItem } from "@/lib/commercial-lighting-content";

interface Props {
  city?: LightingCity;
  faqs: FaqItem[];
}

const galleryImages = [
  { src: "/images/projects/newholiday1.webp", alt: "Commercial-grade Christmas light installation on a roofline by Pressure Titans" },
  { src: "/images/projects/newholiday2.webp", alt: "Professional holiday lighting display installed by Pressure Titans" },
  { src: "/images/projects/newholiday3.webp", alt: "Warm white Christmas lights installed on a building near Lake Minnetonka" },
  { src: "/images/projects/newholiday4.webp", alt: "Holiday light installation with wrapped trees and lit entrance" },
];

const included = [
  {
    name: "On-Site Design",
    detail: "We walk your property, measure rooflines and trees, and design a display that fits your brand, your building, and your budget.",
  },
  {
    name: "Commercial-Grade LEDs",
    detail: "Brighter, tougher, and far more efficient than retail strands. Built to run every night through a Minnesota winter.",
  },
  {
    name: "Professional Installation",
    detail: "Our insured crew handles every ladder, lift, clip, and connection. Your staff never leaves the ground.",
  },
  {
    name: "Timers & Photocells",
    detail: "Your display turns on at dusk and off when you want it to, automatically. Nobody has to remember to flip a switch.",
  },
  {
    name: "Season-Long Maintenance",
    detail: "Burnt bulb, loose strand, storm damage: call or text and we come back and fix it at no extra charge, all season.",
  },
  {
    name: "Takedown & Storage",
    detail: "In January we take it all down, label it, and can store it for you so next year is one phone call.",
  },
];

const whyUs = [
  {
    title: "One price, everything included",
    desc: "Design, lights, install, timers, maintenance, and takedown in a single quote. No add-ons, no surprise January invoice.",
  },
  {
    title: "Fully insured for commercial work",
    desc: "Certificate of insurance available for your property manager or landlord before we set a single ladder.",
  },
  {
    title: "Installed before the rush",
    desc: "Commercial jobs get scheduled first. Book in September or October and your display is up and tested before Thanksgiving.",
  },
  {
    title: "Same crew you already trust",
    desc: "The team that pressure washes and cleans gutters across the southwest metro all year is the team that hangs your lights.",
  },
];

const processSteps = [
  {
    step: 1,
    title: "Walkthrough & Quote",
    description:
      "We visit your property, measure everything, and send an itemized quote within a day or two. Most commercial quotes are approved by email.",
  },
  {
    step: 2,
    title: "Lock In Your Date",
    description:
      "Installs run October through mid-November. Early bookings get first pick of dates and the widest selection of lights and greenery.",
  },
  {
    step: 3,
    title: "We Install & Test",
    description:
      "Our crew arrives with everything, installs the full design, sets timers, and tests every strand before we leave. Zero disruption to your business.",
  },
  {
    step: 4,
    title: "Enjoy, Then We Take It Down",
    description:
      "Your display runs all season with maintenance included. After the holidays we take everything down and leave the building exactly as we found it.",
  },
];

export default function CommercialLightingContent({ city, faqs }: Props) {
  const cityName = city?.name ?? "Minneapolis";
  const heroLine = city ? `${city.name}, MN` : "Minneapolis & Twin Cities";
  const nearby = city ? city.nearby.map((s) => lightingCities.find((c) => c.slug === s)).filter(Boolean) as LightingCity[] : [];

  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="relative min-h-[70dvh] flex items-center bg-navy pt-20 overflow-hidden">
          <Image
            src="/images/projects/newholiday1.webp"
            alt=""
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-navy/85" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
            <div className="max-w-3xl">
              <span className="inline-block bg-titan-accent/20 text-titan-light text-sm font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
                Commercial Holiday Lighting
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                Commercial Christmas Light Installation
                <span className="block text-titan-light">{heroLine}</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed max-w-xl">
                Storefronts, offices, restaurants, HOAs, and commercial properties in {cityName}.
                We design it, install it, maintain it all season, and take it down. One quote,
                one crew, zero ladders for your staff.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-titan-accent hover:bg-titan-light text-white font-semibold px-8 py-4 rounded-lg text-center text-lg transition-colors"
                >
                  Get a Commercial Quote
                </Link>
                <a
                  href="tel:6125548106"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold px-8 py-4 rounded-lg text-center text-lg transition-colors"
                >
                  (612) 554-8106
                </a>
              </div>
              <ReviewCarousel />
            </div>
          </div>
        </section>

        <StatsBar />

        {/* Local intro */}
        <section className="py-20 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <ScrollReveal animation="fade-right">
                  <p className="text-titan-accent font-semibold uppercase tracking-widest text-sm mb-3">
                    {cityName} Businesses
                  </p>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6">
                    Holiday Lights That Bring {cityName} Customers Through the Door
                  </h2>
                  <p className="text-lg text-slate-600 leading-relaxed mb-8">
                    {city
                      ? city.intro
                      : "A lit building is the cheapest advertising a business can buy in December. Minneapolis and Twin Cities storefronts, restaurants, office buildings, and HOA communities hire Pressure Titans to design, install, and maintain commercial Christmas light displays that look sharp every night from before Thanksgiving through the New Year, without anyone on staff touching a ladder."}
                  </p>
                </ScrollReveal>
                <ScrollReveal animation="fade-right" delay={150}>
                  <h3 className="font-heading font-semibold text-slate-900 text-lg mb-4">
                    Commercial properties we light in {cityName}
                  </h3>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {(city?.spots ?? [
                      "Restaurants, bars, and patios",
                      "Retail storefronts and strip centers",
                      "Office buildings and corporate campuses",
                      "HOA entrances and clubhouses",
                      "Churches, schools, and community buildings",
                      "Hotels, event venues, and apartment communities",
                    ]).map((spot) => (
                      <li key={spot} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-titan-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-slate-700">{spot}</span>
                      </li>
                    ))}
                  </ul>
                </ScrollReveal>
              </div>
              <ScrollReveal animation="fade-left" delay={200}>
                <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/5]">
                  <Image
                    src="/images/projects/newholiday2.webp"
                    alt={`Commercial Christmas light installation by Pressure Titans serving ${cityName}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute -bottom-0 left-0 right-0 bg-gradient-to-t from-navy/80 to-transparent p-6">
                    <p className="text-white font-heading font-semibold text-lg">Installed, maintained, and taken down by one crew</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* What's included */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal animation="fade-up" className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
                Everything Included in Your Commercial Quote
              </h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                Commercial holiday lighting should be one line item on your budget, not six.
              </p>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {included.map((item, i) => (
                <ScrollReveal key={item.name} animation="fade-up" delay={i * 80}>
                  <div className="bg-white border border-slate-200 rounded-xl p-6 hover:border-titan-accent/40 hover:shadow-md transition-all h-full">
                    <div className="flex items-start gap-3 mb-3">
                      <svg className="w-6 h-6 text-titan-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <h3 className="font-heading font-semibold text-slate-900 text-lg">{item.name}</h3>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed pl-9">{item.detail}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal animation="fade-up" className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">Our Holiday Lighting Work</h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                Real installs by the Pressure Titans crew across the Twin Cities metro.
              </p>
            </ScrollReveal>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {galleryImages.map((image, i) => (
                <ScrollReveal key={image.src} animation="fade-up" delay={i * 100}>
                  <div className="relative rounded-2xl overflow-hidden shadow-lg group aspect-[3/4]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Why businesses choose us */}
        <section className="py-20 bg-navy overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal animation="fade-up" className="text-center mb-14">
              <p className="text-titan-light font-semibold uppercase tracking-widest text-sm mb-3">Why Businesses Choose Us</p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
                Built for Property Managers and Business Owners
              </h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 gap-6">
              {whyUs.map((item, i) => (
                <ScrollReveal key={item.title} animation="fade-up" delay={i * 100}>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 h-full">
                    <h3 className="text-xl font-heading font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-slate-300 leading-relaxed">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal animation="fade-up" className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">How Commercial Installs Work</h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                From the first walkthrough to January takedown, here is exactly what to expect.
              </p>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((item) => (
                <div key={item.step} className="relative">
                  <div className="w-14 h-14 bg-titan-accent rounded-xl flex items-center justify-center text-white font-heading font-bold text-xl mb-5">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{item.description}</p>
                  {item.step < 4 && (
                    <div className="hidden lg:block absolute top-7 left-[4.5rem] w-[calc(100%-4.5rem)] border-t-2 border-dashed border-slate-200" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal animation="fade-up" className="text-center mb-14">
              <p className="text-titan-accent font-semibold uppercase tracking-widest text-sm mb-3">FAQ</p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900">
                Commercial Holiday Lighting Questions
              </h2>
            </ScrollReveal>
            <FaqAccordion faqs={faqs} />
          </div>
        </section>

        {/* Service areas / cross links */}
        <section className="py-16 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {city ? (
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <h2 className="text-2xl font-heading font-bold text-slate-900 mb-4">
                    Commercial Christmas Lights Near {city.name}
                  </h2>
                  <p className="text-slate-600 mb-4">We also install commercial holiday lighting in:</p>
                  <ul className="flex flex-wrap gap-2">
                    {nearby.map((n) => (
                      <li key={n.slug}>
                        <Link
                          href={cityLightingPath(n.slug)}
                          className="inline-block bg-white border border-slate-200 hover:border-titan-accent hover:text-titan-accent text-slate-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                        >
                          {n.name}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link
                        href={COMMERCIAL_LIGHTING_PATH}
                        className="inline-block bg-white border border-slate-200 hover:border-titan-accent hover:text-titan-accent text-slate-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                      >
                        All service areas
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-2xl font-heading font-bold text-slate-900 mb-4">More From Pressure Titans in {city.name}</h2>
                  <ul className="space-y-3 text-slate-600">
                    <li>
                      Lighting up your home instead?{" "}
                      <Link href="/services/holiday-lighting" className="text-titan-accent font-semibold hover:underline">
                        Residential Christmas light installation
                      </Link>
                    </li>
                    {city.pressureWashingSlug && (
                      <li>
                        Need the building cleaned before the lights go up?{" "}
                        <Link href={`/${city.pressureWashingSlug}-pressure-washing`} className="text-titan-accent font-semibold hover:underline">
                          {city.name} pressure washing
                        </Link>
                      </li>
                    )}
                    <li>
                      Fall gutter cleaning before winter?{" "}
                      <Link href="/services/gutter-cleaning" className="text-titan-accent font-semibold hover:underline">
                        Gutter cleaning
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-3 text-center">
                  Commercial Holiday Lighting Service Areas
                </h2>
                <p className="text-slate-600 text-center max-w-2xl mx-auto mb-8">
                  We install commercial Christmas lights across Minneapolis, St. Paul, and the west and southwest metro.
                </p>
                <ul className="flex flex-wrap justify-center gap-2">
                  {lightingCities.map((c) => (
                    <li key={c.slug}>
                      <Link
                        href={cityLightingPath(c.slug)}
                        className="inline-block bg-white border border-slate-200 hover:border-titan-accent hover:text-titan-accent text-slate-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                      >
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <p className="text-center text-slate-600 mt-8">
                  Lighting up your home instead?{" "}
                  <Link href="/services/holiday-lighting" className="text-titan-accent font-semibold hover:underline">
                    See residential Christmas light installation
                  </Link>
                </p>
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-navy">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              Get Your {cityName} Business Lit Before the Season Starts
            </h2>
            <p className="text-xl text-slate-300 mb-4">
              Commercial install dates fill up first. Send us the address and we will get you a quote fast.
            </p>
            <p className="text-slate-400 mb-8">Call, text, or fill out our form. We respond within 24 hours, usually sooner.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-titan-accent hover:bg-titan-light text-white font-semibold px-10 py-4 rounded-lg text-lg transition-colors"
              >
                Request a Commercial Quote
              </Link>
              <a
                href="tel:6125548106"
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-10 py-4 rounded-lg text-lg transition-colors"
              >
                Call (612) 554-8106
              </a>
            </div>
            <p className="text-slate-400 text-sm mt-6">
              Or email us at{" "}
              <a href="mailto:pressuretitans@gmail.com" className="text-titan-light hover:text-white transition-colors underline">
                pressuretitans@gmail.com
              </a>
            </p>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
