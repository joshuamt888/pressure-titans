import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import Header from "@/components/Header";
import MobileCallBar from "@/components/MobileCallBar";

const faqs = [
  {
    question: "How much does pressure washing cost in Minneapolis?",
    answer:
      "Pricing depends on the surface type, size, and condition. Most residential driveways run $150-$300, and house washes typically range $200-$500. We provide free on-site quotes with no hidden fees.",
  },
  {
    question: "Is pressure washing safe for all surfaces?",
    answer:
      "We adjust our methods for every surface. Hard surfaces like concrete and brick get high-pressure cleaning, while siding, roofs, and delicate surfaces get soft washed with low pressure and eco-friendly solutions.",
  },
  {
    question: "How often should I have my house washed?",
    answer:
      "We recommend annual exterior cleaning for most Minneapolis homes. Gutters should be cleaned twice a year — spring and fall. Driveways and walkways benefit from yearly cleaning to prevent algae and staining.",
  },
  {
    question: "Do you offer free estimates?",
    answer:
      "Yes! Every quote is free with no obligation. We can often provide estimates same-day. Call us at (612) 554-8106 or fill out our contact form.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve the entire Minneapolis metro including Eden Prairie, Chanhassen, Chaska, Shakopee, Prior Lake, Savage, Minnetonka, Victoria, Waconia, Excelsior, and surrounding areas.",
  },
];

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

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Pressure Titans",
  description: "Professional pressure washing, soft washing, and exterior cleaning services in Minneapolis, MN.",
  telephone: "612-554-8106",
  email: "pressuretitans@gmail.com",
  url: "https://pressuretitans.com",
  areaServed: {
    "@type": "City",
    name: "Minneapolis",
    containedIn: {
      "@type": "State",
      name: "Minnesota",
    },
  },
  priceRange: "$$",
};

const services = [
  {
    title: "Pressure Washing",
    description: "Driveways, sidewalks, patios, pavers, and concrete restored to like-new condition.",
    href: "/services/pressure-washing",
    image: "/images/projects/bastoneflooramazing.webp",
  },
  {
    title: "House Washing",
    description: "Gentle soft washing for siding, stucco, and exterior walls. Safe for every surface.",
    href: "/services/house-washing",
    image: "/images/projects/bahouseoutsidewallsgood.webp",
  },
  {
    title: "Gutter Cleaning",
    description: "Full debris removal and downspout flushing. Prevent water damage before it starts.",
    href: "/services/gutter-cleaning",
    image: "/images/projects/bagutterclean.webp",
  },
];

const beforeAfterShowcase = [
  { src: "/images/projects/bafrontstepsgood.webp", label: "Front Steps" },
  { src: "/images/projects/badeck6good.webp", label: "Deck Restoration" },
  { src: "/images/projects/bastoneflooramazing.webp", label: "Stone Patio" },
  { src: "/images/projects/bawalkwaygood.webp", label: "Walkway" },
  { src: "/images/projects/bahouseoutsidewallsgood2.webp", label: "Exterior Walls" },
  { src: "/images/projects/baguttercleaned.webp", label: "Gutter Cleaning" },
];

const stats = [
  { value: "500+", label: "Properties Cleaned" },
  { value: "5.0", label: "Google Rating" },
  { value: "100%", label: "Satisfaction Rate" },
  { value: "Same Day", label: "Quotes Available" },
];

const areas = [
  { name: "Eden Prairie", slug: "eden-prairie" },
  { name: "Chanhassen", slug: "chanhassen" },
  { name: "Chaska", slug: "chaska" },
  { name: "Shakopee", slug: "shakopee" },
  { name: "Prior Lake", slug: "prior-lake" },
  { name: "Savage", slug: "savage" },
  { name: "Minnetonka", slug: "minnetonka" },
  { name: "Victoria", slug: "victoria" },
  { name: "Waconia", slug: "waconia" },
  { name: "Excelsior", slug: "excelsior" },
  { name: "Shorewood", slug: "shorewood" },
  { name: "Deephaven", slug: "deephaven" },
  { name: "Tonka Bay", slug: "tonka-bay" },
  { name: "Greenwood", slug: "greenwood" },
  { name: "Mound", slug: "mound" },
  { name: "Carver", slug: "carver" },
];

