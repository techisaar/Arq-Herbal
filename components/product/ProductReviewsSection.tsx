"use client";

import React, { useState } from "react";
import { StarIcon } from "@/components/icons/Icons";

export function ProductReviewsSection() {
  const reviews = [
    {
      author: "Priya Sharma",
      rating: 5,
      headline: "Perfect for my evening routine",
      comment:
        "The flavour is soft and soothing with a gentle herbal aroma. I enjoy a warm cup in the evening when I want something simple and calming.",
    },
    {
      author: "Neha Kapoor",
      rating: 5,
      headline: "Light and floral",
      comment:
        "Really liked how light this tastes. It has a pleasant floral note and a refreshing finish without being overly sweet or strong.",
    },
    {
      author: "Ananya Mehta",
      rating: 5,
      headline: "A gentle evening cup",
      comment:
        "Light, floral and very easy to drink. I liked the subtle aroma and the whole-herb tea bag makes the cup feel a little more special.",
    },
    {
      author: "Kavya Arora",
      rating: 4,
      headline: "Very refreshing",
      comment:
        "A delicate herbal cup with a lovely natural colour. I prefer steeping it a little lighter, but overall it is refreshing and pleasant.",
    },
  ];

  const breakdown = [
    { star: 5, count: 9, pct: 82 },
    { star: 4, count: 2, pct: 18 },
    { star: 3, count: 0, pct: 0 },
    { star: 2, count: 0, pct: 0 },
    { star: 1, count: 0, pct: 0 },
  ];

  const [activePage, setActivePage] = useState(0);

  return (
    <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#E8E2D5]">
      {/* Header */}
      <div className="mb-8">
        <span className="text-[11px] sm:text-xs tracking-[0.25em] uppercase text-[#6E7E73] font-semibold">
          CUSTOMER REVIEWS
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#1E3A2B] font-normal mt-1">
          Real Experiences, <span className="italic">Real Stories</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Score Breakdown Card */}
        <div className="lg:col-span-4 bg-white rounded-3xl p-6 sm:p-8 border border-[#E7E1D6] shadow-xs space-y-6">
          <div className="text-center sm:text-left">
            <span className="font-serif text-5xl font-semibold text-[#1E3A2B] block">
              4.82
            </span>
            <div className="flex items-center justify-center sm:justify-start gap-1 mt-1">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="w-4 h-4 fill-[#DF9E27] text-[#DF9E27]" />
              ))}
            </div>
            <span className="text-xs text-[#7B8B80] mt-1 block">
              Based on 11 reviews
            </span>
          </div>

          {/* Star Breakdown Bars */}
          <div className="space-y-2 pt-2 border-t border-[#F2ECE1] text-xs">
            {breakdown.map((row) => (
              <div key={row.star} className="flex items-center gap-2">
                <span className="w-6 text-[#526458] font-medium">{row.star} ★</span>
                <div className="flex-1 h-2 bg-[#F0EAE0] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#DF9E27] rounded-full"
                    style={{ width: `${row.pct}%` }}
                  />
                </div>
                <span className="w-4 text-right text-[#7B8B80]">{row.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Reviews Grid */}
        <div className="lg:col-span-8 space-y-4">
          {/* Top Pagination Row */}
          <div className="flex items-center justify-between text-xs text-[#7B8B80] pb-2">
            <span>Showing 4 of 11 reviews</span>
            <div className="flex items-center gap-2">
              <span className="underline hover:text-[#1E3A2B] cursor-pointer mr-2">
                See all reviews
              </span>
              <button
                type="button"
                onClick={() => setActivePage(Math.max(0, activePage - 1))}
                className="w-7 h-7 rounded-full border border-[#DDD5C7] flex items-center justify-center hover:bg-white text-[#1E3A2B] cursor-pointer"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => setActivePage(activePage + 1)}
                className="w-7 h-7 rounded-full border border-[#DDD5C7] flex items-center justify-center hover:bg-white text-[#1E3A2B] cursor-pointer"
              >
                →
              </button>
            </div>
          </div>

          {/* Review Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reviews.map((rev, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 border border-[#E7E1D6] shadow-xs space-y-3"
              >
                {/* Stars */}
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < rev.rating
                          ? "fill-[#DF9E27] text-[#DF9E27]"
                          : "fill-none text-[#DDD5C7]"
                      }`}
                    />
                  ))}
                </div>

                {/* Author & Headline */}
                <div>
                  <h4 className="font-serif text-base font-medium text-[#1E3A2B]">
                    {rev.headline}
                  </h4>
                  <span className="text-xs text-[#7B8B80] font-medium block mt-0.5">
                    {rev.author}
                  </span>
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-[#526458] font-light leading-relaxed">
                  {rev.comment}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
