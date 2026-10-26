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
import { CITIES, cityHref } from "./siteData";

const SITE = "https://pressuretitans.com";
const meta = (title: string, description: string, path: string): Metadata => ({
  title: { absolute: title }, description, alternates: { canonical: `${SITE}${path}` },
  openGraph: { title, description, url: `${SITE}${path}`, siteName: "Pressure Titans", locale: "en_US", type: "website" },
});

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
