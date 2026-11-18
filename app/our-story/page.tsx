"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StoryHero } from "@/components/story/StoryHero";
import { StoryFounding } from "@/components/story/StoryFounding";
import { StoryPillars } from "@/components/story/StoryPillars";
import { StoryMissionVision } from "@/components/story/StoryMissionVision";
import { StoryTimeline } from "@/components/story/StoryTimeline";
import { StoryFounderQuote } from "@/components/story/StoryFounderQuote";
import { StoryEducationImpact } from "@/components/story/StoryEducationImpact";
import { StoryCTA } from "@/components/story/StoryCTA";
import { CartDrawer } from "@/components/ui/CartDrawer";
import { Toast } from "@/components/ui/Toast";
import { CartItem } from "@/types";

export default function OurStoryPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [wishlistIds] = useState<string[]>([]);
  const [toastMessage] = useState("");
  const [isToastVisible, setIsToastVisible] = useState(false);

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

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

  return (
    <div className="relative min-h-screen flex flex-col bg-[#FBF9F5] text-[#1E3A2B] overflow-x-hidden selection:bg-[#E2D8C3] selection:text-[#1E3A2B]">
      {/* Navigation */}
      <Navbar
        cartCount={totalCartCount}
        wishlistCount={wishlistIds.length}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <main className="flex-1">
        {/* 1. Hero: Heritage herbal wellness, rooted in India */}
        <StoryHero />

        {/* 2. Founding Story: It started with a love for natural wellness, and a quiet frustration */}
        <StoryFounding />

        {/* 3. 4 Pillars: Rooted in India · Whole leaf & flower · Caffeine free · Guided by experts */}
        <StoryPillars />

        {/* 4. Mission & Vision */}
        <StoryMissionVision />

        {/* 5. Timeline: Real herbs, real states, fair partnerships (2019, 2021, 2023, 2025) */}
        <StoryTimeline />

        {/* 6. Founders Quote: Abu Bakar (Hadi) & Sajid */}
        <StoryFounderQuote />

        {/* 7. 2% Children's Education Impact */}
        <StoryEducationImpact />

        {/* 8. Call to Action: Come share a quiet cup with us */}
        <StoryCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
      />

      {/* Toast Notification */}
      <Toast
        message={toastMessage}
        isVisible={isToastVisible}
        onClose={() => setIsToastVisible(false)}
      />
    </div>
  );
}
