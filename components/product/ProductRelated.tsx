"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { HeartIcon } from "@/components/icons/Icons";
import { products } from "@/data/products";
import { Product } from "@/types";

interface ProductRelatedProps {
  currentId: string;
  onAddToCart: (product: Product) => void;
}

export function ProductRelated({ currentId, onAddToCart }: ProductRelatedProps) {
  // Pick related blends: Lavender, Blue Tea, Stress Relief
  const related = products
    .filter((p) => p.id !== currentId && p.id !== "chamomile-calm" && p.id !== "arq-chamomile")
    .slice(0, 3);

  return (
    <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#E8E2D5]">
      {/* Header */}
      <div className="mb-8">
        <span className="text-[11px] sm:text-xs tracking-[0.25em] uppercase text-[#6E7E73] font-semibold">
          EXPLORE MORE
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#1E3A2B] font-normal mt-1">
          You May Also <span className="italic">Like</span>
        </h2>
      </div>

      {/* 3 Related Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {related.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E7E2D6] transition-all duration-300 hover:shadow-xl hover:shadow-[#1E3A2B]/8 hover:-translate-y-1 flex flex-col justify-between group"
          >
            {/* Image */}
            <Link
              href={`/product/${p.id}`}
              className="relative w-full aspect-square rounded-xl overflow-hidden bg-[#F4EFE6] mb-4 border border-[#EAE4D7] block"
            >
              {p.badge && (
                <span className="absolute top-3 left-3 z-10 px-3 py-1 rounded-full text-[11px] font-normal tracking-wide bg-[#FAF8F3]/95 text-[#3C4E42] backdrop-blur-xs border border-[#E3DDCF] shadow-xs">
                  {p.badge}
                </span>
              )}

              <button
                type="button"
                aria-label="Save to wishlist"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
                className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/95 hover:bg-white text-[#4A5D51] flex items-center justify-center shadow-xs"
              >
                <HeartIcon className="w-4 h-4" />
              </button>

              <Image
                src={p.image}
                alt={p.name}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </Link>

            {/* Details */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <span className="block text-[11px] tracking-[0.22em] uppercase font-medium text-[#7D8A81] mb-1">
                  A R Q  H E R B A L
                </span>

                <div className="flex items-baseline justify-between gap-2 mb-0.5">
                  <Link
                    href={`/product/${p.id}`}
                    className="font-serif text-lg sm:text-xl font-medium text-[#1E3A2B] hover:text-[#2E5E42] transition-colors"
                  >
                    {p.name}
                  </Link>
                  <span className="font-semibold text-base sm:text-lg text-[#1E3A2B] shrink-0">
                    ₹1,099
                  </span>
                </div>

                <p className="text-xs text-[#7B8A80] mb-3">{p.subtitle}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] px-3 py-0.5 rounded-full bg-[#EFF3F0] text-[#3D5244] border border-[#DEE7E0] font-normal"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => onAddToCart(p)}
                className="w-full py-2.5 sm:py-3 px-4 rounded-full bg-[#1A3326] hover:bg-[#254635] text-white text-xs sm:text-sm font-medium tracking-wide transition-all cursor-pointer"
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
