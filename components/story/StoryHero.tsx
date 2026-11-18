import React from "react";
import Image from "next/image";

export function StoryHero() {
  return (
    <section className="relative w-full min-h-[460px] sm:min-h-[520px] md:min-h-[580px] flex items-center justify-center overflow-hidden">
      {/* Background Photography — Golden sunlight, fresh herbal infusion, mortar & dried botanicals */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=2000&q=85"
          alt="Heritage herbal wellness rooted in India — dried herbs, botanical infusion and mortar"
          fill
          priority
          className="object-cover object-center scale-105"
        />
        {/* Soft, warm daylight overlay matching the Figma aesthetic */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F7F4EB]/75 via-[#F7F4EB]/60 to-[#FBF9F5]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center py-16 sm:py-24">
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#1E3A2B] font-normal tracking-tight leading-[1.15]">
          Heritage herbal wellness,
          <br />
          <span className="italic font-normal text-[#2E5E42]">
            rooted in India
          </span>
        </h1>

        <p className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-[#4A5D51] font-light max-w-xl mx-auto leading-relaxed">
          The oldest wisdom and the freshest leaf, together in one cup.
        </p>
      </div>
    </section>
  );
}
