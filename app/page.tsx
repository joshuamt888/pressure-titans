import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Pressure Washing Minneapolis | Pressure Titans",
  description:
    "Professional pressure washing, soft washing, gutter cleaning, and exterior cleaning in Minneapolis, MN. Licensed & insured. Free estimates. Call (612) 554-8106.",
  keywords:
    "pressure washing Minneapolis, power washing Minneapolis, soft washing, gutter cleaning Minneapolis, exterior cleaning, house washing Minneapolis, driveway cleaning, deck cleaning",
  alternates: {
    canonical: "https://pressuretitans.com",
  },
  openGraph: {
    title: "Pressure Washing Minneapolis | Pressure Titans",
    description:
      "Professional pressure washing, soft washing, gutter cleaning, and exterior cleaning in Minneapolis, MN. Licensed & insured. Free estimates.",
    url: "https://pressuretitans.com",
    siteName: "Pressure Titans",
    locale: "en_US",
    type: "website",
  },
};
import Header from "@/components/Header";
import ReviewCarousel from "@/components/ReviewCarousel";
import ReviewsSection from "@/components/ReviewsSection";
import StatsBar from "@/components/StatsBar";
import BeforeAfterCarousel from "@/components/BeforeAfterCarousel";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxImage from "@/components/ParallaxImage";
import FaqAccordion from "@/components/FaqAccordion";
import VideoCarousel from "@/components/VideoCarousel";

