// Copy for the two lighting service pages, from the live pressuretitans.com pages (holiday-lighting and commercial-holiday-lighting).
export type Item = { name: string; detail: string };
export type Step = { title: string; description: string };
export type Cfg = {
  slug: string;
  kicker: string;
  h1: string[];
  accent: string;
  sub: string;
  quoteLabel: string;
  introTitle: string;
  introAccent: string;
  intro: string[];
  introList?: { title: string; items: string[] };
  photo: string;
  includedTitle: string;
  includedSub: string;
  included: Item[];
  why?: { title: string; items: { title: string; desc: string }[] };
  galleryTitle: string;
  gallerySub: string;
  processTitle: string;
  processSub: string;
  process: Step[];
  pricing?: { title: string; text: string; sub: string; factors: string[] };
  faqs?: { q: string; a: string }[];
};

export const HOLIDAY: Cfg = {
  slug: "holiday-lighting",
  kicker: "Hassle-free holiday displays",
  h1: ["Christmas", "light", "installation"],
  accent: "in Minnesota",
  sub: "Full-service holiday lighting: design, installation, maintenance and takedown. Whether you want a classic, elegant display or a festive, eye-catching setup, we handle everything.",
  quoteLabel: "Get a free estimate",
  introTitle: "Holiday lighting should be enjoyable,",
  introAccent: "not stressful.",
  intro: ["We take the hassle out of the entire process so you can focus on what matters: spending time with family and enjoying a beautiful display."],
  introList: { title: "Why homeowners choose us", items: ["Custom design consultation", "Professional installation (we climb the ladders)", "Full maintenance throughout the season", "Complete takedown and storage", "Residential and commercial properties"] },
  photo: "/winter/work-2.webp",
  includedTitle: "Our holiday lighting services",
  includedSub: "From the first design sketch to the final takedown, we handle every detail of your holiday lighting experience.",
  included: [
    { name: "Custom Design Consultation", detail: "We work with you to create a lighting plan that matches your vision, style and budget." },
    { name: "Professional Installation", detail: "Our crew handles every ladder, clip and connection, safely and securely installed on your home or business." },
    { name: "Season-Long Maintenance", detail: "Burnt bulb? Loose strand? We come back and fix it at no extra charge throughout the season." },
    { name: "Complete Takedown", detail: "When the season is over, we take everything down, organize it, and leave your property spotless." },
    { name: "Light Storage", detail: "We can store your lights for the off-season so they are ready to go next year without any hassle." },
    { name: "Commercial Displays", detail: "Storefronts, office buildings, HOAs and commercial properties. See our commercial Christmas lighting service for displays of any scale." },
  ],
  galleryTitle: "Our work",
  gallerySub: "Real holiday lighting installs by Pressure Titans across the Twin Cities metro.",
  processTitle: "Our process",
  processSub: "From design to takedown, we make holiday lighting easy. Here is exactly what to expect when you work with Pressure Titans.",
  process: [
    { title: "Design Consultation", description: "Tell us your vision: classic white, colorful, elegant or over-the-top festive. We visit your property, take measurements and create a custom lighting plan with a clear quote." },
    { title: "Schedule Installation", description: "We lock in your installation date well before the season starts. Early booking ensures your display is up and glowing when you want it, not scrambling last minute." },
    { title: "We Install", description: "Our crew arrives on schedule with all materials and equipment. We install every strand, clip and timer according to the approved design. You do not lift a finger." },
    { title: "Enjoy & We Maintain", description: "Flip the switch and enjoy your display all season. If anything goes wrong, a burnt bulb or a loose connection, we come back and fix it. After the holidays, we handle the complete takedown." },
  ],
  pricing: {
    title: "Transparent pricing, no surprises",
    text: "Every property and design is different, so we tailor each quote to your specific needs. You get a detailed breakdown before we start, with installation, maintenance and takedown all included in one price.",
    sub: "Here is what we factor into your holiday lighting quote so there are never any surprises.",
    factors: ["Size of the property and roofline length", "Type and quantity of lights (LED, C9, mini, etc.)", "Complexity of the design (roofline only vs. full property)", "Trees, bushes and landscaping features included", "Height and accessibility of installation areas", "Residential vs. commercial property"],
  },
};

