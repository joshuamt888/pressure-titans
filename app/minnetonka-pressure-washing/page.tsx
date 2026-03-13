import type { Metadata } from "next";
import Script from "next/script";
import CityPageContent from "@/components/CityPageContent";

export const metadata: Metadata = {
  title: "Minnetonka Pressure Washing & Exterior Cleaning",
  description:
    "Premium pressure washing in Minnetonka, MN. Serving homeowners near Lake Minnetonka with house washing, soft washing, gutter cleaning, and ice dam removal. Minneapolis metro.",
  keywords:
    "pressure washing Minnetonka, power washing Minnetonka MN, soft washing Minnetonka, gutter cleaning Minnetonka, exterior cleaning Minneapolis metro, Lake Minnetonka",
  alternates: {
    canonical: "https://pressuretitans.com/minnetonka-pressure-washing",
  },
  openGraph: {
    title: "Minnetonka Pressure Washing & Exterior Cleaning | Pressure Titans",
    description:
      "Premium pressure washing in Minnetonka, MN. Serving homeowners near Lake Minnetonka with house washing, soft washing, gutter cleaning, and ice dam removal.",
    url: "https://pressuretitans.com/minnetonka-pressure-washing",
    siteName: "Pressure Titans",
    locale: "en_US",
    type: "website",
  },
};

const faqs = [
  {
    question: "How much does pressure washing cost in Minnetonka?",
    answer:
      "Pricing depends on the surface type, size, and condition. Most residential driveways in Minnetonka run $150–$300, and house washes typically range $200–$500. We provide free on-site quotes with no hidden fees.",
  },
  {
    question: "Is pressure washing safe for all surfaces?",
    answer:
      "We adjust our methods for every surface. Hard surfaces like concrete and brick get high-pressure cleaning, while siding, roofs, and delicate surfaces get soft washed with low pressure and eco-friendly solutions.",
  },
  {
    question:
      "How often should I have my house pressure washed in Minnetonka?",
    answer:
      "We recommend annual exterior cleaning for most Minnetonka homes. Gutters should be cleaned twice a year — spring and fall. Driveways and walkways benefit from yearly cleaning to prevent algae and staining.",
  },
  {
    question: "Do you offer free estimates in Minnetonka?",
    answer:
      "Yes! Every quote is free with no obligation. We can often provide estimates same-day for Minnetonka homeowners. Call us at (612) 554-8106 or fill out our contact form.",
  },
  {
    question: "What pressure washing services do you offer in Minnetonka?",
    answer:
      "We offer a full range of exterior cleaning services in Minnetonka including pressure washing, soft washing, house washing, gutter cleaning, ice dam removal, holiday lighting, and stain removal.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Pressure Titans",
  description:
    "Professional pressure washing and exterior cleaning services in Minnetonka, MN.",
  telephone: "612-554-8106",
  email: "pressuretitans@gmail.com",
  url: "https://pressuretitans.com",
  areaServed: {
    "@type": "City",
    name: "Minnetonka",
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

export default function MinnetonkaPressureWashingPage() {
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
      <CityPageContent cityName="Minnetonka" faqs={faqs} />
    </>
  );
}
