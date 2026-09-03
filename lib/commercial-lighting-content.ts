import type { LightingCity } from "./commercial-lighting-cities";

export const BASE_URL = "https://pressuretitans.com";
export const COMMERCIAL_LIGHTING_PATH = "/services/commercial-holiday-lighting";

export function cityLightingPath(slug: string) {
  return `/${slug}-christmas-light-installation`;
}

export interface FaqItem {
  question: string;
  answer: string;
}

/** City-aware FAQ set. Order and wording vary a bit by city so pages are not carbon copies. */
export function buildFaqs(city?: LightingCity): FaqItem[] {
  const c = city?.name ?? "Minneapolis";
  const area = city ? `${c} businesses` : "Minneapolis and Twin Cities businesses";
  const base: FaqItem[] = [
    {
      question: `How much does commercial Christmas light installation cost in ${c}?`,
      answer: `Commercial pricing depends on roofline length, building height, the number of trees or features you want lit, and the type of lights. A single storefront is a very different job from a multi-building campus. Every ${c} quote is free, itemized, and includes installation, timers, season-long maintenance, and takedown in one price, so there are no surprise invoices in January.`,
    },
    {
      question: `When should ${area} book holiday lighting?`,
      answer: `September and October. Commercial installs take longer than residential and we schedule them first so your display is up and tested before Thanksgiving. If you are reading this in November, call anyway. We will tell you honestly what is still available.`,
    },
    {
      question: "Do you provide the lights, or do we use ours?",
      answer: `We provide everything: commercial-grade LED lights, clips, extension cords, timers or photocells, and all hardware. Commercial LEDs are brighter and far more durable than retail strands, and they draw a fraction of the power. If you have an existing display you like, we can inspect it and incorporate what is still in good shape.`,
    },
    {
      question: "What happens if a section goes out in the middle of December?",
      answer: `Call or text us and we come back and fix it, at no extra charge, for the entire season. Season-long maintenance is built into every commercial quote. Your display should never be half-lit while customers are walking past.`,
    },
    {
      question: `Are you insured to work on commercial buildings in ${c}?`,
      answer: `Yes. Pressure Titans is fully insured for commercial and residential work, and we are happy to send a certificate of insurance to your property manager or landlord before we start. Our crew handles all ladder and lift work, so your employees never have to.`,
    },
    {
      question: "Do you handle takedown and storage?",
      answer: `Yes. After the holidays we take everything down, label it, and can store it for you so next year is a single phone call. Takedown is included in the quote.`,
    },
  ];

  if (!city) return base;

  // Rotate so different cities lead with different questions (helps avoid near-duplicate FAQ blocks)
  const offset = city.name.length % base.length;
  return [...base.slice(offset), ...base.slice(0, offset)];
}

export function buildServiceSchema(city?: LightingCity) {
  const cityName = city?.name ?? "Minneapolis";
  const url = city ? `${BASE_URL}${cityLightingPath(city.slug)}` : `${BASE_URL}${COMMERCIAL_LIGHTING_PATH}`;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Commercial Christmas Light Installation ${cityName}`,
    serviceType: "Commercial Holiday Lighting Installation",
    url,
    provider: {
      "@type": "LocalBusiness",
      name: "Pressure Titans",
      telephone: "(612) 554-8106",
      email: "pressuretitans@gmail.com",
      url: BASE_URL,
      image: `${BASE_URL}/images/projects/newholiday1.webp`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Minneapolis",
        addressRegion: "MN",
        addressCountry: "US",
      },
    },
    areaServed: {
      "@type": "City",
      name: cityName,
      containedIn: { "@type": "State", name: "Minnesota" },
    },
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Business owners, property managers, and HOAs",
    },
    description: `Commercial Christmas light and holiday lighting installation for ${cityName} storefronts, offices, restaurants, HOAs, and commercial properties. Design, commercial-grade LEDs, installation, timers, season-long maintenance, and takedown included.`,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Commercial Holiday Lighting",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Roofline and building outline lighting" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tree wrapping and landscape lighting" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Storefront and entrance displays" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wreaths, garland, and greenery" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Season-long maintenance" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Takedown and storage" } },
      ],
    },
  };
}

export function buildFaqSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function buildBreadcrumbSchema(city?: LightingCity) {
  const items = [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Commercial Holiday Lighting", item: `${BASE_URL}${COMMERCIAL_LIGHTING_PATH}` },
  ];
  if (city) {
    items.push({
      "@type": "ListItem",
      position: 3,
      name: `${city.name} Christmas Light Installation`,
      item: `${BASE_URL}${cityLightingPath(city.slug)}`,
    });
  }
  return { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: items };
}
