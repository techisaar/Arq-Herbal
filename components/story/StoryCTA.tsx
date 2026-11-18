import React from "react";
import Link from "next/link";

export function StoryCTA() {
  return (
    <section className="py-20 sm:py-28 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1E3A2B] font-normal tracking-tight">
        Come share a quiet cup with us
      </h2>

      <p className="mt-4 text-sm sm:text-base md:text-lg text-[#55675B] font-light max-w-lg mx-auto">
        Find the blend that suits your day, or let us help you choose.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          href="/shop"
          className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#1E3A2B] hover:bg-[#284E39] text-white text-sm sm:text-base font-medium transition-all shadow-md hover:shadow-lg"
        >
          Shop the blends
        </Link>

        <Link
          href="/#wellness"
          className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white hover:bg-[#F3EFE7] text-[#1E3A2B] border border-[#DDD5C7] text-sm sm:text-base font-medium transition-all shadow-xs"
        >
          Take the wellness quiz
        </Link>
      </div>
    </section>
  );
}
