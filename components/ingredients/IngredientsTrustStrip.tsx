"use client";

import React from "react";
import { LeafIcon, FlaskIcon, ShieldCheckIcon, HandpickedIcon } from "@/components/icons/Icons";

export function IngredientsTrustStrip() {
  const pillars = [
    {
      icon: <HandpickedIcon className="w-5 h-5 text-[#2E5E42]" />,
      title: "Pesticide-free / Single Origin",
      desc: "Traced to specific regional soil",
    },
    {
      icon: <LeafIcon className="w-5 h-5 text-[#2E5E42]" />,
      title: "Whole leaf & flower",
      desc: "Never crushed dust or fannings",
    },
    {
      icon: <ShieldCheckIcon className="w-5 h-5 text-[#2E5E42]" />,
      title: "Cultivated on hillside farms",
      desc: "Ethically handpicked harvests",
    },
    {
      icon: <FlaskIcon className="w-5 h-5 text-[#2E5E42]" />,
      title: "Pharmacopoeia tested",
      desc: "Triple-verified heavy metal free",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 -mt-7 sm:-mt-8 relative z-20">
      <div className="bg-white border border-[#E8E2D5] rounded-2xl shadow-lg shadow-[#1E3A2B]/5 p-4 sm:p-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#ECE7DD]">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className={`flex flex-col sm:flex-row items-center text-center sm:text-left gap-3 ${
                idx > 0 ? "pt-4 sm:pt-0 sm:pl-6" : ""
              }`}
            >
              <div className="w-10 h-10 rounded-full bg-[#EBF2EC] flex items-center justify-center shrink-0">
                {pillar.icon}
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-[#1E3A2B] leading-tight">
                  {pillar.title}
                </h4>
                <p className="text-[11px] text-[#78887F] mt-0.5 leading-snug">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
