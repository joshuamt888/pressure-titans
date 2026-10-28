export type QA = { question: string; answer: string };
const PHONE = "(612) 554-8106";

export const crumbs = (trail: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: trail.map((t, i) => ({ "@type": "ListItem", position: i + 1, name: t.name, item: `https://pressuretitans.com${t.path}` })),
});
export const faqLd = (items: QA[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((q) => ({ "@type": "Question", name: q.question, acceptedAnswer: { "@type": "Answer", text: q.answer } })),
});

/** Five more questions for each pressure washing city page, from services and answers already on the site. */
export const cityExtra = (city: string): QA[] => [
  { question: `Do you do soft washing in ${city}?`, answer: `Yes. Siding, roofs and delicate surfaces get soft washed with low pressure, while hard surfaces like concrete and brick get high-pressure cleaning.` },
  { question: `Do you clean gutters in ${city}?`, answer: `Yes. Gutter cleaning is one of our core services, and we recommend cleaning gutters twice a year, in spring and fall.` },
  { question: `Do you offer ice dam removal in ${city}?`, answer: `Yes. Ice dam removal is one of our exterior services for ${city} homeowners. Call ${PHONE} if you have ice building up on your roofline.` },
  { question: `Can you restore a deck in ${city}?`, answer: `Yes. Deck restoration is one of our services, alongside pressure washing, soft washing and house washing.` },
  { question: `Is Pressure Titans insured?`, answer: `Yes. Pressure Titans is fully insured for residential and commercial work, and we are happy to send a certificate of insurance on request.` },
];

export const contactFaqs: QA[] = [
  { question: "How do I get a free quote?", answer: `Send us the address through the form, or call or text ${PHONE}. We reply within 24 hours, usually the same day, with a clear, itemized quote.` },
  { question: "How fast will you reply?", answer: "We reply within 24 hours, usually the same day." },
  { question: "What services does Pressure Titans offer?", answer: "Pressure washing, soft washing, house washing, gutter cleaning, ice dam removal, deck restoration, and holiday and commercial lighting." },
  { question: "What are your hours?", answer: `We are open Monday to Saturday, 7 AM to 7 PM. Call or text ${PHONE}.` },
  { question: "Where is Pressure Titans based?", answer: "We are based in Minneapolis, MN, and serve the Twin Cities metro." },
  { question: "Is the estimate free?", answer: "Yes. Every quote is free with no obligation, and you receive an itemized quote so you know exactly what you are paying for." },
  { question: "Is Pressure Titans insured?", answer: "Yes. Pressure Titans is fully insured for residential and commercial work." },
  { question: "When should I book holiday lighting?", answer: "The earlier, the better. We start booking for the holiday season in September and October, and early bookings get priority scheduling." },
];

export const portfolioFaqs: QA[] = [
  { question: "What does the portfolio show?", answer: "Before and after results from Pressure Titans: driveways, decks, siding, walkways, gutters and more, transformed by professional pressure washing and exterior cleaning." },
  { question: "Can you get my driveway or deck looking like this?", answer: `Probably. Every surface is different, so we visit, assess it and give you a free quote. Call or text ${PHONE}.` },
  { question: "Do you serve my city?", answer: "We serve the Twin Cities metro, including Minneapolis, Minnetonka, Eden Prairie, Chanhassen, Excelsior, Wayzata and many nearby cities. See our city pages for the full list." },
  { question: "What services can I get?", answer: "Pressure washing, soft washing, house washing, gutter cleaning, ice dam removal, deck restoration, and holiday and commercial lighting." },
  { question: "Is the estimate free?", answer: "Yes. Every quote is free with no obligation." },
  { question: "Is Pressure Titans insured?", answer: "Yes. Pressure Titans is fully insured for residential and commercial work." },
];

/** More questions for the shorter service pages, from facts already on the site. */
export const serviceExtra: QA[] = [
  { question: "Is Pressure Titans insured?", answer: "Yes. Pressure Titans is fully insured for residential and commercial work, and we are happy to send a certificate of insurance on request." },
  { question: "Do you offer free estimates?", answer: `Yes. Every quote is free with no obligation. Call or text ${PHONE}, or send the address through our contact form.` },
  { question: "How soon will you reply?", answer: "We reply within 24 hours, usually the same day, with a clear, itemized quote." },
  { question: "Where do you work?", answer: "We are based in Minneapolis, MN, and serve the Twin Cities metro, including Minnetonka, Eden Prairie, Chanhassen, Excelsior, Wayzata and many nearby cities." },
  { question: "What other services do you offer?", answer: "Pressure washing, soft washing, house washing, gutter cleaning, ice dam removal, deck restoration, and holiday and commercial lighting." },
];
