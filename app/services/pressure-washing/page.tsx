import type { Metadata } from "next";
import Header from "@/components/Header";
import ReviewCarousel from "@/components/ReviewCarousel";
import StatsBar from "@/components/StatsBar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pressure Washing Minneapolis | Driveways, Patios & Concrete Cleaning",
  description:
    "Professional pressure washing in Minneapolis. Driveways, sidewalks, patios, decks & more. Free estimates. Licensed & insured. Call (612) 554-8106.",
  keywords:
    "pressure washing Minneapolis, driveway cleaning, concrete cleaning Minneapolis, patio cleaning, sidewalk pressure washing, deck cleaning Minneapolis",
  alternates: {
    canonical: "https://pressuretitans.com/services/pressure-washing",
  },
  openGraph: {
    title: "Pressure Washing Minneapolis | Driveways, Patios & Concrete Cleaning",
    description:
      "Professional pressure washing in Minneapolis. Driveways, sidewalks, patios, decks & more. Free estimates.",
    url: "https://pressuretitans.com/services/pressure-washing",
    siteName: "Pressure Titans",
    locale: "en_US",
    type: "website",
  },
};

const cleaningItems = [
  { name: "Driveways", detail: "Concrete, asphalt & paver driveways restored to like-new condition" },
  { name: "Sidewalks & Walkways", detail: "Remove grime, algae, and discoloration from all walkway surfaces" },
  { name: "Patios", detail: "Concrete patios, flagstone, and paver patios deep-cleaned and brightened" },
  { name: "Concrete Surfaces", detail: "Garage floors, retaining walls, and foundation walls" },
  { name: "Pavers & Brick", detail: "Restore original color and remove moss, mildew, and staining" },
  { name: "Decks & Porches", detail: "Wood, composite, and Trex decks safely cleaned without damage" },
  { name: "Fences", detail: "Wood, vinyl, and chain-link fences made to look brand new" },
  { name: "Pool Decks", detail: "Slip-resistant cleaning that removes buildup safely" },
];

const processSteps = [
  {
    step: 1,
    title: "Free Estimate",
    description:
      "Send us photos or schedule an on-site visit. We assess the surfaces, measure the area, and give you a clear, no-obligation quote within 24 hours.",
  },
  {
    step: 2,
    title: "Schedule Your Service",
    description:
      "Pick a date and time that works for you. We confirm everything in advance so there are no surprises on cleaning day.",
  },
  {
    step: 3,
    title: "We Clean",
    description:
      "Our crew arrives on time with commercial-grade equipment. We pre-treat surfaces, apply the right PSI for each material, and work methodically across the area.",
  },
  {
    step: 4,
    title: "You Inspect",
    description:
      "Walk the property with us when we finish. If anything does not meet your expectations, we address it on the spot before we leave.",
  },
];

const pricingFactors = [
  "Total square footage of the area being cleaned",
  "Surface type (concrete, pavers, brick, wood, composite)",
  "Level of staining, mildew, or buildup present",
  "Accessibility and proximity to landscaping or structures",
  "Whether pre-treatment or sealing is needed after cleaning",
  "Residential vs. commercial property",
];

const faqs = [
  {
    question: "How much does pressure washing a driveway cost in Minneapolis?",
    answer:
      "Driveway pressure washing in Minneapolis typically ranges depending on square footage, surface condition, and stain severity. We provide free, itemized estimates so you know exactly what you are paying for. Most standard residential driveways fall within a competitive range that our customers find fair and transparent.",
  },
  {
    question: "Will pressure washing damage my concrete or pavers?",
    answer:
      "Not when done correctly. We calibrate our equipment to the appropriate PSI for each surface type. Concrete can handle higher pressure, while pavers and brick require a more careful approach. Our technicians are trained to clean effectively without causing etching, pitting, or joint erosion.",
  },
  {
    question: "How often should I have my driveway or patio pressure washed?",
    answer:
      "In Minnesota, we recommend annual pressure washing for most outdoor surfaces. The freeze-thaw cycle, road salt, tree debris, and humidity create the perfect environment for mold, algae, and staining to build up quickly. Annual cleaning keeps surfaces looking great and extends their lifespan.",
  },
  {
    question: "Do you use any chemicals or is it just water?",
    answer:
      "We use a combination of high-pressure water and eco-friendly, biodegradable cleaning solutions. For tough stains like oil, rust, or deep-set algae, pre-treatment solutions break down the buildup so the pressure washing can remove it completely. All products we use are safe for pets, plants, and lawns.",
  },
  {
    question: "Can you remove oil stains from my garage floor or driveway?",
    answer:
      "Yes. Oil and grease stains are one of our most common requests. We use specialized degreasing agents combined with high-pressure cleaning to lift and remove oil stains. While very old or deeply penetrated stains may lighten significantly rather than disappear completely, most stains are removed to the customer's satisfaction.",
  },
];

