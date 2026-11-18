"use client";

import React, { useState } from "react";

export function ProductFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How often can I drink this tea?",
      answer:
        "Chamomile Calm can be enjoyed 1 to 3 times daily. It is especially comforting in the evening or 30–45 minutes before sleep to help transition your body into restful sleep.",
    },
    {
      question: "How should I store it?",
      answer:
        "Store in a cool, dry place away from direct sunlight and strong odours. Keep the tin sealed tightly between uses to preserve the delicate floral essential oils and volatile aromatics.",
    },
    {
      question: "Is it caffeine-free?",
      answer:
        "Yes, 100% naturally caffeine-free! Unlike decaffeinated teas which undergo chemical processing, whole chamomile flowers never contain any caffeine to begin with.",
    },
    {
      question: "How should I prepare it?",
      answer:
        "Steep 1 tea bag in 200–250ml of freshly boiled water (around 95°C) for 3 to 5 minutes. Cover your cup while steeping to trap the calming aromatics. Enjoy plain or with a light touch of pure honey.",
    },
    {
      question: "Are there any precautions?",
      answer:
        "Chamomile belongs to the Asteraceae / Daisy plant family. Those with known allergies to ragweed or chrysanthemums should test cautiously. As with all herbal infusions, if pregnant, nursing, or taking prescription sedatives, consult your doctor.",
    },
  ];

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-12 sm:py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#E8E2D5]">
      {/* Header */}
      <div className="mb-8">
        <span className="text-[11px] sm:text-xs tracking-[0.25em] uppercase text-[#6E7E73] font-semibold">
          GOOD TO KNOW
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#1E3A2B] font-normal mt-1">
          Questions About This <span className="italic">Blend</span>
        </h2>
      </div>

      {/* Accordion List */}
      <div className="space-y-3.5">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-[#E7E1D6] overflow-hidden"
            >
              <button
                type="button"
                onClick={() => toggleFAQ(idx)}
                className="w-full py-4 sm:py-5 px-6 flex items-center justify-between text-left gap-4 hover:bg-[#FAF8F3] transition-colors cursor-pointer"
              >
                <span className="font-serif text-base sm:text-lg text-[#1E3A2B] font-medium">
                  {faq.question}
                </span>
                <span className="w-7 h-7 rounded-full bg-[#F3EFE7] text-[#1E3A2B] flex items-center justify-center shrink-0 font-serif text-base font-light">
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              {isOpen && (
                <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-[#526458] font-light leading-relaxed border-t border-[#F2ECE1]">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
