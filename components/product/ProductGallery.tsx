"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const displayImages = images.length > 0 ? images : [
    "https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1000&q=80",
  ];

  return (
    <div className="space-y-4">
      {/* Main Image Container */}
      <div
        className="relative w-full aspect-square rounded-3xl overflow-hidden bg-[#F4EFE6] border border-[#E7E1D6] shadow-xs cursor-pointer group"
        onClick={() => setIsZoomed(!isZoomed)}
      >
        <Image
          src={displayImages[selectedImage]}
          alt={productName}
          fill
          priority
          className={`object-cover object-center transition-transform duration-500 ${
            isZoomed ? "scale-125" : "group-hover:scale-105"
          }`}
        />

        {/* Click to zoom badge */}
        <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-xs text-[#2A3F33] text-[11px] font-medium px-3.5 py-1.5 rounded-full shadow-xs border border-[#E2DBD0] pointer-events-none">
          Click to zoom
        </div>
      </div>

      {/* Thumbnails Row */}
      <div className="flex gap-3">
        {displayImages.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedImage(idx)}
            className={`relative w-20 h-20 rounded-2xl overflow-hidden border-2 transition-all cursor-pointer ${
              selectedImage === idx
                ? "border-[#1E3A2B] ring-2 ring-[#1E3A2B]/15"
                : "border-[#E5DFD4] opacity-75 hover:opacity-100"
            }`}
          >
            <Image
              src={img}
              alt={`${productName} thumbnail ${idx + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
