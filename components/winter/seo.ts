// Search copy for Variant B. Phrases come from the keyword research in the vault:
//   business/clients/pressure-titans/seo/keywords-commercial-lighting.md and business/clients/fcr-cleaning/seo/keywords-lighting-terms.md
// (christmas light installation near me 14.8K/mo · holiday lighting for house 12.1K · installation cost/price/pricing 5.4K ·
//  installation company/service 2.9K · hanging service 880 · holiday lighting company 590, plus the local gems).
// Every claim here is one Mike already makes on his live site or told us himself. No prices, years or counts that were not given.
import { CITIES, LIVE } from "./siteData";

export type Faq = { q: string; a: string };
export type Block = { h: string; p: string[] };

export const TITLE = "Pressure Titans";
export const PHONE_E164 = "+16125548106";

const near = (c?: string) => (c ? `in ${c}, MN` : "in Minnesota");

/** City-aware FAQ set: the real answers from Mike's site, plus the long-tail questions people actually search. */
export function faqsFor(place?: string, commercial = false): Faq[] {
  const p = place ?? "Minneapolis";
  const loc = place ? `${place}, MN` : "Minnesota";
  const base: Faq[] = [
    { q: `How much does Christmas light installation cost in ${loc}?`, a: `Christmas light installation cost depends on the size of your property and roofline length, the type of lights (LED, C9 or mini), how complex the design is, whether we light trees and bushes, and how high and accessible the install areas are. We give a free Christmas light installation quote after a design consultation, with a detailed breakdown, so you know exactly what the pricing covers. Installation, season-long maintenance and takedown are all included in one price.` },
    { q: `Is there a Christmas light installation company near me in ${p}?`, a: `Yes. Pressure Titans is a Christmas light installation company serving ${p} and the west metro, including Minneapolis, St. Paul and the Twin Cities. Our professional Christmas light installers design, hang, maintain and take down your lights, so you can skip the ladder.` },
    { q: `When should I book Christmas light installers in ${p}?`, a: `The earlier, the better. We start booking for the holiday season in September and October. Early bookings get priority scheduling and the widest selection of design options. If you wait until November, availability is limited and you risk not having your display ready for the start of the season.` },
    { q: "Do you provide the lights or do I need to supply them?", a: "We provide everything: lights, clips, extension cords, timers and all hardware. We use commercial-grade LED lights that are brighter, more energy-efficient and longer-lasting than retail options. If you have existing lights you love, we are happy to incorporate them into the design." },
    { q: "What if a light burns out or a strand falls down?", a: "We include full maintenance throughout the season at no extra charge. If you notice a burnt bulb, a flickering section, or anything that does not look right, call or text us and we will come out to fix it promptly. Your display stays looking perfect from day one through takedown." },
    { q: "Do you offer colored Christmas lights?", a: "Yes. We offer pretty much every color of the rainbow: red, orange, yellow, green, blue, indigo and violet, plus classic warm white, in LED and C9 styles. The one thing we do not do is color-changing lights." },
    { q: `Can you wrap trees and light my roofline in ${p}?`, a: `Yes. We install outdoor Christmas lights on rooflines, gables, eaves, porches, windows, bushes and trees, and we wrap trunks and limbs so the whole tree glows. Tell us what you want lit and we will design it.` },
    { q: "Do you install holiday lighting on commercial properties?", a: "Yes. We work with storefronts, office buildings, restaurants, HOAs and commercial properties of all sizes. We handle the entire process: design, installation, maintenance and takedown." },
    { q: "How do I get a Christmas light installation estimate?", a: "Call, text or send us a quote request with your address. We visit your property, take measurements and create a custom lighting plan with a clear quote. The estimate is free, and the breakdown shows installation, maintenance and takedown in one price." },
    { q: "Do you take the lights down and store them?", a: "Yes. When the season is over we take everything down, organize it and leave your property spotless. We can also store your lights for the off-season so next year is one phone call." },
  ];
  if (!commercial) return base;
  return [
    { q: `How much does commercial Christmas light installation cost in ${loc}?`, a: `Commercial pricing depends on roofline length, building height, the number of trees or features you want lit, and the type of lights. A single storefront is a very different job from a multi-building campus. Every ${p} quote is free, itemized, and includes installation, timers, season-long maintenance and takedown in one price, so there are no surprise invoices in January.` },
    { q: `Where can I find commercial Christmas lights near me in ${p}?`, a: `Pressure Titans installs commercial Christmas lights and commercial holiday lighting for storefronts, offices, restaurants, HOAs and commercial properties in ${p}, Minneapolis, St. Paul and across the Twin Cities. We design it, install it, maintain it and take it down.` },
    ...base.filter((f) => /commercial|insured|provide|burns|takedown|colored|book/i.test(f.q) === true).slice(0, 5),
    { q: `Are you insured to work on commercial buildings in ${p}?`, a: "Yes. Pressure Titans is fully insured for commercial and residential work, and we are happy to send a certificate of insurance to your property manager or landlord before we start. Our crew handles all ladder and lift work, so your employees never have to." },
  ];
}

