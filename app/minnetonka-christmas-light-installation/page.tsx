import type { Metadata } from "next";
import { SEASON } from "@/lib/season";
import { WinterCity, winterCityMetadata } from "@/components/winter/pages";
import { notFound } from "next/navigation";
import CommercialLightingContent from "@/components/CommercialLightingContent";
import { getLightingCity } from "@/lib/commercial-lighting-cities";
import {
  buildFaqs,
  buildFaqSchema,
  buildServiceSchema,
  buildBreadcrumbSchema,
  cityLightingPath,
  BASE_URL,
} from "@/lib/commercial-lighting-content";

const SLUG = "minnetonka";
const city = getLightingCity(SLUG);
const url = `${BASE_URL}${cityLightingPath(SLUG)}`;
const title = "Commercial Christmas Light Installation Minnetonka MN | Pressure Titans";
const description =
  "Commercial Christmas light installation in Minnetonka, MN for storefronts, offices, restaurants, and HOAs. Design, commercial-grade LEDs, install, season-long maintenance, and takedown in one quote. Fully insured. Free estimates.";

const summerMetadata: Metadata = {
  title,
  description,
  keywords:
    "commercial christmas light installation Minnetonka, christmas light installation Minnetonka, commercial christmas lights Minnetonka, holiday light installation Minnetonka, commercial holiday lighting Minnetonka MN, christmas light installers Minnetonka, business christmas lights Minnetonka",
  alternates: { canonical: url },
  openGraph: {
    title,
    description,
    url,
    siteName: "Pressure Titans",
    locale: "en_US",
    type: "website",
    images: [{ url: `${BASE_URL}/images/og-logo.png` }],
  },
};

export default function MinnetonkaChristmasLightInstallationPage() {
  if (!city) notFound();
  if (SEASON === "winter") return <WinterCity slug={SLUG} />;
  const faqs = buildFaqs(city);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildServiceSchema(city)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildBreadcrumbSchema(city)) }} />
      <CommercialLightingContent city={city} faqs={faqs} />
    </>
  );
}

export const metadata: Metadata = SEASON === "winter" ? winterCityMetadata(SLUG) : summerMetadata;
