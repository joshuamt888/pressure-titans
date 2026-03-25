import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Pressure Titans",
  description:
    "Privacy policy for Pressure Titans. Learn how we collect and use data with Google Analytics, Microsoft Clarity, and Google Search Console.",
  alternates: { canonical: "https://pressuretitans.com/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">
        <section className="pt-32 pb-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-heading font-bold text-slate-900 mb-4">Privacy Policy</h1>
            <p className="text-slate-500 mb-10">Last updated: March 25, 2026</p>

            <div className="space-y-10 text-slate-600 leading-relaxed">
              <section>
                <h2 className="text-2xl font-heading font-bold text-slate-900 mb-4">Overview</h2>
                <p>Pressure Titans (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) respects your privacy. This policy explains what data we collect, how we use it, and your rights.</p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-slate-900 mb-4">Data We Collect</h2>
                <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Analytics Data</h3>
                <p>We use the following analytics tools to understand how visitors use our site:</p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li><strong className="text-slate-900">Google Analytics 4 (GA4)</strong> &mdash; Collects anonymous data about page views, session duration, and traffic sources.</li>
                  <li><strong className="text-slate-900">Google Search Console (GSC)</strong> &mdash; Aggregated data about how our site appears in Google search results. Does not identify individual users.</li>
                  <li><strong className="text-slate-900">Microsoft Clarity</strong> &mdash; Records anonymous session replays and heatmaps. No personal information is captured.</li>
                </ul>
                <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Contact Information</h3>
                <p>When you contact us through our quote form, phone, or email, we collect your name, contact info, and service details. We use this solely to respond and provide services.</p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-slate-900 mb-4">Cookies</h2>
                <p>Our site uses analytics cookies. By using this site, you consent to their use.</p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li><strong className="text-slate-900">Google Analytics cookies</strong> &mdash; Anonymous usage data</li>
                  <li><strong className="text-slate-900">Microsoft Clarity cookies</strong> &mdash; Session recording and heatmaps</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-slate-900 mb-4">How We Use Your Data</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Improve our website and services</li>
                  <li>Respond to quote requests and inquiries</li>
                  <li>Schedule and deliver exterior cleaning services</li>
                </ul>
                <p className="mt-3">We do not sell your personal information.</p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-slate-900 mb-4">Third-Party Services</h2>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li><strong className="text-slate-900">Google Analytics</strong> &mdash; <a href="https://policies.google.com/privacy" className="text-titan-accent hover:underline" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
                  <li><strong className="text-slate-900">Microsoft Clarity</strong> &mdash; <a href="https://privacy.microsoft.com/en-us/privacystatement" className="text-titan-accent hover:underline" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
                  <li><strong className="text-slate-900">Vercel</strong> (hosting) &mdash; <a href="https://vercel.com/legal/privacy-policy" className="text-titan-accent hover:underline" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-slate-900 mb-4">Your Rights &amp; Opt-Out</h2>
                <p>You can request access to, correction of, or deletion of your data at any time. Opt-out tools:</p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li><a href="https://tools.google.com/dlpage/gaoptout" className="text-titan-accent hover:underline" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Add-on</a></li>
                  <li><a href="https://microsoftedge.microsoft.com/addons/detail/microsoft-clarity/gnldpbnocfnlkkicnaplmkaphfdnlplb" className="text-titan-accent hover:underline" target="_blank" rel="noopener noreferrer">Microsoft Clarity Block Extension</a></li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-slate-900 mb-4">Contact</h2>
                <p>Questions? <a href="mailto:pressuretitans@gmail.com" className="text-titan-accent hover:underline">pressuretitans@gmail.com</a> or <a href="tel:6125548106" className="text-titan-accent hover:underline">(612) 554-8106</a></p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-slate-900 mb-4">Changes</h2>
                <p>We may update this policy from time to time. Changes will be posted here with an updated date.</p>
              </section>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-200">
              <Link href="/" className="text-titan-accent hover:underline">&larr; Back to Home</Link>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
