"use client";

import React, { useState } from "react";
import { StarIcon, CheckIcon } from "@/components/icons/Icons";
import { Product } from "@/types";

interface ProductBuyBoxProps {
  product: Product;
  onAddToCart: (product: Product, quantity: number) => void;
}

export function ProductBuyBox({ product, onAddToCart }: ProductBuyBoxProps) {
  const [quantity, setQuantity] = useState(1);
  const [pincode, setPincode] = useState("");
  const [pincodeStatus, setPincodeStatus] = useState<string | null>(null);

  const handleCheckPincode = (e: React.FormEvent) => {
    e.preventDefault();
    if (pincode.length === 6 && /^\d+$/.test(pincode)) {
      setPincodeStatus("Delivery available! Estimated arrival in 2–4 business days.");
    } else {
      setPincodeStatus("Please enter a valid 6-digit Indian pincode.");
    }
  };

  const originalPrice = product.originalPrice || 1599;
  const discountPercent = Math.round(((originalPrice - product.price) / originalPrice) * 100);

  return (
    <div className="space-y-6">
      {/* Sourcing Eyebrow */}
      <div>
        <span className="text-xs tracking-wider uppercase font-medium text-[#65776B]">
          Sourced from Himachal
        </span>

        {/* Title */}
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E3A2B] font-normal mt-1 leading-tight">
          {product.name.split(" ")[0]}{" "}
          <span className="italic font-normal text-[#2E5E42]">
            {product.name.split(" ").slice(1).join(" ") || "Calm"}
          </span>
        </h1>

        {/* Star Rating & Reviews Count */}
        <div className="flex items-center gap-2 mt-2.5">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} className="w-4 h-4 fill-[#DF9E27] text-[#DF9E27]" />
            ))}
          </div>
          <span className="text-xs font-semibold text-[#1E3A2B]">
            {product.rating || 4.82} / 5
          </span>
          <span className="text-xs text-[#7B8B80] underline cursor-pointer">
            {product.reviewsCount || 11} reviews
          </span>
        </div>
      </div>

      {/* Pricing Block */}
      <div className="space-y-1 pt-1">
        <div className="flex items-baseline gap-3">
          <span className="font-serif text-3xl sm:text-4xl font-semibold text-[#1E3A2B]">
            ₹{product.price.toLocaleString("en-IN")}.00
          </span>
          {originalPrice > product.price && (
            <>
              <span className="text-base sm:text-lg text-[#94A49A] line-through">
                ₹{originalPrice.toLocaleString("en-IN")}.00
              </span>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#EBF5EE] text-[#2E5E42] border border-[#D5EAD9]">
                Save {discountPercent}%
              </span>
            </>
          )}
        </div>

        <p className="text-xs text-[#7A8A7F]">
          {product.perBagPrice || "₹73.27 per tea bag"} · Inclusive of all taxes
        </p>

        {/* Stock status */}
        <div className="flex items-center gap-2 pt-2">
          <span className="w-2 h-2 rounded-full bg-[#22C55E]" />
          <span className="text-xs font-medium text-[#1E3A2B]">In stock</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm sm:text-base text-[#526458] font-light leading-relaxed">
        {product.description}
      </p>

      {/* Pack Size Selector */}
      <div className="space-y-2 pt-2">
        <span className="text-xs font-medium text-[#1E3A2B] block">Pack size</span>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="px-4 py-2 rounded-xl text-xs sm:text-sm font-medium bg-[#FAF8F3] text-[#1E3A2B] border-2 border-[#1E3A2B] shadow-xs cursor-default"
          >
            {product.packSize || "15 tea bags · 22.5 g"}
          </button>
        </div>
      </div>

      {/* Quantity & Add to Cart Row */}
      <div className="flex items-center gap-4 pt-2">
        {/* Quantity Stepper */}
        <div className="flex items-center border border-[#DDD6C9] rounded-full px-3 py-2 bg-white shrink-0">
          <button
            type="button"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="w-6 h-6 flex items-center justify-center text-[#5E6D63] hover:text-[#1E3A2B] text-lg font-medium cursor-pointer"
          >
            −
          </button>
          <span className="w-8 text-center font-semibold text-sm text-[#1E3A2B]">
            {quantity}
          </span>
          <button
            type="button"
            onClick={() => setQuantity(quantity + 1)}
            className="w-6 h-6 flex items-center justify-center text-[#5E6D63] hover:text-[#1E3A2B] text-lg font-medium cursor-pointer"
          >
            +
          </button>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={() => onAddToCart(product, quantity)}
          className="flex-1 py-3.5 px-6 rounded-full bg-[#1E3A2B] hover:bg-[#284E39] text-white text-sm sm:text-base font-medium transition-all shadow-md hover:shadow-lg active:scale-[0.98] cursor-pointer text-center"
        >
          Add to cart
        </button>
      </div>

      {/* Pincode Delivery Checker */}
      <div className="pt-2">
        <form onSubmit={handleCheckPincode} className="space-y-2">
          <span className="text-xs font-medium text-[#1E3A2B] block">Check delivery</span>
          <div className="flex gap-2 max-w-sm">
            <input
              type="text"
              maxLength={6}
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              placeholder="Enter 6-digit pincode"
              className="flex-1 px-3.5 py-2 text-xs sm:text-sm border border-[#DDD5C7] rounded-xl bg-white text-[#1E3A2B] placeholder-[#9EA99E] focus:outline-none focus:border-[#1E3A2B]"
            />
            <button
              type="submit"
              className="px-5 py-2 text-xs sm:text-sm font-medium rounded-xl border border-[#DDD5C7] bg-[#FAF8F3] hover:bg-white text-[#1E3A2B] transition-colors cursor-pointer"
            >
              Check
            </button>
          </div>
          {pincodeStatus && (
            <p className="text-xs text-[#2E5E42] font-medium pt-1">
              {pincodeStatus}
            </p>
          )}
        </form>
      </div>

      {/* Trust Highlights Strip */}
      <div className="pt-4 border-t border-[#E8E2D5] flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-[#526458]">
        <div className="flex items-center gap-1.5">
          <CheckIcon className="w-3.5 h-3.5 text-[#2E5E42]" />
          <span>Free shipping over ₹699</span>
        </div>
        <div className="flex items-center gap-1.5">
          <CheckIcon className="w-3.5 h-3.5 text-[#2E5E42]" />
          <span>COD available</span>
        </div>
        <div className="flex items-center gap-1.5">
          <CheckIcon className="w-3.5 h-3.5 text-[#2E5E42]" />
          <span>30-day money-back</span>
        </div>
        <div className="flex items-center gap-1.5">
          <CheckIcon className="w-3.5 h-3.5 text-[#2E5E42]" />
          <span>Lab tested</span>
        </div>
      </div>
    </div>
  );
}
