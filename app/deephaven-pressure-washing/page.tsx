import type { Metadata } from "next";
import Script from "next/script";
import CityPageContent from "@/components/CityPageContent";

export const metadata: Metadata = {
  title: "Deephaven Pressure Washing & Exterior Cleaning",
  description:
    "Trusted pressure washing in Deephaven, MN. Professional house washing, soft washing, gutter cleaning, ice dam removal, and stain removal near Lake Minnetonka. Minneapolis metro.",
  keywords:
    "pressure washing Deephaven, power washing Deephaven MN, soft washing Deephaven, gutter cleaning Deephaven, exterior cleaning Minneapolis metro",
  alternates: {
    canonical: "https://pressuretitans.com/deephaven-pressure-washing",
  },
  openGraph: {
    title: "Deephaven Pressure Washing & Exterior Cleaning | Pressure Titans",
    description:
      "Trusted pressure washing in Deephaven, MN. Professional house washing, soft washing, gutter cleaning, ice dam removal, and stain removal near Lake Minnetonka.",
    url: "https://pressuretitans.com/deephaven-pressure-washing",
    siteName: "Pressure Titans",
    locale: "en_US",
    type: "website",
  },
};

const faqs = [
  {
    question: "How much does pressure washing cost in Deephaven?",
    answer:
      "Pricing depends on the surface type, size, and condition. Most residential driveways in Deephaven run $150–$300, and house washes typically range $200–$500. We provide free on-site quotes with no hidden fees.",
  },
  {
    question: "Is pressure washing safe for all surfaces?",
    answer:
      "We adjust our methods for every surface. Hard surfaces like concrete and brick get high-pressure cleaning, while siding, roofs, and delicate surfaces get soft washed with low pressure and eco-friendly solutions.",
  },
  {
    question:
      "How often should I have my house pressure washed in Deephaven?",
    answer:
      "We recommend annual exterior cleaning for most Deephaven homes. Gutters should be cleaned twice a year — spring and fall. Driveways and walkways benefit from yearly cleaning to prevent algae and staining.",
  },
  {
    question: "Do you offer free estimates in Deephaven?",
    answer:
      "Yes! Every quote is free with no obligation. We can often provide estimates same-day for Deephaven homeowners. Call us at (612) 554-8106 or fill out our contact form.",
  },
  {
    question: "What pressure washing services do you offer in Deephaven?",
    answer:
      "We offer a full range of exterior cleaning services in Deephaven including pressure washing, soft washing, house washing, gutter cleaning, ice dam removal, holiday lighting, and stain removal.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Pressure Titans",
  description:
    "Professional pressure washing and exterior cleaning services in Deephaven, MN.",
  telephone: "612-554-8106",
  email: "pressuretitans@gmail.com",
  url: "https://pressuretitans.com",
  areaServed: {
    "@type": "City",
    name: "Deephaven",
    containedIn: {
      "@type": "State",
      name: "Minnesota",
    },
  },
  priceRange: "$$",
};

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

export default function DeephavenPressureWashingPage() {
  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <CityPageContent cityName="Deephaven" faqs={faqs} />
    </>
  );
}
