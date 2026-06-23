"use client";

import { useState } from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-10 md:px-8">
      <SectionTitle eyebrow="CONTACT" title="Send a Cozy Message" />

      <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
        <form
          className="rounded-3xl border border-[var(--brown)]/10 bg-[linear-gradient(180deg,var(--cream),var(--lavender))] p-6"
          onSubmit={(event) => {
            event.preventDefault();
            setSent(true);
          }}
        >
          <div className="mb-4">
            <label className="mb-1 block text-sm text-[var(--brown)]">Name</label>
            <input required className="w-full rounded-2xl border border-[var(--brown)]/15 bg-white px-4 py-3" />
          </div>
          <div className="mb-4">
            <label className="mb-1 block text-sm text-[var(--brown)]">Email</label>
            <input type="email" required className="w-full rounded-2xl border border-[var(--brown)]/15 bg-white px-4 py-3" />
          </div>
          <div className="mb-6">
            <label className="mb-1 block text-sm text-[var(--brown)]">Message</label>
            <textarea required rows={5} className="w-full rounded-2xl border border-[var(--brown)]/15 bg-white px-4 py-3" />
          </div>
          <Button type="submit">Send Message 🏮</Button>
          {sent ? <p className="mt-3 text-sm text-[var(--brown)]/80">Message sent. We will reply soon.</p> : null}
        </form>

        <aside className="rounded-3xl border border-[var(--brown)]/10 bg-[var(--pink)] p-6">
          <h2 className="font-[var(--font-fredoka)] text-2xl text-[var(--brown)]">Find Us</h2>
          <p className="mt-4 text-[var(--brown)]/80">Instagram: @littlelanterns.in</p>
          <p className="mt-2 text-[var(--brown)]/80">Business Email: hello@littlelanterns.in</p>
        </aside>
      </div>
    </main>
  );
}
