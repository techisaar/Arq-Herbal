"use client";

import { useState } from "react";

const hotSteps = [
  {
    num: "01",
    title: "Use boiling water",
    desc: "Let it breathe for 30 seconds after the boil — perfect temperature for herbal infusions.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10 text-[#D4AF37]">
        <path d="M24 6 C24 6 16 16 16 26 a8 8 0 0 0 16 0 C32 16 24 6 24 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <path d="M24 36 v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="24" cy="26" r="3" fill="currentColor" opacity="0.5"/>
      </svg>
    ),
  },
  {
    num: "02",
    title: "Find stillness",
    desc: "Place your blend in the cup. Breathe. This is your moment before the day rushes in.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10 text-[#D4AF37]">
        <circle cx="24" cy="24" r="12" stroke="currentColor" strokeWidth="2"/>
        <circle cx="24" cy="24" r="4" fill="currentColor" opacity="0.5"/>
        <path d="M24 8 v4M24 36 v4M8 24 h4M36 24 h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: "03",
    title: "Steep 3–5 minutes",
    desc: "Cover your cup — lid on. Let the herbs unfurl fully. No peeking.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10 text-[#D4AF37]">
        <circle cx="24" cy="28" r="12" stroke="currentColor" strokeWidth="2"/>
        <path d="M24 16 V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M24 28 L28 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M22 8 h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
];

const icedSteps = [
  {
    num: "01",
    title: "Brew double strength",
    desc: "Use twice the amount of herbs with the same water volume.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10 text-[#D4AF37]">
        <rect x="14" y="12" width="20" height="28" rx="4" stroke="currentColor" strokeWidth="2"/>
        <path d="M14 20 h20" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2"/>
        <path d="M20 8 h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: "02",
    title: "Steep & cool",
    desc: "Steep 5 minutes, then let it reach room temperature before chilling.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10 text-[#D4AF37]">
        <path d="M12 32 C12 32 16 24 24 24 C32 24 36 16 36 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="24" cy="36" r="4" stroke="currentColor" strokeWidth="2"/>
        <path d="M24 32 v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: "03",
    title: "Pour over ice",
    desc: "Fill a glass with ice, pour the tea and garnish with mint or lemon.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10 text-[#D4AF37]">
        <path d="M14 14 L18 38 h12 L34 14 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="none"/>
        <path d="M12 14 h24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="22" cy="24" r="2" fill="currentColor" opacity="0.5"/>
        <circle cx="28" cy="30" r="2" fill="currentColor" opacity="0.5"/>
      </svg>
    ),
  },
];

export function RitualsBrewingSteps() {
  const [tab, setTab] = useState<"hot" | "iced">("hot");
  const steps = tab === "hot" ? hotSteps : icedSteps;

  return (
    <section className="bg-[#1E3A2B] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <p className="text-[#A6C9AF] text-xs tracking-widest uppercase mb-3">Brewing Method</p>
        <h2 className="font-serif text-4xl sm:text-5xl text-white mb-3 italic">
          A slow, simple brew
        </h2>
        <p className="text-[#A6C9AF] text-sm max-w-md mx-auto mb-10">
          Three unhurried steps. A ritual you can return to every morning.
        </p>

        {/* Tab switcher */}
        <div className="inline-flex bg-[#163024] rounded-full p-1 mb-14">
          <button
            onClick={() => setTab("hot")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
              tab === "hot"
                ? "bg-[#D4AF37] text-[#14261C]"
                : "text-[#A6C9AF] hover:text-white"
            }`}
          >
            Hot Brew
          </button>
          <button
            onClick={() => setTab("iced")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
              tab === "iced"
                ? "bg-[#D4AF37] text-[#14261C]"
                : "text-[#A6C9AF] hover:text-white"
            }`}
          >
            Iced
          </button>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center bg-[#163024] rounded-2xl p-8 border border-[#2B4B38]"
            >
              <div className="mb-4">{step.icon}</div>
              <span className="text-[#D4AF37] text-xs font-mono tracking-widest mb-2">{step.num}</span>
              <h3 className="text-white font-serif text-lg mb-3">{step.title}</h3>
              <p className="text-[#8FA395] text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
