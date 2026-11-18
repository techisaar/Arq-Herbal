"use client";

import React, { useState, useMemo } from "react";
import { ingredients, Ingredient } from "@/data/ingredients";
import { IngredientDetailModal } from "./IngredientDetailModal";

export function IngredientsGrid() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeIngredient, setActiveIngredient] = useState<Ingredient | null>(null);

  const categories = [
    { id: "all", label: "All Herbs" },
    { id: "immunity", label: "Immunity" },
    { id: "sleep", label: "Sleep & Calm" },
    { id: "stress", label: "Stress & Mind" },
    { id: "digestion", label: "Digestion" },
    { id: "skin", label: "Radiant Skin" },
  ];

  const filteredIngredients = useMemo(() => {
    return ingredients.filter((ing) => {
      const matchesCategory =
        selectedCategory === "all" || ing.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        ing.name.toLowerCase().includes(q) ||
        ing.botanicalName.toLowerCase().includes(q) ||
        ing.origin.toLowerCase().includes(q) ||
        ing.description.toLowerCase().includes(q) ||
        ing.categoryLabel.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <section id="directory" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Search & Filter Controls */}
      <div className="max-w-3xl mx-auto mb-12 sm:mb-16 space-y-6">
        {/* Search Input Bar */}
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search an herb, botanical name, or origin (e.g. Chamomile, Kerala, Tulsi)..."
            className="w-full bg-white border border-[#DCD5C7] text-[#1E3A2B] placeholder-[#8C9C92] text-sm sm:text-base rounded-full py-4 pl-13 pr-10 shadow-xs focus:outline-none focus:border-[#C49647] focus:ring-2 focus:ring-[#C49647]/20 transition-all"
          />
          {/* Search Icon */}
          <div className="absolute left-5 top-1/2 -translate-y-1/2 text-[#8C9C92]">
            <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5">
              <path
                d="M9 16A7 7 0 1 0 9 2a7 7 0 0 0 0 14Zm6-1 4 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#8C9C92] hover:text-[#1E3A2B] px-2 py-1 cursor-pointer"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-[#1E3A2B] text-white shadow-xs"
                  : "bg-white text-[#55655B] border border-[#E3DDD1] hover:border-[#1E3A2B] hover:text-[#1E3A2B]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Counter */}
        <div className="text-center">
          <p className="text-xs uppercase tracking-widest text-[#7C8F83] font-medium">
            Showing {filteredIngredients.length} of {ingredients.length} herbs
          </p>
        </div>
      </div>

      {/* Grid of Alphabetical Botanical Cards */}
      {filteredIngredients.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-3xl border border-[#E8E2D5] p-8 max-w-lg mx-auto">
          <p className="font-serif text-xl text-[#1E3A2B] mb-2">No matching herbs found</p>
          <p className="text-sm text-[#7C8F83] mb-6">
            Try adjusting your search query or switching categories.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("all");
            }}
            className="px-6 py-2.5 rounded-full bg-[#1E3A2B] text-white text-xs font-medium hover:bg-[#284E39] transition-colors"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {filteredIngredients.map((ing) => (
            <div
              key={ing.id}
              onClick={() => setActiveIngredient(ing)}
              className="group bg-white rounded-2xl sm:rounded-3xl border border-[#E5DFD3] hover:border-[#C49647]/60 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col cursor-pointer"
            >
              {/* Colored Top Header Banner with Big Letter */}
              <div
                className="h-28 sm:h-32 p-5 flex items-start justify-between relative overflow-hidden transition-all duration-300"
                style={{ backgroundColor: ing.headerColor }}
              >
                {/* Big White Serif Letter */}
                <span className="font-serif text-5xl sm:text-6xl text-white font-light tracking-tight leading-none drop-shadow-xs">
                  {ing.letter}
                </span>

                {/* Pill Badge */}
                <span className="text-[10px] uppercase tracking-wider font-semibold bg-white/20 backdrop-blur-xs text-white px-2.5 py-1 rounded-full">
                  {ing.category}
                </span>

                {/* Subtle decorative leaf pattern */}
                <div className="absolute -right-4 -bottom-4 w-20 h-20 rounded-full bg-white/10 pointer-events-none" />
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-1.5">
                  <h3 className="font-serif text-xl sm:text-2xl text-[#1E3A2B] font-medium group-hover:text-[#285038] transition-colors">
                    {ing.name}
                  </h3>
                  <p className="text-xs italic text-[#7C8F83] font-serif">
                    {ing.botanicalName}
                  </p>

                  <div className="pt-1.5">
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#4D6254] bg-[#F4EFE6] px-2.5 py-0.5 rounded-full">
                      📍 {ing.origin}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-[13px] text-[#55655B] leading-relaxed line-clamp-3 font-light">
                  {ing.description}
                </p>

                <div className="pt-2 border-t border-[#F2ECE1] flex items-center justify-between text-xs text-[#2E5E42] font-medium">
                  <span className="group-hover:translate-x-0.5 transition-transform">
                    Explore profile →
                  </span>
                  <span className="text-[11px] text-[#8C9C92]">
                    {ing.caffeine.includes("Free") ? "Caffeine-Free" : ""}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Interactive Modal */}
      <IngredientDetailModal
        ingredient={activeIngredient}
        onClose={() => setActiveIngredient(null)}
      />
    </section>
  );
}
