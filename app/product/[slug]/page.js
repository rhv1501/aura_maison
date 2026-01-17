import products from "@/data/products.json";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";

const ProductDetailClient = dynamic(
  () => import("@/components/ProductDetailClient"),
  {
    loading: () => (
      <main className="bg-[var(--background)] text-[var(--on-surface)] px-4 pb-24">
        <div className="max-w-md mx-auto py-16 text-center">
          <p className="text-sm text-[var(--on-surface-variant)]">Loading…</p>
        </div>
      </main>
    ),
  }
);

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) notFound();

  return <ProductDetailClient product={product} />;
}
