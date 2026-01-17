import Link from "next/link";
import Image from "next/image";
import ColorSwatch from "./ColorSwatch";

export default function ProductCard({ product }) {
  const imageSrc = product?.images?.[0] ?? "/products/placeholder.jpg";
  const colors = Array.isArray(product?.colors) ? product.colors : [];
  const sizes = Array.isArray(product?.sizes) ? product.sizes : [];

  return (
    <Link href={`/product/${product.slug}`} className="group">
      <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg overflow-hidden hover:shadow-[var(--shadow-md)] transition-all duration-300">
        {/* Product Image */}
        <div className="aspect-square bg-[var(--background)] relative overflow-hidden">
          <Image
            src={imageSrc}
            alt={
              product?.name ? `${product.name} product image` : "Product image"
            }
            fill
            className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          />
        </div>

        {/* Product Info */}
        <div className="p-4">
          <h3 className="text-lg font-medium text-[var(--on-surface)] mb-2 group-hover:text-[var(--primary)] transition-colors duration-200">
            {product.name}
          </h3>

          {/* Available Colors */}
          <div className="mb-3">
            <p className="text-xs text-[var(--outline)] mb-2">
              Available Colors:
            </p>
            <div className="flex gap-2">
              {colors.map((color, index) => (
                <ColorSwatch key={index} color={color} size="sm" />
              ))}
            </div>
          </div>

          {/* Available Sizes */}
          <div>
            <p className="text-xs text-[var(--outline)] mb-1">
              Available Sizes:
            </p>
            <p className="text-sm text-[var(--on-surface-variant)]">
              {sizes.join(" • ")}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
