"use client";

import { useRouter } from "next/navigation";
import type { Product } from "@/types/product";
import Button from "@/components/ui/Button";
import { useEcommerce } from "@/lib/ecommerce";

export default function ProductActions({ product, compact = false }: { product: Product; compact?: boolean }) {
  const router = useRouter();
  const { addToCart, isWishlisted, toggleWishlist } = useEcommerce();
  const wishlisted = isWishlisted(product.id);

  return (
    <div className={`grid gap-2 ${compact ? "grid-cols-1" : "sm:grid-cols-3"}`}>
      <Button
        onClick={() => {
          router.push(`/checkout?buyNow=${product.slug}`);
        }}
        className="w-full"
      >
        Adopt Me 🏮
      </Button>
      <Button
        onClick={() => addToCart(product)}
        variant="pink"
        className="w-full"
      >
        Add to Cart
      </Button>
      <Button
        onClick={() => toggleWishlist(product)}
        variant="lavender"
        className="w-full"
      >
        {wishlisted ? "♥ Wishlisted" : "♡ Wishlist"}
      </Button>
    </div>
  );
}
