import Link from "next/link";

export default function CollectionCard({ collection }) {
  return (
    <Link href={`/collections/${collection.slug}`} className="group">
      <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg overflow-hidden hover:shadow-[var(--shadow-md)] transition-all duration-300">
        {/* Collection Image */}
        <div className="aspect-[4/3] bg-[var(--background)] relative overflow-hidden">
          <div className="w-full h-full flex items-center justify-center text-[var(--outline)]">
            {/* Placeholder for image */}
            <svg
              className="w-24 h-24 opacity-30"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
          </div>
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
