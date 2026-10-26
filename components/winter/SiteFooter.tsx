import Image from "next/image";
import { PHONE, TEL } from "./phone";
import { BASE, CITIES, COMPANY, LIVE, PARTNERS, SERVICES, SOCIAL, cityHref } from "./siteData";

/** The real site's footer (services, areas, company, contact, social) in the winter look, then the concept note. */
export function SiteFooter() {
  const h = "text-lg font-medium text-bone mb-4";
  const a = "text-lg text-bone/90 hover:text-glow transition-colors";
  return (
    <footer className="bg-night border-t border-bone/12 pt-14 md:pt-20 pb-28 md:pb-12">
      <div className="max-w-[1300px] mx-auto px-5 md:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-3">
            <a href="/" className="flex items-center gap-3 mb-4">
              <Image src="/winter/mark.webp" alt="" width={48} height={34} className="w-12 h-auto object-contain" />
              <span className="text-xl font-medium tracking-[0.06em] uppercase">Pressure Titans</span>
            </a>
            <p className="text-lg text-bone/85 leading-relaxed max-w-[28ch]">Christmas light installation and exterior cleaning for the west metro. Results you can see, service you can trust.</p>
          </div>

          <div className="md:col-span-2">
            <h3 className={h}>Services</h3>
            <ul className="space-y-2.5">{SERVICES.map((s) => <li key={s.label}><a href={s.href} className={a}>{s.label}</a></li>)}</ul>
          </div>

          <div className="md:col-span-3">
            <h3 className={h}>Service areas</h3>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5">{CITIES.map((c) => <li key={c.s}><a href={cityHref(c.s)} className={a}>{c.n}</a></li>)}</ul>
          </div>

          <div className="md:col-span-1">
            <h3 className={h}>Company</h3>
            <ul className="space-y-2.5">
              {COMPANY.map((c) => <li key={c.label}><a href={c.href} className={a}>{c.label}</a></li>)}
              <li><a href={`/privacy`} className={a}>Privacy</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className={h}>Contact</h3>
            <ul className="space-y-2.5 text-lg text-bone/90">
              <li><a href={TEL} className={a}>{PHONE}</a></li>
              <li><a href="mailto:pressuretitans@gmail.com" className={`${a}`}>pressuretitans@gmail.com</a></li>
              <li>Minneapolis, MN</li>
              <li>Mon to Sat, 7AM to 7PM</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-10 border-t border-bone/12">
          <p className="text-center text-lg md:text-xl tracking-[0.08em] uppercase text-bone/90 mb-8">Our partners</p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 md:gap-x-14 gap-y-7">
            {PARTNERS.map((p) => (
              <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer" aria-label={p.name} className="opacity-85 hover:opacity-100 transition-opacity">
                <Image src={p.logo} alt={p.name} width={p.w} height={p.h} className="max-h-11 md:max-h-14 w-auto object-contain brightness-0 invert" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 md:mt-14 border-t border-bone/12 flex flex-wrap items-center gap-x-6 gap-y-3">
          <span className="text-lg text-bone/85">Follow us</span>
          {SOCIAL.map((s) => <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className={a}>{s.label}</a>)}
        </div>

        <p className="mt-8 text-lg text-bone/85">
          &copy; {new Date().getFullYear()} Pressure Titans. All rights reserved.
          {" \u00b7 "}
          <a href={`/privacy`} className="hover:text-glow transition-colors">Privacy Policy</a>
        </p>

        <p className="mt-8 text-center text-xl text-bone/90">
          Website &amp; SEO by{" "}
          <a href="https://www.steadyscaling.com" target="_blank" rel="noopener noreferrer" className="font-medium text-bone underline underline-offset-4 decoration-bone/40 hover:text-glow hover:decoration-glow transition-colors">Steady Scaling</a>
        </p>
      </div>
    </footer>
  );
}
