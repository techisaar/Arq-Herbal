import React from "react";
import { LeafIcon, FlaskIcon, ShieldCheckIcon, HandpickedIcon } from "@/components/icons/Icons";

export function TrustBar() {
  const items = [
    {
      label: "100% Natural",
      icon: <LeafIcon className="w-5 h-5 text-[#2E5E42]" />,
    },
    {
      label: "Lab Tested",
      icon: <FlaskIcon className="w-5 h-5 text-[#2E5E42]" />,
    },
    {
      label: "No Added Preservatives",
      icon: <ShieldCheckIcon className="w-5 h-5 text-[#2E5E42]" />,
    },
    {
      label: "Handpicked Herbs",
      icon: <HandpickedIcon className="w-5 h-5 text-[#2E5E42]" />,
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 -mt-10 sm:-mt-12 relative z-20">
      <div className="bg-[#FAF8F3] border border-[#E8E2D5] rounded-2xl sm:rounded-full py-4 sm:py-5 px-6 sm:px-10 shadow-lg shadow-[#1E3A2B]/5 backdrop-blur-sm">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 items-center justify-items-center">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2.5 sm:gap-3 text-center sm:text-left group"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#EBF2EC] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                {item.icon}
              </div>
              <span className="text-xs sm:text-sm font-medium text-[#22352A] tracking-tight">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
