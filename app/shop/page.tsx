"use client";

import React, { useState, useMemo } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ShopHeroBanner } from "@/components/shop/ShopHeroBanner";
import { ShopTrustStrip } from "@/components/shop/ShopTrustStrip";
import { ShopFilters, WellnessFilter, SortOption } from "@/components/shop/ShopFilters";
import { ShopProductCard } from "@/components/shop/ShopProductCard";
import { CartDrawer } from "@/components/ui/CartDrawer";
import { Toast } from "@/components/ui/Toast";
import { products } from "@/data/products";
import { Product, CartItem } from "@/types";

export default function ShopPage() {
  // ---- Cart State ----
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // ---- Wishlist State ----
  const [wishlistIds, setWishlistIds] = useState<string[]>([]);

  // ---- Filters State ----
  const [wellnessFilter, setWellnessFilter] = useState<WellnessFilter>("all");
  const [sortBy, setSortBy] = useState<SortOption>("featured");
  const [searchQuery, setSearchQuery] = useState("");

  // ---- Toast State ----
  const [toastMessage, setToastMessage] = useState("");
  const [isToastVisible, setIsToastVisible] = useState(false);

  // ---- Computed ----
  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Wellness category filter
    if (wellnessFilter !== "all") {
      result = result.filter(
        (p) =>
          p.benefitCategory === wellnessFilter ||
          p.tags.some((t) => {
            const lower = t.toLowerCase();
            if (wellnessFilter === "sleep") return lower.includes("sleep");
            if (wellnessFilter === "stress") return lower.includes("stress");
            if (wellnessFilter === "immunity") return lower.includes("immun");
            if (wellnessFilter === "energy") return lower.includes("energy");
            if (wellnessFilter === "digestion") return lower.includes("digest");
            if (wellnessFilter === "skin") return lower.includes("skin");
            return false;
          })
      );
    }

    // Search filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.subtitle.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    // Sort
    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        result.reverse();
        break;
      // "featured" = default order
    }

    return result;
  }, [wellnessFilter, sortBy, searchQuery]);

  // ---- Handlers ----
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

  const handleClearFilters = () => {
    setWellnessFilter("all");
    setSearchQuery("");
    setSortBy("featured");
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-[#FBF9F5] text-[#1E3A2B] overflow-x-hidden selection:bg-[#E2D8C3] selection:text-[#1E3A2B]">
      {/* Navigation */}
      <Navbar
        cartCount={totalCartCount}
        wishlistCount={wishlistIds.length}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* 1. Hero Banner: "All teas" with ARQ tins photography */}
        <ShopHeroBanner />

        {/* 2. Trust Strip: 100% Natural · Lab Tested · No Preservatives · Handpicked */}
        <ShopTrustStrip />

        {/* 3. Filters Section: "Find your ritual" + search + sort + pills */}
        <div className="mt-8 sm:mt-10">
          <ShopFilters
            activeWellness={wellnessFilter}
            onWellnessChange={setWellnessFilter}
            sortBy={sortBy}
            onSortChange={setSortBy}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            totalProducts={products.length}
            filteredCount={filteredProducts.length}
            onClearAll={handleClearFilters}
          />
        </div>

        {/* 4. Products Grid: 3-column layout with 10 product cards */}
        <div className="mt-8 sm:mt-10">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredProducts.map((product) => (
                <ShopProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                  onToggleWishlist={handleToggleWishlist}
                  isWishlisted={wishlistIds.includes(product.id)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#EFECE4] flex items-center justify-center text-2xl">
                🌿
              </div>
              <h3 className="font-serif text-xl text-[#1E3A2B] mb-1">
                No teas found
              </h3>
              <p className="text-sm text-[#6C7971] max-w-xs mx-auto mb-5">
                Try adjusting your filters or search terms.
              </p>
              <button
                onClick={handleClearFilters}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#1E3A2B] text-white text-sm font-medium hover:bg-[#284C38] transition-colors cursor-pointer"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
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

      {/* Toast */}
      <Toast
        message={toastMessage}
        isVisible={isToastVisible}
        onClose={() => setIsToastVisible(false)}
      />
    </div>
  );
}
