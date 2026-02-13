import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sitemap",
  description:
    "Browse all pages on the Pressure Titans website. Find pressure washing services, city pages, and more.",
  alternates: {
    canonical: "https://pressuretitans.com/sitemap-page",
  },
  openGraph: {
    title: "Sitemap | Pressure Titans",
    description:
      "Browse all pages on the Pressure Titans website. Find pressure washing services, city pages, and more.",
    url: "https://pressuretitans.com/sitemap-page",
    siteName: "Pressure Titans",
    locale: "en_US",
    type: "website",
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
  { label: "Ice Dam Removal", href: "/services/ice-dam-removal" },
  { label: "Holiday Lighting", href: "/services/holiday-lighting" },
  { label: "Stain Removal", href: "/services/stain-removal" },
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
        <section className="relative bg-navy pt-20 overflow-hidden">
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="/videos/fullhousejob.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-navy/80" />
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

        <Footer />
      </main>
    </>
  );
}
