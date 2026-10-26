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
import { Process } from "./Process";
import { CityPage } from "./CityPage";
import { ServicePage } from "./ServicePage";
import { HOLIDAY, COMMERCIAL } from "./services";
import { blocks, faqsFor, jsonLd, titleFor, descFor } from "./seo";
import { ContactForm } from "./ContactForm";
import { CITIES, cityHref } from "./siteData";
import { PHONE, TEL } from "./phone";

const SITE = "https://pressuretitans.com";
const meta = (title: string, description: string, path: string): Metadata => ({
  title: { absolute: title }, description, alternates: { canonical: `${SITE}${path}` },
  openGraph: { title, description, url: `${SITE}${path}`, siteName: "Pressure Titans", locale: "en_US", type: "website" },
});

export const winterContactMetadata = meta("Contact Pressure Titans | Free Christmas Light Quote", "Get a free Christmas light installation quote from Pressure Titans in Minneapolis and across Minnesota. Call (612) 554-8106 or send your address. We respond within 24 hours.", "/contact");
export const winterHomeMetadata = meta(titleFor.home, descFor.home, "");
export const winterProcessMetadata = meta("Our Christmas Light Installation Process | Pressure Titans", "How Pressure Titans installs Christmas lights: design consultation, scheduling, installation, season-long maintenance and takedown, in one quote.", "/process");
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

export function WinterProcess() {
  return (
    <WinterShell>
      <Nav />
      <main>
        <Process page />
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
      </main>
      <SiteFooter />
    </WinterShell>
  );
}
