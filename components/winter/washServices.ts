import type { WashCfg } from "./WashService";

// Copy, FAQs, image paths and alt text moved word for word from app/services/{slug}/page.tsx (the summer pages stay as they are).

export const pressureWashing: WashCfg = (() => {

const cleaningItems = [
  { name: "Driveways", detail: "Concrete, asphalt & paver driveways restored to like-new condition" },
  { name: "Sidewalks & Walkways", detail: "Remove grime, algae, and discoloration from all walkway surfaces" },
  { name: "Patios", detail: "Concrete patios, flagstone, and paver patios deep-cleaned and brightened" },
  { name: "Concrete Surfaces", detail: "Garage floors, retaining walls, and foundation walls" },
  { name: "Pavers & Brick", detail: "Restore original color and remove moss, mildew, and staining" },
  { name: "Decks & Porches", detail: "Wood, composite, and Trex decks safely cleaned without damage" },
  { name: "Fences", detail: "Wood, vinyl, and chain-link fences made to look brand new" },
  { name: "Pool Decks", detail: "Slip-resistant cleaning that removes buildup safely" },
];

const processSteps = [
  {
    step: 1,
    title: "Free Estimate",
    description:
      "Send us photos or schedule an on-site visit. We assess the surfaces, measure the area, and give you a clear, no-obligation quote within 24 hours.",
  },
  {
    step: 2,
    title: "Schedule Your Service",
    description:
      "Pick a date and time that works for you. We confirm everything in advance so there are no surprises on cleaning day.",
  },
  {
    step: 3,
    title: "We Clean",
    description:
      "Our crew arrives on time with commercial-grade equipment. We pre-treat surfaces, apply the right PSI for each material, and work methodically across the area.",
  },
  {
    step: 4,
    title: "You Inspect",
    description:
      "Walk the property with us when we finish. If anything does not meet your expectations, we address it on the spot before we leave.",
  },
];

const pricingFactors = [
  "Total square footage of the area being cleaned",
  "Surface type (concrete, pavers, brick, wood, composite)",
  "Level of staining, mildew, or buildup present",
  "Accessibility and proximity to landscaping or structures",
  "Whether pre-treatment or sealing is needed after cleaning",
  "Residential vs. commercial property",
];

const faqs = [
  {
    q: "How much does pressure washing a driveway cost in Minneapolis?",
    a:
      "Driveway pressure washing in Minneapolis typically ranges depending on square footage, surface condition, and stain severity. We provide free, itemized estimates so you know exactly what you are paying for. Most standard residential driveways fall within a competitive range that our customers find fair and transparent.",
  },
  {
    q: "Will pressure washing damage my concrete or pavers?",
    a:
      "Not when done correctly. We calibrate our equipment to the appropriate PSI for each surface type. Concrete can handle higher pressure, while pavers and brick require a more careful approach. Our technicians are trained to clean effectively without causing etching, pitting, or joint erosion.",
  },
  {
    q: "How often should I have my driveway or patio pressure washed?",
    a:
      "In Minnesota, we recommend annual pressure washing for most outdoor surfaces. The freeze-thaw cycle, road salt, tree debris, and humidity create the perfect environment for mold, algae, and staining to build up quickly. Annual cleaning keeps surfaces looking great and extends their lifespan.",
  },
  {
    q: "Do you use any chemicals or is it just water?",
    a:
      "We use a combination of high-pressure water and eco-friendly, biodegradable cleaning solutions. For heavy buildup like algae, mildew, or ground-in grime, pre-treatment solutions break it down so the pressure washing can remove it completely. All products we use are safe for pets, plants, and lawns.",
  },
];


const galleryImages = [
  {
    src: "/images/projects/pw-gallery-1.webp",
    alt: "Before and after pressure washing showing clean concrete surfaces",
  },
  {
    src: "/images/projects/pw-gallery-2.webp",
    alt: "Before and after pressure washing showing restored surfaces",
  },
  {
    src: "/images/projects/pw-dumpster-pad.webp",
    alt: "Before and after commercial pressure washing of a concrete dumpster pad with grease and grime removed",
  },
  {
    src: "/images/projects/pw-driveway-garage.webp",
    alt: "Before and after concrete driveway pressure washing in front of a brick garage with stains removed",
  },
];

  return {
    slug: "pressure-washing",
    badge: "Our Most Popular Service",
    h1a: "Pressure Washing",
    sub: "Driveways, sidewalks, patios, decks, and fences transformed with commercial-grade pressure washing. We bring the power — you get the results.",
    itemsTitle: "What We Pressure Wash",
    itemsSub: "If it is an outdoor surface, chances are we can clean it. Here is everything our pressure washing service covers.",
    galleryTitle: "Before & After Results",
    gallerySub: "Real projects from Minneapolis homes and businesses. No filters, no tricks — just the difference professional pressure washing makes.",
    processSub: "Simple, straightforward, and stress-free. Here is how every pressure washing job works from start to finish.",
    pricingTitle: "Transparent Pricing, No Surprises",
    p1: "Every property is different, so we do not believe in one-size-fits-all pricing. Instead, we assess your specific situation and give you an honest quote that reflects the actual work involved.",
    p2: "Here are the main factors that affect your pressure washing quote. We walk through each one with you so the price always makes sense.",
    faqTitle: "Pressure Washing FAQs",
    faqSub: "Common questions we get from Minneapolis homeowners about our pressure washing services.",
    ctaTitle: "Get Your Free Pressure Washing Quote",
    ctaText: "Ready to see what your driveway, patio, or deck is supposed to look like? We will give you an honest quote with zero pressure.",
    items: cleaningItems,
    gallery: galleryImages,
    steps: processSteps,
    factors: pricingFactors,
    faqs,
    crumb: { name: "Pressure Washing Minneapolis", path: "/services/pressure-washing" },

  };
})();

