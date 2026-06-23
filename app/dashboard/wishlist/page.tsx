"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { formatINR } from "@/lib/products";
import { useEcommerce } from "@/lib/ecommerce";

export default function WishlistPage() {
  const { moveWishlistToCart, toggleWishlist, wishlistItems } = useEcommerce();

  const empty = wishlistItems.length === 0;

  if (empty) {
    return (
      <section className="rounded-3xl border border-[var(--brown)]/10 bg-[linear-gradient(180deg,var(--cream),var(--lavender))] p-8 text-center">
        <div className="text-5xl">✨</div>
        <h1 className="mt-4 font-[var(--font-fredoka)] text-3xl text-[var(--brown)]">No tiny friends on your wishlist yet ✨</h1>
        <p className="mt-3 text-[var(--brown)]/80">Browse the shop and save the crochet buddies you want to remember.</p>
        <div className="mt-6">
          <Button href="/shop">Browse Friends</Button>
        </div>
      </section>
    );
  }

  return (
    <section className="rounded-3xl border border-[var(--brown)]/10 bg-[linear-gradient(180deg,var(--cream),var(--pink))] p-6">
      <div className="flex items-center justify-between gap-3">
        <h1 className="font-[var(--font-fredoka)] text-3xl text-[var(--brown)]">Wishlist</h1>
        <Link href="/shop" className="rounded-full bg-white/70 px-4 py-2 text-sm text-[var(--brown)]">
          Keep Shopping
        </Link>
      </div>
      <div className="mt-5 grid gap-4">
        {wishlistItems.map((product) => (
          <article key={product.id} className="grid gap-4 rounded-2xl bg-white/70 p-4 md:grid-cols-[100px_1fr_auto]">
            <Image src={product.photos[0]} alt={product.name} width={900} height={900} unoptimized className="h-24 w-full rounded-2xl object-cover" />
            <div>
              <p className="text-sm text-[var(--brown)]/70">{product.category}</p>
              <h2 className="font-[var(--font-fredoka)] text-2xl text-[var(--brown)]">{product.name}</h2>
              <p className="mt-1 text-sm text-[var(--brown)]/80">{formatINR(product.price)}</p>
            </div>
            <div className="flex flex-col gap-2 md:items-end">
              <Button variant="pink" onClick={() => moveWishlistToCart(product)}>Move to Cart</Button>
              <Button variant="peach" onClick={() => toggleWishlist(product)}>Remove</Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
