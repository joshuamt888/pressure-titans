// Mike's holiday lighting photos, real jobs. Each file appears once.
export type WorkPhoto = { src: string; w: number; h: number; alt: string };

// The rotating "Our work" row: ONE best photo per house (Josh, 11/23), so it never looks like fewer homes dressed up as more.
export const WORK: WorkPhoto[] = [
  { src: "/winter/work/0642.webp", w: 2000, h: 1500, alt: "Red and warm white lights along a garage roofline with uplighting, installed by Pressure Titans" },
  { src: "/winter/work/0624.webp", w: 2000, h: 1500, alt: "Purple and white Christmas lights over an arched front entry, installed by Pressure Titans" },
  { src: "/winter/work-3.webp", w: 1200, h: 900, alt: "Wrapped tree and roofline lights glowing on a front lawn, installed by Pressure Titans" },
  { src: "/winter/work/0266.webp", w: 2000, h: 1500, alt: "Warm white roofline lights on a small rambler at dusk, installed by Pressure Titans" },
  { src: "/winter/work/3358.webp", w: 2000, h: 1255, alt: "Warm white roofline lights with a multicolor wrapped shrub at dusk, installed by Pressure Titans" },
  { src: "/winter/work-1.webp", w: 900, h: 850, alt: "Warm white roofline lights and wrapped shrubs on a two-gable home, installed by Pressure Titans" },
  { src: "/winter/work-2.webp", w: 900, h: 1200, alt: "Warm white lights wrapped up a front-walk tree, installed by Pressure Titans" },
  { src: "/winter/work/0663.webp", w: 1500, h: 2000, alt: "Warm white roofline lights on a two-story home on a foggy night, installed by Pressure Titans" },
];

// The portfolio gallery may show several angles of a house, but they sit together, one group per house.
const ALL: Record<string, WorkPhoto> = {
  "0641": { src: "/winter/work/0641.webp", w: 2000, h: 1500, alt: "Red and warm white roofline lights over a garage and front entry, installed by Pressure Titans" },
  "0639": { src: "/winter/work/0639.webp", w: 2000, h: 1500, alt: "Red and warm white roofline lights on a split-level home with uplighting, installed by Pressure Titans" },
  "0642": { src: "/winter/work/0642.webp", w: 2000, h: 1500, alt: "Red and warm white lights along a garage roofline with uplighting, installed by Pressure Titans" },
  "0624": { src: "/winter/work/0624.webp", w: 2000, h: 1500, alt: "Purple and white Christmas lights over an arched front entry, installed by Pressure Titans" },
  "0625": { src: "/winter/work/0625.webp", w: 2000, h: 1500, alt: "Purple and white roofline lights across a wide stucco home at night, installed by Pressure Titans" },
  "0623": { src: "/winter/work/0623.webp", w: 2000, h: 1500, alt: "Purple and white lights along a three-car garage roofline, installed by Pressure Titans" },
  "4020": { src: "/winter/work/4020.webp", w: 1500, h: 2000, alt: "Warm white roofline lights and a wrapped small tree on a two-story home, installed by Pressure Titans" },
  "0663": { src: "/winter/work/0663.webp", w: 1500, h: 2000, alt: "Warm white roofline lights on a two-story home on a foggy night, installed by Pressure Titans" },
  "0669": { src: "/winter/work/0669.webp", w: 1500, h: 2000, alt: "Warm white roofline lights on a two-story home above a snowy driveway, installed by Pressure Titans" },
  "3338": { src: "/winter/work/3338.webp", w: 1500, h: 2000, alt: "Warm white lights wrapped on every branch of a large front-yard tree, installed by Pressure Titans" },
  "3358": { src: "/winter/work/3358.webp", w: 2000, h: 1255, alt: "Warm white roofline lights with a multicolor wrapped shrub at dusk, installed by Pressure Titans" },
  "3356": { src: "/winter/work/3356.webp", w: 1500, h: 2000, alt: "Warm white roofline lights and lit shrubs on a home at dusk, installed by Pressure Titans" },
  "0266": { src: "/winter/work/0266.webp", w: 2000, h: 1500, alt: "Warm white roofline lights on a small rambler at dusk, installed by Pressure Titans" },
  "work-1": { src: "/winter/work-1.webp", w: 900, h: 850, alt: "Warm white roofline lights and wrapped shrubs on a two-gable home, installed by Pressure Titans" },
  "work-2": { src: "/winter/work-2.webp", w: 900, h: 1200, alt: "Warm white lights wrapped up a front-walk tree, installed by Pressure Titans" },
  "work-3": { src: "/winter/work-3.webp", w: 1200, h: 900, alt: "Wrapped tree and roofline lights glowing on a front lawn, installed by Pressure Titans" },
};
export const HOUSES: WorkPhoto[][] = [
  [ALL["0624"], ALL["0625"], ALL["0623"]],
  [ALL["0642"], ALL["0641"], ALL["0639"]],
  [ALL["work-1"], ALL["4020"]],
  [ALL["0663"], ALL["0669"]],
  [ALL["work-3"], ALL["3338"]],
  [ALL["work-2"]],
  [ALL["3358"], ALL["3356"]],
  [ALL["0266"]],
];

// The before (day) and after (lit) of one home, side by side. Portfolio only: it is a composite, not a rotating-row photo.
export const WORK_PAIR: WorkPhoto = { src: "/winter/work-4.webp", w: 1200, h: 1137, alt: "The same home by day and lit at dusk, a before and after by Pressure Titans" };
