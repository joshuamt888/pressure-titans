import type { Metadata } from "next";
import { WinterStart } from "@/components/winter/Start";

// Ad landing page: kept out of search so it never competes with the real pages.
export const metadata: Metadata = {
  title: "Lake Minnetonka Holiday Lights | $100 Off Before Thanksgiving",
  description: "Holiday lighting design, installation, maintenance and takedown by Pressure Titans. Get a free quote.",
  robots: { index: false, follow: false },
};

export default function StartPage() {
  return <WinterStart />;
}
