"use client";

import React from "react";

interface ConsultCTAProps {
  onOpenBooking: () => void;
  onJoinWhatsApp: () => void;
}

export function ConsultCTA({ onOpenBooking, onJoinWhatsApp }: ConsultCTAProps) {
  return (
    <section className="py-20 sm:py-28 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center border-t border-[#E8E2D5]">
      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1E3A2B] font-normal tracking-tight">
        Ready to start?
      </h2>

      <p className="mt-4 text-sm sm:text-base md:text-lg text-[#55675A] font-light max-w-md mx-auto">
        Book a session, or join our free community first.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
        <button
          onClick={onOpenBooking}
          className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#1E3A2B] hover:bg-[#284E39] text-white text-sm sm:text-base font-medium transition-all shadow-md hover:shadow-lg cursor-pointer"
        >
          Book Consultation
        </button>

        <button
          onClick={onJoinWhatsApp}
          className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white hover:bg-[#F3EFE7] text-[#1E3A2B] border border-[#DDD5C7] text-sm sm:text-base font-medium transition-all shadow-xs cursor-pointer"
        >
          Join WhatsApp Community
        </button>
      </div>
    </section>
  );
}
