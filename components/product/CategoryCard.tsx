import Link from "next/link";

type CategoryCardProps = {
  title: string;
  description: string;
  emoji: string;
};

export default function CategoryCard({ title, description, emoji }: CategoryCardProps) {
  return (
    <Link
      href={`/shop?category=${encodeURIComponent(title)}`}
      className="group rounded-3xl border border-[var(--brown)]/10 bg-[linear-gradient(160deg,var(--lavender),var(--cream))] p-6 shadow-[0_12px_22px_rgba(107,79,59,0.1)] transition duration-300 hover:-translate-y-1"
    >
      <div className="mb-4 text-3xl transition duration-300 group-hover:scale-110">{emoji}</div>
      <h3 className="font-[var(--font-fredoka)] text-2xl text-[var(--brown)]">{title}</h3>
      <p className="mt-2 text-sm text-[var(--brown)]/80">{description}</p>
    </Link>
  );
}
