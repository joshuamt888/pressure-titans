import type { Metadata } from "next";
import Script from "next/script";
import CityPageContent from "@/components/CityPageContent";

export const metadata: Metadata = {
  title: "Greenwood Pressure Washing & Exterior Cleaning",
  description:
    "Dependable pressure washing in Greenwood, MN. House washing, soft washing, gutter cleaning, driveway cleaning, and ice dam removal on Lake Minnetonka. Minneapolis metro. Free estimates.",
  keywords:
    "pressure washing Greenwood, power washing Greenwood MN, soft washing Greenwood, gutter cleaning Greenwood, exterior cleaning Minneapolis metro",
  alternates: {
    canonical: "https://pressuretitans.com/greenwood-pressure-washing",
  },
  openGraph: {
    title: "Greenwood Pressure Washing & Exterior Cleaning | Pressure Titans",
    description:
      "Dependable pressure washing in Greenwood, MN. House washing, soft washing, gutter cleaning, driveway cleaning, and ice dam removal on Lake Minnetonka. Minneapolis metro.",
    url: "https://pressuretitans.com/greenwood-pressure-washing",
    siteName: "Pressure Titans",
    locale: "en_US",
    type: "website",
  },
};

const faqs = [
  {
    question: "How much does pressure washing cost in Greenwood?",
    answer:
      "Pricing depends on the surface type, size, and condition. Most residential driveways in Greenwood run $150–$300, and house washes typically range $200–$500. We provide free on-site quotes with no hidden fees.",
  },
  {
    question: "Is pressure washing safe for all surfaces?",
    answer:
      "We adjust our methods for every surface. Hard surfaces like concrete and brick get high-pressure cleaning, while siding, roofs, and delicate surfaces get soft washed with low pressure and eco-friendly solutions.",
  },
  {
    question: "How often should I have my house pressure washed in Greenwood?",
    answer:
      "We recommend annual exterior cleaning for most Greenwood homes. Gutters should be cleaned twice a year — spring and fall. Driveways and walkways benefit from yearly cleaning to prevent algae and staining.",
  },
  {
    question: "Do you offer free estimates in Greenwood?",
    answer:
      "Yes! Every quote is free with no obligation. We can often provide estimates same-day for Greenwood homeowners. Call us at (612) 554-8106 or fill out our contact form.",
  },
  {
    question: "What pressure washing services do you offer in Greenwood?",
    answer:
      "We offer a full range of exterior cleaning services in Greenwood including pressure washing, soft washing, house washing, gutter cleaning, ice dam removal, holiday lighting, and stain removal.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Pressure Titans",
  description:
    "Professional pressure washing and exterior cleaning services in Greenwood, MN.",
  telephone: "612-554-8106",
  email: "pressuretitans@gmail.com",
  url: "https://pressuretitans.com",
  areaServed: {
    "@type": "City",
    name: "Greenwood",
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

export default function GreenwoodPressureWashingPage() {
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
      <CityPageContent cityName="Greenwood" faqs={faqs} />
    </>
  );
}
