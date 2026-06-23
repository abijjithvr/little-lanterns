"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import Button from "@/components/ui/Button";

const tabs = [
  { href: "/dashboard/profile", label: "Profile" },
  { href: "/dashboard/orders", label: "Orders" },
  { href: "/dashboard/addresses", label: "Addresses" },
  { href: "/dashboard/wishlist", label: "Wishlist" },
];

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("ll_user") === "logged-in";
    if (!isLoggedIn) {
      router.replace("/login");
      return;
    }

    setReady(true);
  }, [router]);

  if (!ready) {
    return <p className="px-4 py-10 text-center text-[var(--brown)]/80">Loading your cozy dashboard...</p>;
  }

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 md:px-8">
      <section className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-3xl border border-[var(--brown)]/10 bg-[var(--lavender)] p-4">
        <div className="flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <Link key={tab.href} href={tab.href} className="rounded-full bg-white/70 px-4 py-2 text-sm text-[var(--brown)]">
              {tab.label}
            </Link>
          ))}
        </div>
        <Button
          onClick={() => {
            localStorage.removeItem("ll_user");
            localStorage.removeItem("ll_role");
            router.push("/");
          }}
          className="px-4 py-2 text-sm"
        >
          Logout
        </Button>
      </section>
      {children}
    </main>
  );
}
