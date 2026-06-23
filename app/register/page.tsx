"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!username) return setError("Username required");
    if (!email) return setError("Email required");
    if (!password) return setError("Password required");
    if (password.length < 8) return setError("Password must be at least 8 characters");
    if (password !== confirm) return setError("Passwords must match");

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password }),
    });
    const data = await res.json();
    if (!res.ok) return setError(data?.error || "Registration failed");
    router.push("/dashboard/profile");
  }

  return (
    <main className="mx-auto w-full max-w-md px-4 py-10 md:px-8">
      <section className="rounded-3xl border border-[var(--brown)]/10 bg-[linear-gradient(180deg,var(--cream),var(--lavender))] p-6">
        <h1 className="font-[var(--font-fredoka)] text-3xl text-[var(--brown)]">Register</h1>

        <form className="mt-5" onSubmit={handleSubmit}>
          <input
            placeholder="Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            className="mb-3 w-full rounded-2xl border border-[var(--brown)]/15 bg-white px-4 py-3"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="mb-3 w-full rounded-2xl border border-[var(--brown)]/15 bg-white px-4 py-3"
          />
          <div className="relative mb-3">
            <input
              type={show ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full rounded-2xl border border-[var(--brown)]/15 bg-white px-4 py-3"
            />
            <button type="button" onClick={() => setShow((s) => !s)} className="absolute right-3 top-3 text-sm">
              {show ? "Hide" : "Show"}
            </button>
          </div>
          <input
            type={show ? "text" : "password"}
            placeholder="Confirm Password"
            value={confirm}
            onChange={(event) => setConfirm(event.target.value)}
            className="mb-4 w-full rounded-2xl border border-[var(--brown)]/15 bg-white px-4 py-3"
          />
          <Button type="submit">Create Account</Button>
        </form>

        {error ? <p className="mt-3 text-sm text-[var(--brown)]/80">{error}</p> : null}

        <p className="mt-4 text-sm">
          Already have an account? <Link className="text-blue-600" href="/login">Login</Link>
        </p>
      </section>
    </main>
  );
}
