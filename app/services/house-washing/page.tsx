import type { Metadata } from "next";
import Header from "@/components/Header";
import ReviewCarousel from "@/components/ReviewCarousel";
import StatsBar from "@/components/StatsBar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "House Washing Minneapolis | Soft Washing & Exterior Cleaning",
  description:
    "Professional house washing & soft washing in Minneapolis. Safe cleaning for vinyl, stucco, wood & brick siding. Free estimates. Call (612) 554-8106.",
  keywords:
    "house washing Minneapolis, soft washing, exterior cleaning, siding cleaning, vinyl siding cleaning Minneapolis, stucco cleaning, exterior house cleaning Minnesota",
  alternates: {
    canonical: "https://pressuretitans.com/services/house-washing",
  },
  openGraph: {
    title: "House Washing Minneapolis | Soft Washing & Exterior Cleaning",
    description:
      "Professional house washing & soft washing in Minneapolis. Safe cleaning for vinyl, stucco, wood & brick siding. Free estimates.",
    url: "https://pressuretitans.com/services/house-washing",
    siteName: "Pressure Titans",
    locale: "en_US",
    type: "website",
  },
};

const cleaningItems = [
  {
    name: "Vinyl Siding",
    detail: "Remove green algae, mildew streaks, and oxidation that make vinyl look aged and dull",
  },
  {
    name: "Stucco Exteriors",
    detail: "Gentle cleaning that lifts embedded dirt and biological growth without damaging the texture",
  },
  {
    name: "Wood Siding & Shakes",
    detail: "Safe low-pressure wash that cleans cedar, pine, and hardwood without splintering or stripping",
  },
  {
    name: "Brick & Stone",
    detail: "Restore the original color of brick and natural stone by removing years of grime and moss",
  },
  {
    name: "Soffits & Fascia",
    detail: "Clean the underside of roof overhangs and trim boards that collect cobwebs and insect nests",
  },
  {
    name: "Windows & Trim",
    detail: "Exterior window frames, shutters, and decorative trim cleaned alongside the siding",
  },
  {
    name: "Foundation Walls",
    detail: "Remove splash-back staining, efflorescence, and dirt from exposed foundation surfaces",
  },
  {
    name: "Exterior Fixtures",
    detail: "Light fixtures, mailboxes, and address plaques cleaned as part of the full exterior wash",
  },
];

const processSteps = [
  {
    step: 1,
    title: "Free Estimate",
    description:
      "We assess your home's exterior — the siding material, square footage, amount of buildup, and any areas of concern. You get a clear quote with no obligations.",
  },
  {
    step: 2,
    title: "Schedule",
    description:
      "Pick a date and time that works for you. We send a confirmation and reminder ahead of your appointment so you always know when to expect us.",
  },
  {
    step: 3,
    title: "We Clean",
    description:
      "We apply our biodegradable cleaning solution, let it dwell to break down algae and grime, then rinse at low pressure. The result is a deep clean that is safe for every surface.",
  },
  {
    step: 4,
    title: "You Inspect",
    description:
      "Walk the perimeter with us. We point out what we cleaned, any areas of concern we noticed, and make sure you are completely satisfied before we pack up.",
  },
];

const pricingFactors = [
  "Total square footage of exterior wall area",
  "Siding material (vinyl, stucco, wood, brick, stone)",
  "Severity of algae, mildew, or staining",
  "Number of stories and height of the structure",
  "Landscaping proximity and surface protection needed",
  "Additional areas like detached garages or outbuildings",
];

