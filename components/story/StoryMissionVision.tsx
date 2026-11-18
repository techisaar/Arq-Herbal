import React from "react";

export function StoryMissionVision() {
  return (
    <section className="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-16 sm:space-y-20">
      {/* Mission */}
      <div className="space-y-3.5">
        <span className="text-xs sm:text-sm tracking-[0.3em] uppercase text-[#738478] font-semibold">
          OUR MISSION
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#1E3A2B] font-normal leading-relaxed max-w-2xl mx-auto">
          To bring clean, traceable, heritage herbal wellness into everyday life, one honest cup at a time.
        </h2>
      </div>

      {/* Vision */}
      <div className="space-y-3.5 pt-4">
        <span className="text-xs sm:text-sm tracking-[0.3em] uppercase text-[#738478] font-semibold">
          OUR VISION
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#1E3A2B] font-normal leading-relaxed max-w-2xl mx-auto">
          A world where the wisdom of Indian herbs is trusted, traceable, and quietly part of how people care for themselves.
        </h2>
      </div>
    </section>
  );
}
