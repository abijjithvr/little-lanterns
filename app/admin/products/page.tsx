"use client";

import { useState } from "react";

const initialProducts = [
  { id: "p1", name: "Sleepy Puppy", stock: 8 },
  { id: "p2", name: "Tiny Dino", stock: 5 },
];

export default function AdminProductsPage() {
  const [items, setItems] = useState(initialProducts);
  const [newName, setNewName] = useState("");

  return (
    <section className="rounded-3xl border border-[var(--brown)]/10 bg-[linear-gradient(180deg,var(--cream),var(--pink))] p-6">
      <h2 className="font-[var(--font-fredoka)] text-3xl text-[var(--brown)]">Products</h2>

      <div className="mt-5 rounded-2xl bg-white/70 p-4">
        <p className="mb-3 font-semibold text-[var(--brown)]">Create Product</p>
        <div className="flex flex-wrap gap-2">
          <input
            placeholder="Product name"
            value={newName}
            onChange={(event) => setNewName(event.target.value)}
            className="rounded-full border border-[var(--brown)]/15 px-4 py-2"
          />
          <button
            type="button"
            onClick={() => {
              if (!newName) return;
              setItems((prev) => [...prev, { id: String(Date.now()), name: newName, stock: 1 }]);
              setNewName("");
            }}
            className="rounded-full bg-[var(--gold)] px-4 py-2 font-semibold text-[var(--brown)]"
          >
            Add
          </button>
        </div>
      </div>

      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item.id} className="flex items-center justify-between rounded-2xl bg-white/70 p-4">
            <div>
              <p className="font-semibold text-[var(--brown)]">{item.name}</p>
              <p className="text-sm text-[var(--brown)]/70">Stock: {item.stock}</p>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => {
                  const name = window.prompt("Edit product name", item.name);
                  if (!name) return;
                  setItems((prev) => prev.map((p) => (p.id === item.id ? { ...p, name } : p)));
                }}
                className="rounded-full bg-[var(--lavender)] px-3 py-1.5 text-sm text-[var(--brown)]"
              >
                Edit
              </button>
              <button
                type="button"
                onClick={() => setItems((prev) => prev.filter((p) => p.id !== item.id))}
                className="rounded-full bg-[var(--peach)] px-3 py-1.5 text-sm text-[var(--brown)]"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
