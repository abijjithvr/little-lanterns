"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Placeholder: implement email flow in production
    setMessage("If an account exists, a reset link has been sent (demo).");
  }

  return (
    <main className="mx-auto w-full max-w-md px-4 py-10 md:px-8">
      <section className="rounded-3xl border border-[var(--brown)]/10 bg-[linear-gradient(180deg,var(--cream),var(--pink))] p-6">
        <h1 className="font-[var(--font-fredoka)] text-3xl text-[var(--brown)]">Forgot Password</h1>
        <form className="mt-5" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-3 w-full rounded-2xl border border-[var(--brown)]/15 bg-white px-4 py-3"
          />
          <Button type="submit">Send Reset Link</Button>
        </form>
        {message ? <p className="mt-3 text-sm text-[var(--brown)]/80">{message}</p> : null}
      </section>
    </main>
  );
}
