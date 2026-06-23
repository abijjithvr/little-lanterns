"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import Button from "@/components/ui/Button";
import { formatINR, getProductBySlug } from "@/lib/products";
import { useEcommerce } from "@/lib/ecommerce";

export default function CheckoutPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const buyNowSlug = searchParams.get("buyNow");
  const { cartItems } = useEcommerce();
  const buyNowProduct = buyNowSlug ? getProductBySlug(buyNowSlug) : undefined;
  const items = buyNowProduct ? [{ product: buyNowProduct, quantity: 1 }] : cartItems;
  const subtotal = items.reduce((total, item) => total + item.product.price * item.quantity, 0);

  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-10 md:px-8">
      <div className="mb-6 text-sm text-[var(--brown)]/70">
        <Link href="/shop">Shop</Link> <span className="px-1">&gt;</span>
        <span>Checkout</span>
      </div>
      <section className="rounded-3xl border border-[var(--brown)]/10 bg-[linear-gradient(180deg,var(--cream),var(--lavender))] p-6 md:p-8">
        <h1 className="font-[var(--font-fredoka)] text-4xl text-[var(--brown)]">Checkout</h1>
        <p className="mt-3 text-[var(--brown)]/85">
          India only. Prepaid orders only. Razorpay will be integrated in a future release.
        </p>

        {items.length === 0 ? (
          <div className="mt-6 rounded-2xl bg-white/70 p-5 text-center text-[var(--brown)]/80">
            Your basket is empty. Pick a tiny friend before checking out.
          </div>
        ) : (
          <div className="mt-6 space-y-4">
            {items.map((item) => (
              <article key={item.product.id} className="flex items-center gap-4 rounded-2xl bg-white/70 p-4">
                <Image src={item.product.photos[0]} alt={item.product.name} width={900} height={900} unoptimized className="h-20 w-20 rounded-2xl object-cover" />
                <div className="flex-1">
                  <p className="font-semibold text-[var(--brown)]">{item.product.name}</p>
                  <p className="text-sm text-[var(--brown)]/75">Qty {item.quantity}</p>
                </div>
                <p className="font-semibold text-[var(--brown)]">{formatINR(item.product.price * item.quantity)}</p>
              </article>
            ))}

            <div className="rounded-2xl bg-white/70 p-4">
              <div className="flex items-center justify-between text-sm text-[var(--brown)]/80">
                <span>Subtotal</span>
                <span>{formatINR(subtotal)}</span>
              </div>
              <div className="mt-2 flex items-center justify-between text-sm text-[var(--brown)]/80">
                <span>Shipping</span>
                <span>Calculated after address confirmation</span>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button onClick={() => router.push("/order-success")}>Place Prepaid Order 🏮</Button>
              <Button variant="lavender" href="/cart">Return to Cart</Button>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
