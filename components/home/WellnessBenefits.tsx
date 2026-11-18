"use client";

import React from "react";
import {
  MoonIcon,
  HeartLotusIcon,
  ShieldCheckIcon,
  BoltIcon,
  DropIcon,
  SparkleIcon,
} from "@/components/icons/Icons";
import { benefits } from "@/data/benefits";

interface WellnessBenefitsProps {
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

export function WellnessBenefits({
  selectedCategory,
  onSelectCategory,
}: WellnessBenefitsProps) {
  const getIcon = (iconName: string, isSelected: boolean) => {
    const iconColor = isSelected ? "text-white" : "text-[#4A6652]";
    switch (iconName) {
      case "MoonIcon":
        return <MoonIcon className={`w-5 h-5 ${iconColor}`} />;
      case "HeartLotusIcon":
        return <HeartLotusIcon className={`w-5 h-5 ${iconColor}`} />;
      case "ShieldCheckIcon":
        return <ShieldCheckIcon className={`w-5 h-5 ${iconColor}`} />;
      case "BoltIcon":
        return <BoltIcon className={`w-5 h-5 ${iconColor}`} />;
      case "DropIcon":
        return <DropIcon className={`w-5 h-5 ${iconColor}`} />;
      case "SparkleIcon":
        return <SparkleIcon className={`w-5 h-5 ${iconColor}`} />;
      default:
        return <MoonIcon className={`w-5 h-5 ${iconColor}`} />;
    }
  };

  return (
    <section id="wellness" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
      {/* Eyebrow */}
      <span className="text-xs sm:text-sm tracking-[0.25em] uppercase text-[#6E7E74] font-medium">
        W E L L N E S S ,  N A T U R A L L Y
      </span>

      {/* Heading */}
      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1E3A2B] font-normal mt-2 mb-10 sm:mb-14">
        Feel Better, <span className="italic">Sip by Sip</span>
      </h2>

      {/* 6 Benefit Pills: Clean, elegant white cards matching Figma */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 max-w-6xl mx-auto">
        {benefits.map((item) => {
          const isSelected = selectedCategory === item.category;

          return (
            <button
              key={item.id}
              onClick={() => onSelectCategory(isSelected ? null : item.category)}
              className={`p-4 sm:py-5 sm:px-3 rounded-2xl flex flex-col items-center justify-center gap-3 transition-all duration-300 border text-center cursor-pointer ${
                isSelected
                  ? "bg-[#1E3A2B] text-white border-[#1E3A2B] shadow-md scale-102"
                  : "bg-white/90 hover:bg-white text-[#293B30] border-[#E8E2D7] hover:border-[#2F5840] hover:shadow-sm"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                  isSelected ? "bg-white/20" : "bg-[#F3EFE7]"
                }`}
              >
                {getIcon(item.iconName, isSelected)}
              </div>
              <span className={`text-xs sm:text-sm font-medium ${isSelected ? "text-white" : "text-[#24352B]"}`}>
                {item.title}
              </span>
            </button>
          );
        })}
      </div>

      {selectedCategory && (
        <div className="mt-6">
          <button
            onClick={() => onSelectCategory(null)}
            className="text-xs text-[#5E7264] hover:text-[#1E3A2B] underline underline-offset-4 cursor-pointer"
          >
            Reset filter • Show all blends
          </button>
        </div>
      )}
    </section>
  );
}
