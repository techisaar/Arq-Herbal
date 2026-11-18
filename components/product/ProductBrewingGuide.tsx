import React from "react";

export function ProductBrewingGuide() {
  const hotSteps = [
    "Add 1 tea bag to a cup of hot water.",
    "Steep for 3–5 minutes.",
    "Add honey if you like.",
    "Sip and enjoy, ideally before bedtime.",
  ];

  const icedSteps = [
    "Add 1 tea bag to a cup of hot water.",
    "Steep for 3–5 minutes.",
    "Remove the bag and let the tea cool completely.",
    "Pour over ice cubes.",
    "Add honey, lemon or mint if you like. Serve chilled.",
  ];

  return (
    <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <span className="text-[11px] sm:text-xs tracking-[0.25em] uppercase text-[#6E7E73] font-semibold">
          HOW TO BREW
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#1E3A2B] font-normal mt-1">
          Make Your Perfect <span className="italic">Cup</span>
        </h2>
        <p className="text-xs sm:text-sm text-[#5B6E61] font-light mt-1">
          One tea bag per cup, steeped 3–5 minutes.
        </p>
      </div>

      {/* 2 Brewing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Hot Preparation */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E7E1D6] shadow-xs space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-[#F0EAE0]">
            <h3 className="font-serif text-xl sm:text-2xl text-[#1E3A2B] font-medium">
              Hot
            </h3>
            <div className="flex items-center gap-2 text-xs text-[#5E7264] font-medium">
              <span className="px-2.5 py-1 rounded-full bg-[#F3EFE7]">1 tea bag</span>
              <span className="px-2.5 py-1 rounded-full bg-[#F3EFE7]">3–5 min</span>
            </div>
          </div>

          <ol className="space-y-3.5 text-xs sm:text-sm text-[#4E6254]">
            {hotSteps.map((step, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#1E3A2B] text-white flex items-center justify-center shrink-0 text-[10px] font-medium mt-0.5">
                  {idx + 1}
                </span>
                <span className="font-light leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Iced Preparation */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E7E1D6] shadow-xs space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-[#F0EAE0]">
            <h3 className="font-serif text-xl sm:text-2xl text-[#1E3A2B] font-medium">
              Iced
            </h3>
            <div className="flex items-center gap-2 text-xs text-[#5E7264] font-medium">
              <span className="px-2.5 py-1 rounded-full bg-[#F3EFE7]">1 tea bag</span>
              <span className="px-2.5 py-1 rounded-full bg-[#F3EFE7]">3–5 min, then cool</span>
            </div>
          </div>

          <ol className="space-y-3.5 text-xs sm:text-sm text-[#4E6254]">
            {icedSteps.map((step, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#1E3A2B] text-white flex items-center justify-center shrink-0 text-[10px] font-medium mt-0.5">
                  {idx + 1}
                </span>
                <span className="font-light leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
