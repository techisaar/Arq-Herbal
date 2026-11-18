import React from "react";
import Image from "next/image";
import { StarIcon, QuoteIcon } from "@/components/icons/Icons";
import { BotanicalBranch } from "@/components/home/BotanicalLeaves";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section id="reviews" className="relative py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 overflow-visible">
      {/* Botanical watercolor leaves framing testimonials section */}
      <BotanicalBranch position="left-bottom" className="-bottom-10 -left-20 sm:-left-10 scale-125" />
      <BotanicalBranch position="right-bottom" className="-bottom-10 -right-20 sm:-right-10 scale-125" />

      {/* Section Header */}
      <div className="text-center mb-12 sm:mb-16 relative z-10">
        <span className="text-xs sm:text-sm tracking-[0.25em] uppercase text-[#6E7E73] font-medium">
          L O V E D  B Y  O U R  C O M M U N I T Y
        </span>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1E3A2B] font-normal mt-2">
          Real Stories, <span className="italic">Real Benefits</span>
        </h2>
      </div>

      {/* 3 Review Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative z-10">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E7E1D6] shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
          >
            <div>
              {/* Stars & Quote Icon Header */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4 fill-[#DF9E27] text-[#DF9E27]" />
                  ))}
                </div>
                <QuoteIcon className="w-6 h-6 text-[#9FB5A7]/60" />
              </div>

              {/* Review Text */}
              <p className="text-base sm:text-lg text-[#25362C] leading-relaxed mb-8 font-normal">
                &ldquo;{item.quote}&rdquo;
              </p>
            </div>

            {/* Author Footer */}
            <div className="flex items-center gap-3.5 pt-4 border-t border-[#F2ECE1]">
              <div className="relative w-11 h-11 rounded-full overflow-hidden bg-[#ECE6DA] border border-[#DDD5C7] shrink-0">
                <Image
                  src={item.avatar}
                  alt={item.author}
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h4 className="text-sm font-semibold text-[#1E3A2B]">
                  {item.author}
                </h4>
                <span className="text-xs text-[#708075] font-normal">
                  {item.benefitTag}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
