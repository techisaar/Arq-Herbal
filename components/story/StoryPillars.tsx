import React from "react";
import { MapPinIcon, FlowerIcon, ShieldCheckIcon, FlaskIcon } from "@/components/icons/Icons";

export function StoryPillars() {
  const pillars = [
    {
      title: "Rooted in India",
      icon: <MapPinIcon className="w-5 h-5 text-[#2E5E42]" />,
    },
    {
      title: "Whole leaf and flower",
      icon: <FlowerIcon className="w-5 h-5 text-[#2E5E42]" />,
    },
    {
      title: "Caffeine free and clean",
      icon: <ShieldCheckIcon className="w-5 h-5 text-[#2E5E42]" />,
    },
    {
      title: "Guided by experts",
      icon: <FlaskIcon className="w-5 h-5 text-[#2E5E42]" />,
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-y border-[#E8E2D5]">
        {pillars.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center text-center gap-3 p-3 group"
          >
            <div className="w-11 h-11 rounded-full bg-[#EDF3EE] flex items-center justify-center group-hover:scale-105 transition-transform">
              {item.icon}
            </div>
            <span className="text-xs sm:text-sm font-medium text-[#22352A] tracking-tight">
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
