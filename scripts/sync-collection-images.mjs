import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const COLLECTIONS_JSON = path.join(ROOT, "data", "collections.json");
const PRODUCTS_JSON = path.join(ROOT, "data", "products.json");
const TARGET_DIR = path.join(ROOT, "public", "collection");

const IMAGE_EXTS = new Set([".jpg", ".jpeg", ".png", ".webp"]);

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function pickFirstExistingImageForCollection(slug) {
  const dir = path.join(TARGET_DIR, slug);
  if (!fs.existsSync(dir)) return null;

  // Prefer a top-level image (single-image products) first.
  const topFiles = fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((e) => e.isFile())
    .map((e) => e.name)
    .filter((name) => IMAGE_EXTS.has(path.extname(name).toLowerCase()))
    .sort();

  if (topFiles.length) return path.join(dir, topFiles[0]);

  // Else fall back to any image inside nested folders.
  const stack = [dir];
  while (stack.length) {
    const current = stack.pop();
    const entries = fs.readdirSync(current, { withFileTypes: true });
    for (const e of entries) {
      const full = path.join(current, e.name);
      if (e.isDirectory()) stack.push(full);
      else if (IMAGE_EXTS.has(path.extname(e.name).toLowerCase())) return full;
    }
  }

  return null;
}

function copyAs(srcAbs, destAbs) {
  ensureDir(path.dirname(destAbs));
  fs.copyFileSync(srcAbs, destAbs);
}

function publicPathToAbs(publicPath) {
  if (!publicPath) return null;
  const rel = String(publicPath).startsWith("/")
    ? String(publicPath).slice(1)
    : String(publicPath);
  return path.join(ROOT, "public", rel);
}

function pickProductImageBySlug(products, slug) {
  const list = Array.isArray(products) ? products : [];
  const product = list.find((p) => p?.slug === slug);
  const variant = product?.variants?.[0];
  const img = variant?.image;
  const abs = publicPathToAbs(img);
  if (abs && fs.existsSync(abs)) return abs;
  return null;
}

function pickProductImageByCategory(products, category) {
  const list = Array.isArray(products) ? products : [];
  const product = list.find((p) => p?.category === category);
  const variant = product?.variants?.[0];
  const img = variant?.image;
  const abs = publicPathToAbs(img);
  if (abs && fs.existsSync(abs)) return abs;
  return null;
}

function run() {
  const collections = JSON.parse(fs.readFileSync(COLLECTIONS_JSON, "utf8"));
  const products = JSON.parse(fs.readFileSync(PRODUCTS_JSON, "utf8"));

  const placeholder = path.join(ROOT, "public", "products", "placeholder.jpg");

  for (const c of collections) {
    const slug = c.slug;
    const collectionDir = path.join(TARGET_DIR, slug);
    ensureDir(collectionDir);

    let src = null;

    if (slug === "indoor" || slug === "dual-space") {
      // Prefer explicitly chosen cover products.
      const coverSlug = slug === "indoor" ? "noxen" : "ecrue";
      src = pickProductImageBySlug(products, coverSlug);

      // Fallback: use a real product image that belongs to that category.
      if (!src) {
        const wantedCategory = slug === "indoor" ? "indoor" : "indoor-outdoor";
        src = pickProductImageByCategory(products, wantedCategory);

        // Extra fallback: some data may use "dual-space" as category.
        if (!src && slug === "dual-space") {
          src = pickProductImageByCategory(products, "dual-space");
        }
      }

      if (!src) src = fs.existsSync(placeholder) ? placeholder : null;
    } else {
      src = pickFirstExistingImageForCollection(slug);
    }

    if (!src) continue;

    const ext = path.extname(src).toLowerCase() || ".jpg";
    const heroAbs = path.join(collectionDir, `hero${ext}`);
    const cardAbs = path.join(collectionDir, `card${ext}`);

    copyAs(src, heroAbs);
    copyAs(src, cardAbs);

    c.heroImage = `/collection/${slug}/hero${ext}`;
    c.cardImage = `/collection/${slug}/card${ext}`;
  }

  fs.writeFileSync(
    COLLECTIONS_JSON,
    JSON.stringify(collections, null, 2) + "\n"
  );
  console.log(
    "Done. Generated collection hero/card assets under public/collection/<slug>/ and updated data/collections.json."
  );
}

run();
