import Hero from "@/components/home/Hero";
import CategoryCard from "@/components/product/CategoryCard";
import ProductCard from "@/components/product/ProductCard";
import SectionTitle from "@/components/ui/SectionTitle";
import { BRAND } from "@/lib/constants";
import { getInStockProducts, getNewestProducts } from "@/lib/products";

const categoryMeta = [
  {
    title: "Plushies",
    description: "Soft cuddle-sized friends for bedtime and cozy corners.",
    emoji: "🧸",
  },
  {
    title: "Keychains",
    description: "Tiny companions for your tote, pouch, or keys.",
    emoji: "🗝️",
  },
  {
    title: "Character Collection",
    description: "Storybook-inspired crochet personalities to collect.",
    emoji: "🌟",
  },
];

export default function Home() {
  const inStock = getInStockProducts();
  const newArrivals = getNewestProducts(4);
  const bestSellers = inStock.slice(0, 6);

  return (
    <main>
      <Hero />

      <section className="mx-auto w-full max-w-6xl px-4 py-12 md:px-8">
        <SectionTitle eyebrow="NEW ARRIVALS" title="Fresh From Our Crochet Table" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-12 md:px-8">
        <SectionTitle
          eyebrow="CATEGORIES"
          title="Shop by Category"
          subtitle="Three tiny worlds of handmade crochet joy."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {categoryMeta.map((category) => (
            <CategoryCard
              key={category.title}
              title={category.title}
              description={category.description}
              emoji={category.emoji}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-12 md:px-8">
        <SectionTitle eyebrow="BEST SELLERS" title="Most Adopted Friends" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-4xl px-4 py-12 md:px-8">
        <div className="rounded-3xl border border-[var(--brown)]/10 bg-[linear-gradient(180deg,var(--lavender),var(--pink))] p-8 text-center shadow-[0_16px_28px_rgba(107,79,59,0.1)] md:p-10">
          <SectionTitle eyebrow="ABOUT LITTLE LANTERNS" title={BRAND.name} subtitle={BRAND.description} />
          <p className="mx-auto max-w-2xl text-[var(--brown)]/85">
            Born from yarn, patience, and soft pastel dreams, each friend is crocheted by hand and made
            to bring comfort to your everyday life.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-12 md:px-8">
        <SectionTitle eyebrow="INSTAGRAM PREVIEW" title="Tiny Glimpses from Our Cozy Corner" />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={`insta-${index + 1}`}
              className="aspect-square rounded-2xl border border-[var(--brown)]/10 bg-[linear-gradient(145deg,var(--peach),var(--pink))] shadow-[0_10px_18px_rgba(107,79,59,0.08)]"
            />
          ))}
        </div>
      </section>
    </main>
  );
}