"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";
import { formatINR } from "@/lib/products";
import { useEcommerce } from "@/lib/ecommerce";

export default function CartPage() {
  const { cartItems, clearCart, removeFromCart, setQuantity } = useEcommerce();

  const subtotal = cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <main className="mx-auto flex min-h-[60vh] w-full max-w-3xl flex-col items-center justify-center px-4 py-14 text-center md:px-8">
        <div className="mb-4 text-6xl">🧺</div>
        <h1 className="font-[var(--font-fredoka)] text-4xl text-[var(--brown)]">Your lantern basket is feeling lonely 🥺</h1>
        <p className="mt-3 text-[var(--brown)]/80">Pick a tiny friend and fill this basket with cozy joy.</p>
        <div className="mt-6">
          <Button href="/shop">Browse Friends</Button>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 md:px-8">
      <h1 className="font-[var(--font-fredoka)] text-4xl text-[var(--brown)]">Your Lantern Basket</h1>
      <div className="mt-6 grid gap-6 lg:grid-cols-[1.5fr_0.8fr]">
        <section className="space-y-4">
          {cartItems.map(({ product, quantity }) => (
            <article key={product.id} className="grid gap-4 rounded-3xl border border-[var(--brown)]/10 bg-[linear-gradient(180deg,var(--cream),var(--pink))] p-4 md:grid-cols-[120px_1fr_auto]">
              <Image src={product.photos[0]} alt={product.name} width={900} height={900} unoptimized className="h-28 w-full rounded-2xl object-cover md:h-full" />
              <div>
                <h2 className="font-[var(--font-fredoka)] text-2xl text-[var(--brown)]">{product.name}</h2>
                <p className="mt-1 text-sm text-[var(--brown)]/80">{formatINR(product.price)}</p>
                <div className="mt-4 flex items-center gap-2">
                  <button type="button" onClick={() => setQuantity(product.id, quantity - 1)} className="rounded-full bg-white/80 px-3 py-1 text-lg text-[var(--brown)]">-</button>
                  <span className="min-w-10 text-center font-semibold text-[var(--brown)]">{quantity}</span>
                  <button type="button" onClick={() => setQuantity(product.id, quantity + 1)} className="rounded-full bg-white/80 px-3 py-1 text-lg text-[var(--brown)]">+</button>
                </div>
              </div>
              <div className="flex flex-col items-start justify-between gap-3 md:items-end">
                <p className="font-semibold text-[var(--brown)]">{formatINR(product.price * quantity)}</p>
                <button type="button" onClick={() => removeFromCart(product.id)} className="rounded-full bg-[var(--peach)] px-4 py-2 text-sm font-semibold text-[var(--brown)]">
                  Remove
                </button>
              </div>
            </article>
          ))}
        </section>

        <aside className="h-fit rounded-3xl border border-[var(--brown)]/10 bg-[linear-gradient(180deg,var(--lavender),var(--cream))] p-5">
          <h2 className="font-[var(--font-fredoka)] text-2xl text-[var(--brown)]">Order Summary</h2>
          <div className="mt-4 flex items-center justify-between text-sm text-[var(--brown)]/80">
            <span>Subtotal</span>
            <span>{formatINR(subtotal)}</span>
          </div>
          <div className="mt-2 flex items-center justify-between text-sm text-[var(--brown)]/80">
            <span>Shipping</span>
            <span>Calculated at checkout</span>
          </div>
          <div className="mt-4 border-t border-[var(--brown)]/10 pt-4">
            <p className="text-sm text-[var(--brown)]/70">Ready to welcome a new friend home?</p>
            <div className="mt-4 flex flex-col gap-2">
              <Button href="/checkout">Checkout</Button>
              <Button variant="peach" onClick={clearCart}>Clear Basket</Button>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
