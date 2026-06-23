"use client";

import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";

export default function AdminGuard({ children }: { children: ReactNode }) {
  const [isReady, setIsReady] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const role = localStorage.getItem("ll_role");
    setIsAdmin(role === "admin");
    setIsReady(true);
  }, []);

  if (!isReady) {
    return <p className="px-4 py-10 text-center text-[var(--brown)]/80">Checking admin access...</p>;
  }

  if (!isAdmin) {
    return (
      <section className="mx-auto max-w-xl px-4 py-16 text-center">
        <h1 className="font-[var(--font-fredoka)] text-3xl text-[var(--brown)]">Admin Area Protected</h1>
        <p className="mt-3 text-[var(--brown)]/80">Please log in with an admin account to continue.</p>
        <Link href="/login" className="mt-6 inline-flex rounded-full bg-[var(--gold)] px-5 py-2 font-semibold text-[var(--brown)]">
          Go to Login
        </Link>
      </section>
    );
  }

  return <>{children}</>;
}
