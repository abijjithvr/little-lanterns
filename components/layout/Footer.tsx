import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-[var(--brown)]/10 bg-[linear-gradient(180deg,var(--cream),var(--pink))]">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-4 md:px-8">
        <div>
          <h3 className="font-[var(--font-fredoka)] text-2xl text-[var(--brown)]">🏮 Little Lanterns</h3>
          <p className="mt-2 text-sm text-[var(--brown)]/80">Small plushies, big comfort.</p>
        </div>

        <div>
          <h4 className="font-[var(--font-fredoka)] text-lg text-[var(--brown)]">Explore</h4>
          <ul className="mt-3 space-y-2 text-sm text-[var(--brown)]/80">
            <li><Link href="/shop">Shop</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-[var(--font-fredoka)] text-lg text-[var(--brown)]">Stay Cozy</h4>
          <p className="mt-3 text-sm text-[var(--brown)]/80">Instagram: @littlelanterns.in</p>
          <p className="text-sm text-[var(--brown)]/80">Email: hello@littlelanterns.in</p>
          <p className="mt-2 text-sm text-[var(--brown)]/80">Pinterest: littlelanterns</p>
        </div>

        <div>
          <h4 className="font-[var(--font-fredoka)] text-lg text-[var(--brown)]">Newsletter</h4>
          <p className="mt-3 text-sm text-[var(--brown)]/80">Get first dibs on new crochet friends.</p>
          <div className="mt-3 flex gap-2">
            <input
              type="email"
              placeholder="Email address"
              className="min-w-0 flex-1 rounded-full border border-[var(--brown)]/15 bg-white px-4 py-2 text-sm"
            />
            <button type="button" className="rounded-full bg-[var(--gold)] px-4 py-2 text-sm font-semibold text-[var(--brown)]">
              Join
            </button>
          </div>
          <div className="mt-4 flex gap-3 text-sm text-[var(--brown)]/80">
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noreferrer">
              Pinterest
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
