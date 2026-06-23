"use client";

import { useMemo, useState } from "react";
import ProductCard from "@/components/product/ProductCard";
import SectionTitle from "@/components/ui/SectionTitle";
import { getCategories, getInStockProducts } from "@/lib/products";
import type { Category } from "@/types/product";

export default function ShopContent() {
  const categories = getCategories();
  const [activeCategory, setActiveCategory] = useState<Category | "All">("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("newest");

  const products = useMemo(() => {
    const inStock = getInStockProducts();
    const filtered = inStock
      .filter((product) => (activeCategory === "All" ? true : product.category === activeCategory))
      .filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()));

    return [...filtered].sort((left, right) => {
      if (sortBy === "price-low") {
        return left.price - right.price;
      }

      if (sortBy === "price-high") {
        return right.price - left.price;
      }

      return right.createdAt.localeCompare(left.createdAt);
    });
  }, [activeCategory, searchTerm, sortBy]);

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 md:px-8">
      <SectionTitle
        eyebrow="SHOP"
        title="Find Your Crochet Friend"
        subtitle="Only ready-made, in-stock handmade pieces are shown."
      />

      <div className="mb-6 grid gap-3 rounded-3xl border border-[var(--brown)]/10 bg-[linear-gradient(180deg,var(--cream),var(--lavender))] p-4 md:grid-cols-[1.4fr_0.8fr]">
        <input
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder="Search by product name"
          className="rounded-2xl border border-[var(--brown)]/15 bg-white px-4 py-3 text-sm text-[var(--brown)] outline-none"
        />
        <select
          value={sortBy}
          onChange={(event) => setSortBy(event.target.value)}
          className="rounded-2xl border border-[var(--brown)]/15 bg-white px-4 py-3 text-sm text-[var(--brown)] outline-none"
        >
          <option value="newest">Newest</option>
          <option value="price-low">Price Low to High</option>
          <option value="price-high">Price High to Low</option>
        </select>
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActiveCategory("All")}
          className={`rounded-full px-4 py-2 text-sm ${
            activeCategory === "All"
              ? "bg-[var(--gold)] text-[var(--brown)]"
              : "bg-[var(--lavender)] text-[var(--brown)]"
          }`}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`rounded-full px-4 py-2 text-sm ${
              activeCategory === category
                ? "bg-[var(--gold)] text-[var(--brown)]"
                : "bg-[var(--lavender)] text-[var(--brown)]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <p className="mb-4 text-sm text-[var(--brown)]/75">{products.length} tiny friends found</p>

      {products.length === 0 ? (
        <div className="rounded-3xl border border-[var(--brown)]/10 bg-white/70 p-8 text-center text-[var(--brown)]/80">
          No matching friends yet. Try a gentler search.
        </div>
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
