import React from "react";
import { Product } from "@/types";

interface ProductIngredientsBentoProps {
  product: Product;
}

export function ProductIngredientsBento({ product }: ProductIngredientsBentoProps) {
  return (
    <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <span className="text-[11px] sm:text-xs tracking-[0.25em] uppercase text-[#6E7E73] font-semibold">
          PRODUCT INFORMATION
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#1E3A2B] font-normal mt-1">
          Everything That Goes Into Your <span className="italic">Cup</span>
        </h2>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Hero Card (Dark Forest Green) */}
        <div className="lg:col-span-5 bg-[#152B1E] text-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-xs">
          <div>
            <span className="text-[10px] tracking-widest uppercase font-semibold text-[#D4AF37] block mb-6">
              INGREDIENTS
            </span>

            <h3 className="font-serif text-3xl sm:text-4xl font-normal leading-tight">
              {product.ingredients || "100% pure chamomile flowers"}
            </h3>
          </div>

          <div className="pt-8 border-t border-[#274432] mt-8">
            <span className="text-xs text-[#9BB1A3] font-light">
              Botanical name · <em className="text-white not-italic">{product.botanicalName || "Chamaemelum nobile"}</em>
            </span>
          </div>
        </div>

        {/* Right 4 Bento Cards */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Caffeine */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E7E1D6] shadow-xs space-y-2">
            <span className="text-[10px] tracking-wider uppercase text-[#738578] font-semibold block">
              CAFFEINE
            </span>
            <h4 className="font-serif text-xl text-[#1E3A2B] font-medium">
              Caffeine-free
            </h4>
            <p className="text-xs sm:text-sm text-[#55675A] font-light leading-relaxed">
              Naturally, so it suits any time of day.
            </p>
          </div>

          {/* Taste & Aroma */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E7E1D6] shadow-xs space-y-2">
            <span className="text-[10px] tracking-wider uppercase text-[#738578] font-semibold block">
              TASTE & AROMA
            </span>
            <h4 className="font-serif text-xl text-[#1E3A2B] font-medium">
              Smooth and floral
            </h4>
            <p className="text-xs sm:text-sm text-[#55675A] font-light leading-relaxed">
              Mild floral aroma with a comforting taste.
            </p>
          </div>

          {/* Sourcing */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E7E1D6] shadow-xs space-y-2">
            <span className="text-[10px] tracking-wider uppercase text-[#738578] font-semibold block">
              SOURCING
            </span>
            <h4 className="font-serif text-xl text-[#1E3A2B] font-medium">
              Himachal Pradesh & Uttarakhand
            </h4>
            <p className="text-xs sm:text-sm text-[#55675A] font-light leading-relaxed">
              Selected cultivation regions direct from small farms.
            </p>
          </div>

          {/* Quantity */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E7E1D6] shadow-xs space-y-2">
            <span className="text-[10px] tracking-wider uppercase text-[#738578] font-semibold block">
              QUANTITY
            </span>
            <h4 className="font-serif text-xl text-[#1E3A2B] font-medium">
              {product.packSize || "15 tea bags"}
            </h4>
            <p className="text-xs sm:text-sm text-[#55675A] font-light leading-relaxed">
              22.5 g total whole-herb net weight.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
