import type { Metadata } from "next";
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

const SLUG = "waconia";
const city = getLightingCity(SLUG);
const url = `${BASE_URL}${cityLightingPath(SLUG)}`;
const title = "Commercial Christmas Light Installation Waconia MN | Pressure Titans";
const description =
  "Commercial Christmas light installation in Waconia, MN for storefronts, offices, restaurants, and HOAs. Design, commercial-grade LEDs, install, season-long maintenance, and takedown in one quote. Fully insured. Free estimates.";

export const metadata: Metadata = {
  title,
  description,
  keywords:
    "commercial christmas light installation Waconia, christmas light installation Waconia, commercial christmas lights Waconia, holiday light installation Waconia, commercial holiday lighting Waconia MN, christmas light installers Waconia, business christmas lights Waconia",
  alternates: { canonical: url },
  openGraph: {
    title,
    description,
    url,
    siteName: "Pressure Titans",
    locale: "en_US",
    type: "website",
    images: [{ url: `${BASE_URL}/images/projects/newholiday1.webp` }],
  },
};

export default function WaconiaChristmasLightInstallationPage() {
  if (!city) notFound();
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
