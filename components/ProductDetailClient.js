"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

function Dropdown({ title, items }) {
  const [open, setOpen] = useState(false);

  const safeItems = Array.isArray(items) ? items : [];

  return (
    <div className="border-t border-[var(--outline)] py-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-sm font-medium"
      >
        {title}
        <span>{open ? "−" : "+"}</span>
      </button>

      {open && (
        <ul className="mt-3 space-y-2 text-sm opacity-90">
          {safeItems.map((item, i) => (
            <li key={i}>• {item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function ProductDetailClient({ product }) {
  const sizes = useMemo(
    () => (Array.isArray(product?.sizes) ? product.sizes : []),
    [product],
  );

  const variants = useMemo(
    () => (Array.isArray(product?.variants) ? product.variants : []),
    [product],
  );

  const [selectedSize, setSelectedSize] = useState(sizes[0] ?? "");
  const [selectedVariant, setSelectedVariant] = useState(variants[0] ?? null);

  const selectedImage = selectedVariant?.image ?? "/products/placeholder.jpg";
  const selectedVariantId = selectedVariant?.id ?? "";
  const selectedColorName =
    selectedVariant?.colorName ?? selectedVariant?.label ?? "";

  return (
    <main className="bg-[var(--background)] text-[var(--on-surface)] px-4 pb-24">
      <div className="max-w-md mx-auto">
        {/* Image */}
        <div className="relative w-full aspect-[4/5] bg-[var(--surface)] mb-6">
          <Image
            src={selectedImage}
            alt={product?.name ?? "Product image"}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Title */}
        <h1 className="text-lg font-serif mb-2">{product?.name ?? ""}</h1>

        <p className="text-sm leading-relaxed mb-6">
          {product?.description ?? ""}
        </p>

        {/* Size */}
        {sizes.length > 0 && (
          <div className="mb-6">
            <p className="text-sm font-medium mb-2">
              Size: <span className="font-normal">{selectedSize}</span>
            </p>

            <div className="flex flex-wrap gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 text-sm border ${
                    selectedSize === size
                      ? "border-[var(--primary)]"
                      : "border-[var(--outline)]"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Colour */}
        {variants.length > 0 && (
          <div className="mb-8">
            <p className="text-sm font-medium mb-2">
              Colour: <span className="font-normal">{selectedColorName}</span>
            </p>

            <div className="flex gap-3">
              {variants.map((variant) => (
                <button
                  key={variant.id}
                  onClick={() => setSelectedVariant(variant)}
                  className={`w-6 h-6 rounded-full border ${
                    selectedVariant?.id === variant.id
                      ? "border-[var(--primary)]"
                      : "border-[var(--outline)]"
                  }`}
                  style={{ backgroundColor: `var(${variant.cssVar})` }}
                  aria-label={variant.label}
                />
              ))}
            </div>
          </div>
        )}

        {/* Dropdown Sections */}
        <Dropdown title="Specifications" items={product?.specifications} />
        <Dropdown title="Works Best In" items={product?.worksBestIn} />
        <Dropdown title="Care Instructions" items={product?.careInstructions} />

        {/* CTA */}
        <Link
          href={`/contact?product=${encodeURIComponent(
            product?.name ?? "",
          )}&size=${encodeURIComponent(
            selectedSize,
          )}&variant=${encodeURIComponent(
            selectedVariantId,
          )}&color=${encodeURIComponent(selectedColorName)}`}
          className="block w-full text-center mt-10 py-4 border border-[var(--primary)] font-medium"
        >
          Enquire Now
        </Link>
      </div>
    </main>
  );
}
