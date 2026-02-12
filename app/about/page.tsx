import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn the story behind Pressure Titans — a young entrepreneur built this Minneapolis pressure washing company from the ground up with hard work, integrity, and a relentless drive for quality.",
  alternates: {
    canonical: "https://pressuretitans.com/about",
  },
};

const stats = [
  { value: "500+", label: "Jobs Completed" },
  { value: "5.0", label: "Google Rating" },
  { value: "100%", label: "Satisfaction Rate" },
  { value: "Same-Day", label: "Quotes Available" },
];

const differentiators = [
  {
    title: "Professional Equipment",
    description:
      "Commercial-grade machines and surface cleaners that deliver deep, even results every time — not the rental-grade equipment others use.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    title: "Eco-Friendly Solutions",
    description:
      "We use biodegradable, plant-safe detergents that are tough on grime but gentle on your landscaping, pets, and the environment.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Licensed & Insured",
    description:
      "Fully licensed and carrying comprehensive liability insurance. Your property is protected, and so is your peace of mind.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    title: "On-Time Guaranteed",
    description:
      "We show up when we say we will. If we're late, we'll make it right. Punctuality isn't optional — it's how we do business.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

const values = [
  {
    name: "Integrity",
    text: "We tell you what the job needs — nothing more, nothing less. No upsells, no surprises on the invoice.",
  },
  {
    name: "Quality",
    text: "We don't leave until it's right. Period. Every surface gets the attention it deserves.",
  },
  {
    name: "Communication",
    text: "You'll always know what's happening, when it's happening, and what to expect next.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="relative bg-navy pt-20 overflow-hidden">
          <video autoPlay muted loop playsInline poster="/images/projects/bastoneflooramazing.webp" className="absolute inset-0 w-full h-full object-cover">
            <source src="/videos/fullhousejob.MOV" type="video/quicktime" />
            <source src="/videos/fullhousejob.MOV" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-navy/80" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                About Pressure Titans
              </h1>
              <p className="text-xl sm:text-2xl text-slate-300 leading-relaxed">
                Built on hustle, driven by results
              </p>
            </div>
          </div>
          {/* Bottom edge */}
          <div className="relative z-10">
            <svg
              viewBox="0 0 1440 48"
              fill="none"
              className="w-full text-white"
              preserveAspectRatio="none"
            >
              <path d="M0 48h1440V0C1200 40 240 40 0 0v48z" fill="currentColor" />
            </svg>
          </div>
        </section>

        {/* Owner Story */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Photo placeholder */}
              <div className="relative">
                <div className="bg-slate-100 rounded-2xl aspect-[4/5] flex items-center justify-center text-slate-400 border border-slate-200">
                  <span className="text-sm font-medium">Owner photo</span>
                </div>
                {/* Decorative accent */}
                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-titan-accent/20 rounded-2xl -z-10" />
              </div>

              {/* Story */}
              <div>
                <span className="inline-block text-titan-accent font-semibold text-sm uppercase tracking-widest mb-4">
                  Our Story
                </span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6 leading-tight">
                  Locally Owned. Driven by Excellence.
                </h2>
                <div className="space-y-5 text-lg text-slate-600 leading-relaxed">
                  <p>
                    Pressure Titans is a locally owned and operated pressure washing and exterior
                    home services company based in Chanhassen, Minnesota, proudly serving Carver
                    County and surrounding areas. Founded by a 22-year-old entrepreneur, we bring
                    fresh energy and a strong commitment to excellence in every project.
                  </p>
                  <p>
                    Our focus is on building lasting customer relationships through clear, constant
                    communication — listening carefully to your needs, addressing concerns upfront,
                    and ensuring you&apos;re completely satisfied from the free estimate to the
                    final walkthrough.
                  </p>
                  <p>
                    We deliver top-quality services like pressure washing, soft washing, gutter
                    cleaning, holiday lighting installations, and more, using professional equipment
                    and techniques to safely remove dirt, mold, mildew, algae, and buildup from
                    driveways, decks, fences, siding, roofs, patios, and beyond — all at
                    competitive, great-value prices.
                  </p>
                  <p>
                    As a leader in the exterior home service industry, we partner with local
                    landscapers, construction companies, and pest control experts to offer
                    comprehensive, one-stop solutions for anything on the outside of your home.
                    Whether it&apos;s a one-time deep clean or ongoing maintenance, Pressure
                    Titans is dedicated to spotless results, reliability, and making every
                    customer a raving fan.
                  </p>
                </div>

                <blockquote className="mt-8 pl-6 border-l-4 border-titan-accent">
                  <p className="text-xl font-heading font-semibold text-slate-800 italic">
                    &ldquo;We don&apos;t cut corners — because our name is on every job.&rdquo;
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block text-titan-accent font-semibold text-sm uppercase tracking-widest mb-4">
                What We Stand For
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
                Our Core Values
              </h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                These aren&apos;t just words on a wall. They&apos;re the standards we hold
                ourselves to on every single job.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, i) => (
                <div
                  key={value.name}
                  className="relative bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="absolute -top-4 left-8 bg-titan-accent text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full">
                    {value.name}
                  </div>
                  <p className="text-slate-600 leading-relaxed mt-4">{value.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-navy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                The Numbers Speak
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Real results, earned one property at a time.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
                >
                  <div className="text-3xl md:text-4xl font-heading font-bold text-titan-light mb-2 whitespace-nowrap">
                    {stat.value}
                  </div>
                  <div className="text-slate-400 font-medium text-sm uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What Sets Us Apart */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block text-titan-accent font-semibold text-sm uppercase tracking-widest mb-4">
                The Pressure Titans Difference
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
                What Sets Us Apart
              </h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                We don&apos;t just clean surfaces — we deliver an experience you can trust.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {differentiators.map((item) => (
                <div
                  key={item.title}
                  className="group bg-slate-50 border border-slate-200 rounded-2xl p-8 text-center hover:bg-titan-accent hover:border-titan-accent transition-all duration-300"
                >
                  <div className="w-16 h-16 mx-auto bg-titan-accent/10 rounded-2xl flex items-center justify-center text-titan-accent mb-6 group-hover:bg-white/20 group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-heading font-bold text-slate-900 mb-3 group-hover:text-white transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-titan-accent to-titan-light">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              Ready to See What We Can Do?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Get a free quote with no pressure and no obligation. Just honest pricing and
              results you&apos;ll love.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-titan-accent hover:bg-slate-100 font-semibold px-10 py-4 rounded-lg text-lg transition-colors"
              >
                Get Your Free Quote
              </Link>
              <a
                href="tel:6125548106"
                className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-10 py-4 rounded-lg text-lg transition-colors"
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
