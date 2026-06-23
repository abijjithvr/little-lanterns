"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function LoginPage() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!identifier || !password) return setError("Please enter username/email and password.");

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ identifier, password }),
    });
    const data = await res.json();
    if (!res.ok) return setError(data?.error || "Login failed");
    router.push("/dashboard/profile");
  }

  return (
    <main className="mx-auto w-full max-w-md px-4 py-10 md:px-8">
      <section className="rounded-3xl border border-[var(--brown)]/10 bg-[linear-gradient(180deg,var(--cream),var(--pink))] p-6">
        <h1 className="font-[var(--font-fredoka)] text-3xl text-[var(--brown)]">Login</h1>
        <p className="mt-2 text-sm text-[var(--brown)]/80">Account required for checkout.</p>

        <form className="mt-5" onSubmit={handleSubmit}>
          <input
            placeholder="Username or Email"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            className="mb-3 w-full rounded-2xl border border-[var(--brown)]/15 bg-white px-4 py-3"
          />
          <div className="relative mb-4">
            <input
              type={show ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-2xl border border-[var(--brown)]/15 bg-white px-4 py-3"
            />
            <button type="button" onClick={() => setShow((s) => !s)} className="absolute right-3 top-3 text-sm">
              {show ? "Hide" : "Show"}
            </button>
          </div>

          <Button type="submit">Login</Button>
        </form>

        {error ? <p className="mt-3 text-sm text-[var(--brown)]/80">{error}</p> : null}

        <p className="mt-4 text-sm">
          Don&apos;t have an account? <Link className="text-blue-600" href="/register">Create one</Link>
        </p>

        <p className="mt-4 text-sm text-[var(--brown)]/70">Tip: use an email containing admin to access admin panel.</p>
      </section>
    </main>
  );
}