const galleryImages = [
  {
    src: "/images/projects/badriveway.webp",
    alt: "Before and after pressure washing a residential driveway in Minneapolis",
  },
  {
    src: "/images/projects/bastoneflooramazing.webp",
    alt: "Before and after stone floor pressure washing showing dramatic results",
  },
  {
    src: "/images/projects/bawalkwaygood.webp",
    alt: "Before and after walkway pressure washing with clean concrete",
  },
  {
    src: "/images/projects/basidewalk.webp",
    alt: "Before and after sidewalk pressure washing removing years of grime",
  },
];

export default function PressureWashingPage() {
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Header />

      <main>
        {/* Hero */}
        <section className="relative min-h-[70dvh] flex items-center bg-navy pt-20 overflow-hidden">
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="/videos/fullhousejob.MOV" type="video/quicktime" />
            <source src="/videos/fullhousejob.MOV" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-navy/80" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
            <div>
                <span className="inline-block bg-titan-accent/20 text-titan-light text-sm font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
                  Our Most Popular Service
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                  Pressure Washing
                  <span className="block text-titan-light">Minneapolis, MN</span>
                </h1>
                <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed max-w-xl">
                  Driveways, sidewalks, patios, decks, and fences transformed with
                  commercial-grade pressure washing. We bring the power — you get the results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-titan-accent hover:bg-titan-light text-white font-semibold px-8 py-4 rounded-lg text-center text-lg transition-colors"
                  >
                    Get a Free Estimate
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

        {/* What We Clean */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
                What We Pressure Wash
              </h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                If it is an outdoor surface, chances are we can clean it. Here is everything
                our pressure washing service covers.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {cleaningItems.map((item) => (
                <div
                  key={item.name}
                  className="bg-slate-50 border border-slate-200 rounded-xl p-6 hover:border-titan-accent/40 hover:shadow-md transition-all"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <svg
                      className="w-6 h-6 text-titan-accent flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <h3 className="font-heading font-semibold text-slate-900 text-lg">
                      {item.name}
                    </h3>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed pl-9">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Before & After Gallery */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
                Before &amp; After Results
              </h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                Real projects from Minneapolis homes and businesses. No filters, no tricks —
                just the difference professional pressure washing makes.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              {galleryImages.map((image) => (
                <div
                  key={image.src}
                  className="relative rounded-2xl overflow-hidden shadow-lg group"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={700}
                    height={500}
                    className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
                Our Process
              </h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                Simple, straightforward, and stress-free. Here is how every pressure washing
                job works from start to finish.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((item) => (
                <div key={item.step} className="relative">
                  <div className="w-14 h-14 bg-titan-accent rounded-xl flex items-center justify-center text-white font-heading font-bold text-xl mb-5">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-slate-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed">{item.description}</p>
                  {item.step < 4 && (
                    <div className="hidden lg:block absolute top-7 left-[4.5rem] w-[calc(100%-4.5rem)] border-t-2 border-dashed border-slate-200" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Info */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6">
                  Transparent Pricing, No Surprises
                </h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Every property is different, so we do not believe in one-size-fits-all pricing.
                  Instead, we assess your specific situation and give you an honest quote that
                  reflects the actual work involved.
                </p>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Here are the main factors that affect your pressure washing quote. We walk
                  through each one with you so the price always makes sense.
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-titan-accent hover:bg-titan-light text-white font-semibold px-8 py-4 rounded-lg transition-colors"
                >
                  Request Your Free Quote
                </Link>
              </div>
              <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-heading font-semibold text-slate-900 mb-6">
                  Factors That Affect Your Price
                </h3>
                <ul className="space-y-4">
                  {pricingFactors.map((factor) => (
                    <li key={factor} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-titan-accent flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      <span className="text-slate-600">{factor}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
                Pressure Washing FAQs
              </h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                Common questions we get from Minneapolis homeowners about our pressure
                washing services.
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8"
                >
                  <h3 className="text-lg font-heading font-semibold text-slate-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-navy">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              Get Your Free Pressure Washing Quote
            </h2>
            <p className="text-xl text-slate-300 mb-4">
              Ready to see what your driveway, patio, or deck is supposed to look like?
              We will give you an honest quote with zero pressure.
            </p>
            <p className="text-slate-400 mb-8">
              Call, text, or fill out our form. We respond within 24 hours — usually sooner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-titan-accent hover:bg-titan-light text-white font-semibold px-10 py-4 rounded-lg text-lg transition-colors"
              >
                Get Your Free Quote
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
              <a
                href="mailto:pressuretitans@gmail.com"
                className="text-titan-light hover:text-white transition-colors underline"
              >
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
