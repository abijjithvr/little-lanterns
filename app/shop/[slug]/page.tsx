import ProductDetail from "@/components/product/ProductDetail";
import { getProductBySlug } from "@/lib/products";
import { notFound } from "next/navigation";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product || product.stock <= 0) {
    notFound();
  }

  return <ProductDetail product={product} />;
}
