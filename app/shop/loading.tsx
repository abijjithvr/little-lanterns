export default function Loading() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 md:px-8">
      <div className="h-10 w-56 rounded-full bg-[var(--pink)]/70" />
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="h-96 rounded-3xl bg-white/70" />
        ))}
      </div>
    </main>
  );
}
