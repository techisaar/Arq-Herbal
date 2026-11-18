export interface Product {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  originalPrice?: number;
  badge?: string;
  tags: string[];
  benefitCategory: "sleep" | "stress" | "immunity" | "energy" | "digestion" | "skin";
  rating: number;
  reviewsCount: number;
  image: string;
  images?: string[];
  description: string;
  netWeight?: string;
  origin?: string;
  botanicalName?: string;
  packSize?: string;
  perBagPrice?: string;
  tasteAroma?: string;
  caffeineLevel?: string;
  ingredients?: string;
}

export interface BenefitItem {
  id: string;
  title: string;
  category: "sleep" | "stress" | "immunity" | "energy" | "digestion" | "skin";
  iconName: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  benefitTag: string;
  avatar: string;
  rating: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
