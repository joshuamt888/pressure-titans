import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { SiteFooter } from "./SiteFooter";
import { Bulb } from "./Bulb";

export type LegalSub = { h: string; intro?: ReactNode; items?: ReactNode[] };
export type LegalSection = { h: string; body?: ReactNode; items?: ReactNode[]; after?: ReactNode; subs?: LegalSub[] };

/** Link style for text inside legal copy. */
export const legalLink = "text-glow underline underline-offset-4 hover:text-bone transition-colors";

function List({ items }: { items: ReactNode[] }) {
  return (
    <ul className="mt-4 space-y-3">
      {items.map((it, i) => (
        <li key={i} className="flex gap-3 items-start">
          <Bulb upright on className="w-[18px] shrink-0 mt-[0.45em]" />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

/** Dark long-form page shared by Privacy and Terms. */
export function WinterLegal({ title, updated, sections }: { title: string; updated: string; sections: LegalSection[] }) {
  return (
    <>
      <Nav />
      <main className="bg-night text-bone min-h-screen pt-32 md:pt-40 pb-20 md:pb-28">
        <div className="max-w-[820px] mx-auto px-5 md:px-10">
          <h1 className="text-[10vw] md:text-[4.4vw] leading-[1.02] tracking-[-0.035em] font-medium">{title}</h1>
          <p className="mt-4 text-lg text-bone/70">{updated}</p>
          <div className="mt-10 md:mt-14 space-y-10 md:space-y-12 text-lg md:text-xl text-bone/90 leading-relaxed">
            {sections.map((s) => (
              <section key={s.h}>
                <h2 className="text-[7vw] md:text-[2.2vw] leading-[1.1] tracking-[-0.03em] font-medium text-bone mb-4">{s.h}</h2>
                {s.body && <p>{s.body}</p>}
                {s.subs?.map((sub) => (
                  <div key={sub.h} className="mt-7">
                    <h3 className="text-2xl md:text-[1.6vw] font-medium text-bone mb-3">{sub.h}</h3>
                    {sub.intro && <p>{sub.intro}</p>}
                    {sub.items && <List items={sub.items} />}
                  </div>
                ))}
                {s.items && <List items={s.items} />}
                {s.after && <p className="mt-4">{s.after}</p>}
              </section>
            ))}
          </div>
          <div className="mt-12 pt-8 border-t border-bone/15">
            <a href="/" className={legalLink}>&larr; Back to Home</a>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
