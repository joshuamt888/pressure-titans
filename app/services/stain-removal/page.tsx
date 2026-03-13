import type { Metadata } from "next";
import Header from "@/components/Header";
import ReviewCarousel from "@/components/ReviewCarousel";
import StatsBar from "@/components/StatsBar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Stain Removal Minneapolis | Driveways, Patios & Exterior Surfaces",
  description:
    "Professional stain removal for driveways, patios, and exterior surfaces in Minneapolis, MN. Rust, oil, tire marks, and more. Licensed & insured. Free estimates.",
  keywords:
    "stain removal Minneapolis, oil stain removal, rust stain removal, driveway stain cleaning, concrete stain removal Minneapolis, patio stain treatment Minnesota",
  alternates: {
    canonical: "https://pressuretitans.com/services/stain-removal",
  },
  openGraph: {
    title: "Stain Removal Minneapolis | Driveways, Patios & Exterior Surfaces",
    description:
      "Professional stain removal for driveways, patios, and exterior surfaces in Minneapolis, MN. Rust, oil, tire marks, and more. Licensed & insured. Free estimates.",
    url: "https://pressuretitans.com/services/stain-removal",
    siteName: "Pressure Titans",
    locale: "en_US",
    type: "website",
  },
};

const serviceItems = [
  {
    name: "Rust & Mineral Stains",
    detail: "Targeted treatment for iron, rust, and mineral deposits that discolor concrete, pavers, and stone surfaces",
  },
  {
    name: "Oil & Grease Stains",
    detail: "Professional-grade degreasers break down and lift automotive oil, hydraulic fluid, and cooking grease from driveways and garage floors",
  },
  {
    name: "Tire Mark Removal",
    detail: "Eliminate dark tire marks and rubber scuffs from driveways, parking areas, and concrete surfaces",
  },
  {
    name: "Organic Stain Cleanup",
    detail: "Remove algae, mold, mildew, leaf tannin, and berry stains that darken and discolor exterior surfaces",
  },
  {
    name: "Paint & Coating Removal",
    detail: "Safely strip paint overspray, sealer drips, and accidental spills from concrete and stone without surface damage",
  },
  {
    name: "Hard Water & Efflorescence",
    detail: "Treat white mineral deposits and hard water stains on concrete, brick, and natural stone surfaces",
  },
];

const benefits = [
  "Rust and mineral stain removal",
  "Oil and grease treatment",
  "Tire mark elimination",
  "Organic stain cleanup (algae, mold, mildew)",
  "Safe for concrete, pavers, and stone",
];

const processSteps = [
  {
    step: 1,
    title: "Send Us Photos",
    description:
      "Snap a few pictures of the stained area and send them our way. We identify the stain type and recommend the right treatment plan with a clear, upfront quote.",
  },
  {
    step: 2,
    title: "Schedule Service",
    description:
      "Pick a date that works for you. We confirm the appointment and show up on time with the correct solutions and equipment for your specific stain type.",
  },
  {
    step: 3,
    title: "Targeted Treatment",
    description:
      "We apply professional-grade solutions matched to the stain type, allow proper dwell time, and then use the appropriate cleaning method to lift and remove the stain completely.",
  },
  {
    step: 4,
    title: "Final Inspection",
    description:
      "Walk the area with us when we finish. We point out the results, address any remaining spots, and make sure you are satisfied before we leave.",
  },
];

const pricingFactors = [
  "Type of stain (oil, rust, organic, tire marks, etc.)",
  "Size and number of stained areas",
  "Surface material (concrete, pavers, brick, stone)",
  "Age and severity of the staining",
  "Whether pre-treatment or multiple applications are needed",
  "Residential vs. commercial property",
];

const faqs = [
  {
    question: "Can you remove old oil stains from my driveway?",
    answer:
      "Yes. Oil stain removal is one of our most common requests. We use professional-grade degreasing agents that penetrate deep into the pores of concrete and pavers to break down and lift oil deposits. Very old or deeply penetrated stains may lighten significantly rather than disappear completely, but most customers are very satisfied with the results.",
  },
  {
    question: "Will stain removal damage my concrete or pavers?",
    answer:
      "No. We match our treatment solutions and methods to the specific surface material. Concrete, pavers, brick, and natural stone each require a different approach. Our technicians are trained to remove stains effectively without causing etching, discoloration, or surface damage.",
  },
  {
    question: "How much does professional stain removal cost?",
    answer:
      "Pricing depends on the stain type, size of the area, and how deeply the stain has penetrated. We provide free estimates with clear pricing before starting any work. Most residential stain removal jobs are affordable and cost far less than replacing the stained surface.",
  },
  {
    question: "What types of stains can you remove?",
    answer:
      "We treat a wide range of stains including automotive oil, hydraulic fluid, rust, mineral deposits, tire marks, algae, mold, mildew, leaf tannin, berry stains, paint overspray, and hard water deposits. If you have a stain you are not sure about, send us a photo and we will let you know what we can do.",
  },
  {
    question: "How long does stain removal take?",
    answer:
      "Most residential stain removal jobs are completed in one visit. Depending on the stain type and severity, the process typically takes one to three hours including solution dwell time. Severe or multi-layer stains may require a second application, which we schedule at no additional trip charge.",
  },
];


export default function StainRemovalPage() {
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

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Stain Removal",
    provider: {
      "@type": "LocalBusiness",
      name: "Pressure Titans",
      telephone: "(612) 554-8106",
      email: "pressuretitans@gmail.com",
      areaServed: {
        "@type": "City",
        name: "Minneapolis",
        addressRegion: "MN",
      },
    },
    areaServed: {
      "@type": "City",
      name: "Minneapolis",
      addressRegion: "MN",
    },
    description:
      "Professional stain removal for driveways, patios, and exterior surfaces. Rust, oil, tire marks, organic stains, and more. Safe for concrete, pavers, and stone.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <Header />

      <main>
        {/* Hero */}
        <section className="relative min-h-[70dvh] flex items-center bg-navy pt-20 overflow-hidden">
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="/videos/removingstainoffthecement.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-navy/80" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
            <div>
                <span className="inline-block bg-titan-accent/20 text-titan-light text-sm font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
                  Specialized Surface Treatment
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                  Stain Removal
                  <span className="block text-titan-light">Minneapolis, MN</span>
                </h1>
                <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed max-w-xl">
                  Specialized removal of tough stains — rust, oil, tire marks, and organic
                  buildup — using professional-grade solutions. Targeted treatments that break
                  down and lift stubborn stains without damaging surfaces.
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

        {/* What We Treat */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
                Stains We Remove
              </h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                From automotive fluids to organic growth, we have the right solution
                for every type of exterior stain.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceItems.map((item) => (
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

        {/* Our Process */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
                Our Process
              </h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                Every stain is different, so we tailor our approach. Here is how we handle
                stain removal from start to finish.
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
                  Every stain and surface is different, so we do not use cookie-cutter pricing.
                  We assess the stain type, surface material, and severity, then give you a
                  straightforward quote that reflects the actual work involved.
                </p>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Here are the factors we consider when building your stain removal quote
                  so you always understand where the number comes from.
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
                Stain Removal FAQs
              </h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                Common questions Minneapolis homeowners ask about our professional
                stain removal services.
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
              Get Your Free Stain Removal Quote
            </h2>
            <p className="text-xl text-slate-300 mb-4">
              That stain does not have to be permanent. Send us a photo and we will tell
              you exactly what we can do — and what it will cost.
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
