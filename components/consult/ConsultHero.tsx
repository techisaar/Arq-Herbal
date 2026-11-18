"use client";

import React from "react";
import Image from "next/image";

interface ConsultHeroProps {
  onOpenBooking: () => void;
}

export function ConsultHero({ onOpenBooking }: ConsultHeroProps) {
  return (
    <section className="relative w-full min-h-[560px] sm:min-h-[620px] md:min-h-[680px] flex items-center overflow-hidden">
      {/* Background Photography — Doctor / Ayurvedic practitioner consulting across desk */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=2000&q=85"
          alt="Herbal wellness guidance made personal — expert consultation with doctor"
          fill
          priority
          className="object-cover object-center scale-105"
        />
        {/* Warm moody vignette overlay matching Figma design */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/35" />
        <div className="absolute inset-0 bg-[#0E1E14]/40 mix-blend-multiply" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
        <div className="max-w-2xl text-white">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.08] tracking-tight">
            Herbal
            <br />
            wellness
            <br />
            guidance,
            <br />
            <span className="italic font-normal text-[#E8C87A]">
              made personal
            </span>
          </h1>

          <p className="mt-6 sm:mt-7 text-base sm:text-lg md:text-xl text-[#E5EFE8] font-light max-w-lg leading-relaxed">
            Talk to our wellness experts, join our free community, or follow a
            monthly program. Start wherever feels right.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onOpenBooking}
              className="px-8 py-3.5 rounded-full bg-[#D4AF37] hover:bg-[#C29E2E] text-[#12241A] font-semibold text-sm sm:text-base transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer text-center"
            >
              Book Consultation
            </button>

            <a
              href="#pricing-options"
              className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-sm sm:text-base border border-white/30 backdrop-blur-xs transition-all hover:-translate-y-0.5 text-center cursor-pointer"
            >
              Compare options
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
