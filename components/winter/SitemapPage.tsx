import { Nav } from "./Nav";
import { SiteFooter } from "./SiteFooter";
import { CITIES, cityHref } from "./siteData";

type L = { label: string; href: string };

const h3 = "text-2xl md:text-[1.8vw] leading-[1.15] tracking-[-0.02em] font-medium pb-3 mb-5 border-b border-bone/20";
const a = "text-xl text-bone/90 hover:text-glow transition-colors";

/** Sitemap in Variant B: dark, lighting service areas first, then the washing city pages. Same links as the white page, plus the 24 lighting city pages. */
export function WinterSitemap({ main, services, washing }: { main: L[]; services: L[]; washing: L[] }) {
  const col = (title: string, list: L[]) => (
    <div>
      <h2 className={h3}>{title}</h2>
      <ul className="space-y-3">{list.map((p) => <li key={p.href}><a href={p.href} className={a}>{p.label}</a></li>)}</ul>
    </div>
  );
  return (
    <>
      <Nav />
      <main className="bg-night pt-32 md:pt-40 pb-20 md:pb-28">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10">
          <h1 className="text-[11vw] md:text-[5vw] leading-[1.0] tracking-[-0.04em] font-medium">Site<span className="font-serif italic font-normal warm hero-glow">map.</span></h1>
          <p className="mt-5 text-xl md:text-2xl text-bone/90">Browse all pages on our website.</p>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {col("Main Pages", main)}
            {col("Services", services)}
            {col("Holiday Lighting Areas", CITIES.map((c) => ({ label: `${c.n} Christmas Lights`, href: cityHref(c.s) })))}
            {col("Washing Service Areas", washing)}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