const faqs = [
  {
    question: "How much does pressure washing cost in Minneapolis?",
    answer:
      "Pricing depends on the surface type, size, and condition. Most residential driveways run $150-$300, and house washes typically range $200-$500. We provide free on-site quotes with no hidden fees.",
  },
  {
    question: "Is pressure washing safe for all surfaces?",
    answer:
      "We adjust our methods for every surface. Hard surfaces like concrete and brick get high-pressure cleaning, while siding, roofs, and delicate surfaces get soft washed with low pressure and eco-friendly solutions.",
  },
  {
    question: "How often should I have my house washed?",
    answer:
      "We recommend annual exterior cleaning for most Minneapolis homes. Gutters should be cleaned twice a year — spring and fall. Driveways and walkways benefit from yearly cleaning to prevent algae and staining.",
  },
  {
    question: "Do you offer free estimates?",
    answer:
      "Yes! Every quote is free with no obligation. We can often provide estimates same-day. Call us at (612) 554-8106 or fill out our contact form.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve the entire Minneapolis metro including Eden Prairie, Chanhassen, Chaska, Shakopee, Prior Lake, Savage, Minnetonka, Victoria, Waconia, Excelsior, and surrounding areas.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Pressure Titans",
  description: "Professional pressure washing, soft washing, and exterior cleaning services in Minneapolis, MN.",
  telephone: "612-554-8106",
  email: "pressuretitans@gmail.com",
  url: "https://pressuretitans.com",
  areaServed: {
    "@type": "City",
    name: "Minneapolis",
    containedIn: {
      "@type": "State",
      name: "Minnesota",
    },
  },
  priceRange: "$$",
};

const services = [
  {
    title: "Pressure Washing",
    description: "Driveways, sidewalks, patios, and concrete restored to like-new condition.",
    href: "/services/pressure-washing",
    icon: "bolt",
  },
  {
    title: "House Washing",
    description: "Gentle soft washing for siding, stucco, and exterior walls.",
    href: "/services/house-washing",
    icon: "home",
  },
  {
    title: "Gutter Cleaning",
    description: "Full debris removal and downspout flushing to prevent damage.",
    href: "/services/gutter-cleaning",
    icon: "gutter",
  },
  {
    title: "Ice Dam Removal",
    description: "Safe low-pressure steam removal that protects your roof.",
    href: "/services/ice-dam-removal",
    icon: "ice",
  },
  {
    title: "Holiday Lighting",
    description: "Full-service design, installation, maintenance, and takedown.",
    href: "/services/holiday-lighting",
    icon: "light",
  },
  {
    title: "Stain Removal",
    description: "Rust, oil, tire marks — professional-grade treatments.",
    href: "/services/stain-removal",
    icon: "stain",
  },
];

const areas = [
  { name: "Eden Prairie", slug: "eden-prairie" },
  { name: "Chanhassen", slug: "chanhassen" },
  { name: "Chaska", slug: "chaska" },
  { name: "Shakopee", slug: "shakopee" },
  { name: "Prior Lake", slug: "prior-lake" },
  { name: "Savage", slug: "savage" },
  { name: "Minnetonka", slug: "minnetonka" },
  { name: "Victoria", slug: "victoria" },
  { name: "Waconia", slug: "waconia" },
  { name: "Excelsior", slug: "excelsior" },
  { name: "Shorewood", slug: "shorewood" },
  { name: "Deephaven", slug: "deephaven" },
  { name: "Tonka Bay", slug: "tonka-bay" },
  { name: "Greenwood", slug: "greenwood" },
  { name: "Mound", slug: "mound" },
  { name: "Carver", slug: "carver" },
];

export default function HomePage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <Header />

      <main>
        {/* Hero — Full-screen with video background */}
        <section className="relative min-h-[100dvh] flex items-center pt-24 sm:pt-32 bg-navy">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/images/fullhousejob-poster.webp"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/fullhousejob.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-navy/80" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-3xl">
              <ScrollReveal animation="fade-up" delay={200}>
                <div className="inline-flex items-center gap-2 bg-titan-accent/20 border border-titan-accent/30 text-titan-light text-xs sm:text-sm font-medium px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-6">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Licensed & Insured in Minnesota
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={400}>
                <h1 className="text-3xl sm:text-5xl lg:text-7xl font-heading font-bold text-white mb-6 leading-[1.1]">
                  Minneapolis
                  <span className="block text-titan-light">Pressure Washing</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={600}>
                <p className="text-base sm:text-xl text-white/80 mb-8 sm:mb-10 leading-relaxed max-w-xl">
                  Professional exterior cleaning that transforms your property. Driveways, siding, gutters, decks — we make it look brand new.
                </p>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={800}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="group bg-titan-accent hover:bg-titan-light text-white font-bold px-5 py-3 sm:px-10 sm:py-5 rounded-xl text-center text-sm sm:text-lg transition-all shadow-lg shadow-titan-accent/25 hover:shadow-xl hover:shadow-titan-accent/30 hover:-translate-y-0.5 whitespace-nowrap"
                  >
                    Get Your Free Quote
                  </Link>
                  <a
                    href="tel:6125548106"
                    className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold px-5 py-3 sm:px-10 sm:py-5 rounded-xl text-center text-sm sm:text-lg transition-all hover:-translate-y-0.5 whitespace-nowrap"
                  >
                    (612) 554-8106
                  </a>
                </div>
              </ScrollReveal>

              {/* Rotating Reviews */}
              <ScrollReveal animation="fade-up" delay={1000}>
                <ReviewCarousel />
              </ScrollReveal>
            </div>
          </div>

          {/* Scroll arrow */}
          <a
            href="#stats"
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 w-10 h-10 flex items-center justify-center text-white/50 hover:text-white transition-colors"
            aria-label="Scroll down"
          >
            <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </section>

        {/* Stats Bar */}
        <div id="stats">
          <StatsBar />
        </div>

        {/* Services */}
        <section className="py-16 sm:py-24 bg-white overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal animation="fade-up" className="text-center mb-14">
              <p className="text-titan-accent font-semibold uppercase tracking-widest text-sm mb-3">
                What We Do
              </p>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-4">
                Our Services
              </h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                Professional exterior cleaning for every surface around your home.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {services.map((service, i) => (
                <ScrollReveal key={service.title} animation="fade-up" delay={i * 100}>
                  <Link
                    href={service.href}
                    className="group block bg-slate-50 border border-slate-200 hover:border-titan-accent/50 hover:shadow-lg rounded-2xl p-5 sm:p-8 transition-all duration-300 hover:-translate-y-1 h-full"
                  >
                    <div className="w-11 h-11 sm:w-14 sm:h-14 bg-titan-accent/10 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-titan-accent/20 transition-colors">
                      {service.icon === "bolt" && (
                        <svg className="w-5 h-5 sm:w-7 sm:h-7 text-titan-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      )}
                      {service.icon === "home" && (
                        <svg className="w-5 h-5 sm:w-7 sm:h-7 text-titan-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0h4" />
                        </svg>
                      )}
                      {service.icon === "gutter" && (
                        <svg className="w-5 h-5 sm:w-7 sm:h-7 text-titan-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                      )}
                      {service.icon === "ice" && (
                        <svg className="w-5 h-5 sm:w-7 sm:h-7 text-titan-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.95l-.71.71M21 12h-1M4 12H3m16.95 7.95l-.71-.71M4.76 4.76l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      )}
                      {service.icon === "light" && (
                        <svg className="w-5 h-5 sm:w-7 sm:h-7 text-titan-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      )}
                      {service.icon === "stain" && (
                        <svg className="w-5 h-5 sm:w-7 sm:h-7 text-titan-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                      )}
                    </div>
                    <h3 className="text-base sm:text-xl font-heading font-bold text-slate-900 mb-1 sm:mb-2">
                      {service.title}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-titan-accent font-semibold text-xs sm:text-sm group-hover:gap-2 transition-all duration-300">
                      Learn More
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Google Reviews */}
        <ReviewsSection />

        {/* Before & After */}
        <BeforeAfterCarousel />

        {/* Video Showcase */}
        <section className="py-16 sm:py-24 bg-navy overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal animation="fade-up" className="text-center mb-12">
              <p className="text-titan-light font-semibold uppercase tracking-widest text-sm mb-3">Watch Us Work</p>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-white">
                See Us in Action
              </h2>
            </ScrollReveal>
            <ScrollReveal animation="scale-up" delay={200}>
              <VideoCarousel />
            </ScrollReveal>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 sm:py-24 bg-slate-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <ScrollReveal animation="fade-right">
                  <p className="text-titan-accent font-semibold uppercase tracking-widest text-sm mb-3">Why Choose Us</p>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-8">
                    Results You Can See. Service You Can Trust.
                  </h2>
                </ScrollReveal>
                <div className="space-y-6">
                  {[
                    {
                      title: "Professional-Grade Equipment",
                      desc: "Commercial hot and cold water systems that deliver results residential machines can't touch.",
                    },
                    {
                      title: "Eco-Friendly Solutions",
                      desc: "Biodegradable cleaning agents safe for your family, pets, and landscaping.",
                    },
                    {
                      title: "Licensed & Insured",
                      desc: "Full liability coverage on every job. Your property is protected.",
                    },
                    {
                      title: "Satisfaction Guaranteed",
                      desc: "Not happy? We come back and make it right. No questions asked.",
                    },
                  ].map((item, i) => (
                    <ScrollReveal key={item.title} animation="fade-right" delay={i * 120}>
                      <div className="flex gap-4 group">
                        <div className="w-10 h-10 bg-titan-accent/10 group-hover:bg-titan-accent/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 transition-colors">
                          <svg className="w-5 h-5 text-titan-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-lg font-heading font-semibold text-slate-900 mb-1">{item.title}</h3>
                          <p className="text-slate-500">{item.desc}</p>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>

              <ScrollReveal animation="fade-left" delay={200}>
                <div className="relative">
                  <ParallaxImage
                    src="/images/projects/guysprayingthefrontdoorsteps.webp"
                    alt="Pressure Titans technician cleaning front steps"
                    className="rounded-2xl aspect-[4/5]"
                  />
                  <div className="absolute -bottom-4 left-2 sm:-bottom-6 sm:-left-6 bg-titan-accent text-white rounded-2xl p-4 sm:p-6 shadow-xl">
                    <div className="text-2xl sm:text-3xl font-heading font-bold">500+</div>
                    <div className="text-white/80 text-xs sm:text-sm">Properties Cleaned</div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal animation="fade-up" className="text-center mb-16">
              <p className="text-titan-accent font-semibold uppercase tracking-widest text-sm mb-3">How It Works</p>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900">
                Simple. Fast. Professional.
              </h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Request a Quote", desc: "Call us or fill out our form. We respond within 24 hours — often same day." },
                { step: "02", title: "Get Your Estimate", desc: "We assess your property and provide a transparent, no-obligation quote." },
                { step: "03", title: "We Get to Work", desc: "Our team arrives on time with professional equipment and gets it done right." },
                { step: "04", title: "You Inspect", desc: "Walk the property with us. Not satisfied? We make it right on the spot." },
              ].map((item, i) => (
                <ScrollReveal key={item.step} animation="slide-up" delay={i * 150}>
                  <div className="relative group">
                    <div className="text-6xl font-heading font-bold text-titan-accent group-hover:text-titan-accent/80 mb-4 transition-colors duration-500">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 sm:py-24 bg-slate-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal animation="fade-up" className="text-center mb-16">
              <p className="text-titan-accent font-semibold uppercase tracking-widest text-sm mb-3">FAQ</p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900">
                Common Questions
              </h2>
            </ScrollReveal>
            <FaqAccordion faqs={faqs} />
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-20 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal animation="fade-up" className="text-center mb-10">
              <p className="text-titan-accent font-semibold uppercase tracking-widest text-sm mb-3">Coverage</p>
              <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">Service Areas</h2>
              <p className="text-slate-500">Proudly serving the Minneapolis west metro</p>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={200}>
              <div className="flex flex-wrap justify-center gap-3">
                {areas.map((city, i) => (
                  <Link
                    key={city.slug}
                    href={`/${city.slug}-pressure-washing`}
                    className="bg-slate-100 hover:bg-titan-accent hover:text-white text-slate-700 px-5 py-2.5 rounded-full text-sm font-medium transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-titan-accent/20"
                    style={{ animationDelay: `${i * 30}ms` }}
                  >
                    {city.name}
                  </Link>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-24 bg-navy overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal animation="blur-in">
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                Ready for a Cleaner Property?
              </h2>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={200}>
              <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
                Get a free, no-obligation quote today. We respond within 24 hours.
              </p>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={400}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-titan-accent hover:bg-titan-light text-white font-bold px-6 py-4 sm:px-10 sm:py-5 rounded-xl text-base sm:text-lg transition-all shadow-lg shadow-titan-accent/25 hover:shadow-xl hover:shadow-titan-accent/30 hover:-translate-y-0.5"
                >
                  Get Your Free Quote
                </Link>
                <a
                  href="tel:6125548106"
                  className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-6 py-4 sm:px-10 sm:py-5 rounded-xl text-base sm:text-lg transition-all hover:-translate-y-0.5"
                >
                  Call (612) 554-8106
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
