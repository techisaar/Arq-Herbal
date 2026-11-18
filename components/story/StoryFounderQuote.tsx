import React from "react";

export function StoryFounderQuote() {
  return (
    <section className="py-20 sm:py-28 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      {/* Main Quote */}
      <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#1E3A2B] font-normal leading-[1.3] italic">
        &ldquo;ARQ Herbal was founded to revive the timeless wisdom of traditional herbal wellness and reconnect people with the purity of nature.&rdquo;
      </blockquote>

      {/* Founder's Reflection */}
      <p className="mt-8 text-sm sm:text-base md:text-lg text-[#55675B] font-light max-w-2xl mx-auto leading-relaxed">
        As a 21-year old student, I believed that health is built on authenticity,
        trust, and uncompromising quality. What began as a personal dream is now
        a shared mission, carried by a team who hold the same values.
      </p>

      {/* Founder Names & Title */}
      <div className="mt-8">
        <h4 className="text-base sm:text-lg font-serif font-semibold text-[#1E3A2B]">
          Abu Bakar (Hadi) and Sajid
        </h4>
        <span className="text-xs sm:text-sm text-[#738478] tracking-wider uppercase font-medium">
          Founders, ARQ Herbal
        </span>
      </div>
    </section>
  );
}
