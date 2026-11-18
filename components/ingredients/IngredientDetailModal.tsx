"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { Ingredient } from "@/data/ingredients";
import { CloseIcon, ArrowRightIcon } from "@/components/icons/Icons";

interface IngredientDetailModalProps {
  ingredient: Ingredient | null;
  onClose: () => void;
}

export function IngredientDetailModal({ ingredient, onClose }: IngredientDetailModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (ingredient) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [ingredient, onClose]);

  if (!ingredient) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-[#E8E2D5] z-10 animate-in zoom-in-95 duration-200">
        {/* Top Header Banner with Herb Color */}
        <div
          className="relative px-6 sm:px-8 py-8 text-white flex items-start justify-between"
          style={{ backgroundColor: ingredient.headerColor }}
        >
          <div className="space-y-1">
            <span className="font-serif text-5xl sm:text-6xl font-light opacity-90 leading-none">
              {ingredient.letter}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight">
              {ingredient.name}
            </h3>
            <p className="text-xs sm:text-sm italic opacity-90">
              {ingredient.botanicalName}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-black/20 hover:bg-black/30 text-white transition-colors cursor-pointer"
            aria-label="Close details"
          >
            <CloseIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Origin & Category Badges */}
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3EFE6] text-[#4A5D50] font-medium">
              📍 Origin: {ingredient.origin}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF2EC] text-[#255C3A] font-medium">
              🌿 {ingredient.categoryLabel}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF5E8] text-[#8C6D1F] font-medium">
              ☕ {ingredient.caffeine}
            </span>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-[#798C80] font-semibold mb-2">
              Botanical Profile & Tradition
            </h4>
            <p className="text-[#3F4F45] text-sm sm:text-base leading-relaxed font-light">
              {ingredient.description}
            </p>
          </div>

          {/* Flavor Notes & Key Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-[#F0ECE1]">
            <div>
              <h5 className="text-xs uppercase tracking-wider text-[#798C80] font-semibold mb-1.5">
                Flavor & Aroma
              </h5>
              <p className="text-xs sm:text-sm text-[#4F6055] leading-relaxed">
                {ingredient.flavorNotes}
              </p>
            </div>
            <div>
              <h5 className="text-xs uppercase tracking-wider text-[#798C80] font-semibold mb-1.5">
                Steeping Guidance
              </h5>
              <p className="text-xs sm:text-sm text-[#4F6055] leading-relaxed">
                {ingredient.steepTemp} • {ingredient.steepTime}
              </p>
            </div>
          </div>

          {/* Key Benefits List */}
          <div>
            <h5 className="text-xs uppercase tracking-wider text-[#798C80] font-semibold mb-2">
              Primary Wellness Virtues
            </h5>
            <div className="flex flex-wrap gap-2">
              {ingredient.keyBenefits.map((b, i) => (
                <span
                  key={i}
                  className="text-xs px-2.5 py-1 rounded-md bg-[#FAF8F5] border border-[#E7E1D4] text-[#2C3E33]"
                >
                  ✓ {b}
                </span>
              ))}
            </div>
          </div>

          {/* Featured in ARQ Blends */}
          <div className="pt-4 border-t border-[#F0ECE1]">
            <h5 className="text-xs uppercase tracking-wider text-[#798C80] font-semibold mb-3">
              Steeped Inside These ARQ Teas
            </h5>
            <div className="flex flex-wrap gap-2">
              {ingredient.usedInBlends.map((blend, i) => (
                <Link
                  key={i}
                  href="/shop"
                  onClick={onClose}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1E3A2B] hover:bg-[#284E39] text-white text-xs font-medium transition-colors"
                >
                  {blend} <ArrowRightIcon className="w-3 h-3" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
