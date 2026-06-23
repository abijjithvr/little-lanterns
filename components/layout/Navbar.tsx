"use client";

import Link from "next/link";
import { useEcommerce } from "@/lib/ecommerce";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const { cartCount } = useEcommerce();

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--brown)]/10 bg-[color:rgba(255,249,245,0.9)] backdrop-blur-md">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3 md:px-8">
        <Link href="/" className="font-[var(--font-fredoka)] text-xl text-[var(--brown)] md:text-2xl">
          🏮 Little Lanterns
        </Link>

        <ul className="hidden items-center gap-5 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="rounded-full px-3 py-1.5 text-sm text-[var(--brown)] transition hover:bg-[var(--pink)]"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <Link
            href="/dashboard/wishlist"
            className="rounded-full bg-[var(--lavender)] px-3 py-1.5 text-sm text-[var(--brown)] transition hover:-translate-y-0.5"
          >
            ♡ Wishlist
          </Link>
          <Link
            href="/cart"
            className="rounded-full bg-[var(--pink)] px-3 py-1.5 text-sm text-[var(--brown)] transition hover:-translate-y-0.5"
          >
            🛒 {cartCount}
          </Link>
          <Link
            href="/dashboard/profile"
            className="rounded-full bg-[var(--lavender)] px-3 py-1.5 text-sm text-[var(--brown)] transition hover:-translate-y-0.5"
          >
            👤 Account
          </Link>
        </div>
      </nav>

      <div className="border-t border-[var(--brown)]/10 px-4 py-3 md:hidden">
        <details className="mx-auto max-w-6xl rounded-2xl bg-white/70 px-4 py-3">
          <summary className="cursor-pointer list-none font-semibold text-[var(--brown)]">Menu</summary>
          <div className="mt-3 flex flex-wrap gap-2">
            {navItems.map((item) => (
              <Link key={`mobile-${item.href}`} href={item.href} className="rounded-full bg-[var(--lavender)] px-3 py-1 text-xs text-[var(--brown)]">
                {item.label}
              </Link>
            ))}
            <Link href="/dashboard/wishlist" className="rounded-full bg-[var(--pink)] px-3 py-1 text-xs text-[var(--brown)]">
              ♡ Wishlist
            </Link>
            <Link href="/cart" className="rounded-full bg-[var(--peach)] px-3 py-1 text-xs text-[var(--brown)]">
              🛒 {cartCount}
            </Link>
            <Link href="/dashboard/profile" className="rounded-full bg-[var(--gold)] px-3 py-1 text-xs text-[var(--brown)]">
              👤 Account
            </Link>
          </div>
        </details>
      </div>
    </header>
  );
}
