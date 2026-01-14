import Image from "next/image";

export default function CollectionHero({ collection }) {
  if (!collection) return null;

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[var(--surface)] rounded-lg overflow-hidden">
          <div className="relative w-full aspect-[4/3]">
            <Image
              src={collection.heroImage}
              alt={collection.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="p-6 border border-[var(--border)] border-t-0 rounded-b-lg">
            <h1 className="text-xl font-medium text-[var(--on-surface)] mb-2">
              {collection.title}
            </h1>
            <p className="text-sm text-[var(--on-surface-variant)] leading-relaxed">
              {collection.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
