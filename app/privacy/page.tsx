import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Pressure Titans. Learn how we collect, use, and protect your personal information.",
  alternates: {
    canonical: "https://pressuretitans.com/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="relative bg-navy pt-20">
          <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-titan-blue" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
                Privacy Policy
              </h1>
              <p className="text-lg text-slate-300">
                Last updated: February 2026
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-slate prose-lg max-w-none">
              <h2 className="text-2xl font-heading font-bold text-slate-900 mb-4">
                Information We Collect
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                When you use our website or contact us for a quote, we may collect the
                following information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-8">
                <li>Your name and contact information (phone number, email address)</li>
                <li>Your property address and service location</li>
                <li>Details about the services you are interested in</li>
                <li>Any photos or descriptions you share about your property</li>
                <li>Website usage data through cookies and analytics tools</li>
              </ul>

              <h2 className="text-2xl font-heading font-bold text-slate-900 mb-4">
                How We Use Your Information
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-8">
                <li>Respond to your quote requests and inquiries</li>
                <li>Provide pressure washing and exterior cleaning services</li>
                <li>Communicate with you about your scheduled services</li>
                <li>Improve our website and overall customer experience</li>
                <li>Send follow-up communications about our services (with your consent)</li>
              </ul>

              <h2 className="text-2xl font-heading font-bold text-slate-900 mb-4">
                Information Sharing
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties.
                We may share your information only when required by law, to protect our
                rights, or with service providers who assist in operating our website —
                all of whom are bound by confidentiality agreements.
              </p>

              <h2 className="text-2xl font-heading font-bold text-slate-900 mb-4">
                Cookies & Analytics
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Our website may use cookies and similar tracking technologies to improve
                your browsing experience and analyze website traffic. You can control
                cookie settings through your browser preferences. We use Google Analytics
                to understand how visitors interact with our site. This data is
                anonymized and used solely for improving our services.
              </p>

              <h2 className="text-2xl font-heading font-bold text-slate-900 mb-4">
                Data Security
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                We implement reasonable security measures to protect your personal
                information from unauthorized access, alteration, or disclosure.
                However, no method of electronic transmission or storage is 100% secure,
                and we cannot guarantee absolute security.
              </p>

              <h2 className="text-2xl font-heading font-bold text-slate-900 mb-4">
                Your Rights
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                You have the right to request access to, correction of, or deletion of
                your personal information at any time. To exercise these rights or ask
                any questions about our privacy practices, please contact us using the
                information below.
              </p>

              <h2 className="text-2xl font-heading font-bold text-slate-900 mb-4">
                Contact Us
              </h2>
              <p className="text-slate-600 mb-2 leading-relaxed">
                If you have any questions about this privacy policy, please contact us:
              </p>
              <ul className="list-none pl-0 space-y-2 text-slate-600 mb-8">
                <li>
                  <strong>Phone:</strong>{" "}
                  <a href="tel:6125548106" className="text-titan-accent hover:text-titan-light transition-colors">
                    (612) 554-8106
                  </a>
                </li>
                <li>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:pressuretitans@gmail.com" className="text-titan-accent hover:text-titan-light transition-colors">
                    pressuretitans@gmail.com
                  </a>
                </li>
              </ul>

              <h2 className="text-2xl font-heading font-bold text-slate-900 mb-4">
                Changes to This Policy
              </h2>
              <p className="text-slate-600 leading-relaxed">
                We may update this privacy policy from time to time. Any changes will be
                posted on this page with a revised &ldquo;last updated&rdquo; date. We encourage
                you to review this policy periodically.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <span className="text-xl font-heading font-bold text-white mb-4 block">
                  Pressure<span className="text-titan-light">Titans</span>
                </span>
                <p className="text-slate-400 text-sm">
                  Professional exterior cleaning services in Minneapolis, MN.
                  Licensed &amp; insured.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-slate-300 mb-4">Services</h3>
                <ul className="space-y-2 text-slate-400 text-sm">
                  <li><Link href="/services/pressure-washing" className="hover:text-white transition-colors">Pressure Washing</Link></li>
                  <li><Link href="/services/house-washing" className="hover:text-white transition-colors">House Washing</Link></li>
                  <li><Link href="/services/gutter-cleaning" className="hover:text-white transition-colors">Gutter Cleaning</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-slate-300 mb-4">Contact</h3>
                <ul className="space-y-2 text-slate-400 text-sm">
                  <li><a href="tel:6125548106" className="hover:text-white transition-colors">(612) 554-8106</a></li>
                  <li><a href="mailto:pressuretitans@gmail.com" className="hover:text-white transition-colors">pressuretitans@gmail.com</a></li>
                  <li>Minneapolis, MN</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-slate-800 pt-8 text-center">
              <p className="text-slate-400 text-sm">
                &copy; {new Date().getFullYear()} Pressure Titans. All rights reserved.
              </p>
            </div>
          </div>
        </footer>

        {/* Agency Credit */}
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
      </main>
    </>
  );
}
