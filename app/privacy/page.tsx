import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
        <section className="relative bg-navy pt-20 overflow-hidden">
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="/videos/fullhousejob.MOV" type="video/quicktime" />
            <source src="/videos/fullhousejob.MOV" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-navy/80" />
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

        <Footer />
      </main>
    </>
  );
}
