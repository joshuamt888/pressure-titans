import type { Metadata } from "next";
import Script from "next/script";
import CityPageContent from "@/components/CityPageContent";

export const metadata: Metadata = {
  title: "Mound Pressure Washing & Exterior Cleaning",
  description:
    "Reliable pressure washing in Mound, MN. House washing, soft washing, gutter cleaning, driveway cleaning, and ice dam removal near Lake Minnetonka. Minneapolis metro. Free quotes.",
  keywords:
    "pressure washing Mound, power washing Mound MN, soft washing Mound, gutter cleaning Mound, exterior cleaning Minneapolis metro",
  alternates: {
    canonical: "https://pressuretitans.com/mound-pressure-washing",
  },
  openGraph: {
    title: "Mound Pressure Washing & Exterior Cleaning | Pressure Titans",
    description:
      "Reliable pressure washing in Mound, MN. House washing, soft washing, gutter cleaning, driveway cleaning, and ice dam removal near Lake Minnetonka. Minneapolis metro.",
    url: "https://pressuretitans.com/mound-pressure-washing",
    siteName: "Pressure Titans",
    locale: "en_US",
    type: "website",
  },
};

const faqs = [
  {
    question: "How much does pressure washing cost in Mound?",
    answer:
      "Pricing depends on the surface type, size, and condition. Most residential driveways in Mound run $150–$300, and house washes typically range $200–$500. We provide free on-site quotes with no hidden fees.",
  },
  {
    question: "Is pressure washing safe for all surfaces?",
    answer:
      "We adjust our methods for every surface. Hard surfaces like concrete and brick get high-pressure cleaning, while siding, roofs, and delicate surfaces get soft washed with low pressure and eco-friendly solutions.",
  },
  {
    question: "How often should I have my house pressure washed in Mound?",
    answer:
      "We recommend annual exterior cleaning for most Mound homes. Gutters should be cleaned twice a year — spring and fall. Driveways and walkways benefit from yearly cleaning to prevent algae and staining.",
  },
  {
    question: "Do you offer free estimates in Mound?",
    answer:
      "Yes! Every quote is free with no obligation. We can often provide estimates same-day for Mound homeowners. Call us at (612) 554-8106 or fill out our contact form.",
  },
  {
    question: "What pressure washing services do you offer in Mound?",
    answer:
      "We offer a full range of exterior cleaning services in Mound including pressure washing, soft washing, house washing, gutter cleaning, ice dam removal, holiday lighting, and stain removal.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Pressure Titans",
  description:
    "Professional pressure washing and exterior cleaning services in Mound, MN.",
  telephone: "612-554-8106",
  email: "pressuretitans@gmail.com",
  url: "https://pressuretitans.com",
  areaServed: {
    "@type": "City",
    name: "Mound",
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

export default function MoundPressureWashingPage() {
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
      <CityPageContent cityName="Mound" faqs={faqs} />
    </>
  );
}
