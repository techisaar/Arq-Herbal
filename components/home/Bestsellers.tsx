"use client";

import React from "react";
import Image from "next/image";
import { ArrowRightIcon } from "@/components/icons/Icons";
import { ProductCard } from "@/components/home/ProductCard";
import { BotanicalBranch } from "@/components/home/BotanicalLeaves";
import { products } from "@/data/products";
import { Product } from "@/types";

interface BestsellersProps {
  onAddToCart: (product: Product) => void;
  onToggleWishlist?: (productId: string) => void;
  wishlistIds?: string[];
  selectedCategory?: string | null;
}

export function Bestsellers({
  onAddToCart,
  onToggleWishlist,
  wishlistIds = [],
  selectedCategory = null,
}: BestsellersProps) {
  const displayedProducts = selectedCategory
    ? products.filter((p) => p.benefitCategory === selectedCategory)
    : products;

  return (
    <section id="bestsellers" className="relative py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-visible">
      {/* Botanical branches beside banner and products */}
      <BotanicalBranch position="right-top" className="top-10 -right-24 sm:-right-12 scale-125" />
      <BotanicalBranch position="left-middle" className="top-96 -left-28 sm:-left-12 scale-125" />

      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4 relative z-10">
        <div>
          <span className="text-xs sm:text-sm tracking-[0.25em] uppercase text-[#6B7B71] font-medium">
            B E S T S E L L E R S
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1E3A2B] font-normal mt-1">
            Loved by our <span className="italic">community</span>
          </h2>
        </div>

        <a
          href="#products-grid"
          className="inline-flex items-center gap-2 self-start sm:self-auto px-5 py-2.5 rounded-full border border-[#D5CDC0] text-[#33463A] text-xs sm:text-sm font-medium hover:border-[#1E3A2B] hover:text-[#1E3A2B] transition-colors bg-white/70 backdrop-blur-xs"
        >
          Shop All <ArrowRightIcon className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Featured Banner: The ARQ Collection */}
      <div id="collection" className="relative z-10 rounded-3xl overflow-hidden bg-[#ECE6DA] border border-[#DDD5C7] mb-12 sm:mb-16 p-6 sm:p-10 lg:p-14 shadow-xs">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left Text */}
          <div className="md:col-span-6 lg:col-span-5 space-y-4 sm:space-y-5">
            <span className="text-[11px] sm:text-xs tracking-[0.3em] uppercase text-[#6C7C72] font-semibold">
              T H E  A R Q  C O L L E C T I O N
            </span>

            <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E3A2B] font-normal leading-tight">
              Find your <span className="italic font-normal">ritual</span>
            </h3>

            <p className="text-sm sm:text-base text-[#5B6A60] leading-relaxed max-w-md font-light">
              Tap a tin to jump to it, or browse every blend below.
            </p>

            <div className="pt-2">
              <a
                href="#products-grid"
                className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 rounded-full bg-[#1A3326] hover:bg-[#254635] text-white text-xs sm:text-sm font-medium transition-all shadow-md hover:shadow-lg"
              >
                Shop all teas <ArrowRightIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Product Imagery with ARQ Tins & Glass Steeping Cup */}
          <div className="md:col-span-6 lg:col-span-7 relative h-60 sm:h-72 md:h-80 rounded-2xl overflow-hidden bg-[#E2DBD0] border border-[#D6CDBC]">
            <Image
              src="https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1200&q=80"
              alt="The ARQ Collection premium tea tins and glass teacup with steeped golden tea"
              fill
              className="object-cover object-center"
            />
            {/* Soft ambient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#ECE6DA]/30 via-transparent to-transparent pointer-events-none" />

            {/* Overlapping Gold Tin Showcase Badges */}
            <div className="absolute bottom-4 right-4 bg-[#1A3326]/85 backdrop-blur-md text-white px-3.5 py-1.5 rounded-full text-xs font-serif tracking-wider border border-[#D4AF37]/50 shadow-lg">
              ✨ Four Signature Blends
            </div>
          </div>
        </div>
      </div>

      {/* 6 Products Grid */}
      <div id="products-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 relative z-10">
        {(displayedProducts.length > 0 ? displayedProducts : products).map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
            onToggleWishlist={onToggleWishlist}
            isWishlisted={wishlistIds.includes(product.id)}
          />
        ))}
      </div>
    </section>
  );
}
