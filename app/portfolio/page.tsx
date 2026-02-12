import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "See stunning before and after results from Pressure Titans. Driveways, decks, siding, walkways, gutters, and more — transformed by professional pressure washing in Minneapolis.",
  alternates: {
    canonical: "https://pressuretitans.com/portfolio",
  },
};

const projects = [
  {
    src: "/images/projects/bastoneflooramazing.webp",
    label: "Stone Patio",
    alt: "Before and after cleaning a stone patio surface",
  },
  {
    src: "/images/projects/bafrontstepsgood.webp",
    label: "Front Steps",
    alt: "Before and after pressure washing front steps in Minneapolis",
  },
  {
    src: "/images/projects/badeck6good.webp",
    label: "Deck Restoration",
    alt: "Before and after pressure washing a residential deck",
  },
  {
    src: "/images/projects/bawalkwaygood.webp",
    label: "Walkway",
    alt: "Before and after pressure washing a walkway",
  },
  {
    src: "/images/projects/bahouseoutsidewallsgood2.webp",
    label: "Exterior Walls",
    alt: "Before and after soft washing house exterior walls",
  },
  {
    src: "/images/projects/baguttercleaned.webp",
    label: "Gutter Cleaning",
    alt: "Before and after gutter cleaning",
  },
  {
    src: "/images/projects/bagutterclean.webp",
    label: "Gutter Before & After",
    alt: "Before and after professional gutter cleaning",
  },
  {
    src: "/images/projects/badriveway.webp",
    label: "Driveway",
    alt: "Before and after pressure washing a concrete driveway",
  },
  {
    src: "/images/projects/barailing.webp",
    label: "Railing",
    alt: "Before and after pressure washing a railing",
  },
  {
    src: "/images/projects/basidewalk.webp",
    label: "Sidewalk",
    alt: "Before and after pressure washing a sidewalk",
  },
  {
    src: "/images/projects/basidedoor.webp",
    label: "Side Entry",
    alt: "Before and after cleaning around a side door entrance",
  },
  {
    src: "/images/projects/badeckstairs.webp",
    label: "Deck Stairs",
    alt: "Before and after pressure washing deck stairs",
  },
  {
    src: "/images/projects/badeck.webp",
    label: "Deck",
    alt: "Before and after pressure washing a deck",
  },
  {
    src: "/images/projects/badeck2.webp",
    label: "Deck Surface",
    alt: "Before and after pressure washing a deck surface",
  },
  {
    src: "/images/projects/badeck3.webp",
    label: "Deck Boards",
    alt: "Before and after pressure washing deck boards",
  },
  {
    src: "/images/projects/badeck4.webp",
    label: "Deck Detail",
    alt: "Before and after pressure washing deck detail",
  },
  {
    src: "/images/projects/badeck5.webp",
    label: "Deck Planks",
    alt: "Before and after pressure washing deck planks",
  },
  {
    src: "/images/projects/bafrontdoorsteps.webp",
    label: "Front Door Steps",
    alt: "Before and after pressure washing front door steps",
  },
  {
    src: "/images/projects/bafrontdoorsteps2.webp",
    label: "Entryway Steps",
    alt: "Before and after pressure washing entryway steps",
  },
  {
    src: "/images/projects/bafrontdoorsteps3.webp",
    label: "Porch Steps",
    alt: "Before and after pressure washing porch steps",
  },
  {
    src: "/images/projects/bafrontdoorsteps4.webp",
    label: "Step Detail",
    alt: "Before and after pressure washing step detail",
  },
  {
    src: "/images/projects/bafrontdoorwaterfountain.webp",
    label: "Water Fountain",
    alt: "Before and after cleaning a water fountain area",
  },
  {
    src: "/images/projects/bahouseoutsidewalls3.webp",
    label: "Exterior Cleaning",
    alt: "Before and after house exterior cleaning",
  },
  {
    src: "/images/projects/bagutter3.webp",
    label: "Gutter Debris",
    alt: "Before and after gutter debris removal",
  },
  {
    src: "/images/projects/bagutter4.webp",
    label: "Gutter Flush",
    alt: "Before and after gutter flushing",
  },
  {
    src: "/images/projects/bagutter5.webp",
    label: "Gutter Result",
    alt: "Before and after gutter cleaning result",
  },
  {
    src: "/images/projects/babackyardbonfire.webp",
    label: "Backyard Patio",
    alt: "Before and after cleaning a backyard bonfire area",
  },
];

export default function PortfolioPage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="relative bg-navy pt-20 overflow-hidden">
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="/videos/fullhousejob.MOV" type="video/quicktime" />
            <source src="/videos/fullhousejob.MOV" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-navy/80" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                Our Work
              </h1>
              <p className="text-xl sm:text-2xl text-slate-300 leading-relaxed">
                See the difference professional cleaning makes
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

        {/* Before & After Gallery */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block text-titan-accent font-semibold text-sm uppercase tracking-widest mb-4">
                Real Results
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
                Before & After Gallery
              </h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                Every image tells the same story: grime doesn&apos;t stand a chance.
                These are real jobs, real customers, real transformations.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {projects.map((project, i) => (
                <div key={i} className="group">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                    <Image
                      src={project.src}
                      alt={project.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <p className="mt-3 text-sm md:text-base font-medium text-slate-700 text-center">
                    {project.label}
                    <span className="text-slate-400"> &mdash; Before & After</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block text-titan-accent font-semibold text-sm uppercase tracking-widest mb-4">
                In Action
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
                See Us in Action
              </h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                Watch the dirt disappear in real time. There&apos;s nothing quite like
                seeing a surface go from grimy to spotless.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-navy">
                <video
                  controls
                  playsInline
                  preload="metadata"
                  poster="/images/projects/bastoneflooramazing.webp"
                  className="w-full aspect-video"
                >
                  <source src="/videos/pressurewashingjob1.mov" type="video/quicktime" />
                  Your browser does not support the video element.
                </video>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-navy">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              Want Results Like These?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Your property could be our next transformation. Get a free, no-obligation
              quote and see what Pressure Titans can do for you.
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

        <Footer />
      </main>
    </>
  );
}
