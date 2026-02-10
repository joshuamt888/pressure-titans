import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get a free pressure washing quote from Pressure Titans in Minneapolis. Call (612) 554-8106 or fill out our contact form. We respond within 24 hours.",
  alternates: {
    canonical: "https://pressuretitans.com/contact",
  },
};

const serviceOptions = [
  "Pressure Washing",
  "Soft Washing",
  "Ice Dam Removal",
  "Gutter Cleaning",
  "Holiday Lighting",
  "Stain Removal",
  "Other",
];

const steps = [
  {
    step: "01",
    title: "We Respond Within 24 Hours",
    description:
      "Submit your request and we'll get back to you fast — usually the same day.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Free On-Site Estimate",
    description:
      "We'll come to your property to assess the job in person, at no cost to you.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Detailed Quote, No Hidden Fees",
    description:
      "You'll receive an itemized quote so you know exactly what you're paying for.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    step: "04",
    title: "No Pressure, No Obligation",
    description:
      "Take your time deciding. We never use high-pressure sales tactics — just honest service.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
        />
      </svg>
    ),
  },
];

const serviceAreas = [
  { city: "Minneapolis", slug: "minneapolis" },
  { city: "St. Paul", slug: "st-paul" },
  { city: "Bloomington", slug: "bloomington" },
  { city: "Brooklyn Park", slug: "brooklyn-park" },
  { city: "Plymouth", slug: "plymouth" },
  { city: "Maple Grove", slug: "maple-grove" },
  { city: "Woodbury", slug: "woodbury" },
  { city: "Eden Prairie", slug: "eden-prairie" },
  { city: "Edina", slug: "edina" },
  { city: "Minnetonka", slug: "minnetonka" },
  { city: "Burnsville", slug: "burnsville" },
  { city: "Eagan", slug: "eagan" },
  { city: "Richfield", slug: "richfield" },
  { city: "St. Louis Park", slug: "st-louis-park" },
  { city: "Lakeville", slug: "lakeville" },
  { city: "Apple Valley", slug: "apple-valley" },
];

