"use client";

import { useState, useRef, useEffect } from "react";

const serviceOptions = [
  "Pressure Washing",
  "Soft Washing",
  "Ice Dam Removal",
  "Gutter Cleaning",
  "Holiday Lighting",
  "Commercial Lighting",
  "Other",
];

declare global {
  interface Window {
    google: typeof google;
    initGoogleMapsAutocomplete?: () => void;
  }
}

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    address: "",
    message: "",
    // Honeypot — hidden from real users, bots fill this. Named "xfield" because
    // browser autofill fills a hidden input named "website" and flags real users.
    xfield: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const addressInputRef = useRef<HTMLInputElement>(null);
  const formLoadTime = useRef<number>(Date.now());
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    if (!apiKey) return;

    const initAutocomplete = () => {
      if (!addressInputRef.current || !window.google?.maps?.places) return;
      autocompleteRef.current = new window.google.maps.places.Autocomplete(
        addressInputRef.current,
        {
          types: ["address"],
          componentRestrictions: { country: "us" },
          fields: ["formatted_address"],
        }
      );
      autocompleteRef.current.addListener("place_changed", () => {
        const place = autocompleteRef.current?.getPlace();
        if (place?.formatted_address) {
          setForm((prev) => ({ ...prev, address: place.formatted_address! }));
        }
      });
    };

    if (window.google?.maps?.places) {
      initAutocomplete();
      return;
    }

    // Load Maps script once
    if (!document.querySelector("#google-maps-script")) {
      const script = document.createElement("script");
      script.id = "google-maps-script";
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&callback=initGoogleMapsAutocomplete`;
      script.async = true;
      script.defer = true;
      window.initGoogleMapsAutocomplete = initAutocomplete;
      document.head.appendChild(script);
    } else {
      // Script already loading — wait for callback
      window.initGoogleMapsAutocomplete = initAutocomplete;
    }

    return () => {
      if (autocompleteRef.current) {
        window.google?.maps?.event?.clearInstanceListeners(autocompleteRef.current);
      }
    };
  }, []);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          _formLoadTime: formLoadTime.current,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error ?? "Something went wrong.");
        setStatus("error");
      } else {
        setStatus("success");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-heading font-bold text-slate-900 mb-2">Message Sent</h3>
        <p className="text-slate-500">We&apos;ll get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot — hidden from real users, visible to bots */}
      <div aria-hidden="true" tabIndex={-1} style={{ position: "absolute", left: "-9999px", opacity: 0, pointerEvents: "none" }}>
        <input
          type="text"
          name="xfield"
          value={form.xfield}
          onChange={handleChange}
          autoComplete="off"
          tabIndex={-1}
        />
      </div>
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          maxLength={100}
          placeholder="John Smith"
          value={form.name}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-titan-accent focus:border-transparent transition-shadow"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            maxLength={200}
            placeholder="john@example.com"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-titan-accent focus:border-transparent transition-shadow"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            maxLength={30}
            placeholder="(612) 555-0123"
            value={form.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-titan-accent focus:border-transparent transition-shadow"
          />
        </div>
      </div>

      <div>
        <label htmlFor="address" className="block text-sm font-semibold text-slate-700 mb-2">
          Property Address <span className="text-slate-400 font-normal text-xs ml-1">(optional)</span>
        </label>
        <input
          type="text"
          id="address"
          name="address"
          ref={addressInputRef}
          maxLength={300}
          placeholder="123 Main St, Minneapolis, MN"
          value={form.address}
          onChange={handleChange}
          autoComplete="off"
          className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-titan-accent focus:border-transparent transition-shadow"
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-semibold text-slate-700 mb-2">
          Service Needed
        </label>
        <select
          id="service"
          name="service"
          value={form.service}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-titan-accent focus:border-transparent transition-shadow bg-white"
        >
          <option value="">Select a service...</option>
          {serviceOptions.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          maxLength={2000}
          placeholder="Tell us about your property and what you need cleaned..."
          value={form.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-titan-accent focus:border-transparent transition-shadow resize-y"
        />
      </div>

      {status === "error" && (
        <p className="text-red-600 text-sm">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-titan-accent hover:bg-titan-light disabled:opacity-60 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
      >
        {status === "sending" ? "Sending..." : "Send My Free Quote Request"}
      </button>
    </form>
  );
}
