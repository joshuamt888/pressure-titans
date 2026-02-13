import type { Metadata } from "next";
import Header from "@/components/Header";
import ReviewCarousel from "@/components/ReviewCarousel";
import StatsBar from "@/components/StatsBar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Holiday Lighting Minneapolis | Professional Installation & Design",
  description:
    "Professional holiday lighting installation in Minneapolis, MN. Custom design, installation, maintenance, and takedown. Hassle-free holiday displays. Free estimates.",
  keywords:
    "holiday lighting Minneapolis, Christmas light installation, holiday light design, Christmas light service Minneapolis, holiday display installation Minnesota",
  alternates: {
    canonical: "https://pressuretitans.com/services/holiday-lighting",
  },
  openGraph: {
    title: "Holiday Lighting Minneapolis | Professional Installation & Design",
    description:
      "Professional holiday lighting installation in Minneapolis, MN. Custom design, installation, maintenance, and takedown. Hassle-free holiday displays. Free estimates.",
    url: "https://pressuretitans.com/services/holiday-lighting",
    siteName: "Pressure Titans",
    locale: "en_US",
    type: "website",
  },
};

const serviceItems = [
  {
    name: "Custom Design Consultation",
    detail: "We work with you to create a lighting plan that matches your vision, style, and budget",
  },
  {
    name: "Professional Installation",
    detail: "Our crew handles every ladder, clip, and connection — safely and securely installed on your home or business",
  },
  {
    name: "Season-Long Maintenance",
    detail: "Burnt bulb? Loose strand? We come back and fix it at no extra charge throughout the season",
  },
  {
    name: "Complete Takedown",
    detail: "When the season is over, we take everything down, organize it, and leave your property spotless",
  },
  {
    name: "Light Storage",
    detail: "We can store your lights for the off-season so they are ready to go next year without any hassle",
  },
  {
    name: "Commercial Displays",
    detail: "Storefronts, office buildings, and commercial properties — we design and install displays of any scale",
  },
];

const benefits = [
  "Custom design consultation",
  "Professional installation (we climb the ladders)",
  "Full maintenance throughout the season",
  "Complete takedown and storage",
  "Residential and commercial properties",
];

const processSteps = [
  {
    step: 1,
    title: "Design Consultation",
    description:
      "Tell us your vision — classic white, colorful, elegant, or over-the-top festive. We visit your property, take measurements, and create a custom lighting plan with a clear quote.",
  },
  {
    step: 2,
    title: "Schedule Installation",
    description:
      "We lock in your installation date well before the season starts. Early booking ensures your display is up and glowing when you want it, not scrambling last minute.",
  },
  {
    step: 3,
    title: "We Install",
    description:
      "Our crew arrives on schedule with all materials and equipment. We install every strand, clip, and timer according to the approved design. You do not lift a finger.",
  },
  {
    step: 4,
    title: "Enjoy & We Maintain",
    description:
      "Flip the switch and enjoy your display all season. If anything goes wrong — a burnt bulb, a loose connection — we come back and fix it. After the holidays, we handle the complete takedown.",
  },
];

const pricingFactors = [
  "Size of the property and roofline length",
  "Type and quantity of lights (LED, C9, mini, etc.)",
  "Complexity of the design (roofline only vs. full property)",
  "Trees, bushes, and landscaping features included",
  "Height and accessibility of installation areas",
  "Residential vs. commercial property",
];

const faqs = [
  {
    question: "When should I book holiday lighting installation?",
    answer:
      "The earlier, the better. We start booking for the holiday season in September and October. Early bookings get priority scheduling and the widest selection of design options. If you wait until November, availability is limited and you risk not having your display ready for the start of the season.",
  },
  {
    question: "Do you provide the lights or do I need to supply them?",
    answer:
      "We provide everything — lights, clips, extension cords, timers, and all hardware. We use commercial-grade LED lights that are brighter, more energy-efficient, and longer-lasting than retail options. If you have existing lights you love, we are happy to incorporate them into the design.",
  },
  {
    question: "How much does professional holiday lighting cost?",
    answer:
      "Pricing depends on the size of your property, the design complexity, and the type of lights used. We provide detailed quotes after a design consultation so you know exactly what you are getting and what it costs. Most homeowners find it surprisingly affordable compared to the time, risk, and frustration of doing it themselves.",
  },
  {
    question: "What if a light burns out or a strand falls down?",
    answer:
      "We include full maintenance throughout the season at no extra charge. If you notice a burnt bulb, a flickering section, or anything that does not look right, call or text us and we will come out to fix it promptly. Your display stays looking perfect from day one through takedown.",
  },
  {
    question: "Do you install holiday lighting on commercial properties?",
    answer:
      "Yes. We work with storefronts, office buildings, restaurants, HOAs, and commercial properties of all sizes. A professional holiday display makes a strong impression on customers and visitors. We handle the entire process — design, installation, maintenance, and takedown — so your team can focus on business.",
  },
];


export default function HolidayLightingPage() {
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
    serviceType: "Holiday Lighting Installation",
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
      "Full-service holiday lighting — custom design, professional installation, season-long maintenance, and complete takedown. Residential and commercial properties.",
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
                  Hassle-Free Holiday Displays
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                  Holiday Lighting
                  <span className="block text-titan-light">Minneapolis, MN</span>
                </h1>
                <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed max-w-xl">
                  Full-service holiday lighting — design, installation, maintenance, and
                  takedown. Whether you want a classic, elegant display or a festive,
                  eye-catching setup, we handle everything.
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

        {/* What We Offer */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
                Our Holiday Lighting Services
              </h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                From the first design sketch to the final takedown, we handle every detail of
                your holiday lighting experience.
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

        {/* Why Homeowners Choose Us */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6">
              Why Homeowners Choose Us
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Holiday lighting should be enjoyable, not stressful. We take the hassle out of the
              entire process so you can focus on what matters — spending time with family and enjoying
              a beautiful display.
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
              Book Your Holiday Lighting
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
                From design to takedown, we make holiday lighting easy. Here is exactly
                what to expect when you work with Pressure Titans.
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
                  Every property and design is different, so we tailor each quote to your specific
                  needs. You get a detailed breakdown before we start — installation, maintenance,
                  and takedown all included in one price.
                </p>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Here is what we factor into your holiday lighting quote so there are
                  never any surprises.
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
                Holiday Lighting FAQs
              </h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                Common questions we get from Minneapolis homeowners and businesses about our
                holiday lighting services.
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
              Get Your Free Holiday Lighting Quote
            </h2>
            <p className="text-xl text-slate-300 mb-4">
              Ready to have the best-looking house on the block this holiday season?
              Let us design and install a display you will love.
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
