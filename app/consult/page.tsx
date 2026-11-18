"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ConsultHero } from "@/components/consult/ConsultHero";
import { ConsultHowItWorks } from "@/components/consult/ConsultHowItWorks";
import { ConsultPricingTiers } from "@/components/consult/ConsultPricingTiers";
import { ConsultExperts } from "@/components/consult/ConsultExperts";
import { ConsultFAQ } from "@/components/consult/ConsultFAQ";
import { ConsultCTA } from "@/components/consult/ConsultCTA";
import {
  ConsultBookingModal,
  WhatsAppCommunityModal,
} from "@/components/consult/ConsultBookingModal";
import { CartDrawer } from "@/components/ui/CartDrawer";
import { Toast } from "@/components/ui/Toast";
import { CartItem } from "@/types";

export default function ConsultPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [wishlistIds] = useState<string[]>([]);
  const [toastMessage] = useState("");
  const [isToastVisible, setIsToastVisible] = useState(false);

  // Booking Modal States
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState("Personalized Consultation");
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleOpenBooking = (tierName: string = "Personalized Consultation") => {
    setSelectedTier(tierName);
    setIsBookingModalOpen(true);
  };

  const handleOpenWhatsApp = () => {
    setIsWhatsAppModalOpen(true);
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

  return (
    <div className="relative min-h-screen flex flex-col bg-[#FBF9F5] text-[#1E3A2B] overflow-x-hidden selection:bg-[#E2D8C3] selection:text-[#1E3A2B]">
      {/* Navigation */}
      <Navbar
        cartCount={totalCartCount}
        wishlistCount={wishlistIds.length}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <main className="flex-1">
        {/* 1. Hero: Herbal wellness guidance, made personal */}
        <ConsultHero onOpenBooking={() => handleOpenBooking()} />

        {/* 2. How it works: 1 Share your goal · 2 Get guidance · 3 Start your journey */}
        <ConsultHowItWorks />

        {/* 3. Choose how you'd like to begin: 3 Tier Comparison */}
        <ConsultPricingTiers
          onOpenBooking={handleOpenBooking}
          onJoinWhatsApp={handleOpenWhatsApp}
        />

        {/* 4. Meet our experts */}
        <ConsultExperts />

        {/* 5. Questions, answered (Interactive Accordion) */}
        <ConsultFAQ />

        {/* 6. Ready to start? CTA Banner */}
        <ConsultCTA
          onOpenBooking={() => handleOpenBooking()}
          onJoinWhatsApp={handleOpenWhatsApp}
        />
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

      {/* Booking Consultation Modal */}
      <ConsultBookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        initialPlan={selectedTier}
      />

      {/* WhatsApp Community Modal */}
      <WhatsAppCommunityModal
        isOpen={isWhatsAppModalOpen}
        onClose={() => setIsWhatsAppModalOpen(false)}
      />
    </div>
  );
}
