import React from "react";

export function StoryTimeline() {
  const milestones = [
    {
      year: "2019",
      description: "A first batch of tulsi, brewed at home and shared with friends.",
    },
    {
      year: "2021",
      description: "Direct partnerships formed with growers across five states.",
    },
    {
      year: "2023",
      description: "Whole leaf blends and lab-tested batches go nationwide.",
    },
    {
      year: "2025",
      description: "Free expert consults launch, guiding thousands to their ritual.",
    },
  ];

  return (
    <section className="bg-[#12241A] text-white py-20 sm:py-28 my-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Heading */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.18] max-w-2xl mx-auto">
          Real herbs, real states, fair
          <br />
          <span className="italic text-[#D4AF37]">partnerships</span>
        </h2>

        {/* Narrative Description */}
        <p className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg text-[#B4C6BA] font-light max-w-3xl mx-auto leading-relaxed">
          Every ARQ herb has a home. We work directly with growers across India,
          agree fair terms, and trace each leaf back to the soil it came from.
          No anonymous blends, no opaque middlemen.
        </p>

        {/* Timeline Graphic */}
        <div className="mt-16 sm:mt-20 relative">
          {/* Horizontal Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-4 left-[12%] right-[12%] h-[1px] bg-[#3B5445]" />

          {/* Milestone Nodes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 relative z-10">
            {milestones.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                {/* Node Ring */}
                <div className="w-8 h-8 rounded-full border-2 border-[#D4AF37] bg-[#12241A] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-xs">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#D4AF37]" />
                </div>

                {/* Year Label */}
                <span className="font-serif text-2xl sm:text-3xl text-white font-medium mb-3">
                  {item.year}
                </span>

                {/* Milestone Detail */}
                <p className="text-xs sm:text-sm text-[#A8BDB0] font-light leading-relaxed max-w-[220px]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
