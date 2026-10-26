import { lightingCities } from "./cityData";
// What the real pressuretitans.com nav and footer contain, with Variant B's change: Holiday Lighting leads the service list.
export const BASE = "";
export const LIVE = "https://pressuretitans.com";

export const SERVICES = [
  { label: "Holiday Lighting", href: `${BASE}/services/holiday-lighting` },
  { label: "Commercial Lighting", href: `${BASE}/services/commercial-holiday-lighting` },
  { label: "Pressure Washing", href: `/services/pressure-washing` },
  { label: "House Washing", href: `/services/house-washing` },
  { label: "Deck Restoration", href: `/services/deck-restoration` },
  { label: "Gutter Cleaning", href: `/services/gutter-cleaning` },
  { label: "Ice Dam Removal", href: `/services/ice-dam-removal` },
];

export const CITIES = lightingCities.map((c) => ({ n: c.name, s: c.slug }));

export const cityHref = (s: string) => `/${s}-christmas-light-installation`;

export const COMPANY = [
  { label: "About", href: `/about` },
  { label: "Contact", href: `/contact` },
];

export const SOCIAL = [
  { label: "Facebook", href: "https://www.facebook.com/216580711549669" },
  { label: "Instagram", href: "https://www.instagram.com/pressuretitans/" },
  { label: "Google", href: "https://www.google.com/maps/place/Pressure+Titans/@44.9833485,-93.719369,9z/data=!4m8!3m7!1s0x68ba74e0c3bd65e5:0xf5e2288cbaada241!8m2!3d44.9833485!4d-93.719369!9m1!1b1!16s%2Fg%2F11y3v6bwts" },
  { label: "Yelp", href: "https://www.yelp.com/biz/pressure-titans-chanhassen" },
  { label: "Nextdoor", href: "https://nextdoor.com/pages/pressure-titans-chanhassen-mn/" },
];

// Same four partners as the real footer's "Our Partners" strip.
export const PARTNERS = [
  { name: "Oil and Water Decks", logo: "/winter/partners/oil-and-water-decks.png", href: "https://www.oilandwaterdecks.com/", w: 675, h: 275 },
  { name: "Shine Window Cleaning", logo: "/winter/partners/shine-window-cleaning.png", href: "https://shine-windowcleaning.com/location/Minnetonka/", w: 231, h: 100 },
  { name: "Silver Pines Construction", logo: "/winter/partners/silver-pines-construction.png", href: "https://www.silverpinesconstruction.com/", w: 151, h: 100 },
  { name: "Freshwater Landscaping", logo: "/winter/partners/freshwater-landscaping.png", href: "https://freshwaterlandscaping.com/", w: 318, h: 100 },
];
