import type { Metadata } from "next";
import { WinterShell } from "./WinterShell";
import { Nav } from "./Nav";
import { Hero } from "./Hero";
import { Lighting } from "./Lighting";
import { Included } from "./Included";
import { Faq } from "./Faq";
import { Areas } from "./Areas";
import { Colors } from "./Colors";
import { GoogleReviews } from "./GoogleReviews";
import { Close } from "./Close";
import { SiteFooter } from "./SiteFooter";
import { SeoSections } from "./SeoSections";
import { JsonLd } from "./JsonLd";
import { CityPage } from "./CityPage";
import { ServicePage } from "./ServicePage";
import { HOLIDAY, COMMERCIAL } from "./services";
import { blocks, faqsFor, jsonLd, titleFor, descFor } from "./seo";
import { ContactForm } from "./ContactForm";
import { CITIES, cityHref } from "./siteData";
import { PHONE, TEL } from "./phone";
import { contactFaqs, crumbs, faqLd } from "@/lib/seoExtras";

const SITE = "https://pressuretitans.com";
const meta = (title: string, description: string, path: string): Metadata => ({
  title: { absolute: title }, description, alternates: { canonical: `${SITE}${path}` },
  openGraph: { title, description, url: `${SITE}${path}`, siteName: "Pressure Titans", locale: "en_US", type: "website" },
});

export const winterContactMetadata = meta("Contact Pressure Titans | Free Christmas Light Quote", "Get a free Christmas light installation quote from Pressure Titans in Minneapolis and across Minnesota. Call (612) 554-8106 or send your address. We respond within 24 hours.", "/contact");
export const winterHomeMetadata = meta(titleFor.home, descFor.home, "");
export const winterHolidayMetadata = meta(titleFor.holiday, descFor.holiday, "/services/holiday-lighting");
export const winterCommercialMetadata = meta(titleFor.commercial, descFor.commercial, "/services/commercial-holiday-lighting");
export function winterCityMetadata(slug: string): Metadata {
  const c = CITIES.find((x) => x.s === slug);
  return meta(c ? titleFor.city(c.n) : "Pressure Titans", c ? descFor.city(c.n) : "", cityHref(slug));
}

const faqs = faqsFor();

export function WinterHome() {
  return (
    <WinterShell>
      <JsonLd data={jsonLd({ name: "Christmas light installation", description: descFor.home, url: SITE, faqs })} />
      <Nav />
      <main>
        <Hero />
        <Lighting />
        <Included />
        <Colors />
        <GoogleReviews />
        <Faq items={faqs} />
        <SeoSections list={blocks(undefined, "home")} tint="bg-night" />
        <Areas />
      </main>
      <Close />
      <SiteFooter />
    </WinterShell>
  );
}

export const WinterCity = ({ slug }: { slug: string }) => <WinterShell><CityPage slug={slug} /></WinterShell>;
export const WinterHoliday = () => <WinterShell><ServicePage cfg={HOLIDAY} /></WinterShell>;
export const WinterCommercial = () => <WinterShell><ServicePage cfg={COMMERCIAL} /></WinterShell>;

export function WinterContact() {
  const row = "border-t border-bone/20 pt-5";
  return (
    <WinterShell>
      <Nav />
      <main className="bg-night pt-32 md:pt-40 pb-20 md:pb-28">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 grid md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-5">
            <h1 className="text-[11vw] md:text-[5vw] leading-[1.0] tracking-[-0.04em] font-medium">
              Get your free <span className="font-serif italic font-normal warm hero-glow">quote.</span>
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-bone/90 leading-relaxed max-w-[34ch]">Send the address. We reply within 24 hours, usually the same day, with a clear, itemized quote.</p>
            <dl className="mt-10 space-y-5 text-xl">
              <div className={row}><dt className="text-base text-bone/65">Call or text</dt><dd className="mt-1"><a href={TEL} className="hover:text-glow transition-colors">{PHONE}</a></dd></div>
              <div className={row}><dt className="text-base text-bone/65">Email</dt><dd className="mt-1"><a href="mailto:pressuretitans@gmail.com" className="hover:text-glow transition-colors break-all">pressuretitans@gmail.com</a></dd></div>
              <div className={row}><dt className="text-base text-bone/65">Hours</dt><dd className="mt-1">Mon&ndash;Sat, 7AM&ndash;7PM</dd></div>
              <div className={row}><dt className="text-base text-bone/65">Based in</dt><dd className="mt-1">Minneapolis, MN</dd></div>
            </dl>
          </div>
          <div className="md:col-span-7">
            <div className="rounded-2xl border border-bone/15 bg-navy p-6 md:p-10">
              <ContactForm />
            </div>
          </div>
        </div>

        <section className="max-w-[1200px] mx-auto px-5 md:px-10 mt-24 md:mt-32">
          <h2 className="text-[9vw] md:text-[3.6vw] leading-[1.04] tracking-[-0.035em] font-medium">What we <span className="font-serif italic font-normal warm">do.</span></h2>
          <div className="mt-8 space-y-5 text-xl md:text-2xl text-bone/90 leading-relaxed max-w-[62ch]">
            <p>Pressure Titans is based in Minneapolis, MN, and serves the Twin Cities metro. We pressure wash, soft wash and wash houses, clean gutters, remove ice dams and restore decks, and we design, install, maintain and take down holiday and commercial lighting.</p>
            <p>Every quote is free with no obligation, and Pressure Titans is fully insured for residential and commercial work. Send us the address, or call or text the number above, and we will get back to you within 24 hours, usually the same day, with a clear, itemized quote.</p>
          </div>
        </section>

        <section className="max-w-[1200px] mx-auto px-5 md:px-10 mt-24 md:mt-32">
          <h2 className="text-[9vw] md:text-[3.6vw] leading-[1.04] tracking-[-0.035em] font-medium">What happens <span className="font-serif italic font-normal warm">next.</span></h2>
          <ol className="mt-10 grid md:grid-cols-3 gap-5">
            {[["01", "We Respond Within 24 Hours", "Submit your request and we'll get back to you fast, usually the same day."], ["02", "Free On-Site Estimate", "We'll come to your property to assess the job in person, at no cost to you."], ["03", "Detailed Quote, No Hidden Fees", "You'll receive an itemized quote so you know exactly what you're paying for."]].map(([n, t, d]) => (
              <li key={n} className="rounded-2xl border border-bone/15 bg-navy p-7 md:p-8">
                <span className="text-base font-semibold tracking-[0.22em] text-glow">{n}</span>
                <h3 className="mt-3 text-[26px] md:text-[28px] leading-[1.1] tracking-[-0.02em] font-medium">{t}</h3>
                <p className="mt-3 text-xl text-bone/85 leading-relaxed">{d}</p>
              </li>
            ))}
          </ol>
        </section>
        <Faq items={contactFaqs.map((f) => ({ q: f.question, a: f.answer }))} />
      </main>
      <JsonLd data={[faqLd(contactFaqs), crumbs([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])]} />
      <SiteFooter />
    </WinterShell>
  );
}
