"use client";

import React, { use, useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProductBreadcrumb } from "@/components/product/ProductBreadcrumb";
import { ProductGallery } from "@/components/product/ProductGallery";
import { ProductBuyBox } from "@/components/product/ProductBuyBox";
import { ProductStatutory } from "@/components/product/ProductStatutory";
import { ProductWhyLoveIt } from "@/components/product/ProductWhyLoveIt";
import { ProductIngredientsBento } from "@/components/product/ProductIngredientsBento";
import { ProductBrewingGuide } from "@/components/product/ProductBrewingGuide";
import { ProductReviewsSection } from "@/components/product/ProductReviewsSection";
import { ProductFAQ } from "@/components/product/ProductFAQ";
import { ProductRelated } from "@/components/product/ProductRelated";
import { CartDrawer } from "@/components/ui/CartDrawer";
import { Toast } from "@/components/ui/Toast";
import { products } from "@/data/products";
import { Product, CartItem } from "@/types";

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const productId = resolvedParams.id;

  // Find product by id or fallback to Chamomile Calm
  const product =
    products.find(
      (p) =>
        p.id === productId ||
        p.id.toLowerCase().includes(productId.toLowerCase()) ||
        p.name.toLowerCase().replace(/\s+/g, "-").includes(productId.toLowerCase())
    ) || products.find((p) => p.id === "chamomile-calm") || products[0];

  // Cart & Wishlist state
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [wishlistIds] = useState<string[]>([]);
  const [toastMessage, setToastMessage] = useState("");
  const [isToastVisible, setIsToastVisible] = useState(false);

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleAddToCart = (itemToAdd: Product, quantityToAdd: number = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === itemToAdd.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === itemToAdd.id
            ? { ...item, quantity: item.quantity + quantityToAdd }
            : item
        );
      }
      return [...prev, { product: itemToAdd, quantity: quantityToAdd }];
    });
    setToastMessage(`Added ${quantityToAdd} × "${itemToAdd.name}" to your basket`);
    setIsToastVisible(true);
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === id ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== id));
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
        {/* Top Product Showcase: Breadcrumb + Gallery + Buy Box */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-12">
          {/* Breadcrumb: Shop / Chamomile Calm */}
          <ProductBreadcrumb productName={product.name} />

          {/* Gallery + Buy Box Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mt-2">
            {/* Left: Gallery */}
            <div className="lg:col-span-6">
              <ProductGallery
                images={product.images || [product.image]}
                productName={product.name}
              />
            </div>

            {/* Right: Buy Box */}
            <div className="lg:col-span-6">
              <ProductBuyBox
                product={product}
                onAddToCart={(prod, qty) => handleAddToCart(prod, qty)}
              />
            </div>
          </div>
        </div>

        {/* 1. Label & Statutory Information (On the Pack) */}
        <ProductStatutory />

        {/* 2. Why you'll love it (A Little Calm in Every Cup) */}
        <ProductWhyLoveIt />

        {/* 3. Product Information Bento (Everything That Goes Into Your Cup) */}
        <ProductIngredientsBento product={product} />

        {/* 4. How to brew (Make Your Perfect Cup - Hot & Iced) */}
        <ProductBrewingGuide />

        {/* 5. Customer Reviews (Real Experiences, Real Stories) */}
        <ProductReviewsSection />

        {/* 6. Good to know (Questions About This Blend FAQ) */}
        <ProductFAQ />

        {/* 7. Explore more (You May Also Like) */}
        <ProductRelated
          currentId={product.id}
          onAddToCart={(prod) => handleAddToCart(prod, 1)}
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
    </div>
  );
}
