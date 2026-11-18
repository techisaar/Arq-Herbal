"use client";

import React, { useState } from "react";
import Link from "next/link";
import { LeafIcon, ShieldCheckIcon, FlaskIcon, HandpickedIcon } from "@/components/icons/Icons";

export function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
  };

  return (
    <footer className="bg-[#14261C] text-[#DCE5DF] pt-16 pb-12 border-t border-[#233C2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Trust Icons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-12 border-b border-[#243F30] text-center">
          <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-[#1E3A2B] flex items-center justify-center text-[#A6C9AF]">
              <LeafIcon className="w-5 h-5" />
            </div>
            <span className="text-sm font-medium text-white">100% Single Origin</span>
            <span className="text-xs text-[#8FA395]">Pure, unadulterated herbs</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-[#1E3A2B] flex items-center justify-center text-[#A6C9AF]">
              <FlaskIcon className="w-5 h-5" />
            </div>
            <span className="text-sm font-medium text-white">Lab Tested</span>
            <span className="text-xs text-[#8FA395]">Pesticide and heavy metal free</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-[#1E3A2B] flex items-center justify-center text-[#A6C9AF]">
              <ShieldCheckIcon className="w-5 h-5" />
            </div>
            <span className="text-sm font-medium text-white">Zero Preservatives</span>
            <span className="text-xs text-[#8FA395]">No artificial flavors or colors</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-[#1E3A2B] flex items-center justify-center text-[#A6C9AF]">
              <HandpickedIcon className="w-5 h-5" />
            </div>
            <span className="text-sm font-medium text-white">Ethically Sourced</span>
            <span className="text-xs text-[#8FA395]">Direct from small hillside farms</span>
          </div>
        </div>

        {/* Middle Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 py-12">
          {/* Brand Info */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex flex-col items-start">
              <span className="font-serif text-2xl tracking-[0.25em] font-bold text-white">
                ARQ
              </span>
              <span className="text-[10px] tracking-[0.4em] text-[#A6C9AF] uppercase -mt-0.5">
                Herbal
              </span>
            </div>
            <p className="text-sm text-[#9BB1A3] leading-relaxed max-w-sm">
              Pure herbal teas that bring balance to your mind, body and everyday life.
            </p>
            <div className="pt-2 text-xs text-[#839C8B]">
              2% of every purchase supports children’s education and wellbeing.
            </div>
          </div>

          {/* Shop Column */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Shop
            </h4>
            <ul className="space-y-2 text-sm text-[#9BB1A3]">
              <li><Link href="/shop" className="hover:text-white transition-colors">Bestsellers</Link></li>
              <li><Link href="/#wellness" className="hover:text-white transition-colors">Wellness Goals</Link></li>
              <li><Link href="/shop" className="hover:text-white transition-colors">All Teas</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-[#9BB1A3]">
              <li><Link href="/our-story" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link href="/rituals" className="hover:text-white transition-colors">Rituals</Link></li>
              <li><Link href="/ingredients" className="hover:text-white transition-colors">Ingredient Library</Link></li>
              <li><Link href="/consult" className="hover:text-white transition-colors">Consultation</Link></li>
              <li><Link href="/#impact" className="hover:text-white transition-colors">Our Impact</Link></li>
              <li><Link href="/#reviews" className="hover:text-white transition-colors">Reviews</Link></li>
            </ul>
          </div>

          {/* Stay in the Loop / Newsletter Signup */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Stay in the Loop
            </h4>
            <p className="text-sm text-[#9BB1A3]">
              Rituals, new blends and offers, occasionally.
            </p>
            {subscribed ? (
              <div className="p-3 bg-[#1E3A2B] border border-[#2D543F] rounded-xl text-xs text-[#C4E2CE]">
                ✓ Welcome! Use code <strong className="text-[#E8BF76]">ARQFIRST10</strong> for 10% off your first order.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2 pt-2">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className="flex-1 bg-[#1A3124] border border-[#2B4B38] text-white placeholder-[#789382] text-sm rounded-full px-4 py-2.5 focus:outline-none focus:border-[#C49647]"
                />
                <button
                  type="submit"
                  className="bg-[#D4AF37] hover:bg-[#C29E2E] text-[#14261C] font-semibold text-xs px-5 py-2.5 rounded-full transition-colors shrink-0 cursor-pointer"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#233C2E] flex flex-col sm:flex-row items-center justify-between text-xs text-[#7B9283] gap-4">
          <p>© 2026 ARQ Herbal. All rights reserved.</p>
          <p className="text-xs text-[#8FA395]">
            2% of every purchase supports children’s wellbeing.
          </p>
          <div className="flex space-x-6">
            <Link href="/" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/" className="hover:text-white transition-colors">Shipping & Returns</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
