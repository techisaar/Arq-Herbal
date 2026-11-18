import React from "react";
import Image from "next/image";

export function ConsultExperts() {
  const experts = [
    {
      name: "Dr. Ananya Sharma",
      title: "Ayurvedic Physician (BAMS) & Botanical Nutritionist",
      specialty: "Circadian Sleep Rituals, Herbal Adaptogens & Stress Management",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Dr. Vikram Joshi",
      title: "Senior Herbal Wellness Practitioner (MD Ayurveda)",
      specialty: "Metabolic Harmony, Gut Health & Hillside Botanical Blends",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <section className="py-16 sm:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center border-t border-[#E8E2D5]">
      {/* Header */}
      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1E3A2B] font-normal tracking-tight">
        Meet our experts
      </h2>
      <p className="mt-3 text-sm sm:text-base text-[#5A6D60] font-light">
        The people behind your consultation.
      </p>

      {/* 2 Expert Cards Grid */}
      <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto text-center">
        {experts.map((expert, idx) => (
          <div
            key={idx}
            className="bg-white rounded-3xl p-8 border border-[#E7E1D6] shadow-xs flex flex-col items-center hover:shadow-md transition-shadow"
          >
            {/* Avatar Photo */}
            <div className="relative w-24 h-24 rounded-full overflow-hidden bg-[#ECE6DA] border-2 border-[#D9D1C2] mb-5">
              <Image
                src={expert.image}
                alt={expert.name}
                fill
                className="object-cover object-top"
              />
            </div>

            {/* Name */}
            <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#1E3A2B]">
              {expert.name}
            </h3>

            {/* Title / Qualifications */}
            <p className="mt-2 text-xs sm:text-sm text-[#4E6254] font-medium max-w-xs">
              {expert.title}
            </p>

            {/* Specialty */}
            <p className="mt-2 text-xs text-[#7B8B80] font-light max-w-xs">
              Specialization: {expert.specialty}
            </p>

            {/* Badge */}
            <div className="mt-5">
              <span className="text-[10px] tracking-wider uppercase font-semibold text-[#8C6D1F] bg-[#FEF3C7] border border-[#FDE68A] px-3 py-1 rounded-full">
                Verified ARQ Consultant
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
