"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HeartIcon, ShoppingBagIcon } from "@/components/icons/Icons";
import { Product } from "@/types";

interface ShopProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onToggleWishlist?: (productId: string) => void;
  isWishlisted?: boolean;
}

export function ShopProductCard({
  product,
  onAddToCart,
  onToggleWishlist,
  isWishlisted = false,
}: ShopProductCardProps) {
  const [localWishlist, setLocalWishlist] = useState(isWishlisted);
  const [isHovered, setIsHovered] = useState(false);

  const handleHeartClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setLocalWishlist(!localWishlist);
    onToggleWishlist?.(product.id);
  };

  return (
    <div
      className="bg-white rounded-2xl border border-[#E8E2D7] transition-all duration-300 hover:shadow-xl hover:shadow-[#1E3A2B]/8 hover:-translate-y-1 flex flex-col group overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <Link
        href={`/product/${product.id}`}
        className="relative w-full aspect-[4/3] overflow-hidden bg-[#F4EFE6] block"
      >
        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 z-10 px-3 py-1 rounded-full text-[11px] font-medium tracking-wide bg-[#FAF8F3]/95 text-[#3C4E42] backdrop-blur-xs border border-[#E3DDCF] shadow-xs">
            {product.badge}
          </span>
        )}

        {/* Wishlist Heart */}
        <button
          onClick={handleHeartClick}
          aria-label="Save to wishlist"
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/95 hover:bg-white text-[#4A5D51] hover:text-[#b84234] flex items-center justify-center transition-colors shadow-xs backdrop-blur-xs"
        >
          <HeartIcon filled={localWishlist} className="w-4 h-4" />
        </button>

        {/* Image */}
        <Image
          src={product.image}
          alt={product.name}
          fill
          className={`object-cover object-center transition-transform duration-500 ${
            isHovered ? "scale-105" : "scale-100"
          }`}
        />
      </Link>

      {/* Card Body */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col">
        {/* Brand Eyebrow */}
        <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#1E6B3E] mb-1">
          ARQ HERBAL
        </span>

        {/* Title & Price */}
        <div className="flex items-baseline justify-between gap-2 mb-0.5">
          <Link
            href={`/product/${product.id}`}
            className="font-serif text-lg sm:text-xl font-medium text-[#1E3A2B] group-hover:text-[#2E5840] transition-colors"
          >
            {product.name}
          </Link>
          <span className="font-semibold text-base text-[#1E3A2B] shrink-0">
            ₹{product.price}
          </span>
        </div>

        {/* Subtitle */}
        <p className="text-xs text-[#7B8A80] mb-3">{product.subtitle}</p>

        {/* Benefit Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {product.tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-[11px] px-2.5 py-0.5 rounded-full bg-[#EFF3F0] text-[#3D5244] border border-[#DEE7E0] font-normal"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={() => onAddToCart(product)}
          className="w-full mt-auto py-2.5 sm:py-3 px-4 rounded-full bg-[#1A3326] hover:bg-[#254635] text-white text-xs sm:text-sm font-medium tracking-wide transition-all duration-200 active:scale-[0.98] shadow-xs hover:shadow-md flex items-center justify-center gap-2 cursor-pointer"
        >
          <ShoppingBagIcon className="w-3.5 h-3.5" />
          Add to cart
        </button>
      </div>
    </div>
  );
}

