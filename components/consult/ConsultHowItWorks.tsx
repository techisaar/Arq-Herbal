import React from "react";

export function ConsultHowItWorks() {
  const steps = [
    {
      num: "1",
      title: "Share your goal",
      description: "Tell us what you would like support with.",
    },
    {
      num: "2",
      title: "Get guidance",
      description: "Receive herbal wellness guidance from our team.",
    },
    {
      num: "3",
      title: "Start your journey",
      description: "Begin with the option that suits you best.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center border-b border-[#E8E2D5]">
      {/* Heading */}
      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1E3A2B] font-normal tracking-tight">
        How it works
      </h2>

      {/* 3 Steps Grid */}
      <div className="mt-14 sm:mt-18 grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 text-left">
        {steps.map((step, idx) => (
          <div key={idx} className="space-y-3 relative">
            {/* Step Number */}
            <span className="font-serif text-4xl sm:text-5xl text-[#C89B38] font-normal block">
              {step.num}
            </span>

            {/* Step Title */}
            <h3 className="font-serif text-xl sm:text-2xl text-[#1E3A2B] font-medium pt-1">
              {step.title}
            </h3>

            {/* Step Description */}
            <p className="text-sm sm:text-base text-[#5A6D60] font-light leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
