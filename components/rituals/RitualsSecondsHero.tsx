"use client";

import Image from "next/image";
import Link from "next/link";

export function RitualsSecondsHero() {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Arched image frame */}
          <div className="relative w-72 h-96 shrink-0 mx-auto md:mx-0">
            {/* Arch shape via clip-path */}
            <div
              className="relative w-full h-full overflow-hidden"
              style={{ borderRadius: "9999px 9999px 2rem 2rem" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80"
                alt="Tea steeping ritual"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A2B]/30 to-transparent" />
            </div>
            {/* Decorative ring */}
            <div
              className="absolute -inset-3 border-2 border-[#D4AF37]/30 pointer-events-none"
              style={{ borderRadius: "9999px 9999px 2.75rem 2.75rem" }}
            />
          </div>

          {/* Text content */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-[#1E3A2B] text-xs tracking-widest uppercase mb-4">The Ritual</p>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#1E3A2B] mb-6 leading-tight italic">
              Sixty calm seconds,<br />start to sip
            </h2>
            <p className="text-[#6B7E74] text-base leading-relaxed mb-4 max-w-md">
              You don&apos;t need a ceremony. You just need 60 seconds of intention — to boil,
              to breathe, to steep. That&apos;s the whole ritual.
            </p>
            <p className="text-[#6B7E74] text-base leading-relaxed mb-8 max-w-md">
              ARQ is designed for the small pause inside a busy day. Find your blend and
              begin.
            </p>
            <Link
              href="/shop"
              className="inline-block bg-[#1E3A2B] hover:bg-[#2D5A3D] text-white font-medium text-sm px-7 py-3 rounded-full transition-colors"
            >
              Find my blend →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
