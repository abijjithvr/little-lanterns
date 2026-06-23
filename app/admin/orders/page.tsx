const adminOrders = [
  { id: "LL-1201", customer: "Asha", status: "New" },
  { id: "LL-1200", customer: "Nidhi", status: "Packed" },
  { id: "LL-1196", customer: "Ravi", status: "Shipped" },
  { id: "LL-1188", customer: "Mira", status: "Delivered" },
];

export default function AdminOrdersPage() {
  return (
    <section className="rounded-3xl border border-[var(--brown)]/10 bg-[linear-gradient(180deg,var(--cream),var(--lavender))] p-6">
      <h2 className="font-[var(--font-fredoka)] text-3xl text-[var(--brown)]">Orders</h2>
      <div className="mt-4 space-y-3">
        {adminOrders.map((order) => (
          <article key={order.id} className="rounded-2xl bg-white/70 p-4">
            <p className="font-semibold text-[var(--brown)]">{order.id}</p>
            <p className="text-sm text-[var(--brown)]/75">Customer: {order.customer}</p>
            <p className="text-sm text-[var(--brown)]/75">Status: {order.status}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
