"use client";

import { useState, useCallback } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/ui/CartDrawer";
import { Toast } from "@/components/ui/Toast";
import { RitualsHero } from "@/components/rituals/RitualsHero";
import { RitualsBrewingSteps } from "@/components/rituals/RitualsBrewingSteps";
import { RitualsBlendNotes } from "@/components/rituals/RitualsBlendNotes";
import { RitualsRecipes } from "@/components/rituals/RitualsRecipes";
import { RitualsDosAndDonts } from "@/components/rituals/RitualsDosAndDonts";
import { RitualsSecondsHero } from "@/components/rituals/RitualsSecondsHero";
import { RitualsCTA } from "@/components/rituals/RitualsCTA";
import { CartItem, Product } from "@/types";

export default function RitualsPage() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [toastMessage, setToastMessage] = useState("");
  const [toastVisible, setToastVisible] = useState(false);

  const showToast = (message: string) => {
    setToastMessage(message);
    setToastVisible(true);
  };

  const handleCloseToast = useCallback(() => {
    setToastVisible(false);
  }, []);

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
    setCartOpen(true);
    showToast(`${product.name} added to cart`);
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleWishlistToggle = (productId: string) => {
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  // Suppress unused variable warning
  void handleWishlistToggle;
  void handleAddToCart;

  return (
    <div className="min-h-screen bg-[#FBF9F5]">
      <Navbar
        cartCount={cartItems.reduce((s, i) => s + i.quantity, 0)}
        wishlistCount={wishlist.length}
        onOpenCart={() => setCartOpen(true)}
      />

      <main>
        <RitualsHero />
        <RitualsBrewingSteps />
        <RitualsBlendNotes />
        <RitualsRecipes />
        <RitualsDosAndDonts />
        <RitualsSecondsHero />
        <RitualsCTA />
      </main>

      <Footer />

      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onRemoveItem={handleRemoveItem}
        onUpdateQuantity={handleUpdateQuantity}
      />

      <Toast
        message={toastMessage}
        isVisible={toastVisible}
        onClose={handleCloseToast}
      />
    </div>
  );
}
