import type { Metadata } from "next";
import Script from "next/script";
import CityPageContent from "@/components/CityPageContent";

export const metadata: Metadata = {
  title: "Carver Pressure Washing & Exterior Cleaning",
  description:
    "Professional pressure washing in Carver, MN. House washing, soft washing, gutter cleaning, driveway cleaning, and ice dam removal serving the Minneapolis metro area. Free estimates.",
  keywords:
    "pressure washing Carver, power washing Carver MN, soft washing Carver, gutter cleaning Carver, exterior cleaning Minneapolis metro",
  alternates: {
    canonical: "https://pressuretitans.com/carver-pressure-washing",
  },
  openGraph: {
    title: "Carver Pressure Washing & Exterior Cleaning | Pressure Titans",
    description:
      "Professional pressure washing in Carver, MN. House washing, soft washing, gutter cleaning, driveway cleaning, and ice dam removal serving the Minneapolis metro area.",
    url: "https://pressuretitans.com/carver-pressure-washing",
    siteName: "Pressure Titans",
    locale: "en_US",
    type: "website",
  },
};

const faqs = [
  {
    question: "How much does pressure washing cost in Carver?",
    answer:
      "Pricing depends on the surface type, size, and condition. Most residential driveways in Carver run $150–$300, and house washes typically range $200–$500. We provide free on-site quotes with no hidden fees.",
  },
  {
    question: "Is pressure washing safe for all surfaces?",
    answer:
      "We adjust our methods for every surface. Hard surfaces like concrete and brick get high-pressure cleaning, while siding, roofs, and delicate surfaces get soft washed with low pressure and eco-friendly solutions.",
  },
  {
    question: "How often should I have my house pressure washed in Carver?",
    answer:
      "We recommend annual exterior cleaning for most Carver homes. Gutters should be cleaned twice a year — spring and fall. Driveways and walkways benefit from yearly cleaning to prevent algae and staining.",
  },
  {
    question: "Do you offer free estimates in Carver?",
    answer:
      "Yes! Every quote is free with no obligation. We can often provide estimates same-day for Carver homeowners. Call us at (612) 554-8106 or fill out our contact form.",
  },
  {
    question: "What pressure washing services do you offer in Carver?",
    answer:
      "We offer a full range of exterior cleaning services in Carver including pressure washing, soft washing, house washing, gutter cleaning, ice dam removal, holiday lighting, and stain removal.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Pressure Titans",
  description:
    "Professional pressure washing and exterior cleaning services in Carver, MN.",
  telephone: "612-554-8106",
  email: "pressuretitans@gmail.com",
  url: "https://pressuretitans.com",
  areaServed: {
    "@type": "City",
    name: "Carver",
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

export default function CarverPressureWashingPage() {
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
      <CityPageContent cityName="Carver" faqs={faqs} />
    </>
  );
}
