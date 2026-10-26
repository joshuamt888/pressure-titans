import { Instrument_Serif } from "next/font/google";
import { Boot } from "./Boot";

const instrument = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-instrument" });

/** Wraps every winter (Variant B) page: its fonts, colours and scroll setup stay inside this box. */
export function WinterShell({ children }: { children: React.ReactNode }) {
  return (
    <div className={`winter-root ${instrument.variable}`}>
      <Boot />
      {children}
    </div>
  );
}
