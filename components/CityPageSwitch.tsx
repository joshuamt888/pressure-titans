import CityPageContent from "@/components/CityPageContent";
import { WinterShell } from "@/components/winter/WinterShell";
import { WashCity } from "@/components/winter/WashCity";
import { SEASON } from "@/lib/season";

type Props = { cityName: string; faqs: { question: string; answer: string }[] };

/** Server wrapper: winter shows the dark lighting-first city page, summer the original. */
export default function CityPageSwitch(props: Props) {
  if (SEASON === "winter") return <WinterShell><WashCity {...props} /></WinterShell>;
  return <CityPageContent {...props} />;
}
