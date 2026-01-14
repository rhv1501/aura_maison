import { collections } from "@/data/products";
import CollectionCard from "@/components/CollectionCard";

export default function Collections() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--on-surface)] mb-4">
            Our Collections
          </h1>
          <p className="text-lg text-[var(--on-surface-variant)] max-w-3xl mx-auto">
            Explore our curated collections, each designed with a unique
            aesthetic to match your style and space.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <CollectionCard key={collection.id} collection={collection} />
          ))}
        </div>
      </div>
    </div>
  );
}
