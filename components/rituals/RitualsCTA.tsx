"use client";

import Link from "next/link";

export function RitualsCTA() {
  return (
    <section className="bg-[#FBF9F5] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Ready to brew */}
        <div className="bg-white border border-[#E8E2D5] rounded-3xl p-10 flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-[#EBF5EC] flex items-center justify-center mb-5">
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#1E3A2B]">
              <path d="M4 8h12a4 4 0 0 1 0 8H4V8Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
              <path d="M16 10c2 0 4 1 4 3s-2 3-4 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              <path d="M4 8V6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              <path d="M8 8V5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              <path d="M12 8V6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          </div>
          <p className="text-[#8FA395] text-xs tracking-widest uppercase mb-2">Shop</p>
          <h3 className="font-serif text-2xl text-[#1E3A2B] mb-3">Ready to brew?</h3>
          <p className="text-[#6B7E74] text-sm mb-7 max-w-xs">
            Explore the full ARQ collection and find the blend that fits your ritual.
          </p>
          <Link
            href="/shop"
            className="bg-[#1E3A2B] hover:bg-[#2D5A3D] text-white font-medium text-sm px-7 py-3 rounded-full transition-colors"
          >
            Shop the teas
          </Link>
        </div>

        {/* Not sure */}
        <div className="bg-[#1E3A2B] rounded-3xl p-10 flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-[#163024] flex items-center justify-center mb-5">
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#D4AF37]">
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8"/>
              <path d="M9.5 9a2.5 2.5 0 0 1 5 0c0 2-2.5 2.5-2.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              <circle cx="12" cy="17" r="0.8" fill="currentColor"/>
            </svg>
          </div>
          <p className="text-[#789382] text-xs tracking-widest uppercase mb-2">Consult</p>
          <h3 className="font-serif text-2xl text-white mb-3">Not sure which blend?</h3>
          <p className="text-[#A6C9AF] text-sm mb-7 max-w-xs">
            Our herbal experts can help you find the right tea for your body and lifestyle.
          </p>
          <Link
            href="/consult"
            className="border border-[#D4AF37] hover:bg-[#D4AF37] text-[#D4AF37] hover:text-[#14261C] font-medium text-sm px-7 py-3 rounded-full transition-all"
          >
            Book a consult
          </Link>
        </div>
      </div>
    </section>
  );
}