const contactInfo = [
  {
    label: "Phone",
    value: "(612) 554-8106",
    href: "tel:6125548106",
    description: "Call or text anytime",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "pressuretitans@gmail.com",
    href: "mailto:pressuretitans@gmail.com",
    description: "We reply within 24 hours",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    label: "Service Area",
    value: "Minneapolis & Surrounding Cities",
    href: null,
    description: "16 cities across the metro",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    label: "Hours",
    value: "7:00 AM - 7:00 PM",
    href: null,
    description: "Monday through Saturday",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

export default function ContactPage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="relative bg-navy pt-20">
          <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-titan-blue" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                Get Your Free Quote
              </h1>
              <p className="text-xl sm:text-2xl text-slate-300 leading-relaxed">
                We respond within 24 hours
              </p>
            </div>
          </div>
          {/* Bottom edge */}
          <div className="relative z-10">
            <svg
              viewBox="0 0 1440 48"
              fill="none"
              className="w-full text-slate-50"
              preserveAspectRatio="none"
            >
              <path d="M0 48h1440V0C1200 40 240 40 0 0v48z" fill="currentColor" />
            </svg>
          </div>
        </section>

        {/* Contact Form + Info */}
        <section className="py-20 md:py-28 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
              {/* Contact Form — takes 3 columns */}
              <div className="lg:col-span-3">
                <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 md:p-10">
                  <h2 className="text-2xl font-heading font-bold text-slate-900 mb-2">
                    Request a Free Quote
                  </h2>
                  <p className="text-slate-500 mb-8">
                    Fill out the form below and we&apos;ll get back to you within 24 hours.
                  </p>

                  <form className="space-y-6">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-slate-700 mb-2"
                      >
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="John Smith"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-titan-accent focus:border-transparent transition-shadow"
                      />
                    </div>

                    {/* Email + Phone row */}
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-semibold text-slate-700 mb-2"
                        >
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          placeholder="john@example.com"
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-titan-accent focus:border-transparent transition-shadow"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-semibold text-slate-700 mb-2"
                        >
                          Phone <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          placeholder="(612) 555-0123"
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-titan-accent focus:border-transparent transition-shadow"
                        />
                      </div>
                    </div>

                    {/* Service Dropdown */}
                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-semibold text-slate-700 mb-2"
                      >
                        Service Needed
                      </label>
                      <select
                        id="service"
                        name="service"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-titan-accent focus:border-transparent transition-shadow bg-white"
                      >
                        <option value="">Select a service...</option>
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold text-slate-700 mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        placeholder="Tell us about your property and what you need cleaned..."
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-titan-accent focus:border-transparent transition-shadow resize-y"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="w-full bg-titan-accent hover:bg-titan-light text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
                    >
                      Send My Free Quote Request
                    </button>
                  </form>
                </div>
              </div>

              {/* Contact Info Cards — takes 2 columns */}
              <div className="lg:col-span-2 space-y-5">
                {contactInfo.map((info) => (
                  <div
                    key={info.label}
                    className="bg-white rounded-xl border border-slate-200 p-6 flex items-start gap-5 hover:shadow-md transition-shadow"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-titan-accent/10 rounded-xl flex items-center justify-center text-titan-accent">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-lg font-heading font-bold text-slate-900 hover:text-titan-accent transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-lg font-heading font-bold text-slate-900">
                          {info.value}
                        </p>
                      )}
                      <p className="text-sm text-slate-500 mt-0.5">{info.description}</p>
                    </div>
                  </div>
                ))}

                {/* Quick call-out box */}
                <div className="bg-navy rounded-xl p-6 text-center">
                  <p className="text-white font-heading font-bold text-lg mb-2">
                    Prefer to talk?
                  </p>
                  <p className="text-slate-400 text-sm mb-4">
                    Give us a call and we&apos;ll walk you through everything.
                  </p>
                  <a
                    href="tel:6125548106"
                    className="inline-block bg-titan-accent hover:bg-titan-light text-white font-semibold px-8 py-3 rounded-lg transition-colors"
                  >
                    (612) 554-8106
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block text-titan-accent font-semibold text-sm uppercase tracking-widest mb-4">
                Our Process
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
                What to Expect
              </h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                From first contact to finished job, here&apos;s how we make it easy.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((item, i) => (
                <div key={item.step} className="relative text-center">
                  {/* Connector line */}
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] border-t-2 border-dashed border-slate-200" />
                  )}
                  <div className="relative z-10 w-16 h-16 mx-auto bg-titan-accent/10 rounded-2xl flex items-center justify-center text-titan-accent mb-5">
                    {item.icon}
                  </div>
                  <span className="inline-block text-xs font-bold text-titan-accent bg-titan-accent/10 px-3 py-1 rounded-full mb-3">
                    Step {item.step}
                  </span>
                  <h3 className="text-lg font-heading font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block text-titan-accent font-semibold text-sm uppercase tracking-widest mb-4">
                Where We Work
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
                Service Areas
              </h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                We proudly serve Minneapolis and 15 surrounding cities across the Twin
                Cities metro area.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {serviceAreas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/pressure-washing-${area.slug}`}
                  className="group bg-white border border-slate-200 rounded-xl px-5 py-4 text-center hover:border-titan-accent hover:shadow-md transition-all"
                >
                  <span className="text-slate-700 font-medium group-hover:text-titan-accent transition-colors">
                    {area.city}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-navy">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              Let&apos;s Get Your Property Looking Brand New
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Free quotes, honest pricing, and results that speak for themselves.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:6125548106"
                className="bg-titan-accent hover:bg-titan-light text-white font-semibold px-10 py-4 rounded-lg text-lg transition-colors"
              >
                Call (612) 554-8106
              </a>
              <a
                href="mailto:pressuretitans@gmail.com"
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-10 py-4 rounded-lg text-lg transition-colors"
              >
                Email Us
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
                    <a
                      href="mailto:pressuretitans@gmail.com"
                      className="hover:text-white transition-colors"
                    >
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
