"use client";

import React from "react";

export type WellnessFilter = "all" | "sleep" | "stress" | "immunity" | "energy" | "digestion" | "skin";
export type FormatFilter = "all" | "loose" | "bags";
export type PriceFilter = "all" | "under500" | "500plus";
export type SortOption = "featured" | "price-low" | "price-high" | "newest";

interface ShopFiltersProps {
  activeWellness: WellnessFilter;
  onWellnessChange: (f: WellnessFilter) => void;
  sortBy: SortOption;
  onSortChange: (s: SortOption) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  totalProducts: number;
  filteredCount: number;
  onClearAll: () => void;
}

const wellnessOptions: { value: WellnessFilter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "sleep", label: "Better Sleep" },
  { value: "stress", label: "Stress Relief" },
  { value: "immunity", label: "Immunity" },
  { value: "energy", label: "Energy" },
  { value: "digestion", label: "Digestion" },
  { value: "skin", label: "Skin" },
];

export function ShopFilters({
  activeWellness,
  onWellnessChange,
  sortBy,
  onSortChange,
  searchQuery,
  onSearchChange,
  totalProducts,
  filteredCount,
  onClearAll,
}: ShopFiltersProps) {
  const hasActiveFilters = activeWellness !== "all" || searchQuery.length > 0;

  return (
    <div className="space-y-6">
      {/* Header Row: Title + Search + Sort */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="text-[11px] sm:text-xs tracking-[0.25em] uppercase text-[#6B7B71] font-medium">
            SHOP THE COLLECTION
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#1E3A2B] font-normal mt-0.5">
            Find your <span className="italic">ritual</span>
          </h2>
        </div>

        <div className="flex items-center gap-3">
          {/* Search Box */}
          <div className="relative">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A968E]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search teas"
              className="w-40 sm:w-48 pl-9 pr-3 py-2 text-sm border border-[#DDD6C9] rounded-lg bg-white placeholder-[#9EA99E] text-[#1E3A2B] focus:outline-none focus:border-[#4A6E54] transition-colors"
            />
          </div>

          {/* Sort Dropdown */}
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value as SortOption)}
            className="px-3 py-2 text-sm border border-[#DDD6C9] rounded-lg bg-white text-[#1E3A2B] focus:outline-none focus:border-[#4A6E54] appearance-none cursor-pointer pr-8"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
              backgroundPosition: "right 0.5rem center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "1.2em 1.2em",
            }}
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low → High</option>
            <option value="price-high">Price: High → Low</option>
            <option value="newest">Newest</option>
          </select>
        </div>
      </div>

      {/* Filter Pills Row */}
      <div className="flex flex-wrap items-center gap-2.5">
        <span className="text-xs text-[#6B7B71] font-medium mr-1">Filter by</span>

        {wellnessOptions.map((opt) => (
          <button
            key={opt.value}
            onClick={() => onWellnessChange(opt.value)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all cursor-pointer ${
              activeWellness === opt.value
                ? "bg-[#1E3A2B] text-white border-[#1E3A2B]"
                : "bg-white text-[#3A4E41] border-[#DDD6C9] hover:border-[#4A6E54]"
            }`}
          >
            {opt.label}
          </button>
        ))}

        {hasActiveFilters && (
          <button
            onClick={onClearAll}
            className="text-xs text-[#6B7B71] underline underline-offset-2 hover:text-[#1E3A2B] cursor-pointer ml-1"
          >
            Clear all
          </button>
        )}

        {/* Count */}
        <span className="ml-auto text-xs text-[#8A968E] hidden sm:inline">
          Showing {filteredCount} of {totalProducts} teas
        </span>
      </div>
    </div>
  );
}
