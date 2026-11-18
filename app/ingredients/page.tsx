"use client";

import { useState, useCallback } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/ui/CartDrawer";
import { Toast } from "@/components/ui/Toast";
import { IngredientsHero } from "@/components/ingredients/IngredientsHero";
import { IngredientsTrustStrip } from "@/components/ingredients/IngredientsTrustStrip";
import { IngredientsGrid } from "@/components/ingredients/IngredientsGrid";
import { IngredientsConsultancy } from "@/components/ingredients/IngredientsConsultancy";
import { IngredientsBottomCards } from "@/components/ingredients/IngredientsBottomCards";
import { CartItem, Product } from "@/types";

export default function IngredientsPage() {
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
    <div className="min-h-screen bg-[#FBF9F5] text-[#1E3A2B] selection:bg-[#E2D8C3] selection:text-[#1E3A2B]">
      {/* Navbar */}
      <Navbar
        cartCount={cartItems.reduce((s, i) => s + i.quantity, 0)}
        wishlistCount={wishlist.length}
        onOpenCart={() => setCartOpen(true)}
      />

      <main>
        {/* 1. Hero: The ARQ ingredient library */}
        <IngredientsHero />

        {/* 2. Trust Strip: Single Origin, Whole Leaf, Hillside Farms, Lab Tested */}
        <IngredientsTrustStrip />

        {/* 3. Interactive Search, Categories & 16 Bento Cards Grid */}
        <IngredientsGrid />

        {/* 4. Dark Evergreen Section: Ingredient consultancy that builds better solutions */}
        <IngredientsConsultancy />

        {/* 5. Bottom Two Cards: Origin Map & Quick Quiz */}
        <IngredientsBottomCards />
      </main>

      {/* Footer */}
      <Footer />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onRemoveItem={handleRemoveItem}
        onUpdateQuantity={handleUpdateQuantity}
      />

      {/* Toast */}
      <Toast
        message={toastMessage}
        isVisible={toastVisible}
        onClose={handleCloseToast}
      />
    </div>
  );
}
