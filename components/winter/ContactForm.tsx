"use client";

import { useEffect, useRef, useState } from "react";

const SERVICES = ["Holiday Lighting", "Commercial Lighting", "Pressure Washing", "Soft Washing", "Gutter Cleaning", "Ice Dam Removal", "Other"];

declare global {
  interface Window {
    google: typeof google;
    initGoogleMapsAutocomplete?: () => void;
  }
}

const field = "w-full rounded-xl border border-bone/25 bg-navy-2 px-4 py-3.5 text-lg text-bone placeholder:text-bone/45 focus:outline-none focus:border-glow focus:ring-2 focus:ring-glow/40 transition-colors";
const label = "block text-base text-bone/90 mb-2";

/** The winter version of the quote form. Same /api/contact endpoint and fields as the summer form. */
export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", address: "", message: "", xfield: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const addressRef = useRef<HTMLInputElement>(null);
  const loadTime = useRef<number>(Date.now());

  // Address autocomplete, same as the summer form (only when the Maps key is set).
  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    if (!apiKey) return;
    let ac: google.maps.places.Autocomplete | null = null;
    const init = () => {
      if (!addressRef.current || !window.google?.maps?.places) return;
      ac = new window.google.maps.places.Autocomplete(addressRef.current, { types: ["address"], componentRestrictions: { country: "us" }, fields: ["formatted_address"] });
      ac.addListener("place_changed", () => {
        const p = ac?.getPlace();
        if (p?.formatted_address) setForm((f) => ({ ...f, address: p.formatted_address! }));
      });
    };
    if (window.google?.maps?.places) init();
    else if (!document.querySelector("#google-maps-script")) {
      const s = document.createElement("script");
      s.id = "google-maps-script";
      s.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&callback=initGoogleMapsAutocomplete`;
      s.async = true; s.defer = true;
      window.initGoogleMapsAutocomplete = init;
      document.head.appendChild(s);
    } else window.initGoogleMapsAutocomplete = init;
    return () => { if (ac) window.google?.maps?.event?.clearInstanceListeners(ac); };
  }, []);

  const change = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending"); setErrorMsg("");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...form, _formLoadTime: loadTime.current }) });
      const data = await res.json();
      if (!res.ok) { setErrorMsg(data.error ?? "Something went wrong."); setStatus("error"); } else setStatus("success");
    } catch {
      setErrorMsg("Network error. Please try again."); setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-14">
        <div className="mx-auto mb-5 w-16 h-16 rounded-full bg-glow/15 border border-glow/50 flex items-center justify-center">
          <svg className="w-8 h-8 text-glow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
        </div>
        <h3 className="text-3xl font-medium tracking-[-0.02em]">Message sent</h3>
        <p className="mt-3 text-xl text-bone/85">We&apos;ll get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-6">
      <div aria-hidden="true" tabIndex={-1} style={{ position: "absolute", left: "-9999px", opacity: 0, pointerEvents: "none" }}>
        <input type="text" name="xfield" value={form.xfield} onChange={change} autoComplete="off" tabIndex={-1} />
      </div>
      <div>
        <label htmlFor="name" className={label}>Full name <span className="text-glow">*</span></label>
        <input id="name" name="name" type="text" required maxLength={100} placeholder="John Smith" value={form.name} onChange={change} className={field} />
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className={label}>Email <span className="text-glow">*</span></label>
          <input id="email" name="email" type="email" required maxLength={200} placeholder="john@example.com" value={form.email} onChange={change} className={field} />
        </div>
        <div>
          <label htmlFor="phone" className={label}>Phone <span className="text-glow">*</span></label>
          <input id="phone" name="phone" type="tel" required maxLength={30} placeholder="(612) 555-0123" value={form.phone} onChange={change} className={field} />
        </div>
      </div>
      <div>
        <label htmlFor="address" className={label}>Property address <span className="text-bone/55 text-sm ml-1">(optional)</span></label>
        <input id="address" name="address" ref={addressRef} type="text" maxLength={300} autoComplete="off" placeholder="123 Main St, Minneapolis, MN" value={form.address} onChange={change} className={field} />
      </div>
      <div>
        <label htmlFor="service" className={label}>Service needed</label>
        <select id="service" name="service" value={form.service} onChange={change} className={field}>
          <option value="">Select a service...</option>
          {SERVICES.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
      </div>
      <div>
        <label htmlFor="message" className={label}>Message</label>
        <textarea id="message" name="message" rows={5} maxLength={2000} placeholder="Tell us about your property and what you want lit..." value={form.message} onChange={change} className={`${field} resize-y`} />
      </div>
      {status === "error" && <p className="text-lg text-[#ff9b8a]" role="alert">{errorMsg}</p>}
      <button type="submit" disabled={status === "sending"} className="w-full rounded-full bg-glow text-navy text-xl font-medium px-8 py-4 hover:bg-bone transition-colors active:scale-[0.98] disabled:opacity-60">
        {status === "sending" ? "Sending..." : "Send my free quote request"}
      </button>
    </form>
  );
}
