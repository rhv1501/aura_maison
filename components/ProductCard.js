import Link from "next/link";
import ColorSwatch from "./ColorSwatch";

export default function ProductCard({ product }) {
  return (
    <Link href={`/product/${product.slug}`} className="group">
      <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg overflow-hidden hover:shadow-[var(--shadow-md)] transition-all duration-300">
        {/* Product Image */}
        <div className="aspect-square bg-[var(--background)] relative overflow-hidden">
          <div className="w-full h-full flex items-center justify-center text-[var(--outline)]">
            {/* Placeholder for image */}
            <svg
              className="w-20 h-20 opacity-30"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
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
              {product.colors.map((color, index) => (
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
              {product.sizes.join(" • ")}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