const C = "Minneapolis";
export const COMMERCIAL: Cfg = {
  slug: "commercial-holiday-lighting",
  kicker: "Commercial holiday lighting",
  h1: ["Commercial", "Christmas", "light", "installation"],
  accent: "in Minnesota",
  sub: `Storefronts, offices, restaurants, HOAs and commercial properties in ${C}. We design it, install it, maintain it all season and take it down. One quote, one crew, zero ladders for your staff.`,
  quoteLabel: "Request a commercial quote",
  introTitle: `Holiday lights that bring ${C} customers`,
  introAccent: "through the door.",
  intro: ["A lit building is the cheapest advertising a business can buy in December. Minneapolis and Twin Cities storefronts, restaurants, office buildings and HOA communities hire Pressure Titans to design, install and maintain commercial Christmas light displays that look sharp every night from before Thanksgiving through the New Year, without anyone on staff touching a ladder."],
  introList: { title: `Commercial properties we light in ${C}`, items: ["Restaurants, bars and patios", "Retail storefronts and strip centers", "Office buildings and corporate campuses", "HOA entrances and clubhouses", "Churches, schools and community buildings", "Hotels, event venues and apartment communities"] },
  photo: "/winter/work-2.webp",
  includedTitle: "Everything included in your commercial quote",
  includedSub: "Commercial holiday lighting should be one line item on your budget, not six.",
  included: [
    { name: "On-Site Design", detail: "We walk your property, measure rooflines and trees, and design a display that fits your brand, your building and your budget." },
    { name: "Commercial-Grade LEDs", detail: "Brighter, tougher and far more efficient than retail strands. Built to run every night through a Minnesota winter." },
    { name: "Professional Installation", detail: "Our insured crew handles every ladder, lift, clip and connection. Your staff never leaves the ground." },
    { name: "Timers & Photocells", detail: "Your display turns on at dusk and off when you want it to, automatically. Nobody has to remember to flip a switch." },
    { name: "Season-Long Maintenance", detail: "Burnt bulb, loose strand, storm damage: call or text and we come back and fix it at no extra charge, all season." },
    { name: "Takedown & Storage", detail: "In January we take it all down, label it, and can store it for you so next year is one phone call." },
  ],
  why: {
    title: "Built for property managers and business owners",
    items: [
      { title: "One price, everything included", desc: "Design, lights, install, timers, maintenance and takedown in a single quote. No add-ons, no surprise January invoice." },
      { title: "Fully insured for commercial work", desc: "Certificate of insurance available for your property manager or landlord before we set a single ladder." },
      { title: "Installed before the rush", desc: "Commercial jobs get scheduled first. Book in September or October and your display is up and tested before Thanksgiving." },
      { title: "Same crew you already trust", desc: "The team that pressure washes and cleans gutters across the southwest metro all year is the team that hangs your lights." },
    ],
  },
  galleryTitle: "Our holiday lighting work",
  gallerySub: "Real installs by the Pressure Titans crew across the Twin Cities metro.",
  processTitle: "How commercial installs work",
  processSub: "From the first walkthrough to January takedown, here is exactly what to expect.",
  process: [
    { title: "Walkthrough & Quote", description: "We visit your property, measure everything, and send an itemized quote within a day or two. Most commercial quotes are approved by email." },
    { title: "Lock In Your Date", description: "Installs run October through mid-November. Early bookings get first pick of dates and the widest selection of lights and greenery." },
    { title: "We Install & Test", description: "Our crew arrives with everything, installs the full design, sets timers, and tests every strand before we leave. Zero disruption to your business." },
    { title: "Enjoy, Then We Take It Down", description: "Your display runs all season with maintenance included. After the holidays we take everything down and leave the building exactly as we found it." },
  ],
  faqs: [
    { q: `How much does commercial Christmas light installation cost in ${C}?`, a: `Commercial pricing depends on roofline length, building height, the number of trees or features you want lit, and the type of lights. A single storefront is a very different job from a multi-building campus. Every ${C} quote is free, itemized, and includes installation, timers, season-long maintenance, and takedown in one price, so there are no surprise invoices in January.` },
    { q: "When should Minneapolis and Twin Cities businesses book holiday lighting?", a: "September and October. Commercial installs take longer than residential and we schedule them first so your display is up and tested before Thanksgiving. If you are reading this in November, call anyway. We will tell you honestly what is still available." },
    { q: "Do you provide the lights, or do we use ours?", a: "We provide everything: commercial-grade LED lights, clips, extension cords, timers or photocells, and all hardware. Commercial LEDs are brighter and far more durable than retail strands, and they draw a fraction of the power. If you have an existing display you like, we can inspect it and incorporate what is still in good shape." },
    { q: "What happens if a section goes out in the middle of December?", a: "Call or text us and we come back and fix it, at no extra charge, for the entire season. Season-long maintenance is built into every commercial quote. Your display should never be half-lit while customers are walking past." },
    { q: `Are you insured to work on commercial buildings in ${C}?`, a: "Yes. Pressure Titans is fully insured for commercial and residential work, and we are happy to send a certificate of insurance to your property manager or landlord before we start. Our crew handles all ladder and lift work, so your employees never have to." },
    { q: "Do you handle takedown and storage?", a: "Yes. After the holidays we take everything down, label it, and can store it for you so next year is a single phone call. Takedown is included in the quote." },
  ],
};