export const houseWashing: WashCfg = (() => {

const cleaningItems = [
  {
    name: "Vinyl Siding",
    detail: "Remove green algae, mildew streaks, and oxidation that make vinyl look aged and dull",
  },
  {
    name: "Stucco Exteriors",
    detail: "Gentle cleaning that lifts embedded dirt and biological growth without damaging the texture",
  },
  {
    name: "Wood Siding & Shakes",
    detail: "Safe low-pressure wash that cleans cedar, pine, and hardwood without splintering or stripping",
  },
  {
    name: "Soffits & Fascia",
    detail: "Clean the underside of roof overhangs and trim boards that collect cobwebs and insect nests",
  },
  {
    name: "Windows & Trim",
    detail: "Exterior window frames, shutters, and decorative trim cleaned alongside the siding",
  },
  {
    name: "Foundation Walls",
    detail: "Remove splash-back staining, efflorescence, and dirt from exposed foundation surfaces",
  },
];

const processSteps = [
  {
    step: 1,
    title: "Free Estimate",
    description:
      "We assess your home's exterior — the siding material, square footage, amount of buildup, and any areas of concern. You get a clear quote with no obligations.",
  },
  {
    step: 2,
    title: "Schedule",
    description:
      "Pick a date and time that works for you. We send a confirmation and reminder ahead of your appointment so you always know when to expect us.",
  },
  {
    step: 3,
    title: "We Clean",
    description:
      "We apply our biodegradable cleaning solution, let it dwell to break down algae and grime, then rinse at low pressure. The result is a deep clean that is safe for every surface.",
  },
  {
    step: 4,
    title: "You Inspect",
    description:
      "Walk the perimeter with us. We point out what we cleaned, any areas of concern we noticed, and make sure you are completely satisfied before we pack up.",
  },
];

const pricingFactors = [
  "Total square footage of exterior wall area",
  "Siding material (vinyl, stucco, wood, brick, stone)",
  "Severity of algae, mildew, or staining",
  "Number of stories and height of the structure",
  "Landscaping proximity and surface protection needed",
  "Additional areas like detached garages or outbuildings",
];

const faqs = [
  {
    q: "What is the difference between house washing and pressure washing?",
    a:
      "House washing, also called soft washing, uses low-pressure water combined with specialized cleaning solutions to safely clean siding and exterior surfaces. Traditional pressure washing uses high-pressure water, which is great for hard surfaces like concrete but can damage siding, strip paint, and force water behind your walls. For house exteriors, soft washing is the correct and safer method.",
  },
  {
    q: "Is soft washing safe for all types of siding?",
    a:
      "Yes. Soft washing is designed specifically for delicate exterior surfaces. Whether your home has vinyl, stucco, wood, brick, or stone siding, our low-pressure approach and biodegradable cleaning agents clean effectively without risking damage. We adjust our solution concentration and dwell time based on the material for the best results.",
  },
  {
    q: "How long does a house washing take?",
    a:
      "A typical single-family home in Minneapolis takes 2 to 4 hours depending on size, siding type, and the amount of buildup. Multi-story homes or properties with heavy algae growth may take slightly longer. We always give you a time estimate during the quoting process so you can plan your day.",
  },
  {
    q: "Will house washing remove the green and black streaks on my siding?",
    a:
      "Absolutely. Those green and black streaks are algae, mold, and mildew — and they are exactly what our soft wash process is designed to eliminate. The cleaning solution we apply kills the growth at the root, not just on the surface, which means the results last significantly longer than rinsing with water alone.",
  },
  {
    q: "How often should I have my house washed?",
    a:
      "For most Minneapolis homes, we recommend house washing every 1 to 2 years. Homes on the north side of trees or in heavily shaded areas may benefit from annual cleaning since those conditions accelerate algae and mildew growth. Regular cleaning maintains your curb appeal and prevents long-term discoloration from setting in.",
  },
];


const galleryImages = [
  {
    src: "/images/projects/hw-siding-eave.webp",
    alt: "Before and after soft washing vinyl siding under the eaves showing algae removal results",
  },
  {
    src: "/images/projects/hw-gallery-2.webp",
    alt: "Before and after siding wash showing restored exterior",
  },
  {
    src: "/images/projects/hw-siding-window.webp",
    alt: "Before and after house washing showing mildew removed from vinyl siding below a window",
  },
];

  return {
    slug: "house-washing",
    badge: "Soft Wash Specialists",
    h1a: "House Washing",
    sub: "Restore your home's curb appeal with our professional soft wash service. Safe for vinyl, stucco, wood, and brick — tough on algae, mildew, and grime.",
    itemsTitle: "What We Clean on Your Home",
    itemsSub: "A full house wash covers every visible exterior surface. We do not skip the details — your entire home gets the treatment.",
    galleryTitle: "Before & After Results",
    gallerySub: "The transformation speaks for itself. These are real Minneapolis homes cleaned by our soft wash team.",
    processSub: "Professional house washing done right. Here is how we take your home from dingy to done.",
    pricingTitle: "Clear Pricing, No Guesswork",
    p1: "Every home is different — a rambler with vinyl siding is a different job than a two-story stucco. We price based on what your home actually needs, not a generic formula.",
    p2: "We walk you through every factor so the price always makes sense. No hidden fees, no inflated quotes, no bait-and-switch.",
    faqTitle: "House Washing FAQs",
    faqSub: "Everything you need to know about our house washing and soft wash services in Minneapolis.",
    ctaTitle: "Get Your Free House Washing Quote",
    ctaText: "Your home deserves to look its best. Let us bring back the curb appeal with a professional soft wash that lasts.",
    items: cleaningItems,
    gallery: galleryImages,
    steps: processSteps,
    factors: pricingFactors,
    faqs,
    crumb: { name: "House Washing Minneapolis", path: "/services/house-washing" },

  };
})();

