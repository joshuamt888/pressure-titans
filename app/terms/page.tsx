import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | Pressure Titans",
  description: "Terms of service for Pressure Titans. Review our service terms, payment policies, and scheduling conditions.",
  alternates: { canonical: "https://pressuretitans.com/terms" },
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">
        <section className="pt-32 pb-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-heading font-bold text-slate-900 mb-4">Terms of Service</h1>
            <p className="text-slate-500 mb-10">Last updated: March 25, 2026</p>

            <div className="space-y-10 text-slate-600 leading-relaxed">
              <section>
                <h2 className="text-2xl font-heading font-bold text-slate-900 mb-4">Agreement to Terms</h2>
                <p>By accessing or using the Pressure Titans website and services (&ldquo;Services&rdquo;), you agree to be bound by these Terms of Service. If you do not agree, please do not use our Services.</p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-slate-900 mb-4">Services Provided</h2>
                <p>Pressure Titans provides professional exterior cleaning services in the Twin Cities metro area, including:</p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li>Pressure washing and soft washing</li>
                  <li>House washing and siding cleaning</li>
                  <li>Concrete and driveway cleaning</li>
                  <li>Gutter cleaning</li>
                  <li>Roof cleaning</li>
                  <li>Free estimates and quote requests</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-slate-900 mb-4">Scheduling &amp; Service</h2>
                <p>When you request a quote or schedule service, we will contact you to confirm details and timing. Service dates are subject to weather conditions and scheduling availability.</p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-slate-900 mb-4">Payments &amp; Pricing</h2>
                <p>Pricing is provided via quote prior to service. Payment is due upon completion of service unless otherwise agreed. Prices are subject to change, but any confirmed quote will be honored.</p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-slate-900 mb-4">Cancellations</h2>
                <p>If you need to cancel or reschedule, please contact us as soon as possible at <a href="tel:6125548106" className="text-titan-accent hover:underline">(612) 554-8106</a> or <a href="mailto:pressuretitans@gmail.com" className="text-titan-accent hover:underline">pressuretitans@gmail.com</a>.</p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-slate-900 mb-4">Property Access &amp; Conditions</h2>
                <p>By scheduling service, you confirm you have authority to authorize work at the specified property and agree to provide reasonable access to the work area. We are not responsible for damage to underground utilities, irrigation systems, or other features not disclosed prior to service.</p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-slate-900 mb-4">Limitation of Liability</h2>
                <p>Pressure Titans is not liable for indirect, incidental, or consequential damages arising from use of our Services. Our total liability shall not exceed the amount paid for the specific service in question.</p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-slate-900 mb-4">Privacy</h2>
                <p>Your use of our Services is also governed by our <Link href="/privacy" className="text-titan-accent hover:underline">Privacy Policy</Link>.</p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-slate-900 mb-4">Contact</h2>
                <p>Questions about these terms? <a href="mailto:pressuretitans@gmail.com" className="text-titan-accent hover:underline">pressuretitans@gmail.com</a> or <a href="tel:6125548106" className="text-titan-accent hover:underline">(612) 554-8106</a></p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-slate-900 mb-4">Changes</h2>
                <p>We may update these terms from time to time. Changes will be posted here with an updated date.</p>
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
