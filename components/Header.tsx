"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const services = [
  { label: "Pressure Washing", href: "/services/pressure-washing" },
  { label: "House Washing", href: "/services/house-washing" },
  { label: "Gutter Cleaning", href: "/services/gutter-cleaning" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logos/pressure-titans-logo.webp"
              alt="Pressure Titans"
              width={48}
              height={48}
              className="rounded-lg"
            />
            <div className="hidden sm:block">
              <span className="text-xl font-heading font-bold text-slate-900 leading-tight block">
                Pressure Titans
              </span>
              <span className="text-xs text-slate-500 leading-tight">
                Minneapolis Pressure Washing
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            <Link
              href="/"
              className="text-slate-600 hover:text-titan-accent font-medium transition-colors"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center gap-1 text-slate-600 hover:text-titan-accent font-medium transition-colors"
              >
                Services
                <svg
                  className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-slate-200 py-2 animate-in fade-in slide-in-from-top-2">
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      onClick={() => setServicesOpen(false)}
                      className="block px-4 py-3 text-slate-600 hover:bg-titan-accent/5 hover:text-titan-accent transition-colors"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/about" className="text-slate-600 hover:text-titan-accent font-medium transition-colors">
              About
            </Link>
            <Link href="/portfolio" className="text-slate-600 hover:text-titan-accent font-medium transition-colors">
              Portfolio
            </Link>
            <Link href="/contact" className="text-slate-600 hover:text-titan-accent font-medium transition-colors">
              Contact
            </Link>

            <a
              href="tel:6125548106"
              className="bg-titan-accent hover:bg-titan-light text-white font-semibold px-6 py-3 rounded-lg transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (612) 554-8106
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-slate-700"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav className="lg:hidden pb-6 border-t border-slate-100 pt-4">
            <div className="flex flex-col gap-1">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="text-slate-700 hover:text-titan-accent font-medium text-lg py-2"
              >
                Home
              </Link>

              {/* Mobile Services Accordion */}
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex items-center justify-between text-slate-700 font-medium text-lg py-2"
              >
                Services
                <svg
                  className={`w-5 h-5 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileServicesOpen && (
                <div className="pl-4 flex flex-col gap-1 mb-2">
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-slate-500 hover:text-titan-accent py-2"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}

              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-slate-700 hover:text-titan-accent font-medium text-lg py-2"
                >
                  {link.label}
                </Link>
              ))}

              <a
                href="tel:6125548106"
                className="bg-titan-accent hover:bg-titan-light text-white font-semibold px-6 py-3 rounded-lg text-center transition-colors mt-4"
              >
                Call (612) 554-8106
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