export const deckRestoration: WashCfg = (() => {

const serviceItems = [
  {
    name: "Deck Washing",
    detail: "Low-pressure washing that strips away algae, mold, and gray weathered buildup without damaging wood fibers",
  },
  {
    name: "Stain & Seal",
    detail: "Premium penetrating stains applied after proper prep and dry time — protection and rich color that lasts",
  },
  {
    name: "Hardwood Restoration",
    detail: "Specialized care for ipe, teak, and other exotic hardwoods — from silvered gray back to deep natural tone",
  },
  {
    name: "Cedar Deck Revival",
    detail: "Cedar-safe cleaning and stain systems that bring out the warm golden grain without fuzzing the wood",
  },
  {
    name: "Composite Deck Cleaning",
    detail: "Manufacturer-approved methods for Trex and other composite decking that remove grime without voiding warranties",
  },
  {
    name: "Docks & Outdoor Furniture",
    detail: "Lakeshore docks, boardwalk panels, teak furniture, and pergolas cleaned and refinished to match your deck",
  },
];

const galleryItems = [
  {
    src: "/images/projects/cedar-deck-strip-golden-stain-before-after.webp",
    label: "Cedar Deck — Strip & Stain",
    alt: "Before and after cedar deck stripping and golden stain application in Minneapolis",
  },
  {
    src: "/images/projects/ipe-lake-deck-restore-before-after.webp",
    label: "Ipe Lake Deck Restoration",
    alt: "Before and after ipe hardwood lakeside deck restoration from gray to rich brown",
  },
  {
    src: "/images/projects/cedar-deck-wash-natural-stain-before-after.webp",
    label: "Cedar Deck — Wash & Stain",
    alt: "Before and after cedar deck cleaning and natural stain finish",
  },
  {
    src: "/images/projects/ipe-porch-deck-restain-white-railing-before-after.webp",
    label: "Covered Porch Deck",
    alt: "Before and after ipe porch deck restaining with white railings on the lake",
  },
  {
    src: "/images/projects/lakeside-deck-wash-dark-stain-before-after.webp",
    label: "Lakeside Deck — Dark Stain",
    alt: "Before and after lakeside deck washing and dark stain application",
  },
  {
    src: "/images/projects/ipe-steps-bluestone-border-restain-before-after.webp",
    label: "Deck Steps & Border",
    alt: "Before and after ipe deck steps and border restaining next to bluestone patio",
  },
  {
    src: "/images/projects/ipe-deck-restain-adirondack-chairs-before-after.webp",
    label: "Ipe Deck Refinish",
    alt: "Before and after ipe deck refinishing with white Adirondack chairs",
  },
  {
    src: "/images/projects/composite-balcony-deck-wash-before-after.webp",
    label: "Composite Balcony",
    alt: "Before and after composite balcony deck cleaning",
  },
  {
    src: "/images/projects/lakeshore-dock-panels-staining-crew-before-after.webp",
    label: "Lakeshore Dock Panels",
    alt: "Before and after lakeshore dock panel staining by the Pressure Titans crew",
  },
  {
    src: "/images/projects/deck-wash-action-shot-crew-before-after.webp",
    label: "Deck Wash in Progress",
    alt: "Pressure Titans crew washing a cedar deck with finished result",
  },
  {
    src: "/images/projects/teak-fire-table-restore-before-after.webp",
    label: "Teak Fire Table",
    alt: "Before and after teak fire table restoration on a lakeside deck",
  },
  {
    src: "/images/projects/teak-deck-chair-restore-before-after.webp",
    label: "Teak Deck Chair",
    alt: "Before and after teak deck chair cleaning and restoration",
  },
];

const processSteps = [
  {
    step: 1,
    title: "Free Assessment",
    description:
      "Send us photos or schedule a walkthrough. We identify your decking material, its condition, and whether it needs a wash, a full strip, or stain — then quote it upfront.",
  },
  {
    step: 2,
    title: "Deep Clean & Prep",
    description:
      "We wash the deck with wood-safe pressure and solutions matched to the material, removing gray fibers, algae, and old failing finish so the new stain can bond.",
  },
  {
    step: 3,
    title: "Dry Time & Stain",
    description:
      "After the wood dries to the right moisture level, we apply premium penetrating stain by hand — full boards, even coats, no lap marks or puddling.",
  },
  {
    step: 4,
    title: "Final Walkthrough",
    description:
      "We inspect every board with you, touch up anything that needs it, and leave you with care tips so the finish lasts for seasons to come.",
  },
];

const pricingFactors = [
  "Deck size and number of levels",
  "Material (cedar, ipe, teak, pressure-treated, composite)",
  "Condition — light wash vs. full strip and restore",
  "Stain type and finish (transparent, semi-transparent, solid)",
  "Railings, stairs, benches, and built-ins",
  "Add-ons like docks, pergolas, and outdoor furniture",
];

const faqs = [
  {
    q: "Should I clean my deck or fully restain it?",
    a:
      "It depends on the condition of the wood and the existing finish. If the stain is mostly intact and the deck just looks dirty or green, a professional wash may be all you need. If the wood has grayed, the finish is flaking, or water no longer beads on the surface, it is time for a clean and restain. We assess this during your free estimate and only recommend what your deck actually needs.",
  },
  {
    q: "Can you restore a gray, weathered deck?",
    a:
      "Yes — this is one of our specialties. Gray wood is sun-damaged surface fiber, not rot. We remove that weathered layer with wood-safe cleaning, then apply a penetrating stain that brings back the natural color. Cedar comes back golden, ipe and teak return to their rich brown tones. The transformations are dramatic.",
  },
  {
    q: "Do you work on hardwood decks like ipe and teak?",
    a:
      "Absolutely. Exotic hardwoods like ipe and teak are dense and need different products and techniques than cedar or pressure-treated pine. We use hardwood-specific cleaners and penetrating oils designed for dense grain. We also restore teak outdoor furniture and lakeshore dock panels to match.",
  },
  {
    q: "Is pressure washing safe for my deck?",
    a:
      "When done correctly, yes. Wood should never be blasted with high pressure — that gouges and fuzzes the boards. We use low-pressure washing combined with wood-safe cleaning solutions that do the work chemically instead of mechanically. Composite decking gets manufacturer-approved methods that protect your warranty.",
  },
  {
    q: "How long does deck staining take and when can I use my deck?",
    a:
      "Most projects take two visits: one day to wash, then a return trip to stain once the wood has fully dried (typically 24-48 hours depending on weather). After staining, we recommend staying off the deck for 24 hours and waiting 48 hours before moving furniture back.",
  },
  {
    q: "How often should a deck be restained in Minnesota?",
    a:
      "Minnesota winters are hard on decks. As a rule of thumb: horizontal surfaces (deck boards, stair treads) need attention every 2-3 years, while verticals like railings can go 4-5 years. A quality penetrating stain applied over properly prepped wood lasts noticeably longer than a rushed job over dirty wood.",
  },
];


  return {
    slug: "deck-restoration",
    badge: "Wood & Composite Deck Care",
    h1a: "Deck Cleaning & Staining",
    sub: "From gray and weathered to rich and protected. We wash, strip, and stain cedar, ipe, teak, and composite decks — plus the docks, pergolas, and furniture that go with them.",
    itemsTitle: "Deck Services We Offer",
    itemsSub: "Every deck material needs a different touch. We match the method to the wood — never the other way around.",
    galleryEyebrow: "Real Results",
    galleryTitle: "Deck Transformations",
    gallerySub: "Real decks, docks, and outdoor wood from real customers around the Twin Cities. Left is how we found it — right is how we left it.",
    processSub: "Great stain jobs are 80% preparation. Here is how we take a deck from weathered to protected.",
    pricingTitle: "Transparent Pricing, No Surprises",
    p1: "No two decks are the same, so we do not use cookie-cutter pricing. We look at the size, material, and condition of your deck, then give you a straightforward quote that reflects the actual work involved.",
    p2: "Here are the factors we consider when building your deck restoration quote so you always understand where the number comes from.",
    faqTitle: "Deck Restoration FAQs",
    faqSub: "Common questions Minneapolis homeowners ask about deck cleaning, staining, and restoration.",
    ctaTitle: "Get Your Free Deck Restoration Quote",
    ctaText: "Your deck does not have to stay gray. Send us a photo and we will tell you exactly what it needs — and what it will cost.",
    items: serviceItems,
    gallery: galleryItems,
    steps: processSteps,
    factors: pricingFactors,
    faqs,
    crumb: { name: "Deck Cleaning & Staining Minneapolis", path: "/services/deck-restoration" },

  serviceLd: {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Deck Cleaning and Staining",
    provider: { "@type": "LocalBusiness", name: "Pressure Titans", telephone: "(612) 554-8106", email: "pressuretitans@gmail.com", areaServed: { "@type": "City", name: "Minneapolis", addressRegion: "MN" } },
    areaServed: { "@type": "City", name: "Minneapolis", addressRegion: "MN" },
    description: "Professional deck cleaning, staining, and restoration for cedar, ipe, teak, pressure-treated, and composite decks. Docks, pergolas, and outdoor furniture too.",
  },
  };
})();

