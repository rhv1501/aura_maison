import { products } from "@/data/products";
import { collections } from "@/data/products";
import dynamic from "next/dynamic";
import ProductCard from "@/components/ProductCard";

const CollectionCategorySlider = dynamic(
  () => import("@/components/CollectionCategorySlider"),
  {
    loading: () => <div className="mt-10 mb-10 h-10" />,
  }
);

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
        </div>

        <CollectionCategorySlider collections={collections} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
