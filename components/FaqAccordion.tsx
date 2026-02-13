"use client";
import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <ScrollReveal key={i} animation="fade-up" delay={i * 80}>
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full bg-white border border-slate-200 rounded-xl p-6 text-left transition-all hover:shadow-md hover:border-slate-300"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-lg font-heading font-bold text-slate-900">{faq.question}</h3>
                <div
                  className="w-8 h-8 rounded-full bg-titan-accent/10 flex items-center justify-center flex-shrink-0 transition-transform duration-300"
                  style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                >
                  <svg className="w-4 h-4 text-titan-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              <div
                className="overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{
                  maxHeight: isOpen ? "300px" : "0px",
                  opacity: isOpen ? 1 : 0,
                  marginTop: isOpen ? "12px" : "0px",
                }}
              >
                <p className="text-slate-500 leading-relaxed">{faq.answer}</p>
              </div>
            </button>
          </ScrollReveal>
        );
      })}
    </div>
  );
}
