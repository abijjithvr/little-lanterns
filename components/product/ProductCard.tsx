import Image from "next/image";
import Link from "next/link";
import { formatINR } from "@/lib/products";
import { getAvailabilityLabel } from "@/lib/products";
import ProductActions from "@/components/product/ProductActions";
import type { Product } from "@/types/product";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group rounded-3xl border border-[var(--brown)]/10 bg-[linear-gradient(180deg,var(--cream),var(--pink))] p-4 shadow-[0_14px_24px_rgba(107,79,59,0.1)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_34px_rgba(107,79,59,0.16)]">
      <Link href={`/shop/${product.slug}`} className="block overflow-hidden rounded-2xl bg-white/50">
        <Image
          src={product.photos[0]}
          alt={product.name}
          width={900}
          height={900}
          unoptimized
          className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="pt-4">
        <h3 className="font-[var(--font-fredoka)] text-xl text-[var(--brown)]">{product.name}</h3>
        <p className="mt-1 text-sm text-[var(--brown)]/80">{formatINR(product.price)}</p>
        <p className="mt-2 inline-flex rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-[var(--brown)]">
          {getAvailabilityLabel(product.stock)}
        </p>
        <div className="mt-4">
          <ProductActions product={product} compact />
        </div>
      </div>
    </article>
  );
}
