import React from "react";
import Image from "next/image";
import { ArrowRightIcon } from "@/components/icons/Icons";
import { BotanicalBranch } from "@/components/home/BotanicalLeaves";

export function Philosophy() {
  return (
    <section id="philosophy" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 overflow-visible">
      {/* Botanical leaf branch accent */}
      <BotanicalBranch position="right-middle" className="top-12 -right-24 sm:-right-10 scale-125" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        {/* Left Side: Arched Image with circular inset badge */}
        <div className="lg:col-span-6 relative flex justify-center lg:justify-start">
          <div className="relative w-full max-w-md">
            {/* Arched main photo container */}
            <div className="relative w-full h-[400px] sm:h-[480px] rounded-t-full rounded-b-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#EFECE4]">
              <Image
                src="https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1000&q=80"
                alt="A warm ceramic cup of herbal tea steeped with whole organic botanicals"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
            </div>

            {/* Overlapping circular magnification inset */}
            <div className="absolute -bottom-6 -right-2 sm:-bottom-8 sm:right-4 w-28 h-28 sm:w-36 sm:h-36 rounded-full border-4 border-white overflow-hidden shadow-xl bg-[#EBE5D8] z-20">
              <Image
                src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=400&q=80"
                alt="Detailed close up of organic loose leaf herbs steeping"
                fill
                className="object-cover scale-125"
              />
            </div>
          </div>
        </div>

        {/* Right Side: Philosophy Text Content */}
        <div className="lg:col-span-6 space-y-5 sm:space-y-6 lg:pl-6">
          <span className="text-xs sm:text-sm tracking-[0.25em] uppercase text-[#6B7B71] font-semibold">
            O U R  P H I L O S O P H Y
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1E3A2B] font-normal leading-[1.15]">
            Grown slowly.
            <br />
            <span className="italic font-normal">Steeped</span> with care.
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-[#55655B] leading-relaxed font-light max-w-xl">
            We blend time-tested herbs from small hillside farms with modern,
            lab-verified care, so every cup is pure, effective and quietly delicious.
          </p>

          <div className="pt-2 sm:pt-4">
            <a
              href="/our-story"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#1E3A2B] hover:bg-[#284E39] text-white text-sm font-medium transition-all shadow-md hover:shadow-lg"
            >
              Read Our Story <ArrowRightIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
