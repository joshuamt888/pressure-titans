import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/images/logos/pressure-titans-main-logo.webp"
                  alt="Pressure Titans"
                  width={60}
                  height={60}
                  className="rounded-lg"
                />
                <span className="text-lg font-heading font-bold text-white">Pressure Titans</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Professional exterior cleaning in Minneapolis. Results you can see, service you can trust.
              </p>
            </div>

            <div>
              <h3 className="font-heading font-bold text-slate-300 mb-4">Services</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><Link href="/services/pressure-washing" className="hover:text-white transition-colors">Pressure Washing</Link></li>
                <li><Link href="/services/house-washing" className="hover:text-white transition-colors">House Washing</Link></li>
                <li><Link href="/services/gutter-cleaning" className="hover:text-white transition-colors">Gutter Cleaning</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-heading font-bold text-slate-300 mb-4">Company</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/portfolio" className="hover:text-white transition-colors">Our Work</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-heading font-bold text-slate-300 mb-4">Contact</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>
                  <a href="tel:6125548106" className="hover:text-white transition-colors">(612) 554-8106</a>
                </li>
                <li>
                  <a href="mailto:pressuretitans@gmail.com" className="hover:text-white transition-colors">pressuretitans@gmail.com</a>
                </li>
                <li>Minneapolis, MN</li>
                <li>Mon–Sat: 7AM–7PM</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center">
            <p className="text-slate-400 text-sm">
              &copy; {new Date().getFullYear()} Pressure Titans. All rights reserved.
              {" · "}
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              {" · "}
              <Link href="/sitemap-page" className="hover:text-white transition-colors">Sitemap</Link>
            </p>
          </div>
        </div>
      </footer>

      <div className="bg-slate-950 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-2">
          <span className="text-slate-500 text-xs">Website &amp; SEO by</span>
          <a
            href="https://www.steadyscaling.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
          >
            <span className="text-slate-400 text-xs font-medium">Steady Scaling</span>
          </a>
        </div>
      </div>
    </>
  );
}
