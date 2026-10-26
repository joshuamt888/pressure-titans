import type { Block } from "./seo";

/** The search-copy blocks: small closed dropdowns. The text stays in the page HTML, so search engines read it all. */
export function SeoSections({ list, tint = "bg-navy" }: { list: Block[]; tint?: string }) {
  return (
    <section className={`${tint} py-10 md:py-14`}>
      <div className="max-w-[900px] mx-auto px-5 md:px-10 divide-y divide-bone/15 border-y border-bone/15">
        {list.map((b) => (
          <details key={b.h} className="group py-3">
            <summary className="flex items-center justify-between gap-4 cursor-pointer list-none text-base md:text-[17px] text-bone/85 hover:text-bone">
              <h2 className="font-normal">{b.h}</h2>
              <span aria-hidden className="text-bone/60 transition-transform group-open:rotate-45 text-xl leading-none">+</span>
            </summary>
            {b.p.map((t) => <p key={t.slice(0, 40)} className="mt-3 text-sm leading-relaxed text-bone/70">{t}</p>)}
          </details>
        ))}
      </div>
    </section>
  );
}
