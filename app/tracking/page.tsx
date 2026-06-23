export default function TrackingPage() {
  const timeline = [
    { step: "Order Placed", status: "Completed" },
    { step: "Packed with Love", status: "In Progress" },
    { step: "Out for Delivery", status: "Pending" },
    { step: "Delivered", status: "Pending" },
  ];

  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-10 md:px-8">
      <section className="rounded-3xl border border-[var(--brown)]/10 bg-[linear-gradient(180deg,var(--cream),var(--pink))] p-6 md:p-8">
        <h1 className="font-[var(--font-fredoka)] text-4xl text-[var(--brown)]">Order Tracking</h1>
        <p className="mt-3 text-[var(--brown)]/80">Track your cozy parcel from packing table to your doorstep.</p>

        <div className="mt-6 grid gap-3">
          {timeline.map((item) => (
            <article key={item.step} className="rounded-2xl bg-white/70 p-4">
              <p className="font-semibold text-[var(--brown)]">{item.step}</p>
              <p className="text-sm text-[var(--brown)]/75">{item.status}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
