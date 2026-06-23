const customers = [
  { name: "Anika", email: "anika@example.com" },
  { name: "Rhea", email: "rhea@example.com" },
  { name: "Kabir", email: "kabir@example.com" },
];

export default function AdminCustomersPage() {
  return (
    <section className="rounded-3xl border border-[var(--brown)]/10 bg-[linear-gradient(180deg,var(--cream),var(--pink))] p-6">
      <h2 className="font-[var(--font-fredoka)] text-3xl text-[var(--brown)]">Customers</h2>
      <div className="mt-4 space-y-3">
        {customers.map((customer) => (
          <article key={customer.email} className="rounded-2xl bg-white/70 p-4">
            <p className="font-semibold text-[var(--brown)]">{customer.name}</p>
            <p className="text-sm text-[var(--brown)]/75">{customer.email}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
