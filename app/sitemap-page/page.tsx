import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Sitemap",
  description:
    "Browse all pages on the Pressure Titans website. Find pressure washing services, city pages, and more.",
  alternates: {
    canonical: "https://pressuretitans.com/sitemap-page",
  },
};

const mainPages = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
];

const servicePages = [
  { label: "Pressure Washing", href: "/services/pressure-washing" },
  { label: "House Washing", href: "/services/house-washing" },
  { label: "Gutter Cleaning", href: "/services/gutter-cleaning" },
];

const cityPages = [
  { label: "Eden Prairie", href: "/eden-prairie-pressure-washing" },
  { label: "Chanhassen", href: "/chanhassen-pressure-washing" },
  { label: "Chaska", href: "/chaska-pressure-washing" },
  { label: "Shakopee", href: "/shakopee-pressure-washing" },
  { label: "Prior Lake", href: "/prior-lake-pressure-washing" },
  { label: "Savage", href: "/savage-pressure-washing" },
  { label: "Minnetonka", href: "/minnetonka-pressure-washing" },
  { label: "Victoria", href: "/victoria-pressure-washing" },
  { label: "Waconia", href: "/waconia-pressure-washing" },
  { label: "Excelsior", href: "/excelsior-pressure-washing" },
  { label: "Shorewood", href: "/shorewood-pressure-washing" },
  { label: "Deephaven", href: "/deephaven-pressure-washing" },
  { label: "Tonka Bay", href: "/tonka-bay-pressure-washing" },
  { label: "Greenwood", href: "/greenwood-pressure-washing" },
  { label: "Mound", href: "/mound-pressure-washing" },
  { label: "Carver", href: "/carver-pressure-washing" },
];

export default function SitemapPage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="relative bg-navy pt-20">
          <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-titan-blue" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
                Sitemap
              </h1>
              <p className="text-lg text-slate-300">
                Browse all pages on our website.
              </p>
            </div>
          </div>
        </section>

        {/* Sitemap Content */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-12">
              {/* Main Pages */}
              <div>
                <h2 className="text-xl font-heading font-bold text-slate-900 mb-6 pb-3 border-b-2 border-titan-accent">
                  Main Pages
                </h2>
                <ul className="space-y-3">
                  {mainPages.map((page) => (
                    <li key={page.href}>
                      <Link
                        href={page.href}
                        className="text-slate-600 hover:text-titan-accent transition-colors font-medium"
                      >
                        {page.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Service Pages */}
              <div>
                <h2 className="text-xl font-heading font-bold text-slate-900 mb-6 pb-3 border-b-2 border-titan-accent">
                  Services
                </h2>
                <ul className="space-y-3">
                  {servicePages.map((page) => (
                    <li key={page.href}>
                      <Link
                        href={page.href}
                        className="text-slate-600 hover:text-titan-accent transition-colors font-medium"
                      >
                        {page.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* City Pages */}
              <div>
                <h2 className="text-xl font-heading font-bold text-slate-900 mb-6 pb-3 border-b-2 border-titan-accent">
                  Service Areas
                </h2>
                <ul className="space-y-3">
                  {cityPages.map((page) => (
                    <li key={page.href}>
                      <Link
                        href={page.href}
                        className="text-slate-600 hover:text-titan-accent transition-colors font-medium"
                      >
                        {page.label} Pressure Washing
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
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
                  Licensed &amp; insured.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-slate-300 mb-4">Services</h3>
                <ul className="space-y-2 text-slate-400 text-sm">
                  <li><Link href="/services/pressure-washing" className="hover:text-white transition-colors">Pressure Washing</Link></li>
                  <li><Link href="/services/house-washing" className="hover:text-white transition-colors">House Washing</Link></li>
                  <li><Link href="/services/gutter-cleaning" className="hover:text-white transition-colors">Gutter Cleaning</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-slate-300 mb-4">Contact</h3>
                <ul className="space-y-2 text-slate-400 text-sm">
                  <li><a href="tel:6125548106" className="hover:text-white transition-colors">(612) 554-8106</a></li>
                  <li><a href="mailto:pressuretitans@gmail.com" className="hover:text-white transition-colors">pressuretitans@gmail.com</a></li>
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
