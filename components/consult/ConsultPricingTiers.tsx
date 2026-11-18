"use client";

import React from "react";
import { CheckIcon } from "@/components/icons/Icons";

interface ConsultPricingTiersProps {
  onOpenBooking: (tierName?: string) => void;
  onJoinWhatsApp: () => void;
}

export function ConsultPricingTiers({
  onOpenBooking,
  onJoinWhatsApp,
}: ConsultPricingTiersProps) {
  return (
    <section id="pricing-options" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1E3A2B] font-normal tracking-tight">
          Choose how you’d like to
          <br />
          <span className="italic">begin</span>
        </h2>
        <p className="mt-4 text-sm sm:text-base md:text-lg text-[#5A6D60] font-light leading-relaxed">
          Three ways to work with ARQ, side by side, each with a clear price and
          next step.
        </p>
      </div>

      {/* 3 Pricing Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {/* Tier 1: WhatsApp Community */}
        <div className="bg-white rounded-3xl p-7 sm:p-9 border border-[#E5DFD4] shadow-xs flex flex-col justify-between hover:shadow-lg transition-all duration-300">
          <div>
            <h3 className="font-serif text-2xl text-[#1E3A2B] font-normal">
              WhatsApp Health
              <br />
              Community
            </h3>

            <div className="mt-4 flex items-baseline gap-1">
              <span className="font-serif text-4xl text-[#1E3A2B] font-medium">
                Free
              </span>
            </div>

            <p className="mt-3 text-xs sm:text-sm text-[#617366] font-light leading-relaxed min-h-[40px]">
              For anyone curious about herbal wellness who wants to learn and
              connect first.
            </p>

            {/* Feature comparison table */}
            <div className="mt-8 space-y-3.5 text-xs sm:text-sm border-t border-[#EFEBE3] pt-6">
              <div className="flex justify-between items-center py-1">
                <span className="text-[#7A8A7F]">Billing</span>
                <span className="font-medium text-[#1E3A2B]">No charge</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-[#7A8A7F]">Delivered through</span>
                <span className="font-medium text-[#1E3A2B]">WhatsApp</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-[#7A8A7F]">Personalized to you</span>
                <span className="text-[#99A79E]">—</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-[#7A8A7F]">Choose date and time</span>
                <span className="text-[#99A79E]">—</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-[#7A8A7F]">Session length</span>
                <span className="text-[#99A79E]">—</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-[#7A8A7F]">Included</span>
                <span className="font-medium text-[#1E3A2B]">Community access</span>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <button
              onClick={onJoinWhatsApp}
              className="w-full py-3.5 px-6 rounded-full bg-[#1E3A2B] hover:bg-[#284E39] text-white text-sm font-medium transition-all shadow-xs cursor-pointer text-center"
            >
              Join WhatsApp Community
            </button>
          </div>
        </div>

        {/* Tier 2: Personalized Herbal Consultation (FEATURED / HIGHLIGHTED) */}
        <div className="bg-[#152B1E] text-white rounded-3xl p-7 sm:p-9 border-2 border-[#D4AF37] shadow-xl flex flex-col justify-between relative transform lg:-translate-y-2">
          {/* Most Popular Badge */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-[#12241A] text-[10px] sm:text-xs font-semibold uppercase tracking-widest px-4 py-1 rounded-full shadow-sm">
            Most Popular
          </div>

          <div>
            <h3 className="font-serif text-2xl text-white font-normal">
              Personalized Herbal
              <br />
              Wellness Consultation
            </h3>

            <div className="mt-4 flex items-baseline gap-1.5">
              <span className="font-serif text-4xl text-[#E8BF76] font-medium">
                ₹99
              </span>
              <span className="text-xs text-[#B4C8BB]">per session</span>
            </div>

            <p className="mt-3 text-xs sm:text-sm text-[#C4D6CB] font-light leading-relaxed min-h-[40px]">
              For anyone who wants guidance shaped around their own wellness goals.
            </p>

            {/* Feature comparison table */}
            <div className="mt-8 space-y-3.5 text-xs sm:text-sm border-t border-[#254231] pt-6">
              <div className="flex justify-between items-center py-1">
                <span className="text-[#9DB3A5]">Billing</span>
                <span className="font-medium text-white">Pay per session</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-[#9DB3A5]">Delivered through</span>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-[#D4AF37]/20 text-[#E8C87A] border border-[#D4AF37]/30">
                  Video / Call
                </span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-[#9DB3A5]">Personalized to you</span>
                <span className="w-5 h-5 rounded-full bg-[#2A523A] text-[#86EFAC] flex items-center justify-center">
                  <CheckIcon className="w-3 h-3" />
                </span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-[#9DB3A5]">Choose date and time</span>
                <span className="w-5 h-5 rounded-full bg-[#2A523A] text-[#86EFAC] flex items-center justify-center">
                  <CheckIcon className="w-3 h-3" />
                </span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-[#9DB3A5]">Session length</span>
                <span className="font-medium text-white">20–30 mins</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-[#9DB3A5]">Included</span>
                <span className="font-medium text-[#E8C87A]">1:1 consult + Ritual Plan</span>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <button
              onClick={() => onOpenBooking("Personalized Consultation")}
              className="w-full py-3.5 px-6 rounded-full bg-[#D4AF37] hover:bg-[#C29E2E] text-[#12241A] text-sm font-semibold transition-all shadow-md hover:shadow-lg cursor-pointer text-center"
            >
              Book Consultation
            </button>
          </div>
        </div>

        {/* Tier 3: Monthly Wellness Program */}
        <div className="bg-white rounded-3xl p-7 sm:p-9 border border-[#E5DFD4] shadow-xs flex flex-col justify-between hover:shadow-lg transition-all duration-300">
          <div>
            <h3 className="font-serif text-2xl text-[#1E3A2B] font-normal">
              Monthly Wellness
              <br />
              Program
            </h3>

            <div className="mt-4 flex items-baseline gap-1.5">
              <span className="font-serif text-4xl text-[#1E3A2B] font-medium">
                ₹799
              </span>
              <span className="text-xs text-[#7A8A7F]">per month</span>
            </div>

            <p className="mt-3 text-xs sm:text-sm text-[#617366] font-light leading-relaxed min-h-[40px]">
              For anyone who wants ongoing support rather than a single session.
            </p>

            {/* Feature comparison table */}
            <div className="mt-8 space-y-3.5 text-xs sm:text-sm border-t border-[#EFEBE3] pt-6">
              <div className="flex justify-between items-center py-1">
                <span className="text-[#7A8A7F]">Billing</span>
                <span className="font-medium text-[#1E3A2B]">Billed monthly</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-[#7A8A7F]">Delivered through</span>
                <span className="font-medium text-[#1E3A2B]">Video & WhatsApp</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-[#7A8A7F]">Personalized to you</span>
                <span className="w-5 h-5 rounded-full bg-[#EBF2EC] text-[#2E5E42] flex items-center justify-center">
                  <CheckIcon className="w-3 h-3" />
                </span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-[#7A8A7F]">Choose date and time</span>
                <span className="font-medium text-[#1E3A2B]">Flexible slots</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-[#7A8A7F]">Session length</span>
                <span className="font-medium text-[#1E3A2B]">Weekly check-ins</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-[#7A8A7F]">Included</span>
                <span className="font-medium text-[#1E3A2B]">Monthly care + 1 Tea blend</span>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <button
              onClick={() => onOpenBooking("Monthly Wellness Program")}
              className="w-full py-3.5 px-6 rounded-full bg-[#1E3A2B] hover:bg-[#284E39] text-white text-sm font-medium transition-all shadow-xs cursor-pointer text-center"
            >
              Start Monthly Program
            </button>
          </div>
        </div>
      </div>

      <p className="text-center text-xs text-[#8A9B8F] mt-8">
        ✨ All consultations are private, confidential, and customized to your daily routine.
      </p>
    </section>
  );
}
