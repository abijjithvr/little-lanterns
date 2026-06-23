"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "@/components/ui/Button";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  return (
    <main className="mx-auto w-full max-w-md px-4 py-10 md:px-8">
      <section className="rounded-3xl border border-[var(--brown)]/10 bg-[linear-gradient(180deg,var(--cream),var(--pink))] p-6">
        <h1 className="font-[var(--font-fredoka)] text-3xl text-[var(--brown)]">Login</h1>
        <p className="mt-2 text-sm text-[var(--brown)]/80">Account required for checkout.</p>

        <form
          className="mt-5"
          onSubmit={(event) => {
            event.preventDefault();
            if (!email || !password) {
              setError("Please enter email and password.");
              return;
            }

            localStorage.setItem("ll_user", "logged-in");
            localStorage.setItem("ll_role", email.includes("admin") ? "admin" : "customer");
            router.push("/dashboard/profile");
          }}
        >
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="mb-3 w-full rounded-2xl border border-[var(--brown)]/15 bg-white px-4 py-3"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="mb-4 w-full rounded-2xl border border-[var(--brown)]/15 bg-white px-4 py-3"
          />
          <Button type="submit">Login</Button>
        </form>

        {error ? <p className="mt-3 text-sm text-[var(--brown)]/80">{error}</p> : null}
        <p className="mt-4 text-sm text-[var(--brown)]/70">Tip: use an email containing admin to access admin panel.</p>
      </section>
    </main>
  );
}
