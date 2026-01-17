const COLLECTION_NAME_TO_SLUG = {
  LuxeSheen: "luxesheen",
  TimberCraft: "timbercraft",
  Earthcast: "earthcast",
  MetalAura: "metalaura",
};

function normalizeSlug(value) {
  return String(value ?? "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "")
    .replace(/[^a-z0-9-]/g, "");
}

export function getCollectionSlug(collectionName) {
  return (
    COLLECTION_NAME_TO_SLUG[collectionName] ??
    (collectionName ? normalizeSlug(collectionName) : "")
  );
}

function getBasename(pathname) {
  if (!pathname) return "";
  const parts = String(pathname).split("/").filter(Boolean);
  return parts[parts.length - 1] ?? "";
}

export function getVariantImageFilename(variant) {
  const fromImage = getBasename(variant?.image);
  if (fromImage) return fromImage;

  const label = String(variant?.label ?? variant?.colorName ?? "")
    .toLowerCase()
    .trim();

  if (!label) return "";

  // Common labels: "Black", "White", "Glossy", "Matte".
  return `${label.replace(/\s+/g, "-")}.jpg`;
}

export function getProductImageSrc({ product, variant }) {
  const collectionSlug = getCollectionSlug(product?.collection);
  const productSlug = String(product?.slug ?? "");

  const filename = getVariantImageFilename(variant);
  const extension = (filename.split(".").pop() || "jpg").toLowerCase();

  if (!collectionSlug || !productSlug) {
    return variant?.image ?? "/products/placeholder.jpg";
  }

  const variants = Array.isArray(product?.variants) ? product.variants : [];

  // If the product has multiple images/variants, expect a folder:
  // /collection/<collection>/<product>/<file>
  if (variants.length > 1) {
    return `/collection/${collectionSlug}/${productSlug}/${
      filename || "main.jpg"
    }`;
  }

  // Single-image products are stored directly under the collection:
  // /collection/<collection>/<product>.<ext>
  return `/collection/${collectionSlug}/${productSlug}.${extension}`;
}