export const gutterCleaning: WashCfg = (() => {

const includedItems = [
  {
    name: "Full Debris Removal",
    detail: "Hand-removal of leaves, twigs, shingle grit, and compacted sludge from all gutters",
  },
  {
    name: "Downspout Flushing",
    detail: "High-pressure water flush through every downspout to clear blockages and verify flow",
  },
  {
    name: "Gutter Inspection",
    detail: "Visual check for sagging, loose brackets, rust spots, and seam separation",
  },
  {
    name: "Roof Edge Check",
    detail: "Inspect drip edge and fascia boards for signs of water intrusion or rot",
  },
  {
    name: "Ground Cleanup",
    detail: "All debris bagged and removed from your property — we leave it cleaner than we found it",
  },
  {
    name: "Flow Testing",
    detail: "Run water through the entire system to confirm proper drainage after cleaning",
  },
];

const processSteps = [
  {
    step: 1,
    title: "Free Estimate",
    description:
      "Tell us about your home and gutter setup. Photos help, but we can also schedule a quick on-site look. You will receive a clear quote with no hidden fees.",
  },
  {
    step: 2,
    title: "Schedule",
    description:
      "Choose a day that works for your schedule. We confirm the appointment and send a reminder so you always know when we are coming.",
  },
  {
    step: 3,
    title: "We Clean",
    description:
      "Our crew arrives on time, sets up safely, and works section by section. Every gutter run and downspout gets attention. Debris goes into bags, not your yard.",
  },
  {
    step: 4,
    title: "You Inspect",
    description:
      "We walk you through what we found and what we cleaned. If there are any gutter issues worth noting, we let you know so you can plan ahead.",
  },
];

const pricingFactors = [
  "Total linear footage of gutters on your home",
  "Number of stories (single-story vs. multi-story)",
  "Volume of debris and level of buildup",
  "Number and condition of downspouts",
  "Presence of gutter guards or screens",
  "Accessibility challenges (steep roof pitch, landscaping)",
];

const faqs = [
  {
    q: "How often should I have my gutters cleaned in Minneapolis?",
    a:
      "We recommend at least twice a year for most Minneapolis homes — once in late spring after seed pods and pollen, and once in late fall after leaves have dropped. If you have large trees overhanging your roofline, a third cleaning in mid-summer can prevent mid-season clogs.",
  },
  {
    q: "What happens if I do not clean my gutters regularly?",
    a:
      "Clogged gutters cause water to overflow and pool around your foundation, which can lead to basement flooding, soil erosion, and foundation cracking. In winter, blocked gutters contribute to ice dams that can damage your roof and cause interior water damage. The cost of gutter cleaning is a fraction of what these repairs would run.",
  },
  {
    q: "Do you clean gutters with gutter guards installed?",
    a:
      "Yes. Gutter guards reduce the amount of large debris that enters your gutters, but fine particles like shingle grit, pine needles, and seed pods still get through. We carefully remove or work around the guards, clean the gutters, and reinstall everything properly.",
  },
  {
    q: "Will you let me know if my gutters need repairs?",
    a:
      "Absolutely. During every cleaning, we inspect for sagging sections, loose or missing brackets, rust, seam separation, and fascia board issues. We document what we find and give you honest recommendations. We never pressure you into unnecessary repairs.",
  },
  {
    q: "Can gutter cleaning be done in winter or early spring?",
    a:
      "We can clean gutters in early spring once ice has cleared and temperatures are consistently above freezing. For winter months, if you are experiencing ice dam issues or emergency overflow, we offer targeted solutions to address the immediate problem and schedule a full cleaning when conditions allow.",
  },
];


const galleryImages = [
  {
    src: "/images/projects/newgutter1.webp",
    alt: "Before and after gutter cleaning in Chanhassen showing full debris removal",
  },
  {
    src: "/images/projects/newgutter2.webp",
    alt: "Before and after gutter cleaning in Minnetonka showing cleared downspouts",
  },
  {
    src: "/images/projects/gc-gallery-3.webp",
    alt: "Before and after gutter cleaning showing debris removal and cleared downspouts",
  },
];

  return {
    slug: "gutter-cleaning",
    badge: "Protect Your Home",
    h1a: "Gutter Cleaning",
    sub: "Clogged gutters cause foundation damage, basement flooding, and ice dams. We keep your gutters flowing so your home stays protected year-round.",
    itemsTitle: "What's Included in Every Gutter Cleaning",
    itemsSub: "We do not cut corners. Every gutter cleaning includes a thorough, multi-step process to make sure your system is working properly.",
    galleryTitle: "Before & After Results",
    gallerySub: "See the difference professional gutter cleaning makes. These are real Minneapolis homes we have serviced.",
    processSub: "Booking gutter cleaning should be easy. Here is exactly what to expect when you work with Pressure Titans.",
    pricingTitle: "Honest, Upfront Pricing",
    p1: "Gutter cleaning costs vary based on your home, but we make the pricing simple and predictable. No surprise charges, no upselling. You get a clear quote before we start, and that is the price you pay.",
    p2: "Here is what we take into account when building your quote so you understand exactly where the number comes from.",
    faqTitle: "Gutter Cleaning FAQs",
    faqSub: "Answers to the most common gutter cleaning questions we hear from Minneapolis homeowners.",
    ctaTitle: "Get Your Free Gutter Cleaning Quote",
    ctaText: "Do not wait for the next rainstorm to find out your gutters are clogged. Schedule your cleaning today and protect your home.",
    items: includedItems,
    gallery: galleryImages,
    steps: processSteps,
    factors: pricingFactors,
    faqs,
    crumb: { name: "Gutter Cleaning Minneapolis", path: "/services/gutter-cleaning" },

  };
})();

