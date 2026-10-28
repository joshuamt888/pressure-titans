import Image from "next/image";
import { WinterShell } from "./WinterShell";
import { ContactForm } from "./ContactForm";
import { Faq } from "./Faq";
import { GoogleReviews } from "./GoogleReviews";
import { PHONE, TEL } from "./phone";

// The ad's landing page: the form is the first thing on a phone, the offer matches the ad, nothing else to click.
const INCLUDED = ["Custom design consultation", "Professional installation (we climb the ladders)", "Full maintenance throughout the season", "Complete takedown and storage"];
const PHOTOS = [
  ["newholiday1", "Christmas lights installed along a home's roofline by Pressure Titans"],
  ["newholiday2", "Warm white holiday lighting on a Minnesota home"],
  ["newholiday3", "Holiday light installation by Pressure Titans at night"],
  ["newholiday4", "Finished Christmas light display by Pressure Titans"],
] as const;

export function WinterStart() {
  return (
    <WinterShell>
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-4 flex items-center justify-between">
          <span className="flex items-center gap-3">
            <Image src="/winter/mark.webp" alt="Pressure Titans" width={48} height={34} className="w-11 md:w-14 h-auto object-contain" />
            <span className="text-sm md:text-lg tracking-[0.08em] uppercase">Pressure Titans</span>
          </span>
          <a href={TEL} className="rounded-full bg-glow text-navy font-medium whitespace-nowrap text-[15px] md:text-lg px-4 md:px-5 py-2.5 hover:bg-bone transition-colors">Call {PHONE}</a>
        </div>
      </header>

      <main className="bg-night text-bone">
        <section className="pt-28 md:pt-36 pb-14 md:pb-20">
          <div className="max-w-[1200px] mx-auto px-5 md:px-10 grid md:grid-cols-12 gap-10 md:gap-14 items-start">
            <div className="md:col-span-6">
              <p className="inline-block rounded-full border border-glow/60 bg-glow/10 text-glow text-base md:text-lg font-medium px-4 py-2">$100 off when you book before Thanksgiving</p>
              <h1 className="mt-6 text-[11vw] md:text-[4.6vw] leading-[1.0] tracking-[-0.04em] font-medium">
                Lake Minnetonka <span className="font-serif italic font-normal warm hero-glow">holiday lights.</span>
              </h1>
              <p className="mt-6 text-xl md:text-2xl text-bone/90 leading-relaxed max-w-[36ch]">Design, installation, maintenance and takedown, all in one price. Send the address and get a free quote.</p>
            </div>
            <div className="md:col-span-6">
              <div className="rounded-2xl border border-bone/15 bg-navy p-6 md:p-9">
                <h2 className="text-[28px] md:text-[34px] leading-[1.1] tracking-[-0.02em] font-medium">Get your free quote</h2>
                <p className="mt-2 mb-7 text-lg text-bone/80">We reply within 24 hours, usually the same day.</p>
                <ContactForm source="start" />
              </div>
            </div>
          </div>
        </section>

        <section className="pb-16 md:pb-24">
          <div className="max-w-[1200px] mx-auto px-5 md:px-10">
            <h2 className="text-[9vw] md:text-[3.2vw] leading-[1.04] tracking-[-0.035em] font-medium">What you <span className="font-serif italic font-normal warm">get.</span></h2>
            <ul className="mt-8 grid sm:grid-cols-2 gap-4">
              {INCLUDED.map((t) => (
                <li key={t} className="rounded-2xl border border-bone/15 bg-navy px-6 py-5 text-xl md:text-2xl leading-snug">{t}</li>
              ))}
            </ul>
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {PHOTOS.map(([f, alt]) => (
                <Image key={f} src={`/images/projects/${f}.webp`} alt={alt} width={640} height={800} sizes="(max-width:768px) 50vw, 25vw" className="w-full aspect-[4/5] object-cover rounded-xl" />
              ))}
            </div>
          </div>
        </section>

        <GoogleReviews />
        <Faq />

        <section className="py-16 md:py-24 text-center px-5">
          <h2 className="text-[9vw] md:text-[3.6vw] leading-[1.04] tracking-[-0.035em] font-medium">Rather just <span className="font-serif italic font-normal warm">call?</span></h2>
          <a href={TEL} className="mt-8 inline-block rounded-full bg-glow text-navy text-xl md:text-2xl font-medium px-10 py-4 hover:bg-bone transition-colors">{PHONE}</a>
        </section>
        <p className="pb-24 md:pb-10 text-center text-base text-bone/60 px-5">Pressure Titans &middot; Minneapolis, MN &middot; Fully insured</p>
      </main>
    </WinterShell>
  );
}
