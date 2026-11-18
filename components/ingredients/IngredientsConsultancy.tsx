"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons/Icons";

export function IngredientsConsultancy() {
  return (
    <section className="bg-[#14261C] text-white py-20 sm:py-28 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-[#1E3A2B]/60 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Side: Consultancy Copy */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            <span className="text-xs sm:text-sm tracking-[0.28em] uppercase text-[#D4AF37] font-medium">
              Personalized Botanical Formulations
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-normal leading-[1.15]">
              Ingredient consultancy
              <br />
              <span className="italic font-normal">that builds</span> better solutions
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-[#C8D6CD] font-light leading-relaxed max-w-xl">
              Not sure which herbs harmonize with your body type? Our certified herbalists
              and clinical Ayurvedic practitioners analyze your sleep rhythm, stress levels,
              and wellness goals to curate a targeted loose leaf tea regimen.
            </p>

            <div className="pt-2 sm:pt-4">
              <Link
                href="/consult"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#D4AF37] hover:bg-[#C29E2E] text-[#14261C] font-semibold text-sm sm:text-base transition-all shadow-lg hover:shadow-xl hover:translate-y-[-1px]"
              >
                Consult an herbalist <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Side: Arched Botanical Roots & Powders Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Arched Photo Frame */}
              <div
                className="relative w-full h-[360px] sm:h-[440px] overflow-hidden shadow-2xl border-4 border-[#254231] bg-[#1E3A2B]"
                style={{ borderRadius: "180px 180px 28px 28px" }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1000&q=80"
                  alt="Organic botanical powders, ground herbal roots and wooden scoops"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14261C]/50 via-transparent to-transparent" />
              </div>

              {/* Decorative Golden Inset Ring */}
              <div
                className="absolute -inset-3 border border-[#D4AF37]/30 pointer-events-none"
                style={{ borderRadius: "192px 192px 36px 36px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
