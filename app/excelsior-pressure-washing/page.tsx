import type { Metadata } from "next";
import Header from "@/components/Header";
import ReviewCarousel from "@/components/ReviewCarousel";
import ReviewsSection from "@/components/ReviewsSection";
import StatsBar from "@/components/StatsBar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Excelsior Pressure Washing & Exterior Cleaning",
  description:
    "Expert pressure washing in Excelsior, MN. Lakeside home cleaning, soft washing, gutter cleaning, ice dam removal, and stain removal in the Minneapolis metro. Free estimates.",
  keywords:
    "pressure washing Excelsior, power washing Excelsior MN, soft washing Excelsior, gutter cleaning Excelsior, exterior cleaning Minneapolis metro, Lake Minnetonka Excelsior",
  alternates: {
    canonical: "https://pressuretitans.com/excelsior-pressure-washing",
  },
  openGraph: {
    title: "Excelsior Pressure Washing & Exterior Cleaning | Pressure Titans",
    description:
      "Expert pressure washing in Excelsior, MN. Lakeside home cleaning, soft washing, gutter cleaning, ice dam removal, and stain removal in the Minneapolis metro.",
    url: "https://pressuretitans.com/excelsior-pressure-washing",
    siteName: "Pressure Titans",
    locale: "en_US",
    type: "website",
  },
};

const services = [
  {
    name: "Pressure Washing",
    desc: "High-pressure cleaning for driveways, sidewalks, patios, and concrete surfaces throughout Excelsior.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    name: "Soft Washing",
    desc: "Gentle, low-pressure cleaning for vinyl siding, stucco, and painted surfaces using eco-friendly detergents.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    name: "Gutter Cleaning",
    desc: "Complete gutter debris removal and downspout flushing to protect your home from water damage.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    name: "House Washing",
    desc: "Full exterior house washing to remove dirt, mildew, algae, and oxidation from all siding types.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1m-2 0h2" />
      </svg>
    ),
  },
  {
    name: "Ice Dam Removal",
    desc: "Safe, low-pressure steam removal of ice dams to prevent roof leaks and interior water damage.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    ),
  },
  {
    name: "Stain Removal",
    desc: "Targeted removal of rust, oil, tire marks, and organic stains from concrete and stone surfaces.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
];

const trustPoints = [
  { title: "Licensed & Insured", desc: "Full coverage for your peace of mind on every project." },
  { title: "Eco-Friendly Solutions", desc: "Biodegradable detergents safe for your lawn and landscaping." },
  { title: "100% Satisfaction Guarantee", desc: "We re-clean any area you are not completely happy with." },
  { title: "Fast Response Time", desc: "Quote within 24 hours, service scheduled within the week." },
];

export default function ExcelsiorPressureWashingPage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="relative min-h-[85dvh] flex items-center pt-20 overflow-hidden">
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="/videos/fullhousejob.MOV" type="video/quicktime" />
            <source src="/videos/fullhousejob.MOV" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[#0a1628]/80" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
                <span className="inline-block bg-[#2563eb]/10 border border-[#2563eb]/20 text-[#3b82f6] text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                  Serving Excelsior, MN
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                  Excelsior Pressure Washing
                  <span className="block text-[#3b82f6]">& Exterior Cleaning</span>
                </h1>
                <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-xl">
                  Keeping Excelsior&apos;s charming lakeside community spotless. From Water Street shops to the homes along Lake Minnetonka, we bring professional exterior cleaning to the Minneapolis metro.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-[#2563eb] hover:bg-[#3b82f6] text-white font-semibold px-8 py-4 rounded-lg text-center text-lg transition-colors"
                  >
                    Get Free Quote
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
        </section>

        <StatsBar />

        {/* Services */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
                Pressure Washing Services in Excelsior
              </h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                Comprehensive exterior cleaning solutions for residential and commercial properties.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((svc) => (
                <div
                  key={svc.name}
                  className="bg-white rounded-xl border border-slate-200 p-8 hover:shadow-lg hover:border-[#2563eb]/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#2563eb]/10 flex items-center justify-center text-[#2563eb] mb-5 group-hover:bg-[#2563eb] group-hover:text-white transition-colors">
                    {svc.icon}
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-slate-900 mb-2">{svc.name}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{svc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
                Why Excelsior Homeowners Choose Pressure Titans
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {trustPoints.map((point) => (
                <div key={point.title} className="text-center">
                  <div className="w-14 h-14 mx-auto rounded-full bg-[#2563eb]/10 flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-heading font-semibold text-slate-900 mb-2">{point.title}</h3>
                  <p className="text-slate-500 text-sm">{point.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ReviewsSection />

        {/* CTA */}
        <section className="py-20 bg-[#0a1628]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              Get a Free Pressure Washing Quote in Excelsior
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Same-day estimates available. No pressure, just results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-[#2563eb] hover:bg-[#3b82f6] text-white font-semibold px-10 py-4 rounded-lg text-lg transition-colors"
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
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
