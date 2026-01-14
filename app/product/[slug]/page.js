import products from "@/data/products.json";
import ProductDetailClient from "@/components/ProductDetailClient";
import { notFound } from "next/navigation";

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) notFound();

  return <ProductDetailClient product={product} />;
}
