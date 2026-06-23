const stats = [
  { label: "Today Orders", value: 12 },
  { label: "Pending Packing", value: 5 },
  { label: "In Stock Products", value: 28 },
  { label: "New Customers", value: 4 },
];

export default function AdminDashboardPage() {
  return (
    <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <article key={stat.label} className="rounded-3xl border border-[var(--brown)]/10 bg-[linear-gradient(180deg,var(--cream),var(--lavender))] p-5">
          <p className="text-sm text-[var(--brown)]/75">{stat.label}</p>
          <p className="mt-1 font-[var(--font-fredoka)] text-3xl text-[var(--brown)]">{stat.value}</p>
        </article>
      ))}
    </section>
  );
}
