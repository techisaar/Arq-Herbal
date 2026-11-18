"use client";

import React, { useState } from "react";

export function ConsultFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is the difference between the three options?",
      answer:
        "The WhatsApp Community is completely free and ideal for asking quick questions, learning herbal brewing tips, and connecting with other wellness seekers. The Personalized Consultation (₹99) is a focused, 1-on-1 private session dedicated specifically to your body's needs, sleep rhythms, and digestive health. The Monthly Program (₹799) provides ongoing weekly guidance, direct access to your herbalist, and includes complimentary signature tea blends delivered every month.",
    },
    {
      question: "How do I book a consultation?",
      answer:
        "Click any 'Book Consultation' button on this page. Choose your primary wellness focus (sleep, stress, immunity, skin, or digestion), pick a date and time slot that fits your schedule, and complete the simple booking form. You'll receive instant calendar and WhatsApp confirmations with your secure call link.",
    },
    {
      question: "How long is a consultation?",
      answer:
        "Each 1-on-1 personalized consultation lasts between 20 to 30 minutes. This provides plenty of time to discuss your current routine, sleep schedule, dietary habits, and receive a customized herbal infusion regimen.",
    },
    {
      question: "How do I join the WhatsApp community?",
      answer:
        "Click the 'Join WhatsApp Community' button anywhere on this page. You will receive an immediate invite link to our moderated, positive circle of herbal wellness enthusiasts where our practitioners post daily recipes, harvest stories, and answer community questions.",
    },
    {
      question: "How does the monthly program work, and can I cancel?",
      answer:
        "The Monthly Wellness Program includes scheduled bi-weekly or weekly check-ins, continuous WhatsApp chat access with your practitioner, personalized blend adjustments, and full ongoing guidance. You can pause or cancel at any time with zero cancellation fees or commitments.",
    },
    {
      question: "Is this medical advice?",
      answer:
        "No. Our consultations provide traditional botanical wisdom, lifestyle recommendations, and dietary herbal infusion routines to support everyday wellness and balance. If you have an acute medical condition, are pregnant, or take prescription medication, we advise consulting your primary physician.",
    },
  ];

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#E8E2D5]">
      {/* Heading */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1E3A2B] font-normal tracking-tight">
          Questions, <span className="italic">answered</span>
        </h2>
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-[#E7E1D6] overflow-hidden transition-colors"
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full py-5 px-6 sm:px-8 flex items-center justify-between text-left gap-4 hover:bg-[#FAF8F3] transition-colors cursor-pointer"
                aria-expanded={isOpen}
              >
                <span className="font-serif text-base sm:text-lg text-[#1E3A2B] font-medium">
                  {faq.question}
                </span>

                <span className="w-8 h-8 rounded-full bg-[#F3EFE7] text-[#1E3A2B] flex items-center justify-center shrink-0 font-serif text-lg font-light">
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              {isOpen && (
                <div className="px-6 sm:px-8 pb-6 pt-1 text-xs sm:text-sm text-[#55675A] font-light leading-relaxed border-t border-[#F2ECE1]">
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
