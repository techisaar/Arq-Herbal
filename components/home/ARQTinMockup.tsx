import React from "react";
import Image from "next/image";

interface ARQTinMockupProps {
  name?: string;
  badge?: string;
  className?: string;
}

export function ARQTinMockup({ name = "Lavender", className = "" }: ARQTinMockupProps) {
  return (
    <div className={`relative w-full h-full bg-[#F5F2EA] flex items-center justify-center overflow-hidden group ${className}`}>
      {/* Background soft warm lighting */}
      <div className="absolute inset-0 bg-radial from-[#FFFDF9] via-[#F2ECE0] to-[#E5DEC\E] opacity-90" />

      {/* Realistic Tea Plantation & Herbal setting background photo */}
      <Image
        src="https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=700&q=80"
        alt={`${name} Herbal Tea Tin`}
        fill
        className="object-cover object-center mix-blend-multiply opacity-35 transition-transform duration-700 group-hover:scale-105"
      />

      {/* Center 3D-styled ARQ Luxury Herbal Tin */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Tin Container with gold rim and deep black-green satin body */}
        <div className="relative w-36 h-44 sm:w-40 sm:h-48 rounded-lg shadow-2xl bg-gradient-to-b from-[#182B20] via-[#101E17] to-[#0A130E] border-t-4 border-[#D4AF37] border-x border-b border-[#2D4536] p-3 flex flex-col items-center justify-between transition-transform duration-500 group-hover:scale-102">
          {/* Top Gold Metallic Rim Highlight */}
          <div className="w-full h-1 bg-gradient-to-r from-[#B38728] via-[#FBF5B7] to-[#AA771C] rounded-full opacity-90 shadow-xs" />

          {/* Central Gold Embossed Brand Plate */}
          <div className="w-full my-auto py-2.5 px-2 bg-gradient-to-b from-[#1E3326]/90 to-[#0F1B14]/90 border border-[#D4AF37]/50 rounded-sm text-center shadow-inner">
            <span className="block text-[8px] tracking-[0.3em] uppercase text-[#E5C378] font-light">
              HERBAL INFUSION
            </span>
            <span className="block font-serif text-2xl tracking-[0.2em] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFF2B2] to-[#AA771C] drop-shadow-sm my-0.5">
              ARQ
            </span>
            <span className="block text-[7px] tracking-[0.35em] uppercase text-[#E8D4A2] font-medium border-t border-[#D4AF37]/30 pt-0.5">
              BOTANICALS
            </span>
          </div>

          {/* Bottom Blend Flavor Label & Lavender Botanical Graphic */}
          <div className="w-full text-center pb-1">
            <div className="flex items-center justify-center gap-1 mb-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9B72CF]" />
              <span className="font-serif text-xs font-semibold text-[#F7E7C4] tracking-wider">
                {name}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#9B72CF]" />
            </div>
            <span className="block text-[7px] text-[#A6BDAE] tracking-widest uppercase">
              100g Loose Leaf
            </span>
          </div>
        </div>

        {/* Shadow under tin */}
        <div className="w-32 sm:w-36 h-3 bg-black/25 rounded-full blur-xs mt-1" />
      </div>

      {/* Decorative Lavender Sprigs at bottom corner */}
      <div className="absolute -bottom-2 -left-2 z-20 pointer-events-none opacity-80">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <path d="M10 50 C 15 35, 25 25, 40 10" stroke="#4A6551" strokeWidth="2" strokeLinecap="round" />
          <circle cx="22" cy="30" r="3" fill="#8E6BBF" />
          <circle cx="28" cy="24" r="3.5" fill="#7C52B5" />
          <circle cx="34" cy="18" r="3" fill="#9D7DD1" />
          <circle cx="40" cy="11" r="2.5" fill="#6B3FA0" />
        </svg>
      </div>
    </div>
  );
}
