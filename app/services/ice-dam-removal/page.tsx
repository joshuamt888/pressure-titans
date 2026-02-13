import type { Metadata } from "next";
import Header from "@/components/Header";
import ReviewCarousel from "@/components/ReviewCarousel";
import StatsBar from "@/components/StatsBar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ice Dam Removal Minneapolis | Safe Low-Pressure Steam Method",
  description:
    "Professional ice dam removal in Minneapolis, MN. Safe low-pressure steam method that protects your shingles, gutters, and roofing. Licensed & insured. Free estimates.",
  keywords:
    "ice dam removal Minneapolis, ice dam steaming, roof ice removal, ice dam prevention, ice dam service Minneapolis, steam ice dam removal Minnesota",
  alternates: {
    canonical: "https://pressuretitans.com/services/ice-dam-removal",
  },
  openGraph: {
    title: "Ice Dam Removal Minneapolis | Safe Low-Pressure Steam Method",
    description:
      "Professional ice dam removal in Minneapolis, MN. Safe low-pressure steam method that protects your shingles, gutters, and roofing. Licensed & insured. Free estimates.",
    url: "https://pressuretitans.com/services/ice-dam-removal",
    siteName: "Pressure Titans",
    locale: "en_US",
    type: "website",
  },
};

const serviceItems = [
  {
    name: "Roof Ice Dam Removal",
    detail: "Low-pressure steam safely melts ice ridges along eaves without damaging shingles or flashing",
  },
  {
    name: "Gutter Ice Clearing",
    detail: "Remove ice blockages from gutters and downspouts to restore proper drainage",
  },
  {
    name: "Valley Ice Removal",
    detail: "Clear dangerous ice buildup in roof valleys where water naturally channels",
  },
  {
    name: "Icicle Removal",
    detail: "Safely remove large icicles hanging from eaves, gutters, and overhangs before they cause injury or damage",
  },
  {
    name: "Emergency Response",
    detail: "Same-day service available when ice dams are actively causing leaks or interior water damage",
  },
  {
    name: "Prevention Assessment",
    detail: "Identify problem areas on your roof and provide recommendations to reduce future ice dam formation",
  },
];

const benefits = [
  "Prevents water damage to interior walls and ceilings",
  "Protects shingles and gutters from cracking",
  "Safe low-pressure steam method (no hammering or chipping)",
  "Licensed and insured professionals",
  "Emergency same-day service available",
];

const processSteps = [
  {
    step: 1,
    title: "Call or Text Us",
    description:
      "Describe the situation and send photos if you can. We assess the severity and schedule your service — often the same day for emergencies.",
  },
  {
    step: 2,
    title: "On-Site Assessment",
    description:
      "Our crew arrives, inspects the ice dam from the ground and roof level, and confirms the plan of action before starting any work.",
  },
  {
    step: 3,
    title: "Steam Removal",
    description:
      "Using commercial low-pressure steam equipment, we methodically melt the ice dam. No hammering, no chipping, no chemicals — just controlled steam that is safe for your roof.",
  },
  {
    step: 4,
    title: "Flow Verification",
    description:
      "Once the ice dam is removed, we verify that water can drain freely through your gutters and downspouts. We also check for any visible damage that may need attention.",
  },
];

const pricingFactors = [
  "Length and thickness of the ice dam",
  "Roof height and pitch (accessibility)",
  "Number of ice dams or problem areas",
  "Emergency vs. scheduled service",
  "Whether gutters and downspouts also need clearing",
  "Residential vs. commercial property",
];

const faqs = [
  {
    question: "When should I call for ice dam removal in Minneapolis?",
    answer:
      "Call as soon as you notice ice building up along your eaves, large icicles forming, or — most urgently — water stains on your interior ceilings or walls. Ice dams can cause thousands of dollars in water damage if left untreated. The sooner we remove them, the less risk to your home.",
  },
  {
    question: "How much does ice dam removal cost in Minneapolis?",
    answer:
      "Ice dam removal pricing depends on the size and number of ice dams, roof accessibility, and whether it is an emergency call. We provide honest, upfront quotes before starting work. Most residential jobs fall within a range that homeowners find reasonable given the damage ice dams can cause if ignored.",
  },
  {
    question: "Is steam ice dam removal safe for my roof?",
    answer:
      "Yes. Low-pressure steam is the safest method available for ice dam removal. Unlike hammering, chipping, or using salt, steam melts the ice without any physical impact to your shingles, flashing, or gutters. It is the method recommended by roofing professionals and insurance companies.",
  },
  {
    question: "Can I remove an ice dam myself?",
    answer:
      "We strongly advise against it. Climbing on an icy roof is extremely dangerous, and using tools like hammers, picks, or heat cables can damage your shingles and void your roofing warranty. Salt and chemical melters can corrode gutters and harm landscaping. Professional steam removal is the only method that is both safe for you and safe for your roof.",
  },
  {
    question: "Do you offer emergency same-day ice dam removal?",
    answer:
      "Yes. If an ice dam is actively causing leaking inside your home, we prioritize your call and do everything we can to get a crew to you the same day. Call us at (612) 554-8106 and let us know it is an emergency so we can respond as quickly as possible.",
  },
];


export default function IceDamRemovalPage() {
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
    serviceType: "Ice Dam Removal",
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
      "Professional ice dam removal using safe low-pressure steam method. Protects shingles, gutters, and roofing materials. Emergency same-day service available.",
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
            <source src="/videos/fullhousejob.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-navy/80" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
            <div>
                <span className="inline-block bg-titan-accent/20 text-titan-light text-sm font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
                  Winter Emergency Service
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                  Ice Dam Removal
                  <span className="block text-titan-light">Minneapolis, MN</span>
                </h1>
                <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed max-w-xl">
                  Ice dams form when melting snow refreezes at the colder eaves, blocking
                  proper drainage. Professional removal using low-pressure steam safely melts
                  ice without damaging shingles, gutters, or roofing materials.
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

        {/* What We Do */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
                Our Ice Dam Removal Services
              </h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                We handle every aspect of ice dam removal and prevention, using the safest
                method available to protect your home.
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

        {/* Why Choose Professional Steam Removal */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6">
              Why Choose Professional Steam Removal
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              DIY ice dam removal is dangerous and often causes more damage than the ice dam itself.
              Our professional steam method is the gold standard recommended by roofing experts and
              insurance companies across Minnesota.
            </p>
            <ul className="space-y-4 mb-10 text-left max-w-xl mx-auto">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
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
                  <span className="text-slate-700 text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="inline-block bg-titan-accent hover:bg-titan-light text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Schedule Ice Dam Removal
            </Link>
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
                Fast, safe, and effective. Here is how we handle every ice dam removal job
                from first call to final check.
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
                  Honest, Upfront Pricing
                </h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Every ice dam situation is different, so we do not use one-size-fits-all pricing.
                  We assess your specific situation and give you a clear quote before we start any work.
                </p>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Here are the factors we consider when putting together your ice dam removal quote.
                  We walk you through each one so the price always makes sense.
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
                Ice Dam Removal FAQs
              </h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                Common questions Minneapolis homeowners ask about ice dams and our
                removal services.
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
              Get Your Free Ice Dam Removal Quote
            </h2>
            <p className="text-xl text-slate-300 mb-4">
              Do not let ice dams damage your home. Whether it is an emergency or preventive
              removal, we are ready to help.
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
