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

const SLUG = "hopkins";
const city = getLightingCity(SLUG);
const url = `${BASE_URL}${cityLightingPath(SLUG)}`;
const title = "Commercial Christmas Light Installation Hopkins MN | Pressure Titans";
const description =
  "Commercial Christmas light installation in Hopkins, MN for storefronts, offices, restaurants, and HOAs. Design, commercial-grade LEDs, install, season-long maintenance, and takedown in one quote. Fully insured. Free estimates.";

const summerMetadata: Metadata = {
  title,
  description,
  keywords:
    "commercial christmas light installation Hopkins, christmas light installation Hopkins, commercial christmas lights Hopkins, holiday light installation Hopkins, commercial holiday lighting Hopkins MN, christmas light installers Hopkins, business christmas lights Hopkins",
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

export default function HopkinsChristmasLightInstallationPage() {
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
