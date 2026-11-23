import Image from "next/image";
import Link from "next/link";
import { PHONE, TEL } from "./phone";
import { Nav } from "./Nav";
import { Snow } from "./Snow";
import { Work } from "./Work";
import { Bulb } from "./Bulb";
import { GoogleReviews } from "./GoogleReviews";
import { Faq } from "./Faq";
import { Close } from "./Close";
import { SiteFooter } from "./SiteFooter";
import { CITIES, cityHref } from "./siteData";

const h2 = "text-[9vw] md:text-[3.6vw] leading-[1.04] tracking-[-0.035em] font-medium";
const sec = "max-w-[1200px] mx-auto px-5 md:px-10";
const eyebrow = "text-base md:text-lg tracking-[0.14em] uppercase text-glow";
const card = "rounded-2xl border border-bone/15 bg-navy p-6 md:p-9";

// Holiday lighting leads in winter.
const services = [
  { title: "Holiday Lighting", description: "Full-service design, installation, maintenance, and takedown.", href: "/services/holiday-lighting" },
  { title: "Commercial Lighting", description: "Holiday lighting for storefronts, offices, HOAs, and commercial properties.", href: "/services/commercial-holiday-lighting" },
  { title: "Pressure Washing", description: "Driveways, sidewalks, patios, and concrete restored to like-new condition.", href: "/services/pressure-washing" },
  { title: "House Washing", description: "Gentle soft washing for siding, stucco, and exterior walls.", href: "/services/house-washing" },
  { title: "Gutter Cleaning", description: "Full debris removal and downspout flushing to prevent damage.", href: "/services/gutter-cleaning" },
  { title: "Ice Dam Removal", description: "Safe low-pressure steam removal that protects your roof.", href: "/services/ice-dam-removal" },
];

const stats = [
  { value: "500+", label: "Properties Cleaned" },
  { value: "5.0", label: "Google Rating" },
  { value: "100%", label: "Satisfaction Rate" },
  { value: "Same Day", label: "Quotes Available" },
];

const why = [
  { title: "Professional-Grade Equipment", desc: "Commercial hot and cold water systems that deliver results residential machines can't touch." },
  { title: "Eco-Friendly Solutions", desc: "Biodegradable cleaning agents safe for your family, pets, and landscaping." },
  { title: "Fully Insured", desc: "Fully insured for commercial and residential work. Your property is protected." },
  { title: "Satisfaction Guaranteed", desc: "Not happy? We come back and make it right. No questions asked." },
];

const steps = [
  { step: "01", title: "Request a Quote", desc: "Call us or fill out our form. We respond within 24 hours — often same day." },
  { step: "02", title: "Get Your Estimate", desc: "We assess your property and provide a transparent, no-obligation quote." },
  { step: "03", title: "We Get to Work", desc: "Our team arrives on time with professional equipment and gets it done right." },
  { step: "04", title: "You Inspect", desc: "Walk the property with us. Not satisfied? We make it right on the spot." },
];

// Same photos the summer before/after carousel uses.
const photos = [
  ["ipe-lake-deck-restore-before-after", "Ipe Deck Restoration"], ["bastoneflooramazing", "Stone Patio"],
  ["cedar-deck-strip-golden-stain-before-after", "Cedar Deck Stain"], ["bafrontstepsgood", "Front Steps"],
  ["pergola-mildew-wash-before-after", "Pergola Wash"], ["newdeck1", "Deck Cleaning"], ["bawalkwaygood", "Walkway"],
  ["newgutter1", "Chanhassen"], ["newgutter2", "Minnetonka"], ["badriveway", "Driveway"], ["barailing", "Railing"],
  ["basidewalk", "Sidewalk"], ["basidedoor", "Side Entry"], ["badeckstairs", "Deck Stairs"], ["badeck", "Deck"],
  ["badeck2", "Deck Surface"], ["bafrontdoorsteps", "Front Door Steps"], ["newsiding2", "Chanhassen"],
  ["newsiding1", "Siding Wash"], ["newsiding3", "Soft Wash"],
].map(([f, label]) => ({ src: `/images/projects/${f}.webp`, label }));

