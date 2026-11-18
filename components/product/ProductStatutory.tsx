import React from "react";

export function ProductStatutory() {
  return (
    <section className="py-12 sm:py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-6">
        <span className="text-[11px] sm:text-xs tracking-[0.25em] uppercase text-[#6E7E73] font-semibold">
          LABEL & STATUTORY INFORMATION
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl text-[#1E3A2B] font-normal mt-1">
          On the Pack
        </h2>
      </div>

      {/* Statutory Info Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-9 border border-[#E7E1D6] shadow-xs space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-xs sm:text-sm">
          {/* Net weight */}
          <div className="space-y-1">
            <span className="text-[10px] tracking-wider uppercase text-[#7D8E82] font-semibold block">
              NET WEIGHT
            </span>
            <p className="font-medium text-[#1E3A2B]">30 g on label</p>
            <p className="text-[11px] text-[#788A7D]">22.5 g whole herb net weight</p>
          </div>

          {/* Shelf life */}
          <div className="space-y-1">
            <span className="text-[10px] tracking-wider uppercase text-[#7D8E82] font-semibold block">
              SHELF LIFE
            </span>
            <p className="font-medium text-[#1E3A2B]">Best before 24 months from packing</p>
          </div>

          {/* Storage */}
          <div className="space-y-1">
            <span className="text-[10px] tracking-wider uppercase text-[#7D8E82] font-semibold block">
              STORAGE
            </span>
            <p className="font-medium text-[#1E3A2B]">Cool, dry place, away from direct sunlight</p>
          </div>

          {/* Manufactured by */}
          <div className="space-y-1">
            <span className="text-[10px] tracking-wider uppercase text-[#7D8E82] font-semibold block">
              MANUFACTURED BY
            </span>
            <p className="font-medium text-[#1E3A2B]">HNCO Infusions Pvt Ltd</p>
            <p className="text-[11px] text-[#788A7D]">Noida, Uttar Pradesh, India</p>
          </div>

          {/* FSSAI */}
          <div className="space-y-1">
            <span className="text-[10px] tracking-wider uppercase text-[#7D8E82] font-semibold block">
              FSSAI LICENSES
            </span>
            <p className="font-medium text-[#1E3A2B]">Mfg: 12725999000692</p>
            <p className="text-[11px] text-[#788A7D]">Mkt: 12726998000187</p>
          </div>

          {/* Customer support */}
          <div className="space-y-1">
            <span className="text-[10px] tracking-wider uppercase text-[#7D8E82] font-semibold block">
              CUSTOMER SUPPORT
            </span>
            <p className="font-medium text-[#1E3A2B]">+91 9452652924</p>
            <p className="text-[11px] text-[#788A7D]">arqherbalvns@gmail.com</p>
          </div>
        </div>

        {/* Disclaimer Note */}
        <div className="pt-4 border-t border-[#F2ECE1] text-[11px] sm:text-xs text-[#7B8B80] leading-relaxed">
          Wellness tea, not a substitute for medical advice. Pregnant or nursing, or on medication? Please consult a doctor before use.
        </div>
      </div>
    </section>
  );
}
