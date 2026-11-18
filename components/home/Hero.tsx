import React from "react";
import Image from "next/image";
import { ArrowRightIcon } from "@/components/icons/Icons";

export function Hero() {
  return (
    <section className="relative w-full min-h-[580px] sm:min-h-[660px] lg:min-h-[760px] flex items-center justify-center overflow-hidden">
      {/* Background Photography - Hillside Tea Harvesters with Enhanced Quality & Brand Theme Calibration */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-harvesters.jpg"
          alt="Lush green ARQ tea plantation hillside terraces with handpicking harvesters"
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover object-[center_42%] scale-105 transition-transform duration-1000 contrast-[1.1] saturate-[1.16] brightness-[0.9]"
        />

        {/* Botanical forest green multiply tint — binds foliage tones with ARQ brand green (#1E3A2B) */}
        <div className="absolute inset-0 bg-[#14261C]/35 mix-blend-multiply" />

        {/* Balanced vertical gradient for crisp typography contrast while keeping the tea harvesters visible */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#14261C]/80 via-[#1E3A2B]/45 to-[#14261C]/90" />

        {/* Subtle radial focus vignette — highlights the central harvesters, woven baskets and tea bushes */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_36%,_rgba(20,38,28,0.58)_100%)]" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center text-white py-20 sm:py-28">
        {/* Main Heading with rich drop shadows and brand gold highlight */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.12] tracking-tight font-normal text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]">
          Rooted in{" "}
          <span className="italic font-normal text-[#E8BF76] drop-shadow-[0_2px_12px_rgba(232,191,118,0.4)]">
            Nature,
          </span>
          <br />
          Crafted for Your Well-
          <br />
          Being
        </h1>

        {/* Subtitle */}
        <p className="mt-6 sm:mt-7 text-base sm:text-lg md:text-xl text-[#F2EFE9] font-light max-w-xl mx-auto leading-relaxed tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.65)]">
          Pure herbal teas that bring balance to your mind, body and everyday life.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
          <a
            href="#bestsellers"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#FAF8F5] text-[#1E3A2B] font-semibold text-sm sm:text-base hover:bg-white transition-all shadow-xl hover:shadow-2xl hover:translate-y-[-2px] group"
          >
            Explore Teas
            <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href="/our-story"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white/15 hover:bg-white/25 text-white font-medium text-sm sm:text-base border border-white/35 backdrop-blur-md transition-all hover:translate-y-[-2px] shadow-lg"
          >
            Our Story
          </a>
        </div>
      </div>
    </section>
  );
}
