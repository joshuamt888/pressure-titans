export interface LightingCity {
  name: string;
  slug: string;
  /** Unique local intro — what the commercial landscape looks like here */
  intro: string;
  /** Specific commercial areas / property types we target in this city */
  spots: string[];
  /** Slugs of nearby cities for internal linking */
  nearby: string[];
  /** Optional: existing pressure-washing city page to cross-link */
  pressureWashingSlug?: string;
}

export const lightingCities: LightingCity[] = [
  {
    name: "Minneapolis",
    slug: "minneapolis",
    intro:
      "From North Loop storefronts to Northeast breweries and Uptown restaurants, Minneapolis businesses compete for attention all winter long. A professional Christmas light display on your building, patio, or entrance is one of the cheapest ways to stand out on a dark December street, and it stays up looking sharp from before Thanksgiving through the New Year.",
    spots: [
      "Restaurants and bars with outdoor patios",
      "North Loop and Northeast storefronts",
      "Office buildings and coworking spaces",
      "Apartment and condo entrances",
      "Churches and community buildings",
      "Retail centers along Lyndale, Hennepin, and Lake Street",
    ],
    nearby: ["st-paul", "edina", "st-louis-park", "bloomington"],
  },
  {
    name: "St. Paul",
    slug: "st-paul",
    intro:
      "Grand Avenue, Lowertown, Highland Park, and downtown St. Paul all lean hard into the holidays. Whether you run a Grand Ave boutique, a Lowertown restaurant, or an office near the Capitol, we design and hang a commercial Christmas light display that fits your building and your budget, then keep it lit all season.",
    spots: [
      "Grand Avenue and Selby Avenue storefronts",
      "Lowertown restaurants and event venues",
      "Downtown office buildings",
      "Highland Park and Mac-Groveland retail",
      "Churches and schools",
      "Apartment communities and HOAs",
    ],
    nearby: ["minneapolis", "edina", "bloomington"],
  },
  {
    name: "Eden Prairie",
    slug: "eden-prairie",
    intro:
      "Eden Prairie is home to some of the biggest corporate campuses and office parks in the southwest metro, plus the retail around Eden Prairie Center and Prairie Center Drive. We install commercial Christmas lights on office entrances, retail frontage, and multi-building campuses across Eden Prairie, and we handle the timers, maintenance, and takedown so your facilities team never touches a ladder.",
    spots: [
      "Corporate campuses and office parks",
      "Retail centers near Eden Prairie Center",
      "Restaurants along Prairie Center Drive and Flying Cloud Drive",
      "Medical and dental offices",
      "Churches and private schools",
      "HOA entrances and clubhouses",
    ],
    nearby: ["minnetonka", "chanhassen", "edina", "bloomington"],
    pressureWashingSlug: "eden-prairie",
  },
  {
    name: "Minnetonka",
    slug: "minnetonka",
    intro:
      "Minnetonka's I-394 corridor, Ridgedale area, and Opus business park are packed with offices, clinics, and retail that want to look polished in December. We design commercial holiday lighting that matches the building, from clean warm-white rooflines on a professional office to full tree wraps at a restaurant entrance, and we keep it maintained through the season.",
    spots: [
      "Offices along I-394 and Highway 7",
      "Retail near Ridgedale Center",
      "Opus business park buildings",
      "Restaurants and coffee shops",
      "Medical clinics and dental offices",
      "Apartment communities and HOAs",
    ],
    nearby: ["wayzata", "hopkins", "eden-prairie", "deephaven"],
    pressureWashingSlug: "minnetonka",
  },
  {
    name: "Edina",
    slug: "edina",
    intro:
      "50th & France, Southdale, the Galleria, and Centennial Lakes make Edina one of the most competitive retail markets in Minnesota during the holidays. Edina shoppers expect the district to look the part. We hang commercial Christmas lights on boutiques, restaurants, salons, and office buildings so your storefront holds its own on the block.",
    spots: [
      "50th & France boutiques and restaurants",
      "Retail around Southdale and the Galleria",
      "Centennial Lakes area offices",
      "Salons, spas, and medical offices",
      "Country clubs and event venues",
      "HOA entrances and luxury condo buildings",
    ],
    nearby: ["minneapolis", "bloomington", "st-louis-park", "eden-prairie"],
  },
  {
    name: "Bloomington",
    slug: "bloomington",
    intro:
      "Bloomington runs on hospitality and office traffic. The hotels, restaurants, and retail around the Mall of America and the I-494 strip see huge holiday volume, and the Normandale Lake office towers want their entrances to look professional for December client visits. We handle commercial Christmas light installation for all of it, on your schedule, before the rush.",
    spots: [
      "Hotels and restaurants near the Mall of America",
      "Office buildings along I-494 and Normandale Lake",
      "Retail centers and strip malls",
      "Car dealerships along the 494 corridor",
      "Churches and schools",
      "Apartment communities",
    ],
    nearby: ["edina", "eden-prairie", "savage", "minneapolis"],
  },
  {
    name: "Chanhassen",
    slug: "chanhassen",
    intro:
      "Downtown Chanhassen and the Highway 5 corridor are full of locally owned shops, restaurants, and offices that thrive on holiday foot traffic. We already serve dozens of Chanhassen homes and businesses year-round, and our commercial Christmas light installs turn a plain storefront or office entrance into the brightest spot on West 78th Street.",
    spots: [
      "Downtown Chanhassen storefronts on West 78th Street",
      "Restaurants and breweries",
      "Offices and clinics along Highway 5",
      "Churches and schools",
      "HOA entrances and clubhouses",
      "Event venues and theaters",
    ],
    nearby: ["chaska", "eden-prairie", "excelsior", "victoria"],
    pressureWashingSlug: "chanhassen",
  },
  {
    name: "Chaska",
    slug: "chaska",
    intro:
      "Chaska's historic downtown along Chestnut Street, the retail around Highway 41, and the growing business parks near Highway 212 all benefit from a professional holiday look. We install commercial Christmas lights on brick storefronts, restaurant patios, office buildings, and church facades throughout Chaska, and we take everything down in January.",
    spots: [
      "Historic downtown Chaska storefronts",
      "Restaurants and bars on Chestnut Street",
      "Retail along Highway 41",
      "Business parks near Highway 212",
      "Churches and schools",
      "HOA entrances and apartment communities",
    ],
    nearby: ["chanhassen", "victoria", "carver", "waconia"],
    pressureWashingSlug: "chaska",
  },
  {
    name: "Shakopee",
    slug: "shakopee",
    intro:
      "Between downtown Shakopee, the Dean Lakes retail area, and the huge employer base around Canterbury Park and Valley Fair, Shakopee businesses have plenty of December traffic to capture. We install commercial Christmas lighting on storefronts, restaurants, hotels, and office buildings across Shakopee, sized to your property and hung by a fully insured crew.",
    spots: [
      "Downtown Shakopee storefronts on First Avenue",
      "Dean Lakes and Highway 169 retail",
      "Hotels and restaurants near Canterbury Park",
      "Office and industrial park entrances",
      "Churches and schools",
      "Apartment communities and HOAs",
    ],
    nearby: ["savage", "prior-lake", "chaska", "eden-prairie"],
    pressureWashingSlug: "shakopee",
  },
  {
    name: "Prior Lake",
    slug: "prior-lake",
    intro:
      "Downtown Prior Lake on Main Avenue and the commercial corridors along Highway 13 and County Road 42 are where local businesses win holiday customers. We design and hang commercial Christmas lights for Prior Lake restaurants, shops, offices, and HOA entrances, then maintain them through the season so nothing goes dark in mid-December.",
    spots: [
      "Downtown Prior Lake shops and restaurants",
      "Retail along Highway 13 and County Road 42",
      "Lakefront restaurants and event venues",
      "Offices and clinics",
      "Churches and schools",
      "HOA entrances and clubhouses",
    ],
    nearby: ["savage", "shakopee"],
    pressureWashingSlug: "prior-lake",
  },
  {
    name: "Savage",
    slug: "savage",
    intro:
      "Savage's business district along Highway 13 and Egan Drive is a mix of restaurants, retail, auto shops, and offices that all want to look inviting in December. We install commercial Christmas lights on rooflines, entrances, trees, and signage for Savage businesses of every size, with commercial-grade LEDs that hold up to Minnesota winters.",
    spots: [
      "Retail and restaurants along Highway 13",
      "Offices and clinics on Egan Drive",
      "Auto dealerships and service centers",
      "Churches and schools",
      "Apartment communities",
      "HOA entrances and clubhouses",
    ],
    nearby: ["prior-lake", "shakopee", "bloomington"],
    pressureWashingSlug: "savage",
  },
  {
    name: "Wayzata",
    slug: "wayzata",
    intro:
      "Wayzata's Lake Street downtown is one of the most walkable holiday shopping districts on Lake Minnetonka, and the boutiques, restaurants, and offices there set a high bar. We install elegant commercial Christmas lighting, warm-white rooflines, wrapped trees, and lit entrances, that fits the Wayzata aesthetic and keeps your storefront glowing all season.",
    spots: [
      "Lake Street boutiques and restaurants",
      "Wayzata Bay area offices",
      "Lakefront event venues and clubs",
      "Salons, spas, and medical offices",
      "Churches and community buildings",
      "Luxury condo buildings and HOAs",
    ],
    nearby: ["minnetonka", "deephaven", "excelsior", "hopkins"],
  },
  {
    name: "Plymouth",
    slug: "plymouth",
    intro:
      "Plymouth is one of the largest office and industrial markets in the west metro, with corporate campuses along I-494 and Highway 55 plus retail around Plymouth City Center and Vicksburg Lane. We handle commercial Christmas light installation for multi-building campuses, retail centers, restaurants, and HOAs across Plymouth, including timers, maintenance, and January takedown.",
    spots: [
      "Corporate campuses along I-494 and Highway 55",
      "Retail near Plymouth City Center",
      "Restaurants and coffee shops",
      "Medical and dental offices",
      "Churches and private schools",
      "HOA entrances and apartment communities",
    ],
    nearby: ["minnetonka", "wayzata", "st-louis-park"],
  },
  {
    name: "Hopkins",
    slug: "hopkins",
    intro:
      "Hopkins Mainstreet is a classic small-town downtown right in the middle of the metro, lined with restaurants, shops, and the Hopkins Center for the Arts. A lit storefront on Mainstreet in December gets noticed. We install commercial Christmas lights for Hopkins businesses on Mainstreet, along Excelsior Boulevard, and in the surrounding office and apartment buildings.",
    spots: [
      "Mainstreet storefronts and restaurants",
      "Offices along Excelsior Boulevard",
      "Breweries and event venues",
      "Churches and schools",
      "Apartment communities",
      "HOA entrances",
    ],
    nearby: ["minnetonka", "st-louis-park", "edina", "wayzata"],
  },
  {
    name: "St. Louis Park",
    slug: "st-louis-park",
    intro:
      "The West End, Excelsior & Grand, and the Highway 7 and Highway 100 corridors give St. Louis Park a dense mix of restaurants, retail, and office space. We design and install commercial Christmas lighting that helps your building stand out in a crowded district, and we keep it lit with season-long maintenance included.",
    spots: [
      "West End restaurants and retail",
      "Excelsior & Grand storefronts",
      "Offices along Highway 7 and Highway 100",
      "Medical and dental offices",
      "Churches and schools",
      "Apartment and condo buildings",
    ],
    nearby: ["minneapolis", "edina", "hopkins", "minnetonka"],
  },
  {
    name: "Excelsior",
    slug: "excelsior",
    intro:
      "Water Street in downtown Excelsior is a holiday postcard, and the shops, restaurants, and lakefront venues there draw visitors from all over Lake Minnetonka in December. We hang commercial Christmas lights on Excelsior storefronts, patios, and historic buildings with the care those buildings deserve, and we handle takedown after the season.",
    spots: [
      "Water Street shops and restaurants",
      "Lakefront venues and marinas",
      "Historic downtown buildings",
      "Salons and boutiques",
      "Churches and community buildings",
      "Condo buildings and HOAs",
    ],
    nearby: ["shorewood", "greenwood", "tonka-bay", "deephaven"],
    pressureWashingSlug: "excelsior",
  },
  {
    name: "Victoria",
    slug: "victoria",
    intro:
      "Downtown Victoria has grown into a real destination, with restaurants, shops, and breweries that lean into the holidays. We install commercial Christmas lighting for Victoria businesses, churches, and HOA entrances, using commercial-grade LEDs, professional clips, and timers so your display looks clean every night through the New Year.",
    spots: [
      "Downtown Victoria shops and restaurants",
      "Breweries and event venues",
      "Offices and clinics",
      "Churches and schools",
      "HOA entrances and clubhouses",
      "Apartment communities",
    ],
    nearby: ["chanhassen", "chaska", "waconia", "excelsior"],
    pressureWashingSlug: "victoria",
  },
  {
    name: "Waconia",
    slug: "waconia",
    intro:
      "Waconia's downtown and lakefront, plus the businesses along Highway 5, make it the commercial hub of western Carver County. We install commercial Christmas lights for Waconia restaurants, shops, medical offices, and churches, and we return for any burnt bulb or loose strand at no charge during the season.",
    spots: [
      "Downtown Waconia storefronts and restaurants",
      "Lakefront venues and event spaces",
      "Medical and dental offices",
      "Retail along Highway 5",
      "Churches and schools",
      "HOA entrances and apartment communities",
    ],
    nearby: ["victoria", "chaska", "mound"],
    pressureWashingSlug: "waconia",
  },
  {
    name: "Deephaven",
    slug: "deephaven",
    intro:
      "Deephaven is mostly residential, but the businesses, churches, clubs, and HOA communities along Minnetonka Boulevard and near the lake still want a polished holiday look. We install commercial Christmas lighting for Deephaven property managers, church facilities, and neighborhood entrances, with the same crew that already handles exterior cleaning for homes across the city.",
    spots: [
      "Churches and community buildings",
      "HOA entrances and neighborhood signs",
      "Yacht clubs and lakefront venues",
      "Offices along Minnetonka Boulevard",
      "Schools and daycare centers",
      "Condo buildings",
    ],
    nearby: ["minnetonka", "wayzata", "excelsior", "shorewood"],
    pressureWashingSlug: "deephaven",
  },
  {
    name: "Shorewood",
    slug: "shorewood",
    intro:
      "Shorewood's businesses along Highway 7 and Smithtown Road serve the whole south side of Lake Minnetonka. We install commercial Christmas lighting on Shorewood storefronts, office buildings, churches, and HOA entrances, and because we are already in the area every week, scheduling and mid-season maintenance is fast.",
    spots: [
      "Retail and offices along Highway 7",
      "Restaurants and coffee shops",
      "Churches and schools",
      "HOA entrances and clubhouses",
      "Medical and dental offices",
      "Apartment communities",
    ],
    nearby: ["excelsior", "greenwood", "tonka-bay", "deephaven"],
    pressureWashingSlug: "shorewood",
  },
  {
    name: "Tonka Bay",
    slug: "tonka-bay",
    intro:
      "Tonka Bay is a small lakeshore city, but its marinas, clubs, churches, and HOA communities still want to shine during the holidays. We install commercial Christmas lighting for Tonka Bay property managers and business owners with commercial-grade LEDs that stand up to wind off the lake, and we handle takedown once the season is over.",
    spots: [
      "Marinas and lakefront venues",
      "Churches and community buildings",
      "HOA entrances and neighborhood signs",
      "Condo buildings",
      "Small offices along Manitou Road",
      "Restaurants near the lake",
    ],
    nearby: ["excelsior", "shorewood", "greenwood", "deephaven"],
    pressureWashingSlug: "tonka-bay",
  },
  {
    name: "Greenwood",
    slug: "greenwood",
    intro:
      "Greenwood sits right on the shore of Lake Minnetonka between Excelsior and Deephaven, and its clubs, marinas, and lakefront venues host plenty of holiday events. We install commercial Christmas lighting for Greenwood venues, HOA communities, and businesses along Highway 7, designed to look great from the road and from the water.",
    spots: [
      "Lakefront venues and marinas",
      "Clubs and event spaces",
      "HOA entrances and neighborhood signs",
      "Businesses along Highway 7",
      "Churches and community buildings",
      "Condo buildings",
    ],
    nearby: ["excelsior", "tonka-bay", "shorewood", "deephaven"],
    pressureWashingSlug: "greenwood",
  },
  {
    name: "Mound",
    slug: "mound",
    intro:
      "Mound's Commerce Boulevard downtown and the businesses around the western bays of Lake Minnetonka draw steady local traffic all winter. We install commercial Christmas lights for Mound restaurants, shops, marinas, churches, and HOA entrances, with a fully insured crew and season-long maintenance included in every quote.",
    spots: [
      "Commerce Boulevard storefronts and restaurants",
      "Marinas and lakefront venues",
      "Offices and clinics",
      "Churches and schools",
      "HOA entrances and apartment communities",
      "Auto shops and service centers",
    ],
    nearby: ["waconia", "tonka-bay", "excelsior"],
    pressureWashingSlug: "mound",
  },
  {
    name: "Carver",
    slug: "carver",
    intro:
      "Historic downtown Carver and the fast-growing neighborhoods along Highway 212 give local businesses a real holiday audience. We install commercial Christmas lighting on Carver storefronts, historic brick buildings, churches, and HOA entrances, and we schedule installs in October and November so your display is up before the season starts.",
    spots: [
      "Historic downtown Carver storefronts",
      "Restaurants and bars",
      "Businesses along Highway 212",
      "Churches and schools",
      "HOA entrances and clubhouses",
      "New apartment and townhome communities",
    ],
    nearby: ["chaska", "victoria", "waconia"],
    pressureWashingSlug: "carver",
  },
];

export function getLightingCity(slug: string): LightingCity | undefined {
  return lightingCities.find((c) => c.slug === slug);
}
