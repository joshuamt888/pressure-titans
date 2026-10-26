import type { Metadata } from "next";
import { SEASON } from "@/lib/season";
import HomeSummer, { summerMetadata } from "@/components/HomeSummer";
import { WinterHome, winterHomeMetadata } from "@/components/winter/pages";

export const metadata: Metadata = SEASON === "winter" ? winterHomeMetadata : summerMetadata;

export default function Page() {
  return SEASON === "winter" ? <WinterHome /> : <HomeSummer />;
}
