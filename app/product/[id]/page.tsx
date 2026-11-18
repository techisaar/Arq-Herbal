import { Suspense } from "react";
import { products } from "@/data/products";
import { ProductDetailView } from "./ProductDetailView";

export const dynamic = "force-dynamic";

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#FBF9F5]" />}>
      <ProductDetailView productId={id} />
    </Suspense>
  );
}
