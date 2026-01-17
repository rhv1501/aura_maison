import { collections, products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import CollectionHero from "@/components/CollectionHero";
import dynamic from "next/dynamic";
import Link from "next/link";
import { notFound } from "next/navigation";

const CollectionCategorySlider = dynamic(
  () => import("@/components/CollectionCategorySlider"),
  {
    loading: () => <div className="mt-10 mb-10 h-10" />,
  }
);

export default async function CollectionDetail({ params }) {
  const { slug } = await params;

  const collection = collections.find((item) => item.slug === slug);

  if (!collection) {
    notFound();
  }

  // Find products in this collection
  const collectionProducts = (() => {
    if (collection.type === "space") {
      return products.filter((product) => product.category === collection.slug);
    }

    return products.filter((product) => {
      const productCollections = Array.isArray(product.collections)
        ? product.collections
        : [];

      return (
        productCollections.includes(collection.slug) ||
        productCollections.includes(collection.id)
      );
    });
  })();

  const cta = (() => {
    if (
      collection.type === "space" &&
      (slug === "indoor" || slug === "dual-space")
    ) {
      return {
        href: `/shop/${slug}`,
        label: collection.ctaLabel || "Explore products",
      };
    }

    return {
      href: `/contact?product=${encodeURIComponent(collection.title)}`,
      label: "Make an enquiry",
    };
  })();

  return (
    <>
      {/* HERO — THIS REPLACES YOUR OLD HERO */}
      <CollectionHero collection={collection} />

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CollectionCategorySlider collections={collections} />
          {collectionProducts.length > 0 ? (
            <>
              {/* Products Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {collectionProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <p className="text-[var(--outline)] text-lg">
                Products for this collection are coming soon.
              </p>
              <p className="mt-2 text-[var(--on-surface-variant)]">
                In the meantime, you can browse our space collections or make an
                enquiry.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Link
                  href="/collections/indoor"
                  className="inline-flex items-center justify-center rounded border border-[var(--border)] bg-[var(--surface)] px-5 py-3 text-sm font-medium text-[var(--on-surface)] hover:shadow-[var(--shadow-sm)] transition-all duration-200"
                >
                  Indoor
                </Link>
                <Link
                  href="/collections/dual-space"
                  className="inline-flex items-center justify-center rounded border border-[var(--border)] bg-[var(--surface)] px-5 py-3 text-sm font-medium text-[var(--on-surface)] hover:shadow-[var(--shadow-sm)] transition-all duration-200"
                >
                  Dual-Space
                </Link>
                <Link
                  href={cta.href}
                  className="inline-flex items-center justify-center rounded bg-[var(--primary)] px-5 py-3 text-sm font-medium text-[var(--surface)] hover:bg-[var(--secondary)] transition-colors duration-200"
                >
                  Make an enquiry
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

// Generate static params for all collections
export async function generateStaticParams() {
  return collections.map((collection) => ({ slug: collection.slug }));
}
