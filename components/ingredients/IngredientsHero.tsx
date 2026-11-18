"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export function IngredientsHero() {
  return (
    <section className="relative bg-[#F7F4EC] overflow-hidden pt-12 pb-16 sm:pt-20 sm:pb-24 border-b border-[#E8E2D5]">
      {/* Background botanical foliage image - warm sunlight & herbs */}
      <div className="absolute top-0 right-0 w-full sm:w-2/3 h-full pointer-events-none opacity-40 sm:opacity-60 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1200&q=80"
          alt="Sunlit botanical herbs and tea leaves"
          fill
          priority
          className="object-cover object-right-top mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F7F4EC] via-[#F7F4EC]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F7F4EC] via-transparent to-[#F7F4EC]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Eyebrow */}
        <p className="text-[#6B7B71] text-xs font-semibold tracking-[0.28em] uppercase mb-4 sm:mb-5">
          Pure Botanical Single-Origins
        </p>

        {/* Title */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#1E3A2B] font-normal tracking-tight leading-[1.12] mb-6">
          The ARQ ingredient<br />
          <span className="italic font-normal">library</span>
        </h1>

        {/* Subtitle */}
        <p className="text-[#55655B] text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-10">
          A curated directory of every herb, root, and botanical we steep at ARQ —
          where they grow, what they&apos;ve traditionally been used for, how they&apos;re harvested,
          and naturally caffeine-free.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
          <a
            href="#directory"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#1E3A2B] hover:bg-[#284E39] text-white font-medium text-sm sm:text-base transition-all shadow-md hover:shadow-lg hover:translate-y-[-1px]"
          >
            See search directory
          </a>
          <Link
            href="/consult"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white/80 hover:bg-white text-[#1E3A2B] font-medium text-sm sm:text-base border border-[#D5CEBF] transition-all hover:translate-y-[-1px] shadow-xs"
          >
            Book a consult
          </Link>
        </div>
      </div>
    </section>
  );
}
