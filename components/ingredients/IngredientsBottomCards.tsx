"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRightIcon, CloseIcon } from "@/components/icons/Icons";

export function IngredientsBottomCards() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [quizStep, setQuizStep] = useState(0);
  const [selectedGoal, setSelectedGoal] = useState<string>("");

  const quizQuestions = [
    {
      q: "What is your primary wellness intention today?",
      options: [
        { label: "Restful, deeper sleep", goal: "sleep", herb: "Chamomile & Valerian" },
        { label: "Dissolve daytime stress", goal: "stress", herb: "Ashwagandha & Brahmi" },
        { label: "Digestive comfort & ease", goal: "digestion", herb: "Mint & Lemongrass" },
        { label: "Skin radiance & antioxidants", goal: "skin", herb: "Hibiscus & Butterfly Pea" },
      ],
    },
  ];

  return (
    <section className="bg-[#FAF8F5] py-16 sm:py-24 border-t border-[#E8E2D5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Card 1: See where each herb is grown */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E8E2D5] shadow-xs flex flex-col items-center text-center justify-between space-y-6 hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-full bg-[#EBF2EC] flex items-center justify-center text-[#2E5E42]">
              <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
                <path
                  d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>

            <div className="space-y-2">
              <h3 className="font-serif text-2xl sm:text-3xl text-[#1E3A2B] font-medium">
                See where each herb is grown
              </h3>
              <p className="text-sm text-[#5C6E63] leading-relaxed max-w-sm">
                Trace every leaf, root, and flower back to its native hillside farm and source state across the Indian subcontinent.
              </p>
            </div>

            <Link
              href="/our-story"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-[#D5CEBF] hover:border-[#1E3A2B] text-[#1E3A2B] font-medium text-sm transition-all hover:bg-[#1E3A2B] hover:text-white"
            >
              View origin map <ArrowRightIcon className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Card 2: Not sure which herb suits you? */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E8E2D5] shadow-xs flex flex-col items-center text-center justify-between space-y-6 hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-full bg-[#FAF4E6] flex items-center justify-center text-[#C49647]">
              <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
                <path
                  d="M12 3v3m0 12v3M3 12h3m12 0h3M5.6 5.6l2.1 2.1m8.6 8.6 2.1 2.1M5.6 18.4l2.1-2.1m8.6-8.6 2.1-2.1"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>

            <div className="space-y-2">
              <h3 className="font-serif text-2xl sm:text-3xl text-[#1E3A2B] font-medium">
                Not sure which herb suits you?
              </h3>
              <p className="text-sm text-[#5C6E63] leading-relaxed max-w-sm">
                Answer a quick question and discover which single-origin botanical formulation best fits your daily rhythm.
              </p>
            </div>

            <button
              onClick={() => setIsQuizOpen(true)}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-[#D5CEBF] hover:border-[#1E3A2B] text-[#1E3A2B] font-medium text-sm transition-all hover:bg-[#1E3A2B] hover:text-white cursor-pointer"
            >
              Take herbal quiz <ArrowRightIcon className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Quick Quiz Modal */}
      {isQuizOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            onClick={() => {
              setIsQuizOpen(false);
              setQuizStep(0);
              setSelectedGoal("");
            }}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
          />
          <div className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E2D5] shadow-2xl z-10 space-y-6">
            <div className="flex items-center justify-between border-b border-[#F0ECE1] pb-4">
              <span className="text-xs uppercase tracking-widest text-[#C49647] font-semibold">
                ARQ Herbal Quiz
              </span>
              <button
                onClick={() => {
                  setIsQuizOpen(false);
                  setQuizStep(0);
                  setSelectedGoal("");
                }}
                className="text-[#8C9C92] hover:text-[#1E3A2B]"
              >
                <CloseIcon className="w-5 h-5" />
              </button>
            </div>

            {quizStep === 0 ? (
              <div className="space-y-4">
                <h4 className="font-serif text-xl text-[#1E3A2B]">
                  {quizQuestions[0].q}
                </h4>
                <div className="space-y-2.5">
                  {quizQuestions[0].options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setSelectedGoal(opt.herb);
                        setQuizStep(1);
                      }}
                      className="w-full text-left p-3.5 rounded-2xl border border-[#E8E2D5] hover:border-[#C49647] hover:bg-[#FAF8F5] text-sm text-[#2C3E33] font-medium transition-colors"
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-4 text-center py-2">
                <div className="w-12 h-12 rounded-full bg-[#EBF2EC] text-[#2E5E42] flex items-center justify-center mx-auto text-xl">
                  ✓
                </div>
                <h4 className="font-serif text-2xl text-[#1E3A2B]">
                  Your Recommended Botanicals
                </h4>
                <p className="text-sm text-[#5C6E63]">
                  Based on your response, we suggest starting with:
                </p>
                <div className="p-4 rounded-2xl bg-[#F7F4EC] border border-[#E8E2D5] font-serif text-lg text-[#1E3A2B]">
                  {selectedGoal}
                </div>
                <div className="pt-2 flex gap-3 justify-center">
                  <Link
                    href="/shop"
                    onClick={() => setIsQuizOpen(false)}
                    className="px-6 py-2.5 rounded-full bg-[#1E3A2B] text-white text-xs font-medium hover:bg-[#284E39]"
                  >
                    Shop Recommended Teas
                  </Link>
                  <button
                    onClick={() => setQuizStep(0)}
                    className="px-5 py-2.5 rounded-full border border-[#D5CEBF] text-xs text-[#1E3A2B]"
                  >
                    Restart
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
