"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "@/components/ui/Button";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  return (
    <main className="mx-auto w-full max-w-md px-4 py-10 md:px-8">
      <section className="rounded-3xl border border-[var(--brown)]/10 bg-[linear-gradient(180deg,var(--cream),var(--lavender))] p-6">
        <h1 className="font-[var(--font-fredoka)] text-3xl text-[var(--brown)]">Register</h1>

        <form
          className="mt-5"
          onSubmit={(event) => {
            event.preventDefault();
            if (!name || !email || !password) {
              return;
            }

            localStorage.setItem("ll_user", "logged-in");
            localStorage.setItem("ll_role", "customer");
            router.push("/dashboard/profile");
          }}
        >
          <input
            placeholder="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="mb-3 w-full rounded-2xl border border-[var(--brown)]/15 bg-white px-4 py-3"
          />
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
          <Button type="submit">Create Account</Button>
        </form>
      </section>
    </main>
  );
}
