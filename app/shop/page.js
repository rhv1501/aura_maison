import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";

export default function Shop() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--on-surface)] mb-4">
            Shop All Products
          </h1>
          <p className="text-lg text-[var(--on-surface-variant)] max-w-3xl">
            Browse the full catalog, or filter by space.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/shop/indoor"
              className="inline-flex items-center justify-center rounded border border-[var(--border)] bg-[var(--surface)] px-5 py-3 text-sm font-medium text-[var(--on-surface)] hover:shadow-[var(--shadow-sm)] transition-all duration-200"
            >
              Indoor
            </Link>
            <Link
              href="/shop/dual-space"
              className="inline-flex items-center justify-center rounded border border-[var(--border)] bg-[var(--surface)] px-5 py-3 text-sm font-medium text-[var(--on-surface)] hover:shadow-[var(--shadow-sm)] transition-all duration-200"
            >
              Dual-Space
            </Link>
            <Link
              href="/collections"
              className="inline-flex items-center justify-center rounded bg-[var(--primary)] px-5 py-3 text-sm font-medium text-[var(--surface)] hover:bg-[var(--secondary)] transition-colors duration-200"
            >
              View Collections
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
