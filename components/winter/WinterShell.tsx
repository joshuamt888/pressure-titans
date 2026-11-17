import { Instrument_Serif } from "next/font/google";
import { Boot } from "./Boot";

const instrument = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-instrument" });

/** Wraps every winter (Variant B) page: its fonts, colours and scroll setup stay inside this box. */
export function WinterShell({ children }: { children: React.ReactNode }) {
  return (
    <div className={`winter-root ${instrument.variable}`}>
      <Boot />
      {/* the glow every lit <Bulb> borrows: warm core fading out, the same colors the old drop-shadows used */}
      <svg width="0" height="0" aria-hidden className="absolute">
        <defs>
          <radialGradient id="bulb-halo">
            <stop offset="0.35" stopColor="rgb(255,200,120)" stopOpacity="0.85" />
            <stop offset="0.6" stopColor="rgb(255,170,70)" stopOpacity="0.32" />
            <stop offset="1" stopColor="rgb(255,170,70)" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
      {children}
    </div>
  );
}
