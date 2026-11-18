import React from "react";
import { FlowerIcon, MoonIcon, LeafIcon, SparkleIcon } from "@/components/icons/Icons";

export function ProductWhyLoveIt() {
  const cards = [
    {
      icon: <LeafIcon className="w-5 h-5 text-[#2E5E42]" />,
      title: "100% pure chamomile",
      description: "Whole, carefully selected chamomile flowers. Nothing else.",
    },
    {
      icon: <FlowerIcon className="w-5 h-5 text-[#2E5E42]" />,
      title: "Naturally caffeine-free",
      description: "A calming cup any time of day, with nothing to keep you restless.",
    },
    {
      icon: <MoonIcon className="w-5 h-5 text-[#2E5E42]" />,
      title: "Calm that comforts",
      description: "Traditionally enjoyed to ease stress and promote relaxation and restful sleep.",
    },
    {
      icon: <SparkleIcon className="w-5 h-5 text-[#2E5E42]" />,
      title: "Gentle floral goodness",
      description: "Rich in natural antioxidants, with a smooth floral taste. No chemicals or additives.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <span className="text-[11px] sm:text-xs tracking-[0.25em] uppercase text-[#6E7E73] font-semibold">
          WHY YOU’LL LOVE IT
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#1E3A2B] font-normal mt-1">
          A Little <span className="italic">Calm</span> in Every Cup
        </h2>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E7E1D6] shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
          >
            <div>
              <div className="w-10 h-10 rounded-full bg-[#EDF3EE] flex items-center justify-center mb-5">
                {card.icon}
              </div>

              <h3 className="font-serif text-lg font-medium text-[#1E3A2B] mb-2">
                {card.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#55675A] font-light leading-relaxed">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
