import Link from "next/link";
import Header from "@/components/Header";

const services = [
  {
    title: "Pressure Washing",
    description: "Concrete, decks, fences, pavers, and brick cleaning for residential and commercial properties.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: "Soft Washing",
    description: "Low-pressure cleaning for siding and roofs using eco-friendly solutions. Safe for all surfaces.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    title: "Ice Dam Removal",
    description: "Low-pressure steam method to safely remove ice dams without damaging your roof.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    ),
  },
  {
    title: "Gutter Cleaning",
    description: "Manual debris removal and system flushing to keep your gutters flowing properly.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Holiday Lighting",
    description: "Professional design, installation, maintenance, and takedown. Enjoy the season stress-free.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Stain Removal",
    description: "Rust, oil, and tire mark removal from exterior surfaces. Restore your property's appearance.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
];

const stats = [
  { value: "500+", label: "Jobs Completed" },
  { value: "5.0", label: "Google Rating" },
  { value: "100%", label: "Satisfaction Rate" },
  { value: "24hr", label: "Response Time" },
];

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="relative min-h-[100dvh] flex items-center bg-navy pt-20">
          {/* TODO: Hero background image */}
          <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-titan-blue" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                Minneapolis Pressure Washing
                <span className="block text-titan-light">& Exterior Cleaning</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed">
                Professional pressure washing, soft washing, ice dam removal, and more.
                Licensed, insured, and committed to results you can see.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-titan-accent hover:bg-titan-light text-white font-semibold px-8 py-4 rounded-lg text-center text-lg transition-colors"
                >
                  Get Your Free Quote
                </Link>
                <a
                  href="tel:6125548106"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold px-8 py-4 rounded-lg text-center text-lg transition-colors"
                >
                  (612) 554-8106
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-heading font-bold text-titan-accent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-slate-500 font-medium text-sm uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
                Our Services
              </h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                From driveways to rooftops, we handle every exterior cleaning need.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-lg hover:border-titan-accent/30 transition-all group"
                >
                  <div className="w-14 h-14 bg-titan-accent/10 rounded-xl flex items-center justify-center text-titan-accent mb-5 group-hover:bg-titan-accent group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-slate-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Preview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* TODO: Owner photo */}
              <div className="bg-slate-100 rounded-2xl aspect-[4/5] flex items-center justify-center text-slate-400">
                <span className="text-sm">Owner photo goes here</span>
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6">
                  Young. Hungry. Professional.
                </h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Pressure Titans was built on hustle and attention to detail. We treat every
                  property like it&apos;s our own — because our reputation depends on it.
                </p>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Every job gets our full attention from start to finish. No shortcuts, no
                  excuses, just results you can see.
                </p>
                <Link
                  href="/about"
                  className="inline-block bg-titan-accent hover:bg-titan-light text-white font-semibold px-8 py-4 rounded-lg transition-colors"
                >
                  Meet the Team
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-navy">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              Ready for a Cleaner Property?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Get a free, no-obligation quote. We respond within 24 hours.
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
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <span className="text-xl font-heading font-bold text-white mb-4 block">
                  Pressure<span className="text-titan-light">Titans</span>
                </span>
                <p className="text-slate-400 text-sm">
                  Professional exterior cleaning services in Minneapolis, MN.
                  Licensed & insured.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-slate-300 mb-4">Services</h3>
                <ul className="space-y-2 text-slate-400 text-sm">
                  <li>Pressure Washing</li>
                  <li>Soft Washing</li>
                  <li>Ice Dam Removal</li>
                  <li>Gutter Cleaning</li>
                  <li>Holiday Lighting</li>
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
            <span className="text-slate-500 text-xs">Website & SEO by</span>
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
