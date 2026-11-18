"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HeartIcon } from "@/components/icons/Icons";
import { ARQTinMockup } from "@/components/home/ARQTinMockup";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onToggleWishlist?: (productId: string) => void;
  isWishlisted?: boolean;
}

export function ProductCard({
  product,
  onAddToCart,
  onToggleWishlist,
  isWishlisted = false,
}: ProductCardProps) {
  const [localWishlist, setLocalWishlist] = useState(isWishlisted);

  const handleHeartClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setLocalWishlist(!localWishlist);
    if (onToggleWishlist) {
      onToggleWishlist(product.id);
    }
  };

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E7E2D6] transition-all duration-300 hover:shadow-xl hover:shadow-[#1E3A2B]/8 hover:-translate-y-1 flex flex-col justify-between group">
      {/* Product Image Container */}
      <Link
        href={`/product/${product.id}`}
        className="relative w-full aspect-square rounded-xl overflow-hidden bg-[#F4EFE6] mb-4 border border-[#EAE4D7] block"
      >
        {/* Top-left Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 z-20 px-3 py-1 rounded-full text-[11px] font-normal tracking-wide bg-[#FAF8F3]/95 text-[#3C4E42] backdrop-blur-xs border border-[#E3DDCF] shadow-xs">
            {product.badge}
          </span>
        )}

        {/* Top-right Wishlist Button */}
        <button
          onClick={handleHeartClick}
          aria-label="Save to wishlist"
          className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-white/95 hover:bg-white text-[#4A5D51] hover:text-[#b84234] flex items-center justify-center transition-colors shadow-xs backdrop-blur-xs"
        >
          <HeartIcon filled={localWishlist} className="w-4 h-4" />
        </button>

        {/* Luxury ARQ Tin Mockup matching Figma packaging */}
        <ARQTinMockup name={product.name} />
      </Link>

      {/* Card Details: Exact Figma Hierarchy */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          {/* Eyebrow */}
          <span className="block text-[11px] tracking-[0.22em] uppercase font-medium text-[#7D8A81] mb-1">
            A R Q  H E R B A L
          </span>

          {/* Product Title on Left & Price on Right */}
          <div className="flex items-baseline justify-between gap-2 mb-0.5">
            <Link
              href={`/product/${product.id}`}
              className="font-serif text-lg sm:text-xl font-medium text-[#1E3A2B] hover:text-[#2E5E42] transition-colors"
            >
              {product.name}
            </Link>
            <span className="font-semibold text-base sm:text-lg text-[#1E3A2B] shrink-0">
              ₹{product.price}
            </span>
          </div>

          {/* Subtitle */}
          <p className="text-xs text-[#7B8A80] mb-3">
            {product.subtitle}
          </p>

          {/* Benefit Pills */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
            {product.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-[11px] px-3 py-0.5 rounded-full bg-[#EFF3F0] text-[#3D5244] border border-[#DEE7E0] font-normal"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={() => onAddToCart(product)}
          className="w-full py-2.5 sm:py-3 px-4 rounded-full bg-[#1A3326] hover:bg-[#254635] text-white text-xs sm:text-sm font-medium tracking-wide transition-all duration-200 active:scale-[0.98] shadow-xs hover:shadow-md flex items-center justify-center"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

