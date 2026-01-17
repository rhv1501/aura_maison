import Link from "next/link";
import Image from "next/image";

export default function CollectionCard({ collection }) {
  const imageSrc =
    collection?.image ?? collection?.cardImage ?? "/products/placeholder.jpg";

  return (
    <Link href={`/collections/${collection.slug}`} className="group">
      <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg overflow-hidden hover:shadow-[var(--shadow-md)] transition-all duration-300">
        {/* Collection Image */}
        <div className="aspect-[4/3] bg-[var(--background)] relative overflow-hidden">
          <Image
            src={imageSrc}
            alt={
              collection?.name
                ? `${collection.name} collection image`
                : "Collection image"
            }
            fill
            className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Collection Info */}
        <div className="p-6">
          <h3 className="text-xl font-medium text-[var(--on-surface)] mb-2 group-hover:text-[var(--primary)] transition-colors duration-200">
            {collection.name}
          </h3>
          <p className="text-sm text-[var(--on-surface-variant)] leading-relaxed">
            {collection.description}
          </p>
        </div>
      </div>
    </Link>
  );
}
