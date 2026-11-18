import React from "react";
import Image from "next/image";
import { ArrowRightIcon } from "@/components/icons/Icons";
import { BotanicalBranch } from "@/components/home/BotanicalLeaves";

export function Impact() {
  return (
    <section id="impact" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 overflow-visible">
      {/* Botanical watercolor leaf branch */}
      <BotanicalBranch position="right-middle" className="top-10 -right-24 sm:-right-8 scale-125" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        {/* Left Side: Children's Education & Wellbeing Image */}
        <div className="lg:col-span-6 relative flex justify-center lg:justify-start">
          <div className="relative w-full max-w-lg h-[340px] sm:h-[420px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#EFECE4]">
            <Image
              src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1000&q=80"
              alt="Happy smiling children in our hillside farming community classroom"
              fill
              className="object-cover object-center"
            />
            {/* Subtle soft gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>
        </div>

        {/* Right Side: Impact Stats & Narrative */}
        <div className="lg:col-span-6 space-y-4 sm:space-y-5 lg:pl-6">
          {/* Big Impact Percent */}
          <div className="font-serif text-6xl sm:text-7xl lg:text-8xl font-normal text-[#1E3A2B] leading-none tracking-tight">
            2<span className="text-4xl sm:text-5xl lg:text-6xl text-[#C49647] font-light">%</span>
          </div>

          <span className="block text-xs sm:text-sm tracking-[0.25em] uppercase text-[#6B7B71] font-semibold">
            A  S M A L L  S I P ,  A  B I G G E R  I M P A C T
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1E3A2B] font-normal leading-[1.15]">
            For Children’s
            <br />
            <span className="italic font-normal">Wellbeing</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-[#55655B] leading-relaxed font-light max-w-xl">
            2% of every purchase supports children’s education, wellbeing and a healthier future.
          </p>

          <div className="pt-2 sm:pt-4">
            <a
              href="#reviews"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#1E3A2B] hover:bg-[#284E39] text-white text-sm font-medium transition-all shadow-md hover:shadow-lg"
            >
              Our Impact <ArrowRightIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
