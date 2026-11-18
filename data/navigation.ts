export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Shop", href: "/shop" },
  { label: "Wellness Goals", href: "/#wellness" },
  { label: "Rituals", href: "/rituals" },
  { label: "Ingredients", href: "/ingredients" },
  { label: "Our Story", href: "/our-story" },
  { label: "Consult", href: "/consult" },
];

export const trustBadges = [
  {
    id: "natural",
    label: "100% Natural",
    icon: "LeafIcon",
  },
  {
    id: "lab",
    label: "Lab Tested",
    icon: "FlaskIcon",
  },
  {
    id: "preservatives",
    label: "No Added Preservatives",
    icon: "ShieldCheckIcon",
  },
  {
    id: "herbs",
    label: "Handpicked Herbs",
    icon: "HandpickedIcon",
  },
];
