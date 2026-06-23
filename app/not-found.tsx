import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] w-full max-w-3xl flex-col items-center justify-center px-4 py-12 text-center md:px-8">
      <div className="text-6xl">✨</div>
      <h1 className="mt-4 font-[var(--font-fredoka)] text-4xl text-[var(--brown)]">Oops, this lantern wandered away.</h1>
      <p className="mt-3 text-[var(--brown)]/80">The page you are looking for is not available right now.</p>
      <Link href="/" className="mt-6 rounded-full bg-[var(--gold)] px-5 py-2 font-semibold text-[var(--brown)]">
        Return Home
      </Link>
    </main>
  );
}