/** Dark Variant B city washing page: same copy as CityPageContent, holiday lighting first. */
export function WashCity({ cityName, faqs }: { cityName: string; faqs: { question: string; answer: string }[] }) {
  const slug = cityName.toLowerCase().replace(/\s+/g, "-");
  const lightHref = CITIES.some((c) => c.s === slug) ? cityHref(slug) : "/services/holiday-lighting";
  return (
    <>
      <Nav />
      <main>
        <section className="relative overflow-hidden bg-night text-bone pt-32 md:pt-40 pb-16 md:pb-24">
          <Snow className="absolute inset-0 w-full h-full pointer-events-none" count={60} />
          <div className={`relative z-10 ${sec}`}>
            <p className="inline-block rounded-full border border-bone/25 bg-bone/10 px-4 py-2 text-base md:text-lg text-bone/90 mb-6">Serving {cityName}, MN</p>
            <h1 className="text-[11vw] md:text-[6vw] leading-[0.98] tracking-[-0.04em] font-medium max-w-[16ch]">
              {cityName}
              <span className="block font-serif italic font-normal warm hero-glow">Pressure Washing</span>
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-bone/90 leading-relaxed max-w-[44ch]">
              Professional exterior cleaning that transforms your property. Driveways, siding, gutters, decks — we make it look brand new.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/contact" className="rounded-full bg-glow text-navy text-xl font-medium px-8 py-4 hover:bg-bone transition-colors active:scale-[0.98]">Get Your Free Quote</Link>
              <a href={TEL} className="rounded-full border border-bone/40 bg-bone/10 backdrop-blur-md text-xl px-8 py-4 hover:bg-bone/20 transition-colors">{PHONE}</a>
            </div>
          </div>
        </section>

        <Work />

        <section className="bg-navy py-16 md:py-24">
          <div className={sec}>
            <p className={eyebrow}>Our lead service</p>
            <h2 className={`mt-3 ${h2}`}>Holiday lighting in <span className="font-serif italic font-normal warm">{cityName}.</span></h2>
            <p className="mt-5 text-xl md:text-2xl text-bone/90 leading-relaxed max-w-[52ch]">Design, installation, maintenance and takedown, all by one crew. Holiday lighting starting at $650.</p>
            <div className="mt-8">
              <Link href={lightHref} className="inline-block rounded-full bg-glow text-navy text-xl font-medium px-8 py-4 hover:bg-bone transition-colors active:scale-[0.98]">See holiday lighting</Link>
            </div>
          </div>
        </section>

        <GoogleReviews />

        <section className="bg-night py-16 md:py-24">
          <div className={sec}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-24">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-4xl md:text-5xl font-medium text-glow mb-2">{s.value}</div>
                  <div className="text-base md:text-lg uppercase tracking-widest text-bone/85">{s.label}</div>
                </div>
              ))}
            </div>
            <p className={eyebrow}>What We Do</p>
            <h2 className={`mt-3 ${h2}`}>Our <span className="font-serif italic font-normal warm">Services</span></h2>
            <p className="mt-5 text-xl md:text-2xl text-bone/90 leading-relaxed max-w-[52ch]">Professional exterior cleaning for every surface around your home.</p>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {services.map((s) => (
                <Link key={s.title} href={s.href} className={`${card} block hover:border-glow/60 transition-colors`}>
                  <h3 className="text-2xl md:text-3xl font-medium mb-2">{s.title}</h3>
                  <p className="text-lg md:text-xl text-bone/85 leading-relaxed">{s.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-navy py-16 md:py-24">
          <div className={sec}>
            <p className={eyebrow}>Why Choose Us</p>
            <h2 className={`mt-3 ${h2} max-w-[20ch]`}>Results You Can See. <span className="font-serif italic font-normal warm">Service You Can Trust.</span></h2>
            <ul className="mt-10 grid md:grid-cols-2 gap-6 md:gap-8">
              {why.map((w) => (
                <li key={w.title} className="flex gap-4">
                  <Bulb upright on className="w-[18px] shrink-0 mt-2" />
                  <div>
                    <h3 className="text-xl md:text-2xl font-medium mb-1">{w.title}</h3>
                    <p className="text-lg md:text-xl text-bone/85 leading-relaxed">{w.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-12 relative aspect-[4/3] md:aspect-[16/9] overflow-hidden rounded-2xl">
              <Image src="/images/projects/respirator.webp" alt="Pressure Titans technician with professional safety equipment" fill sizes="(max-width: 1200px) 100vw, 1200px" className="object-cover" />
            </div>
            <p className="mt-4 text-lg md:text-xl text-bone/85">500+ Properties Cleaned</p>
          </div>
        </section>

        <section className="bg-night py-16 md:py-24">
          <div className={sec}>
            <h2 className={h2}>Before <span className="font-serif italic font-normal warm">&amp; after.</span></h2>
            <div className="mt-10 grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
              {photos.map((p) => (
                <figure key={p.src}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-navy">
                    <Image src={p.src} alt={`${p.label} before and after pressure washing`} fill sizes="(max-width: 1024px) 50vw, 380px" className="object-cover" />
                  </div>
                  <figcaption className="mt-3 text-base md:text-lg text-bone/85 text-center">{p.label}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-navy py-16 md:py-24">
          <div className={sec}>
            <p className={eyebrow}>How It Works</p>
            <h2 className={`mt-3 ${h2}`}>Simple. Fast. <span className="font-serif italic font-normal warm">Professional.</span></h2>
            <div className="mt-10 grid md:grid-cols-4 gap-6 md:gap-8">
              {steps.map((s) => (
                <div key={s.step}>
                  <div className="text-6xl font-serif italic text-glow mb-3">{s.step}</div>
                  <h3 className="text-xl md:text-2xl font-medium mb-2">{s.title}</h3>
                  <p className="text-lg md:text-xl text-bone/85 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Faq items={faqs.map((f) => ({ q: f.question, a: f.answer }))} />
      </main>
      <Close />
      <SiteFooter />
    </>
  );
}