export default function HomePage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <Header />

      <main>
        {/* Hero — Full-screen with video background */}
        <section className="relative min-h-[100dvh] flex items-center pt-20">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster="/images/projects/bafrontstepsgood.webp"
          >
            <source src="/videos/pressurewashingjob1.mov" type="video/quicktime" />
            <source src="/videos/pressurewashingjob1.mov" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-navy/80" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-titan-accent/20 border border-titan-accent/30 text-titan-light text-sm font-medium px-4 py-2 rounded-full mb-6">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Licensed & Insured in Minnesota
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold text-white mb-6 leading-[1.1]">
                Minneapolis
                <span className="block text-titan-light">Pressure Washing</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/80 mb-10 leading-relaxed max-w-xl">
                Professional exterior cleaning that transforms your property. Driveways, siding, gutters, decks — we make it look brand new.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-titan-accent hover:bg-titan-light text-white font-bold px-10 py-5 rounded-xl text-center text-lg transition-colors shadow-lg shadow-titan-accent/25"
                >
                  Get Your Free Quote
                </Link>
                <a
                  href="tel:6125548106"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold px-10 py-5 rounded-xl text-center text-lg transition-colors"
                >
                  (612) 554-8106
                </a>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
              <div className="w-1 h-3 bg-white/60 rounded-full animate-bounce" />
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl md:text-5xl font-heading font-bold text-titan-accent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-slate-500 font-medium text-sm uppercase tracking-widest">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services — Large image cards */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-titan-accent font-semibold uppercase tracking-widest text-sm mb-3">What We Do</p>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900">
                Our Services
              </h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl hover:border-titan-accent/20 transition-all"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-heading font-bold text-slate-900 mb-3 group-hover:text-titan-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-500 leading-relaxed mb-4">{service.description}</p>
                    <span className="inline-flex items-center gap-2 text-titan-accent font-semibold">
                      Learn More
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Before & After Showcase */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-titan-accent font-semibold uppercase tracking-widest text-sm mb-3">Real Results</p>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-4">
                Before & After
              </h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                Every image tells the story. See the difference professional cleaning makes.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {beforeAfterShowcase.map((item) => (
                <div
                  key={item.label}
                  className="group relative rounded-2xl overflow-hidden"
                >
                  <div className="relative aspect-square">
                    <Image
                      src={item.src}
                      alt={`${item.label} before and after pressure washing`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                      <span className="text-white font-semibold text-sm">{item.label}</span>
                      <span className="block text-white/70 text-xs">Before & After</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
              >
                View Full Portfolio
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Video Showcase */}
        <section className="py-24 bg-navy">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-titan-light font-semibold uppercase tracking-widest text-sm mb-3">Watch Us Work</p>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-white">
                See Us in Action
              </h2>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-video bg-navy-light">
              <video
                className="w-full h-full object-cover"
                controls
                muted
                playsInline
                preload="none"
                poster="/images/projects/badriveway.webp"
              >
                <source src="/videos/fullhousejob.MOV" type="video/quicktime" />
                <source src="/videos/fullhousejob.MOV" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-titan-accent font-semibold uppercase tracking-widest text-sm mb-3">Why Choose Us</p>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-8">
                  Results You Can See. Service You Can Trust.
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      title: "Professional-Grade Equipment",
                      desc: "Commercial hot and cold water systems that deliver results residential machines can't touch.",
                    },
                    {
                      title: "Eco-Friendly Solutions",
                      desc: "Biodegradable cleaning agents safe for your family, pets, and landscaping.",
                    },
                    {
                      title: "Licensed & Insured",
                      desc: "Full liability coverage on every job. Your property is protected.",
                    },
                    {
                      title: "Satisfaction Guaranteed",
                      desc: "Not happy? We come back and make it right. No questions asked.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="w-10 h-10 bg-titan-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-5 h-5 text-titan-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-heading font-semibold text-slate-900 mb-1">{item.title}</h3>
                        <p className="text-slate-500">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
                  <Image
                    src="/images/projects/guysprayingthefrontdoorsteps.webp"
                    alt="Pressure Titans technician cleaning front steps"
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-titan-accent text-white rounded-2xl p-6 shadow-xl">
                  <div className="text-3xl font-heading font-bold">500+</div>
                  <div className="text-white/80 text-sm">Properties Cleaned</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-titan-accent font-semibold uppercase tracking-widest text-sm mb-3">How It Works</p>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900">
                Simple. Fast. Professional.
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Request a Quote", desc: "Call us or fill out our form. We respond within 24 hours — often same day." },
                { step: "02", title: "Get Your Estimate", desc: "We assess your property and provide a transparent, no-obligation quote." },
                { step: "03", title: "We Get to Work", desc: "Our team arrives on time with professional equipment and gets it done right." },
                { step: "04", title: "You Inspect", desc: "Walk the property with us. Not satisfied? We make it right on the spot." },
              ].map((item) => (
                <div key={item.step} className="relative">
                  <div className="text-6xl font-heading font-bold text-titan-accent/10 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-titan-accent font-semibold uppercase tracking-widest text-sm mb-3">FAQ</p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900">
                Common Questions
              </h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="bg-white border border-slate-200 rounded-xl p-6"
                >
                  <h3 className="text-lg font-heading font-bold text-slate-900 mb-3">{faq.question}</h3>
                  <p className="text-slate-500 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="text-titan-accent font-semibold uppercase tracking-widest text-sm mb-3">Coverage</p>
              <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">Service Areas</h2>
              <p className="text-slate-500">Proudly serving the Minneapolis west metro</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {areas.map((city) => (
                <Link
                  key={city.slug}
                  href={`/${city.slug}-pressure-washing`}
                  className="bg-slate-100 hover:bg-titan-accent hover:text-white text-slate-700 px-5 py-2.5 rounded-full text-sm font-medium transition-colors"
                >
                  {city.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-navy">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
              Ready for a Cleaner Property?
            </h2>
            <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
              Get a free, no-obligation quote today. We respond within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-titan-accent hover:bg-titan-light text-white font-bold px-10 py-5 rounded-xl text-lg transition-colors shadow-lg shadow-titan-accent/25"
              >
                Get Your Free Quote
              </Link>
              <a
                href="tel:6125548106"
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-10 py-5 rounded-xl text-lg transition-colors"
              >
                Call (612) 554-8106
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-10 mb-12">
              <div className="md:col-span-1">
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src="/images/logos/pressure-titans-logo.webp"
                    alt="Pressure Titans"
                    width={40}
                    height={40}
                    className="rounded-lg"
                  />
                  <span className="text-lg font-heading font-bold text-white">Pressure Titans</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Professional exterior cleaning in Minneapolis. Results you can see, service you can trust.
                </p>
              </div>

              <div>
                <h3 className="font-heading font-bold text-slate-300 mb-4">Services</h3>
                <ul className="space-y-2 text-slate-400 text-sm">
                  <li><Link href="/services/pressure-washing" className="hover:text-white transition-colors">Pressure Washing</Link></li>
                  <li><Link href="/services/house-washing" className="hover:text-white transition-colors">House Washing</Link></li>
                  <li><Link href="/services/gutter-cleaning" className="hover:text-white transition-colors">Gutter Cleaning</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="font-heading font-bold text-slate-300 mb-4">Company</h3>
                <ul className="space-y-2 text-slate-400 text-sm">
                  <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                  <li><Link href="/portfolio" className="hover:text-white transition-colors">Our Work</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                  <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="font-heading font-bold text-slate-300 mb-4">Contact</h3>
                <ul className="space-y-2 text-slate-400 text-sm">
                  <li>
                    <a href="tel:6125548106" className="hover:text-white transition-colors">(612) 554-8106</a>
                  </li>
                  <li>
                    <a href="mailto:pressuretitans@gmail.com" className="hover:text-white transition-colors">pressuretitans@gmail.com</a>
                  </li>
                  <li>Minneapolis, MN</li>
                  <li>Mon–Sat: 7AM–7PM</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-slate-800 pt-8 text-center">
              <p className="text-slate-400 text-sm">
                &copy; {new Date().getFullYear()} Pressure Titans. All rights reserved.
                {" · "}
                <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                {" · "}
                <Link href="/sitemap-page" className="hover:text-white transition-colors">Sitemap</Link>
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

      <MobileCallBar />
    </>
  );
}
