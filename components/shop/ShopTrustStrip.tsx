import React from "react";
import { LeafIcon, FlaskIcon, ShieldCheckIcon, HandpickedIcon } from "@/components/icons/Icons";

export function ShopTrustStrip() {
  const items = [
    { label: "100% Natural", icon: <LeafIcon className="w-4 h-4 text-[#2E5E42]" /> },
    { label: "Lab Tested", icon: <FlaskIcon className="w-4 h-4 text-[#2E5E42]" /> },
    { label: "No Added Preservatives", icon: <ShieldCheckIcon className="w-4 h-4 text-[#2E5E42]" /> },
    { label: "Handpicked Herbs", icon: <HandpickedIcon className="w-4 h-4 text-[#2E5E42]" /> },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 py-5 border-b border-[#E8E2D5]">
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-2 text-sm text-[#3A4E41] font-medium">
          <div className="w-7 h-7 rounded-full bg-[#EDF3EE] flex items-center justify-center shrink-0">
            {item.icon}
          </div>
          <span className="text-xs sm:text-sm">{item.label}</span>
        </div>
      ))}
    </div>
  );
}
