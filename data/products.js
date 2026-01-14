import collectionsJson from "./collections.json";
import productsJson from "./products.json";

const COLLECTION_NAME_TO_SLUG = {
  LuxeSheen: "luxesheen",
  TimberCraft: "timbercraft",
  Earthcast: "earthcast",
  MetalAura: "metalaura",
};

const CATEGORY_MAP = {
  indoor: "indoor",
  "indoor-outdoor": "dual-space",
  "dual-space": "dual-space",
};

export const products = (productsJson ?? []).map((p) => {
  const firstVariant = p?.variants?.[0];

  return {
    id: p.slug,
    name: p.name,
    slug: p.slug,
    description: p.description,
    category: CATEGORY_MAP[p.category] ?? "indoor",
    collections: [
      COLLECTION_NAME_TO_SLUG[p.collection] ??
        String(p.collection ?? "")
          .toLowerCase()
          .replace(/\s+/g, "")
          .replace(/[^a-z0-9-]/g, ""),
    ].filter(Boolean),
    images: [firstVariant?.image ?? "/products/placeholder.jpg"],
    colors: (p.variants ?? []).map((v) => ({
      name: v.label ?? v.colorName ?? "",
      cssVar: v.cssVar ?? "--surface",
    })),
    sizes: p.sizes ?? [],
  };
});

export const collections = collectionsJson.map((collection) => ({
  ...collection,
  name: collection.title,
  image: collection.cardImage,
}));
