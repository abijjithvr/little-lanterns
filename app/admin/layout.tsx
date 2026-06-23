import Link from "next/link";
import type { ReactNode } from "react";
import AdminGuard from "@/components/admin/AdminGuard";

const links = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/products", label: "Products" },
  { href: "/admin/orders", label: "Orders" },
  { href: "/admin/customers", label: "Customers" },
];

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <AdminGuard>
      <main className="mx-auto w-full max-w-6xl px-4 py-10 md:px-8">
        <section className="mb-6 rounded-3xl border border-[var(--brown)]/10 bg-[var(--peach)] p-4">
          <h1 className="font-[var(--font-fredoka)] text-3xl text-[var(--brown)]">Admin Panel</h1>
          <div className="mt-3 flex flex-wrap gap-2">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="rounded-full bg-white/70 px-4 py-2 text-sm text-[var(--brown)]">
                {link.label}
              </Link>
            ))}
          </div>
        </section>
        {children}
      </main>
    </AdminGuard>
  );
}
