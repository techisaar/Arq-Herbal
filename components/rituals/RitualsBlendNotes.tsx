"use client";

import Link from "next/link";
import { products } from "@/data/products";

const categoryColors: Record<string, string> = {
  sleep: "#6B9FD4",
  stress: "#A78BCA",
  immunity: "#6EB87A",
  energy: "#F5A623",
  digestion: "#E07B5A",
  skin: "#E8A0A8",
};

const brewingNotes: Record<string, { time: string; note: string }> = {
  "arq-blue-tea": { time: "3 min", note: "Watch the mesmerising blue turn purple with a squeeze of lemon." },
  "arq-stress-relief": { time: "4 min", note: "Best brewed in silence. Let the ashwagandha fully release." },
  "arq-glowing-skin": { time: "5 min", note: "Cover your cup — locks in the rose and hibiscus florals." },
  "chamomile-calm": { time: "4 min", note: "Sip within 10 minutes for maximum floral warmth." },
  "arq-chamomile": { time: "4 min", note: "One tea bag, one cup — no need to squeeze." },
  "arq-lavender": { time: "3 min", note: "Shorter steep keeps it delicate and floral, not bitter." },
  "arq-hibiscus": { time: "5 min", note: "Best served cold with a lemon wheel — a ruby cooler." },
  "arq-energy-booster": { time: "3 min", note: "Morning ritual: add a slice of ginger for extra lift." },
  "arq-lungs-detox": { time: "5 min", note: "Inhale the steam before sipping — part of the ritual." },
  "arq-fat-burning": { time: "4 min", note: "Drink 30 minutes before meals for best results." },
  "arq-gas-g-go": { time: "4 min", note: "After dinner ritual — sip slowly and breathe." },
};

// Show unique products (dedupe by name)
const seen = new Set<string>();
const uniqueProducts = products.filter((p) => {
  if (seen.has(p.name)) return false;
  seen.add(p.name);
  return true;
});

export function RitualsBlendNotes() {
  return (
    <section className="bg-[#FBF9F5] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#1E3A2B] text-xs tracking-widest uppercase mb-3">Steeping Guide</p>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#1E3A2B] mb-4">
            A note for every blend
          </h2>
          <p className="text-[#6B7E74] text-base max-w-lg mx-auto">
            Each ARQ blend has its own pace, its own mood. Here&apos;s how to meet it.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {uniqueProducts.map((product) => {
            const notes = brewingNotes[product.id] ?? {
              time: "4 min",
              note: "Steep covered for a full, rounded flavour.",
            };
            const dotColor = categoryColors[product.benefitCategory] ?? "#6B7E74";

            return (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                className="group bg-white rounded-2xl border border-[#E8E2D5] p-5 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-3 h-3 rounded-full shrink-0 mt-0.5"
                      style={{ backgroundColor: dotColor }}
                    />
                    <span className="font-serif text-[#1E3A2B] text-base font-medium group-hover:text-[#2D5A3D] transition-colors">
                      {product.name}
                    </span>
                  </div>
                  <span className="text-[10px] bg-[#F0EDE6] text-[#6B7E74] px-2 py-0.5 rounded-full whitespace-nowrap ml-2">
                    {product.badge}
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5 text-[#D4AF37]">
                    <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M8 5v3l2 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <span className="text-xs text-[#8B9E94] font-medium">{notes.time} steep</span>
                </div>

                <p className="text-sm text-[#6B7E74] leading-relaxed">{notes.note}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
