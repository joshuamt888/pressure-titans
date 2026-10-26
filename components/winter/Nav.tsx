"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { PHONE, TEL } from "./phone";
import { BASE, CITIES, COMPANY, LIVE, SERVICES, cityHref } from "./siteData";

const chev = (open: boolean) => (
  <svg aria-hidden width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}><path d="M6 9l6 6 6-6" /></svg>
);

/**
 * The real site's nav, in the winter look: Home, Services (lighting first), Service Areas, About, Portfolio, Contact.
 * Full links from 1280px up; a menu below that. Solid once you scroll so the words are always readable.
 */
export function Nav() {
  const [menu, setMenu] = useState(false);
  const [open, setOpen] = useState<"" | "services" | "areas">("");
  const [mobSection, setMobSection] = useState<"" | "services" | "areas">("");
  const [solid, setSolid] = useState(false);
  const wrap = useRef<HTMLElement>(null);

  useEffect(() => {
    const on = () => setSolid(window.scrollY > 40);
    on(); window.addEventListener("scroll", on, { passive: true });
    const click = (e: MouseEvent) => { if (wrap.current && !wrap.current.contains(e.target as Node)) setOpen(""); };
    const key = (e: KeyboardEvent) => { if (e.key === "Escape") { setOpen(""); setMenu(false); } };
    document.addEventListener("mousedown", click); document.addEventListener("keydown", key);
    return () => { window.removeEventListener("scroll", on); document.removeEventListener("mousedown", click); document.removeEventListener("keydown", key); };
  }, []);

  useEffect(() => { document.documentElement.style.overflow = menu ? "hidden" : ""; return () => { document.documentElement.style.overflow = ""; }; }, [menu]);

  const link = "text-[19px] 2xl:text-[21px] font-medium text-bone hover:text-glow transition-colors whitespace-nowrap";
  const panel = "absolute top-full left-1/2 -translate-x-1/2 mt-4 rounded-2xl border border-bone/15 bg-night/95 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] p-3";

  return (
    <header ref={wrap} className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${solid || menu ? "bg-night/90 backdrop-blur-lg border-b border-bone/10" : "bg-transparent"}`}>
      <div className="max-w-[1500px] mx-auto px-5 md:px-10 py-3 md:py-4 flex items-center justify-between gap-3 md:gap-6">
        <a href="/" className="flex items-center gap-2.5 md:gap-3 min-w-0">
          <Image src="/winter/mark.webp" alt="Pressure Titans" width={48} height={34} className="w-11 md:w-14 h-auto object-contain" />
          <span className="hidden min-[360px]:block max-w-[8.5ch] md:max-w-none text-[clamp(11px,3.3vw,14px)] leading-[1.15] md:leading-normal md:whitespace-nowrap md:text-xl tracking-[0.08em] uppercase font-medium">Pressure Titans</span>
        </a>

        <nav className="hidden xl:flex items-center gap-8 2xl:gap-10" aria-label="Main">
          <a href="/" className={link}>Home</a>

          <div className="relative">
            <button type="button" aria-expanded={open === "services"} onClick={() => setOpen(open === "services" ? "" : "services")} className={`${link} inline-flex items-center gap-2`}>Services {chev(open === "services")}</button>
            {open === "services" && (
              <div className={`${panel} w-[340px]`}>
                {SERVICES.map((s, i) => (
                  <a key={s.label} href={s.href} className="flex items-center justify-between gap-3 whitespace-nowrap rounded-xl px-4 py-3 text-lg text-bone hover:bg-bone/10 hover:text-glow transition-colors">
                    {s.label}
                    {i < 2 && <span className="text-xs tracking-[0.1em] uppercase text-glow">Now booking</span>}
                  </a>
                ))}
              </div>
            )}
          </div>

          <div className="relative">
            <button type="button" aria-expanded={open === "areas"} onClick={() => setOpen(open === "areas" ? "" : "areas")} className={`${link} inline-flex items-center gap-2`}>Service Areas {chev(open === "areas")}</button>
            {open === "areas" && (
              <div className={`${panel} w-[520px] grid grid-cols-2 max-h-[72vh] overflow-y-auto`}>
                {CITIES.map((c) => (
                  <a key={c.s} href={cityHref(c.s)} className="rounded-xl px-4 py-2.5 text-lg text-bone hover:bg-bone/10 hover:text-glow transition-colors">{c.n}</a>
                ))}
              </div>
            )}
          </div>

          {COMPANY.filter((c) => c.label !== "Contact").map((c) => <a key={c.label} href={c.href} className={link}>{c.label}</a>)}
        </nav>

        <div className="flex items-center gap-3 md:gap-5 shrink-0">
          <a href={TEL} className="hidden sm:block text-[17px] 2xl:text-xl font-medium text-bone hover:text-glow transition-colors whitespace-nowrap">{PHONE}</a>
          <a href="/contact" className="whitespace-nowrap rounded-full bg-glow text-navy text-[16px] md:text-[17px] 2xl:text-xl font-medium px-5 md:px-6 py-2.5 md:py-3 hover:bg-bone transition-colors active:scale-[0.98]">Contact</a>
          <button type="button" aria-label={menu ? "Close menu" : "Open menu"} aria-expanded={menu} onClick={() => setMenu(!menu)} className="xl:hidden grid place-items-center w-11 h-11 rounded-full border border-bone/30 text-bone">
            <svg aria-hidden width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">{menu ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}</svg>
          </button>
        </div>
      </div>

      {menu && (
        <div className="xl:hidden absolute inset-x-0 top-full max-h-[calc(100svh-70px)] overflow-y-auto bg-night border-t border-bone/10 px-5 md:px-10 pt-2 pb-28">
          <a href="/" onClick={() => setMenu(false)} className="block py-4 text-2xl font-medium border-b border-bone/10">Home</a>
          {([["services", "Services"], ["areas", "Service Areas"]] as const).map(([k, label]) => (
            <div key={k} className="border-b border-bone/10">
              <button type="button" aria-expanded={mobSection === k} onClick={() => setMobSection(mobSection === k ? "" : k)} className="w-full flex items-center justify-between py-4 text-2xl font-medium">{label} {chev(mobSection === k)}</button>
              {mobSection === k && (
                <div className={`pb-4 ${k === "areas" ? "grid grid-cols-2 gap-x-4" : ""}`}>
                  {(k === "services" ? SERVICES.map((s) => ({ key: s.label, label: s.label, href: s.href })) : CITIES.map((c) => ({ key: c.s, label: c.n, href: cityHref(c.s) }))).map((i) => (
                    <a key={i.key} href={i.href} onClick={() => setMenu(false)} className="block py-2.5 text-xl text-bone/95">{i.label}</a>
                  ))}
                </div>
              )}
            </div>
          ))}
          {COMPANY.filter((c) => c.label !== "Contact").map((c) => <a key={c.label} href={c.href} className="block py-4 text-2xl font-medium border-b border-bone/10">{c.label}</a>)}
        </div>
      )}
    </header>
  );
}
