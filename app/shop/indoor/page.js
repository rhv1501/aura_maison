import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function IndoorPlanters() {
  const indoorProducts = products.filter(
    (product) => product.category === "indoor"
  );

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--on-surface)] mb-4">
            Indoor Planters
          </h1>
          <p className="text-lg text-[var(--on-surface-variant)] max-w-3xl">
            Transform your interior spaces with our curated collection of indoor
            planters. Each piece is designed to bring nature into your home
            while complementing your décor.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {indoorProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Empty State */}
        {indoorProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-[var(--outline)] text-lg">
              No indoor planters available at the moment.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