/** The keyword-rich body sections: near me, cost, outdoor lights for house and trees, company and service. */
export function blocks(place?: string, kind: "home" | "holiday" | "commercial" | "city" = "home"): Block[] {
  const loc = place ? `${place}, MN` : "Minnesota";
  const p = place ?? "Minneapolis";
  if (kind === "commercial") {
    return [
      { h: `Commercial Christmas light installation near me in ${p}`, p: [
        `Looking for commercial Christmas lights near me? Pressure Titans is the commercial Christmas light installation company ${near(place)} that storefronts, restaurants, offices, HOAs and property managers call first. We handle commercial holiday lighting from the first walkthrough to the January takedown, so nobody on your staff touches a ladder.`,
        `Our commercial holiday lighting service covers rooflines, entrances, windows, trees, wreaths and garland, using commercial Christmas lights LED built to run every night through a Minnesota winter. Ask about outdoor Christmas lights for business, commercial Christmas light installation near me, and Christmas light installers near me for Minneapolis, St. Paul and across the Twin Cities. We also provide Christmas light installation in Minnesota for HOAs and property managers.`] },
      { h: "Commercial Christmas light installation cost", p: [
        `Commercial Christmas light installation cost depends on your roofline length, building height, how many trees or features you want lit, and the type of lights. Every quote is free and itemized, with installation, timers, season-long maintenance and takedown in a single price. Request a commercial Christmas light installation quote or estimate and we will send a breakdown within a day or two.`] },
      { h: "A holiday lighting company that stays all season", p: [
        `Our commercial holiday lighting service includes season-long maintenance at no extra charge, so a burnt bulb or a loose strand never leaves your building half lit. We are fully insured for commercial work and can send a certificate of insurance before we start. Book in September or October and your commercial Christmas light display is up and tested before Thanksgiving.`] },
    ];
  }
  const A: Block = { h: `Christmas light installation near me ${near(place)}`, p: [
    `Searching for Christmas light installation near me? Pressure Titans is a Christmas light installation company for homeowners and businesses ${place ? `in ${p} and` : "across"} Minneapolis, St. Paul, the Twin Cities and the west metro. Our professional Christmas light installers design, hang, maintain and take down your holiday lighting, so you get a complete Christmas light installation service without the ladder.`,
    `If you are looking for Christmas light installers near me, holiday light installers near me, holiday light installation near me, holiday lighting installation near me, a holiday lighting company near me, or a Christmas light hanging service near me, that is exactly what we do. One crew, one quote, from the design consultation to the takedown.`,
    `Need professional Christmas light installation near me, a Christmas decorating service near me, or a Christmas light installation service near me? We also provide Christmas light installation in Minneapolis, Christmas light installers in Minnesota, and holiday light installation across the Twin Cities.`] };
  const B: Block = { h: `Christmas light installation cost ${place ? `in ${p}` : "in Minnesota"}`, p: [
    `Wondering what Christmas light installation costs? The Christmas light installation price depends on your property: the size of the house and roofline length, the type of lights (LED, C9 or mini), how complex the design is, whether we light trees and landscaping, and how high and accessible the install areas are.`,
    `Whether you are comparing Christmas light installation pricing, holiday light installation cost, or what professional Christmas lights cost per house, we give you a free Christmas light installation quote and estimate with a detailed breakdown before we start. Installation, maintenance and takedown are one price, so your Christmas lights installed cost has no surprises.`] };
  const C: Block = { h: `Outdoor Christmas lights for your house, roofline and trees`, p: [
    `We install holiday lighting for house exteriors and outdoor Christmas lights for house fronts: outdoor Christmas lights for roofline, gables, eaves, porches, windows and bushes. Choose commercial-grade LED outdoor Christmas lights in classic warm white or any color of the rainbow, including C9 Christmas lights in white or colored, and we will design a display that fits your home.`,
    `We also wrap trees. Hanging Christmas lights for trees, from trunks to limbs, makes outdoor Christmas lights for trees glow from the inside. Need outdoor Christmas lights for business? We light storefronts, offices and HOA entrances too. We do not offer color-changing lights, and we do not need you to.`] };
  const D: Block = { h: "A Christmas decorating service and holiday lighting company you can count on", p: [
    `Think of Pressure Titans as your Christmas light setup company, your Christmas light setup service and your Christmas light decorators for hire: a custom design consultation, professional installation, season-long maintenance, complete takedown and light storage. Our holiday light installation service and holiday lighting service are built so the work is done once, done right, and done for you.`,
    `Ask about our Christmas light installation packages for homes and for commercial properties, or request a free Christmas light installation estimate. We would be glad to be the Christmas light installation company you recommend to the neighbors.`] };
  return kind === "city" ? [A, B, C, D] : [A, B, C, D];
}

