import type { Metadata } from "next";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Minnetonka Pressure Washing & Exterior Cleaning",
  description:
    "Premium pressure washing in Minnetonka, MN. Serving homeowners near Lake Minnetonka with house washing, soft washing, gutter cleaning, and ice dam removal. Minneapolis metro.",
  keywords:
    "pressure washing Minnetonka, power washing Minnetonka MN, soft washing Minnetonka, gutter cleaning Minnetonka, exterior cleaning Minneapolis metro, Lake Minnetonka",
  alternates: {
    canonical: "https://pressuretitans.com/minnetonka-pressure-washing",
  },
  openGraph: {
    title: "Minnetonka Pressure Washing & Exterior Cleaning | Pressure Titans",
    description:
      "Premium pressure washing in Minnetonka, MN. Serving homeowners near Lake Minnetonka with house washing, soft washing, gutter cleaning, and ice dam removal.",
    url: "https://pressuretitans.com/minnetonka-pressure-washing",
    siteName: "Pressure Titans",
    locale: "en_US",
    type: "website",
  },
};

const services = [
  {
    name: "Pressure Washing",
    desc: "High-pressure cleaning for driveways, sidewalks, patios, and concrete surfaces throughout Minnetonka.",
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

export default function MinnetonkaPressureWashingPage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="relative min-h-[85dvh] flex items-center pt-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0f1f3d] to-[#0a1628]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(37,99,235,0.15),_transparent_60%)]" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block bg-[#2563eb]/10 border border-[#2563eb]/20 text-[#3b82f6] text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                  Serving Minnetonka, MN
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                  Minnetonka Pressure Washing
                  <span className="block text-[#3b82f6]">& Exterior Cleaning</span>
                </h1>
                <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-xl">
                  Serving homeowners near Lake Minnetonka and the Ridgedale area. Premium pressure washing and soft washing that protects your investment and restores your home&apos;s beauty across the Minneapolis metro.
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
              </div>
              <div className="hidden lg:block">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/projects/bafrontstepsgood.webp"
                    alt="Pressure washing results in Minnetonka"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
                Pressure Washing Services in Minnetonka
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
                Why Minnetonka Homeowners Choose Pressure Titans
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

        {/* Before & After */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
                Real Results in Minnetonka
              </h2>
              <p className="text-lg text-slate-500">See the difference professional pressure washing makes.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/images/projects/bafrontstepsgood.webp"
                  alt="Before and after pressure washing front steps in Minnetonka"
                  width={600}
                  height={450}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/images/projects/badeck6good.webp"
                  alt="Before and after deck cleaning in Minnetonka"
                  width={600}
                  height={450}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="text-center mt-10">
              <Link
                href="/portfolio"
                className="inline-block border-2 border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                View Full Portfolio
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#0a1628]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              Get a Free Pressure Washing Quote in Minnetonka
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

        {/* Footer */}
        <footer className="bg-slate-900 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <span className="text-xl font-heading font-bold text-white mb-4 block">
                  Pressure<span className="text-[#3b82f6]">Titans</span>
                </span>
                <p className="text-slate-400 text-sm">
                  Professional exterior cleaning services in the Minneapolis metro.
                  Licensed &amp; insured.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-slate-300 mb-4">Services</h3>
                <ul className="space-y-2 text-slate-400 text-sm">
                  <li>Pressure Washing</li>
                  <li>Soft Washing</li>
                  <li>House Washing</li>
                  <li>Gutter Cleaning</li>
                  <li>Ice Dam Removal</li>
                  <li>Stain Removal</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-slate-300 mb-4">Contact</h3>
                <ul className="space-y-2 text-slate-400 text-sm">
                  <li>
                    <a href="tel:6125548106" className="hover:text-white transition-colors">
                      (612) 554-8106
                    </a>
                  </li>
                  <li>
                    <a href="mailto:pressuretitans@gmail.com" className="hover:text-white transition-colors">
                      pressuretitans@gmail.com
                    </a>
                  </li>
                  <li>Minneapolis, MN</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-slate-800 pt-8 text-center">
              <p className="text-slate-400 text-sm">
                &copy; {new Date().getFullYear()} Pressure Titans. All rights reserved.
              </p>
            </div>
          </div>
        </footer>

        {/* Agency Credit */}
        <div className="bg-slate-950 py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-2">
            <span className="text-slate-500 text-xs">Website &amp; SEO by</span>
            <a
              href="https://www.steadyscaling.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
            >
              <span className="text-slate-400 text-xs font-medium">Steady Scaling</span>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
