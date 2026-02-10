import type { Metadata } from "next";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gutter Cleaning Minneapolis | Professional Gutter & Downspout Service",
  description:
    "Professional gutter cleaning in Minneapolis. Debris removal, downspout flushing & gutter maintenance. Prevent water damage. Call (612) 554-8106.",
  keywords:
    "gutter cleaning Minneapolis, gutter maintenance, downspout cleaning, gutter debris removal, gutter service Minneapolis, gutter flushing Minnesota",
  alternates: {
    canonical: "https://pressuretitans.com/services/gutter-cleaning",
  },
  openGraph: {
    title: "Gutter Cleaning Minneapolis | Professional Gutter & Downspout Service",
    description:
      "Professional gutter cleaning in Minneapolis. Debris removal, downspout flushing & gutter maintenance. Prevent water damage.",
    url: "https://pressuretitans.com/services/gutter-cleaning",
    siteName: "Pressure Titans",
    locale: "en_US",
    type: "website",
  },
};

const includedItems = [
  {
    name: "Full Debris Removal",
    detail: "Hand-removal of leaves, twigs, shingle grit, and compacted sludge from all gutters",
  },
  {
    name: "Downspout Flushing",
    detail: "High-pressure water flush through every downspout to clear blockages and verify flow",
  },
  {
    name: "Gutter Inspection",
    detail: "Visual check for sagging, loose brackets, rust spots, and seam separation",
  },
  {
    name: "Roof Edge Check",
    detail: "Inspect drip edge and fascia boards for signs of water intrusion or rot",
  },
  {
    name: "Ground Cleanup",
    detail: "All debris bagged and removed from your property — we leave it cleaner than we found it",
  },
  {
    name: "Flow Testing",
    detail: "Run water through the entire system to confirm proper drainage after cleaning",
  },
];

const processSteps = [
  {
    step: 1,
    title: "Free Estimate",
    description:
      "Tell us about your home and gutter setup. Photos help, but we can also schedule a quick on-site look. You will receive a clear quote with no hidden fees.",
  },
  {
    step: 2,
    title: "Schedule",
    description:
      "Choose a day that works for your schedule. We confirm the appointment and send a reminder so you always know when we are coming.",
  },
  {
    step: 3,
    title: "We Clean",
    description:
      "Our crew arrives on time, sets up safely, and works section by section. Every gutter run and downspout gets attention. Debris goes into bags, not your yard.",
  },
  {
    step: 4,
    title: "You Inspect",
    description:
      "We walk you through what we found and what we cleaned. If there are any gutter issues worth noting, we let you know so you can plan ahead.",
  },
];

const pricingFactors = [
  "Total linear footage of gutters on your home",
  "Number of stories (single-story vs. multi-story)",
  "Volume of debris and level of buildup",
  "Number and condition of downspouts",
  "Presence of gutter guards or screens",
  "Accessibility challenges (steep roof pitch, landscaping)",
];

const faqs = [
  {
    question: "How often should I have my gutters cleaned in Minneapolis?",
    answer:
      "We recommend at least twice a year for most Minneapolis homes — once in late spring after seed pods and pollen, and once in late fall after leaves have dropped. If you have large trees overhanging your roofline, a third cleaning in mid-summer can prevent mid-season clogs.",
  },
  {
    question: "What happens if I do not clean my gutters regularly?",
    answer:
      "Clogged gutters cause water to overflow and pool around your foundation, which can lead to basement flooding, soil erosion, and foundation cracking. In winter, blocked gutters contribute to ice dams that can damage your roof and cause interior water damage. The cost of gutter cleaning is a fraction of what these repairs would run.",
  },
  {
    question: "Do you clean gutters with gutter guards installed?",
    answer:
      "Yes. Gutter guards reduce the amount of large debris that enters your gutters, but fine particles like shingle grit, pine needles, and seed pods still get through. We carefully remove or work around the guards, clean the gutters, and reinstall everything properly.",
  },
  {
    question: "Will you let me know if my gutters need repairs?",
    answer:
      "Absolutely. During every cleaning, we inspect for sagging sections, loose or missing brackets, rust, seam separation, and fascia board issues. We document what we find and give you honest recommendations. We never pressure you into unnecessary repairs.",
  },
  {
    question: "Can gutter cleaning be done in winter or early spring?",
    answer:
      "We can clean gutters in early spring once ice has cleared and temperatures are consistently above freezing. For winter months, if you are experiencing ice dam issues or emergency overflow, we offer targeted solutions to address the immediate problem and schedule a full cleaning when conditions allow.",
  },
];

const galleryImages = [
  {
    src: "/images/projects/bagutterclean.webp",
    alt: "Before and after gutter cleaning showing debris removal in Minneapolis",
  },
  {
    src: "/images/projects/baguttercleaned.webp",
    alt: "Before and after gutter cleaned with downspout flushing",
  },
  {
    src: "/images/projects/bagutter3.webp",
    alt: "Before and after gutter maintenance and debris removal results",
  },
];

export default function GutterCleaningPage() {
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
        <section className="relative min-h-[70dvh] flex items-center bg-navy pt-20">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0d1f3c] via-navy to-navy" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(37,99,235,0.12),_transparent_60%)]" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block bg-titan-accent/20 text-titan-light text-sm font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
                  Protect Your Home
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                  Gutter Cleaning
                  <span className="block text-titan-light">Minneapolis, MN</span>
                </h1>
                <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed max-w-xl">
                  Clogged gutters cause foundation damage, basement flooding, and ice dams.
                  We keep your gutters flowing so your home stays protected year-round.
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
              </div>
              <div className="hidden lg:block relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                  <Image
                    src="/images/projects/bagutterclean.webp"
                    alt="Professional gutter cleaning before and after in Minneapolis"
                    width={600}
                    height={450}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Gutter Cleaning Matters */}
        <section className="py-16 bg-titan-accent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="text-white">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">Prevent Foundation Damage</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Overflowing gutters dump water directly against your foundation, causing cracks and settling over time.
                </p>
              </div>
              <div className="text-white">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">Stop Ice Dams</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Clean gutters allow meltwater to drain properly, reducing the buildup that creates destructive ice dams.
                </p>
              </div>
              <div className="text-white">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">Save Money Long-Term</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Routine gutter cleaning costs a fraction of the foundation, roofing, and water damage repairs it prevents.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
                What&apos;s Included in Every Gutter Cleaning
              </h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                We do not cut corners. Every gutter cleaning includes a thorough, multi-step
                process to make sure your system is working properly.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {includedItems.map((item) => (
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
                See the difference professional gutter cleaning makes. These are real
                Minneapolis homes we have serviced.
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
                Booking gutter cleaning should be easy. Here is exactly what to expect
                when you work with Pressure Titans.
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
                  Gutter cleaning costs vary based on your home, but we make the pricing
                  simple and predictable. No surprise charges, no upselling. You get a clear
                  quote before we start, and that is the price you pay.
                </p>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Here is what we take into account when building your quote so you understand
                  exactly where the number comes from.
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
                Gutter Cleaning FAQs
              </h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                Answers to the most common gutter cleaning questions we hear from
                Minneapolis homeowners.
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
              Get Your Free Gutter Cleaning Quote
            </h2>
            <p className="text-xl text-slate-300 mb-4">
              Do not wait for the next rainstorm to find out your gutters are clogged.
              Schedule your cleaning today and protect your home.
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
                  <li>Soft Washing</li>
                  <li>Ice Dam Removal</li>
                  <li>Holiday Lighting</li>
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
