import React from "react";
import Image from "next/image";

export function StoryEducationImpact() {
  return (
    <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Side: Photo of Students in Classroom */}
        <div className="lg:col-span-6 flex justify-center lg:justify-start">
          <div className="relative w-full max-w-lg h-[340px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-[#ECE5D8]">
            <Image
              src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1000&q=80"
              alt="Indian students in classroom learning with books and notebooks"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
          </div>
        </div>

        {/* Right Side: 2% Impact Narrative */}
        <div className="lg:col-span-6 space-y-5 lg:pl-6">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1E3A2B] font-normal leading-[1.18] tracking-tight">
            2% of every sale goes to
            <br />
            <span className="italic">children’s education</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-[#55675B] font-light leading-relaxed max-w-lg">
            Books, learning, and brighter opportunities for children who need them
            most. Thank you for being part of this change.
          </p>
        </div>
      </div>
    </section>
  );
}
