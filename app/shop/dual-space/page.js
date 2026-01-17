import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { collections } from "@/data/products";
import dynamic from "next/dynamic";

const CollectionCategorySlider = dynamic(
  () => import("@/components/CollectionCategorySlider"),
  {
    loading: () => <div className="mt-10 mb-10 h-10" />,
  }
);

export default function DualSpacePlanters() {
  const dualSpaceProducts = products.filter(
    (product) => product.category === "dual-space"
  );

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--on-surface)] mb-4">
            Dual Space Planters
          </h1>
          <p className="text-lg text-[var(--on-surface-variant)] max-w-3xl">
            Versatile planters designed for both indoor and outdoor
            environments. Weather-resistant and beautifully crafted for any
            setting.
          </p>
        </div>

        <CollectionCategorySlider collections={collections} />

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {dualSpaceProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Empty State */}
        {dualSpaceProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-[var(--outline)] text-lg">
              No dual space planters available at the moment.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
