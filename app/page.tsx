"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { Bestsellers } from "@/components/home/Bestsellers";
import { WellnessBenefits } from "@/components/home/WellnessBenefits";
import { Philosophy } from "@/components/home/Philosophy";
import { Impact } from "@/components/home/Impact";
import { Testimonials } from "@/components/home/Testimonials";
import { CartDrawer } from "@/components/ui/CartDrawer";
import { Toast } from "@/components/ui/Toast";
import { Product, CartItem } from "@/types";

export default function Home() {
  // Interactive Cart State
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Interactive Wishlist State
  const [wishlistIds, setWishlistIds] = useState<string[]>([]);

  // Selected Wellness Category Filter
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Toast notification state
  const [toastMessage, setToastMessage] = useState("");
  const [isToastVisible, setIsToastVisible] = useState(false);

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });

    setToastMessage(`Added "${product.name}" to your basket`);
    setIsToastVisible(true);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveFromCart = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleToggleWishlist = (productId: string) => {
    setWishlistIds((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-[#FBF9F5] text-[#1E3A2B] overflow-x-hidden selection:bg-[#E2D8C3] selection:text-[#1E3A2B]">
      {/* Global Header & Navigation */}
      <Navbar
        cartCount={totalCartCount}
        wishlistCount={wishlistIds.length}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <main className="flex-1 relative z-10">
        {/* 1. Hero Section: Nature plantation, heading & CTAs */}
        <Hero />

        {/* 2. Floating Trust Bar: 100% Natural, Lab Tested, Zero Preservatives, Handpicked */}
        <TrustBar />

        {/* 3. Bestsellers & The ARQ Collection (with 6 product cards) */}
        <Bestsellers
          onAddToCart={handleAddToCart}
          onToggleWishlist={handleToggleWishlist}
          wishlistIds={wishlistIds}
          selectedCategory={selectedCategory}
        />

        {/* 4. Wellness, Naturally: 6 Benefit Filter Pills */}
        <WellnessBenefits
          selectedCategory={selectedCategory}
          onSelectCategory={(cat) => {
            setSelectedCategory(cat);
            if (cat) {
              const el = document.getElementById("products-grid");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }
          }}
        />

        {/* 5. Our Philosophy: Grown slowly. Steeped with care. */}
        <Philosophy />

        {/* 6. Social Impact: 2% For Children's Wellbeing */}
        <Impact />

        {/* 7. Testimonials: Real Stories, Real Benefits */}
        <Testimonials />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
      />

      {/* Feedback Toast */}
      <Toast
        message={toastMessage}
        isVisible={isToastVisible}
        onClose={() => setIsToastVisible(false)}
      />
    </div>
  );
}
