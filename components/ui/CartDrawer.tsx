"use client";

import React from "react";
import Image from "next/image";
import { CloseIcon, ArrowRightIcon } from "@/components/icons/Icons";
import { CartItem } from "@/types";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
}

export function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
}: CartDrawerProps) {
  if (!isOpen) return null;

  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const freeShippingThreshold = 999;
  const freeShippingProgress = Math.min(
    100,
    Math.round((subtotal / freeShippingThreshold) * 100)
  );
  const amountNeededForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FBF9F5] shadow-2xl flex flex-col border-l border-[#E6E1D6]">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-[#EBE6DC] bg-white">
            <div>
              <h2 className="text-xl font-serif font-medium text-[#1E3A2B]">
                Your Herbal Rituals
              </h2>
              <p className="text-xs text-[#707D75]">
                {items.length === 0
                  ? "Your cart is empty"
                  : `${items.reduce((s, i) => s + i.quantity, 0)} items in your basket`}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-[#46534B] hover:text-[#1E3A2B] rounded-full hover:bg-[#F2ECE1] transition-colors"
              aria-label="Close cart"
            >
              <CloseIcon className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Tracker */}
          <div className="px-6 py-3.5 bg-[#F2EDE2] border-b border-[#E5DFD3]">
            <div className="flex justify-between items-center text-xs text-[#334238] font-medium mb-1.5">
              <span>
                {amountNeededForFreeShipping > 0
                  ? `Add ₹${amountNeededForFreeShipping} more for Free Shipping`
                  : "You've unlocked FREE Shipping! 🎉"}
              </span>
              <span>{freeShippingProgress}%</span>
            </div>
            <div className="w-full h-1.5 bg-[#DDD6C8] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#1E3A2B] transition-all duration-300"
                style={{ width: `${freeShippingProgress}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#EFECE4] flex items-center justify-center text-[#7F8F84]">
                  🌿
                </div>
                <h3 className="font-serif text-lg text-[#1E3A2B] mb-1">
                  Your basket is empty
                </h3>
                <p className="text-sm text-[#6C7971] max-w-xs mx-auto mb-6">
                  Explore our handcrafted herbal blends formulated to soothe mind and body.
                </p>
                <button
                  onClick={onClose}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#1E3A2B] text-white text-sm font-medium hover:bg-[#284C38] transition-colors"
                >
                  Explore Teas <ArrowRightIcon className="w-4 h-4" />
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-4 p-3 bg-white rounded-xl border border-[#E9E4D9] shadow-xs"
                >
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-[#F6F4ED] shrink-0">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="font-serif font-medium text-sm text-[#1E3A2B]">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(item.product.id)}
                          className="text-[#9BA79F] hover:text-red-600 transition-colors text-xs"
                          title="Remove item"
                        >
                          ✕
                        </button>
                      </div>
                      <p className="text-xs text-[#7A877E]">
                        {item.product.subtitle}
                      </p>
                    </div>

                    <div className="flex justify-between items-center mt-2">
                      <div className="flex items-center border border-[#DDD6C9] rounded-full px-2 py-0.5 text-xs bg-[#FAF8F3]">
                        <button
                          onClick={() =>
                            onUpdateQuantity(
                              item.product.id,
                              Math.max(1, item.quantity - 1)
                            )
                          }
                          className="px-1 text-[#5E6D63] hover:text-[#1E3A2B]"
                        >
                          -
                        </button>
                        <span className="px-2 font-medium text-[#1E3A2B]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            onUpdateQuantity(item.product.id, item.quantity + 1)
                          }
                          className="px-1 text-[#5E6D63] hover:text-[#1E3A2B]"
                        >
                          +
                        </button>
                      </div>
                      <span className="font-semibold text-sm text-[#1E3A2B]">
                        ₹{item.product.price * item.quantity}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout Summary */}
          {items.length > 0 && (
            <div className="p-6 bg-white border-t border-[#EAE5DB] space-y-4">
              <div className="space-y-1.5 text-sm">
                <div className="flex justify-between text-[#68766E]">
                  <span>Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>
                <div className="flex justify-between text-[#68766E]">
                  <span>2% Donation to Children</span>
                  <span className="text-[#3A754F]">₹{Math.round(subtotal * 0.02)} included</span>
                </div>
                <div className="flex justify-between text-base font-semibold text-[#1E3A2B] pt-2 border-t border-[#EAE5DB]">
                  <span>Total</span>
                  <span>₹{subtotal}</span>
                </div>
              </div>

              <button
                onClick={() =>
                  alert("Thank you! Proceeding to secure checkout demo.")
                }
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#1E3A2B] text-white font-medium hover:bg-[#284D39] transition-colors shadow-md hover:shadow-lg"
              >
                Checkout Now <ArrowRightIcon className="w-4 h-4" />
              </button>

              <p className="text-center text-xs text-[#828F86]">
                🔒 100% Secure Checkout • Cash on Delivery / UPI Available
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
