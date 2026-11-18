"use client";

import Image from "next/image";
import Link from "next/link";

export function RitualsHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=1600&q=85"
          alt="Ceramic bowl of herbal tea"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-xl">
          {/* Eyebrow */}
          <p className="text-[#D4AF37] text-sm font-medium tracking-widest uppercase mb-4">
            ARQ Rituals
          </p>

          {/* Headline */}
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-white leading-tight mb-6 italic">
            The art of a<br />simple cup
          </h1>

          {/* Subtitle */}
          <p className="text-[#D1CABD] text-base sm:text-lg leading-relaxed mb-10 max-w-sm">
            Every sip begins with intention. Discover the rituals that transform
            a simple brew into a moment of calm.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/shop"
              className="bg-[#D4AF37] hover:bg-[#C29E2E] text-[#14261C] font-semibold text-sm px-7 py-3 rounded-full transition-colors"
            >
              Explore Teas
            </Link>
            <Link
              href="/our-story"
              className="border border-white/60 hover:border-white text-white font-medium text-sm px-7 py-3 rounded-full transition-colors hover:bg-white/10"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