export const titleFor = {
  home: "Christmas Light Installation Near Me | Minneapolis, MN | Pressure Titans",
  holiday: "Christmas Light Installation Minnesota | Holiday Lighting Company | Pressure Titans",
  commercial: "Commercial Christmas Light Installation in Minnesota | Pressure Titans",
  city: (c: string) => `Christmas Light Installation ${c} MN | Holiday Light Installers Near Me | Pressure Titans`,
};
export const descFor = {
  home: "Christmas light installation near me: professional Christmas light installers for homes and businesses across Minneapolis, St. Paul and Minnesota. Design, install, maintenance and takedown. Free quote.",
  holiday: "Holiday lighting company in Minnesota: Christmas light installation for your house, roofline and trees. Custom design, professional installers, season-long maintenance and takedown. Free estimate.",
  commercial: "Commercial Christmas light installation near me: storefronts, offices, restaurants and HOAs in Minneapolis and the Twin Cities. Commercial-grade LEDs, install, maintenance and takedown in one quote.",
  city: (c: string) => `Christmas light installation in ${c}, MN. Professional Christmas light installers near me: design, hanging, maintenance and takedown for homes and businesses. Colored and white LED lights. Free quote.`,
};

/** JSON-LD for a page: the business as a Service, plus FAQPage. */
export function jsonLd(opts: { name: string; description: string; url: string; area?: string; faqs: Faq[] }) {
  const areas = opts.area ? [{ "@type": "City", name: opts.area }] : [{ "@type": "City", name: "Minneapolis" }, { "@type": "City", name: "St. Paul" }, { "@type": "AdministrativeArea", name: "Twin Cities metro" }];
  return [
    {
      "@context": "https://schema.org", "@type": "Service", name: opts.name, serviceType: "Christmas light installation", description: opts.description, url: opts.url,
      provider: { "@type": "LocalBusiness", name: TITLE, telephone: "(612) 554-8106", email: "pressuretitans@gmail.com", url: LIVE, image: `${LIVE}/images/projects/newholiday1.webp`, address: { "@type": "PostalAddress", addressLocality: "Excelsior", addressRegion: "MN", addressCountry: "US" } },
      areaServed: areas,
      hasOfferCatalog: { "@type": "OfferCatalog", name: "Holiday lighting", itemListElement: ["Custom design consultation", "Professional installation", "Season-long maintenance", "Complete takedown", "Light storage", "Commercial displays"].map((n) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: n } })) },
    },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: opts.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ];
}

export const cityLinks = CITIES.map((c) => ({ n: c.n, s: c.s }));
