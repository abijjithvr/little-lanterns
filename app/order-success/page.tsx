import Button from "@/components/ui/Button";

export default function OrderSuccessPage() {
  return (
    <main className="mx-auto flex min-h-[60vh] w-full max-w-3xl flex-col items-center justify-center px-4 py-12 text-center md:px-8">
      <div className="mb-4 text-5xl">🏮✨</div>
      <h1 className="font-[var(--font-fredoka)] text-4xl text-[var(--brown)]">
        Your little friend is getting ready for its journey home 🏮✨
      </h1>
      <p className="mt-3 text-[var(--brown)]/80">Thank you for shopping handmade with Little Lanterns.</p>
      <div className="mt-6">
        <Button href="/shop">Adopt Another Friend</Button>
      </div>
    </main>
  );
}
