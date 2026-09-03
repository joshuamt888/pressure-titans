import type { Metadata } from "next";
import CommercialLightingContent from "@/components/CommercialLightingContent";
import {
  buildFaqs,
  buildFaqSchema,
  buildServiceSchema,
  buildBreadcrumbSchema,
  BASE_URL,
  COMMERCIAL_LIGHTING_PATH,
} from "@/lib/commercial-lighting-content";

const title = "Commercial Christmas Light Installation Minneapolis | Holiday Lighting for Businesses";
const description =
  "Commercial Christmas light installation in Minneapolis and the Twin Cities. Storefronts, offices, restaurants, HOAs. Design, commercial-grade LEDs, install, season-long maintenance, and takedown in one quote. Fully insured.";

export const metadata: Metadata = {
  title,
  description,
  keywords:
    "commercial christmas light installation Minneapolis, commercial holiday lighting Minneapolis, commercial christmas lights near me, business christmas light installation, commercial holiday light installation Minnesota, christmas light installers Minneapolis, holiday lighting company Twin Cities, storefront christmas lights, HOA holiday lighting",
  alternates: { canonical: `${BASE_URL}${COMMERCIAL_LIGHTING_PATH}` },
  openGraph: {
    title,
    description,
    url: `${BASE_URL}${COMMERCIAL_LIGHTING_PATH}`,
    siteName: "Pressure Titans",
    locale: "en_US",
    type: "website",
    images: [{ url: `${BASE_URL}/images/projects/newholiday1.webp` }],
  },
};

export default function CommercialHolidayLightingPage() {
  const faqs = buildFaqs();
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildServiceSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildBreadcrumbSchema()) }} />
      <CommercialLightingContent faqs={faqs} />
    </>
  );
}
