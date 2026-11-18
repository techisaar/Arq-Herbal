import React from "react";
import Image from "next/image";

export function StoryFounding() {
  return (
    <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Side: Arched Image with Green Tea & Herbal Leaves */}
        <div className="lg:col-span-5 flex justify-center lg:justify-start">
          <div className="relative w-full max-w-sm sm:max-w-md h-[420px] sm:h-[480px] rounded-t-full rounded-b-3xl overflow-hidden shadow-xl border-4 border-white bg-[#ECE5D8]">
            <Image
              src="https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1000&q=80"
              alt="Fresh herbal tea with mint leaves in sunlight"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
          </div>
        </div>

        {/* Right Side: Founding Narrative */}
        <div className="lg:col-span-7 space-y-6 lg:pl-6">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1E3A2B] font-normal leading-[1.18] tracking-tight">
            It started with a love for
            <br />
            natural wellness, and a
            <br />
            <span className="italic">quiet frustration</span>
          </h2>

          <div className="space-y-5 text-sm sm:text-base md:text-lg text-[#526458] leading-relaxed font-light">
            <p>
              For years, every herbal tea on the shelf told the same story: dust
              where there should be whole leaves, flavouring where there should
              be flowers.
            </p>
            <p>
              We knew the herbs of India deserved better. So we went back to the
              growers, state by state, and asked what it would take to put the
              whole, living plant back into the cup.
            </p>
            <p className="font-normal text-[#1E3A2B]">
              ARQ is the answer: whole leaf and whole flower, traced to its home,
              brewed slowly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
