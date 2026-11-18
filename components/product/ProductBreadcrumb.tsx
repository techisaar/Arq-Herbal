import React from "react";
import Link from "next/link";

interface ProductBreadcrumbProps {
  productName: string;
}

export function ProductBreadcrumb({ productName }: ProductBreadcrumbProps) {
  return (
    <nav className="text-xs text-[#7B8B80] py-4 flex items-center gap-2">
      <Link href="/shop" className="hover:text-[#1E3A2B] transition-colors">
        Shop
      </Link>
      <span>/</span>
      <span className="text-[#1E3A2B] font-medium">{productName}</span>
    </nav>
  );
}