export const iceDamRemoval: WashCfg = (() => {

const serviceItems = [
  {
    name: "Roof Ice Dam Removal",
    detail: "Low-pressure steam safely melts ice ridges along eaves without damaging shingles or flashing",
  },
  {
    name: "Gutter Ice Clearing",
    detail: "Remove ice blockages from gutters and downspouts to restore proper drainage",
  },
  {
    name: "Valley Ice Removal",
    detail: "Clear dangerous ice buildup in roof valleys where water naturally channels",
  },
  {
    name: "Icicle Removal",
    detail: "Safely remove large icicles hanging from eaves, gutters, and overhangs before they cause injury or damage",
  },
  {
    name: "Emergency Response",
    detail: "Same-day service available when ice dams are actively causing leaks or interior water damage",
  },
  {
    name: "Prevention Assessment",
    detail: "Identify problem areas on your roof and provide recommendations to reduce future ice dam formation",
  },
];

const benefits = [
  "Prevents water damage to interior walls and ceilings",
  "Protects shingles and gutters from cracking",
  "Safe low-pressure steam method (no hammering or chipping)",
  "Licensed and insured professionals",
  "Emergency same-day service available",
];

const processSteps = [
  {
    step: 1,
    title: "Call or Text Us",
    description:
      "Describe the situation and send photos if you can. We assess the severity and schedule your service — often the same day for emergencies.",
  },
  {
    step: 2,
    title: "On-Site Assessment",
    description:
      "Our crew arrives, inspects the ice dam from the ground and roof level, and confirms the plan of action before starting any work.",
  },
  {
    step: 3,
    title: "Steam Removal",
    description:
      "Using commercial low-pressure steam equipment, we methodically melt the ice dam. No hammering, no chipping, no chemicals — just controlled steam that is safe for your roof.",
  },
  {
    step: 4,
    title: "Flow Verification",
    description:
      "Once the ice dam is removed, we verify that water can drain freely through your gutters and downspouts. We also check for any visible damage that may need attention.",
  },
];

const pricingFactors = [
  "Length and thickness of the ice dam",
  "Roof height and pitch (accessibility)",
  "Number of ice dams or problem areas",
  "Emergency vs. scheduled service",
  "Whether gutters and downspouts also need clearing",
  "Residential vs. commercial property",
];

const faqs = [
  {
    q: "When should I call for ice dam removal in Minneapolis?",
    a:
      "Call as soon as you notice ice building up along your eaves, large icicles forming, or — most urgently — water stains on your interior ceilings or walls. Ice dams can cause thousands of dollars in water damage if left untreated. The sooner we remove them, the less risk to your home.",
  },
  {
    q: "How much does ice dam removal cost in Minneapolis?",
    a:
      "Ice dam removal pricing depends on the size and number of ice dams, roof accessibility, and whether it is an emergency call. We provide honest, upfront quotes before starting work. Most residential jobs fall within a range that homeowners find reasonable given the damage ice dams can cause if ignored.",
  },
  {
    q: "Is steam ice dam removal safe for my roof?",
    a:
      "Yes. Low-pressure steam is the safest method available for ice dam removal. Unlike hammering, chipping, or using salt, steam melts the ice without any physical impact to your shingles, flashing, or gutters. It is the method recommended by roofing professionals and insurance companies.",
  },
  {
    q: "Can I remove an ice dam myself?",
    a:
      "We strongly advise against it. Climbing on an icy roof is extremely dangerous, and using tools like hammers, picks, or heat cables can damage your shingles and void your roofing warranty. Salt and chemical melters can corrode gutters and harm landscaping. Professional steam removal is the only method that is both safe for you and safe for your roof.",
  },
  {
    q: "Do you offer emergency same-day ice dam removal?",
    a:
      "Yes. If an ice dam is actively causing leaking inside your home, we prioritize your call and do everything we can to get a crew to you the same day. Call us at (612) 554-8106 and let us know it is an emergency so we can respond as quickly as possible.",
  },
];



  return {
    slug: "ice-dam-removal",
    badge: "Winter Emergency Service",
    h1a: "Ice Dam Removal",
    sub: "Ice dams form when melting snow refreezes at the colder eaves, blocking proper drainage. Professional removal using low-pressure steam safely melts ice without damaging shingles, gutters, or roofing materials.",
    itemsTitle: "Our Ice Dam Removal Services",
    itemsSub: "We handle every aspect of ice dam removal and prevention, using the safest method available to protect your home.",
    processSub: "Fast, safe, and effective. Here is how we handle every ice dam removal job from first call to final check.",
    pricingTitle: "Honest, Upfront Pricing",
    p1: "Every ice dam situation is different, so we do not use one-size-fits-all pricing. We assess your specific situation and give you a clear quote before we start any work.",
    p2: "Here are the factors we consider when putting together your ice dam removal quote. We walk you through each one so the price always makes sense.",
    faqTitle: "Ice Dam Removal FAQs",
    faqSub: "Common questions Minneapolis homeowners ask about ice dams and our removal services.",
    ctaTitle: "Get Your Free Ice Dam Removal Quote",
    ctaText: "Do not let ice dams damage your home. Whether it is an emergency or preventive removal, we are ready to help.",
    items: serviceItems,
    steps: processSteps,
    factors: pricingFactors,
    faqs,
    crumb: { name: "Ice Dam Removal Minneapolis", path: "/services/ice-dam-removal" },

  serviceLd: {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Ice Dam Removal",
    provider: { "@type": "LocalBusiness", name: "Pressure Titans", telephone: "(612) 554-8106", email: "pressuretitans@gmail.com", areaServed: { "@type": "City", name: "Minneapolis", addressRegion: "MN" } },
    areaServed: { "@type": "City", name: "Minneapolis", addressRegion: "MN" },
    description: "Professional ice dam removal using safe low-pressure steam method. Protects shingles, gutters, and roofing materials. Emergency same-day service available.",
  },
  why: {
    title: "Why Choose Professional Steam Removal",
    text: "DIY ice dam removal is dangerous and often causes more damage than the ice dam itself. Our professional steam method is the gold standard recommended by roofing experts and insurance companies across Minnesota.",
    benefits,
    cta: "Schedule Ice Dam Removal",
  },
  };
})();
