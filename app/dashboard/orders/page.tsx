import Link from "next/link";

const orders = [
  { id: "LL-1023", status: "Packed", total: "Rs 1,998" },
  { id: "LL-1017", status: "Delivered", total: "Rs 899" },
];

export default function OrdersPage() {
  return (
    <section className="rounded-3xl border border-[var(--brown)]/10 bg-[linear-gradient(180deg,var(--cream),var(--lavender))] p-6">
      <h1 className="font-[var(--font-fredoka)] text-3xl text-[var(--brown)]">Orders</h1>
      <Link href="/tracking" className="mt-3 inline-flex rounded-full bg-white/70 px-4 py-2 text-sm text-[var(--brown)]">
        Track an Order
      </Link>
      <div className="mt-5 space-y-3">
        {orders.map((order) => (
          <article key={order.id} className="rounded-2xl bg-white/70 p-4">
            <p className="font-semibold text-[var(--brown)]">{order.id}</p>
            <p className="text-sm text-[var(--brown)]/80">Status: {order.status}</p>
            <p className="text-sm text-[var(--brown)]/80">Total: {order.total}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
