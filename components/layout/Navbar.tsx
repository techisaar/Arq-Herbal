"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ShoppingBagIcon, HeartIcon } from "@/components/icons/Icons";
import { navLinks } from "@/data/navigation";

interface NavbarProps {
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
}

export function Navbar({ cartCount, wishlistCount, onOpenCart }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FBF9F5]/90 backdrop-blur-md border-b border-[#E8E2D5] transition-all">
      {/* Top Announcement Bar */}
      <div className="bg-[#1E3A2B] text-[#E8F0EA] text-xs py-2 px-4 text-center font-normal tracking-wide">
        <span>
          Pure herbal infusions • Handpicked hillside harvests •{" "}
          <strong className="font-semibold text-[#D6AD60]">2% of every purchase</strong>{" "}
          educates children
        </span>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#1E3A2B] hover:text-[#2d5740]"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Brand Logo */}
        <Link href="/" className="flex flex-col items-center group">
          <span className="font-serif text-2xl sm:text-3xl tracking-[0.2em] font-semibold text-[#1E3A2B] group-hover:text-[#2d5740] transition-colors">
            ARQ
          </span>
          <span className="text-[10px] tracking-[0.35em] text-[#718077] uppercase font-medium -mt-1">
            Herbal
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm tracking-wide text-[#3F4F45] hover:text-[#1E3A2B] font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Actions: Wishlist, Cart & Shop Button */}
        <div className="flex items-center space-x-4 sm:space-x-5">
          {/* Wishlist Icon */}
          <div className="relative cursor-pointer text-[#2D3F34] hover:text-[#1E3A2B] transition-colors" title="Wishlist">
            <HeartIcon className="w-5 h-5" />
            {wishlistCount > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-[#b84234] text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </div>

          {/* Cart Icon Button */}
          <button
            onClick={onOpenCart}
            className="relative p-2 text-[#2D3F34] hover:text-[#1E3A2B] transition-colors"
            aria-label="Open shopping bag"
          >
            <ShoppingBagIcon className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute top-0.5 right-0 bg-[#1E3A2B] text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          {/* Quick CTA */}
          <a
            href="#bestsellers"
            className="hidden sm:inline-flex items-center px-4 py-2 rounded-full bg-[#1E3A2B] text-white text-xs uppercase tracking-wider font-medium hover:bg-[#2A4D3B] transition-colors shadow-xs"
          >
            Shop Teas
          </a>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FBF9F5] border-b border-[#E8E2D5] px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base text-[#2E3D34] font-medium py-1.5 border-b border-[#EDE8DE]"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2">
            <a
              href="#bestsellers"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center block py-2.5 rounded-full bg-[#1E3A2B] text-white text-sm font-medium"
            >
              Shop All Blends
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
