"use client";

const dos = [
  "Use freshly boiled water — not reheated",
  "Steep with the lid on (traps aroma and flavour)",
  "Use quality loose leaf or whole-herb tea bags",
  "Adjust steep time to taste — lighter is fresher",
  "Add honey, lemon, or warm milk as desired",
  "Rinse your cup with hot water before brewing",
];

const donts = [
  "Don't over-steep (creates bitterness)",
  "Don't squeeze the bag (releases harsh tannins)",
  "Don't reheat your brew (flavour is lost)",
  "Don't add milk to hibiscus or flower teas",
  "Don't use tap water if it has a strong taste",
];

export function RitualsDosAndDonts() {
  return (
    <section className="bg-[#FBF9F5] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#1E3A2B] text-xs tracking-widest uppercase mb-3">Brewing Tips</p>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#1E3A2B] mb-4 italic">
            Do, and do not
          </h2>
          <p className="text-[#6B7E74] text-base max-w-md mx-auto">
            The difference between a good cup and a great one is in the small things.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Do column */}
          <div className="bg-white rounded-3xl border border-[#E8E2D5] p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-9 h-9 rounded-full bg-[#EBF5EC] flex items-center justify-center">
                <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5 text-[#2D7A42]">
                  <path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <h3 className="font-serif text-2xl text-[#1E3A2B]">Do</h3>
            </div>
            <ul className="space-y-4">
              {dos.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#2D7A42] mt-2 shrink-0" />
                  <span className="text-sm text-[#4A5F55] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Don't column */}
          <div className="bg-[#1E3A2B] rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-9 h-9 rounded-full bg-[#163024] flex items-center justify-center">
                <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5 text-[#D4AF37]">
                  <path d="M6 6l8 8M14 6l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </span>
              <h3 className="font-serif text-2xl text-white">Don&apos;t</h3>
            </div>
            <ul className="space-y-4">
              {donts.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2 shrink-0" />
                  <span className="text-sm text-[#A6C9AF] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
