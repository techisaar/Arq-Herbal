import React from "react";
import Image from "next/image";

export function ShopHeroBanner() {
  return (
    <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden h-48 sm:h-56 md:h-64 bg-[#E8DFCE]">
      {/* Background Image: collection of ARQ tins with steeping cup */}
      <Image
        src="https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1600&q=80"
        alt="ARQ Herbal collection — premium tea tins with golden brewed cup"
        fill
        priority
        className="object-cover object-center"
      />
      {/* Warm atmospheric overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2E1B08]/60 via-[#2E1B08]/40 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-10 md:px-14 z-10">
        <div className="text-[11px] text-[#E8D9C2] mb-1.5 tracking-wide">
          Home / <span className="text-white font-medium">Shop</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-normal leading-tight">
          All <span className="italic text-[#C4E0C2]">teas</span>
        </h1>
        <p className="text-sm sm:text-base text-[#E8EFEA]/90 mt-2 max-w-sm font-light leading-relaxed">
          Pure herbal teas that bring balance to your mind, body and everyday life.
        </p>
      </div>
    </div>
  );
}
