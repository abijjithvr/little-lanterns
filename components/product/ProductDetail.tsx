"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import ProductGallery from "@/components/product/ProductGallery";
import ProductActions from "@/components/product/ProductActions";
import { formatINR, getAvailabilityLabel, getRelatedProducts } from "@/lib/products";
import { useEcommerce } from "@/lib/ecommerce";
import type { Product } from "@/types/product";

export default function ProductDetail({ product }: { product: Product }) {
  const { markViewed, recentViewItems } = useEcommerce();
  const relatedProducts = getRelatedProducts(product.slug, product.category);
  const recentItems = recentViewItems.filter((item) => item.id !== product.id).slice(0, 3);

  useEffect(() => {
    markViewed(product);
  }, [markViewed, product]);

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 md:px-8">
      <div className="mb-6 text-sm text-[var(--brown)]/70">
        <Link href="/">Home</Link> <span className="px-1">&gt;</span>
        <Link href="/shop">Shop</Link> <span className="px-1">&gt;</span>
        <span>{product.name}</span>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <ProductGallery photos={product.photos} name={product.name} />

        <section className="rounded-3xl border border-[var(--brown)]/10 bg-[linear-gradient(180deg,var(--cream),var(--pink))] p-6 shadow-[0_14px_24px_rgba(107,79,59,0.1)]">
          <p className="text-sm text-[var(--brown)]/70">{product.category}</p>
          <h1 className="mt-1 font-[var(--font-fredoka)] text-4xl text-[var(--brown)]">{product.name}</h1>
          <p className="mt-3 text-2xl font-bold text-[var(--brown)]">{formatINR(product.price)}</p>
          <p className="mt-3 inline-flex rounded-full bg-white/70 px-3 py-1 text-sm font-semibold text-[var(--brown)]">
            {getAvailabilityLabel(product.stock)}
          </p>
          <p className="mt-4 text-[var(--brown)]/85">{product.description}</p>
          <p className="mt-3 text-sm text-[var(--brown)]/80">{product.personality}</p>
          <div className="mt-5 space-y-2 rounded-2xl bg-white/60 p-4 text-sm text-[var(--brown)]/85">
            <p><span className="font-semibold">Size:</span> {product.sizeInfo}</p>
            <p><span className="font-semibold">Care:</span> {product.careInstructions}</p>
            <p><span className="font-semibold">Shipping:</span> {product.shippingInfo}</p>
          </div>
          <div className="mt-6">
            <ProductActions product={product} />
          </div>
        </section>
      </div>

      <section className="mt-10 rounded-3xl border border-[var(--brown)]/10 bg-[var(--lavender)] p-6">
        <h2 className="font-[var(--font-fredoka)] text-2xl text-[var(--brown)]">About This Friend</h2>
        <p className="mt-3 text-[var(--brown)]/85">{product.personality}</p>
      </section>

      <section className="mt-10 rounded-3xl border border-[var(--brown)]/10 bg-[linear-gradient(180deg,var(--cream),var(--lavender))] p-6">
        <h2 className="font-[var(--font-fredoka)] text-2xl text-[var(--brown)]">Related Products</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {relatedProducts.map((item) => (
            <Link key={item.id} href={`/shop/${item.slug}`} className="rounded-2xl bg-white/70 p-3 text-left">
              <Image src={item.photos[0]} alt={item.name} width={900} height={900} unoptimized className="aspect-square w-full rounded-xl object-cover" />
              <p className="mt-3 font-semibold text-[var(--brown)]">{item.name}</p>
              <p className="text-sm text-[var(--brown)]/75">{formatINR(item.price)}</p>
            </Link>
          ))}
        </div>
      </section>

      {recentItems.length > 0 ? (
        <section className="mt-10 rounded-3xl border border-[var(--brown)]/10 bg-[linear-gradient(180deg,var(--pink),var(--cream))] p-6">
          <h2 className="font-[var(--font-fredoka)] text-2xl text-[var(--brown)]">Recently Viewed</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {recentItems.map((item) => (
              <Link key={item.id} href={`/shop/${item.slug}`} className="rounded-2xl bg-white/70 p-3">
                <Image src={item.photos[0]} alt={item.name} width={900} height={900} unoptimized className="aspect-square w-full rounded-xl object-cover" />
                <p className="mt-3 font-semibold text-[var(--brown)]">{item.name}</p>
                <p className="text-sm text-[var(--brown)]/75">{formatINR(item.price)}</p>
              </Link>
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}
