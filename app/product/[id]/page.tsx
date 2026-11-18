import { products } from "@/data/products";
import { ProductDetailView } from "./ProductDetailView";

/**
 * Pre-generate static params for all catalog products at build time.
 * This guarantees zero prerender errors during `next build` on Vercel
 * and ensures instant loading and SEO indexing for every product page.
 */
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
  return <ProductDetailView productId={id} />;
}