const faqs = [
  {
    question: "What is the difference between house washing and pressure washing?",
    answer:
      "House washing, also called soft washing, uses low-pressure water combined with specialized cleaning solutions to safely clean siding and exterior surfaces. Traditional pressure washing uses high-pressure water, which is great for hard surfaces like concrete but can damage siding, strip paint, and force water behind your walls. For house exteriors, soft washing is the correct and safer method.",
  },
  {
    question: "Is soft washing safe for all types of siding?",
    answer:
      "Yes. Soft washing is designed specifically for delicate exterior surfaces. Whether your home has vinyl, stucco, wood, brick, or stone siding, our low-pressure approach and biodegradable cleaning agents clean effectively without risking damage. We adjust our solution concentration and dwell time based on the material for the best results.",
  },
  {
    question: "How long does a house washing take?",
    answer:
      "A typical single-family home in Minneapolis takes 2 to 4 hours depending on size, siding type, and the amount of buildup. Multi-story homes or properties with heavy algae growth may take slightly longer. We always give you a time estimate during the quoting process so you can plan your day.",
  },
  {
    question: "Will house washing remove the green and black streaks on my siding?",
    answer:
      "Absolutely. Those green and black streaks are algae, mold, and mildew — and they are exactly what our soft wash process is designed to eliminate. The cleaning solution we apply kills the growth at the root, not just on the surface, which means the results last significantly longer than rinsing with water alone.",
  },
  {
    question: "How often should I have my house washed?",
    answer:
      "For most Minneapolis homes, we recommend house washing every 1 to 2 years. Homes on the north side of trees or in heavily shaded areas may benefit from annual cleaning since those conditions accelerate algae and mildew growth. Regular cleaning maintains your curb appeal and prevents long-term discoloration from setting in.",
  },
];

const galleryImages = [
  {
    src: "/images/projects/bahouseoutsidewallsgood2.webp",
    alt: "Before and after house washing showing dramatic siding cleaning results in Minneapolis",
  },
  {
    src: "/images/projects/bahouseoutsidewallsgood2.webp",
    alt: "Before and after exterior soft washing removing algae from home siding",
  },
  {
    src: "/images/projects/bahouseoutsidewalls3.webp",
    alt: "Before and after house exterior cleaning showing restored vinyl siding",
  },
];

export default function HouseWashingPage() {
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
                  Soft Wash Specialists
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                  House Washing
                  <span className="block text-titan-light">Minneapolis, MN</span>
                </h1>
                <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed max-w-xl">
                  Restore your home&apos;s curb appeal with our professional soft wash service.
                  Safe for vinyl, stucco, wood, and brick — tough on algae, mildew, and grime.
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

        {/* Why Soft Wash */}
        <section className="py-16 bg-titan-accent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="text-white">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">Safe for All Siding</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Low-pressure soft washing will not damage siding, strip paint, or force water behind your walls like high-pressure methods can.
                </p>
              </div>
              <div className="text-white">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">Eco-Friendly Solutions</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Our biodegradable cleaning agents are safe for your landscaping, pets, and the environment while still being tough on organic growth.
                </p>
              </div>
              <div className="text-white">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">Longer-Lasting Clean</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Soft washing kills algae and mildew at the root, not just on the surface. Your home stays cleaner 3 to 4 times longer than a rinse-only approach.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Clean */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
                What We Clean on Your Home
              </h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                A full house wash covers every visible exterior surface. We do not skip the
                details — your entire home gets the treatment.
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
                The transformation speaks for itself. These are real Minneapolis homes
                cleaned by our soft wash team.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {galleryImages.map((image) => (
                <div
                  key={image.src}
                  className="relative rounded-2xl overflow-hidden shadow-lg group"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={500}
                    height={400}
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
                Professional house washing done right. Here is how we take your home
                from dingy to done.
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
                  Clear Pricing, No Guesswork
                </h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Every home is different — a rambler with vinyl siding is a different job
                  than a two-story stucco. We price based on what your home actually needs,
                  not a generic formula.
                </p>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  We walk you through every factor so the price always makes sense. No
                  hidden fees, no inflated quotes, no bait-and-switch.
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
                House Washing FAQs
              </h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                Everything you need to know about our house washing and soft wash services
                in Minneapolis.
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
              Get Your Free House Washing Quote
            </h2>
            <p className="text-xl text-slate-300 mb-4">
              Your home deserves to look its best. Let us bring back the curb appeal
              with a professional soft wash that lasts.
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
