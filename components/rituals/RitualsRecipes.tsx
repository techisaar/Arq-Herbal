"use client";

import Image from "next/image";

const recipes = [
  {
    name: "Blue Lavender Cooler",
    description: "A shimmering violet iced tea that shifts colour with lemon.",
    image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80",
    steps: [
      "Steep Blue Tea for 3 min in 200ml boiling water",
      "Cool to room temperature",
      "Add a splash of lavender syrup",
      "Pour over ice with sparkling water",
      "Finish with a squeeze of fresh lemon",
    ],
    tag: "Blue Tea",
    tagColor: "#6B9FD4",
  },
  {
    name: "Hibiscus Spritz",
    description: "Tart, vibrant and refreshing — summer in a glass.",
    image:
      "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=800&q=80",
    steps: [
      "Brew Hibiscus Tea double-strength for 5 min",
      "Chill completely in the fridge",
      "Pour 100ml tea into a glass with ice",
      "Top with fresh orange juice",
      "Add sparkling water and an orange slice",
    ],
    tag: "Hibiscus",
    tagColor: "#E07B5A",
  },
  {
    name: "Chamomile Honey Moon Soak",
    description: "A warm, golden night ritual to ease you into sleep.",
    image:
      "https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?auto=format&fit=crop&w=800&q=80",
    steps: [
      "Steep Chamomile Calm for 4 min, covered",
      "Warm a small cup of milk separately",
      "Stir in one teaspoon of raw honey",
      "Combine the chamomile and warm milk",
      "Sip slowly, 30 minutes before bed",
    ],
    tag: "Chamomile",
    tagColor: "#F5A623",
  },
];

export function RitualsRecipes() {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#1E3A2B] text-xs tracking-widest uppercase mb-3">Ritual Recipes</p>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#1E3A2B] mb-4">
            Three simple pours
          </h2>
          <p className="text-[#6B7E74] text-base max-w-md mx-auto">
            Go beyond the cup. These recipes turn your favourite blend into something
            extra special.
          </p>
        </div>

        {/* Recipe Cards */}
        <div className="flex flex-col gap-10">
          {recipes.map((recipe, i) => (
            <div
              key={i}
              className={`flex flex-col md:flex-row ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              } gap-6 bg-[#FBF9F5] rounded-3xl overflow-hidden border border-[#E8E2D5]`}
            >
              {/* Image */}
              <div className="relative md:w-2/5 h-60 md:h-auto min-h-[220px]">
                <Image
                  src={recipe.image}
                  alt={recipe.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1 p-7 flex flex-col justify-center">
                <span
                  className="inline-block text-xs font-medium px-3 py-1 rounded-full mb-4 w-fit"
                  style={{ backgroundColor: recipe.tagColor + "22", color: recipe.tagColor }}
                >
                  {recipe.tag}
                </span>
                <h3 className="font-serif text-2xl text-[#1E3A2B] mb-2">{recipe.name}</h3>
                <p className="text-[#6B7E74] text-sm mb-5">{recipe.description}</p>
                <ul className="space-y-2">
                  {recipe.steps.map((step, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-[#4A5F55]">
                      <span className="w-5 h-5 rounded-full bg-[#1E3A2B] text-white text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                        {j + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
