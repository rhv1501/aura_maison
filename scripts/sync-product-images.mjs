import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const PRODUCTS_PATH = path.join(ROOT, "data", "products.json");
const SOURCE_COLLECTIONS_DIR = path.join(ROOT, "public", "Collections");
const TARGET_COLLECTIONS_DIR = path.join(ROOT, "public", "collection");

const IMAGE_EXTS = new Set([".jpg", ".jpeg", ".png", ".webp"]);

const COLLECTION_NAME_TO_SLUG = {
  LuxeSheen: "luxesheen",
  TimberCraft: "timbercraft",
  Earthcast: "earthcast",
  MetalAura: "metalaura",
};

function normalize(value) {
  return String(value ?? "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "")
    .replace(/[^a-z0-9]/g, "");
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function listDirs(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);
}

function walkFiles(dir) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  const stack = [dir];
  while (stack.length) {
    const current = stack.pop();
    const entries = fs.readdirSync(current, { withFileTypes: true });
    for (const e of entries) {
      const full = path.join(current, e.name);
      if (e.isDirectory()) stack.push(full);
      else out.push(full);
    }
  }
  return out;
}

function levenshtein(a, b) {
  const s = String(a);
  const t = String(b);
  const m = s.length;
  const n = t.length;
  if (!m) return n;
  if (!n) return m;

  const dp = new Array(n + 1);
  for (let j = 0; j <= n; j++) dp[j] = j;

  for (let i = 1; i <= m; i++) {
    let prev = dp[0];
    dp[0] = i;
    for (let j = 1; j <= n; j++) {
      const tmp = dp[j];
      const cost = s[i - 1] === t[j - 1] ? 0 : 1;
      dp[j] = Math.min(dp[j] + 1, dp[j - 1] + 1, prev + cost);
      prev = tmp;
    }
  }
  return dp[n];
}

function bestMatchName(target, candidates) {
  const t = normalize(target);
  if (!t || candidates.length === 0) return null;

  let best = null;
  let bestScore = Number.POSITIVE_INFINITY;

  for (const c of candidates) {
    const cn = normalize(c);
    if (!cn) continue;

    // Prefer substring matches.
    if (cn.includes(t) || t.includes(cn)) {
      const score = Math.abs(cn.length - t.length);
      if (score < bestScore) {
        bestScore = score;
        best = c;
      }
      continue;
    }

    const score = levenshtein(t, cn);
    if (score < bestScore) {
      bestScore = score;
      best = c;
    }
  }

  return best;
}

function slugifyLabel(label) {
  return String(label ?? "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function scoreFileForVariant(filePath, product, variant) {
  const base = path.basename(filePath);
  const n = normalize(base);

  // Ignore obviously unrelated files.
  if (!n) return -1;

  let score = 0;

  // Prefer common image formats.
  const ext = path.extname(base).toLowerCase();
  if (ext === ".jpg" || ext === ".jpeg") score += 2;

  const variantLabel = String(variant?.label ?? variant?.colorName ?? "");
  const variantTokens = normalize(variantLabel);
  if (variantTokens && n.includes(variantTokens)) score += 20;

  const v = normalize(variantLabel);
  if (v) {
    if (v.includes("black") && n.includes("black")) score += 15;
    if (v.includes("white") && n.includes("white")) score += 15;
    if (v.includes("glossy") && n.includes("glossy")) score += 15;
    if (v.includes("matte") && n.includes("matte")) score += 15;
    if (v.includes("beige") && (n.includes("beige") || n.includes("biege")))
      score += 15;
  }

  const productName = normalize(product?.name);
  const productSlug = normalize(product?.slug);
  if (productName && n.includes(productName)) score += 5;
  if (productSlug && n.includes(productSlug)) score += 5;

  // Penalize generic/numbered names slightly.
  if (/^\d+$/.test(n.replace(/\.[a-z0-9]+$/, ""))) score -= 2;

  return score;
}

function pickBestFile(files, product, variant) {
  let best = null;
  let bestScore = -Infinity;

  for (const f of files) {
    const ext = path.extname(f).toLowerCase();
    if (!IMAGE_EXTS.has(ext)) continue;
    const score = scoreFileForVariant(f, product, variant);
    if (score > bestScore) {
      bestScore = score;
      best = f;
    }
  }

  return best;
}

function toPosix(p) {
  return p.split(path.sep).join("/");
}

function run() {
  if (!fs.existsSync(PRODUCTS_PATH)) {
    throw new Error(`Missing ${PRODUCTS_PATH}`);
  }
  if (!fs.existsSync(SOURCE_COLLECTIONS_DIR)) {
    throw new Error(`Missing ${SOURCE_COLLECTIONS_DIR}`);
  }

  ensureDir(TARGET_COLLECTIONS_DIR);

  const products = JSON.parse(fs.readFileSync(PRODUCTS_PATH, "utf8"));
  const sourceCollections = listDirs(SOURCE_COLLECTIONS_DIR);

  const warnings = [];
  let copied = 0;

  for (const product of products) {
    const collectionSlug =
      COLLECTION_NAME_TO_SLUG[product?.collection] ??
      normalize(product?.collection);

    const sourceCollectionName = bestMatchName(
      collectionSlug,
      sourceCollections
    );
    if (!sourceCollectionName) {
      warnings.push(
        `No source collection folder for ${product?.name} (${product?.collection})`
      );
      continue;
    }

    const sourceCollectionPath = path.join(
      SOURCE_COLLECTIONS_DIR,
      sourceCollectionName
    );
    const targetCollectionPath = path.join(
      TARGET_COLLECTIONS_DIR,
      collectionSlug
    );

    const variants = Array.isArray(product?.variants) ? product.variants : [];

    // Try to find a dedicated product folder.
    const candidateProductDirs = listDirs(sourceCollectionPath);
    const bestProductDir = bestMatchName(
      product?.slug ?? product?.name,
      candidateProductDirs
    );
    const sourceProductFolder = bestProductDir
      ? path.join(sourceCollectionPath, bestProductDir)
      : null;

    const pool =
      sourceProductFolder && fs.existsSync(sourceProductFolder)
        ? walkFiles(sourceProductFolder)
        : walkFiles(sourceCollectionPath);

    if (variants.length <= 1) {
      // Single image product.
      const src = pickBestFile(pool, product, variants[0] ?? null);
      if (!src) {
        warnings.push(`No image found for ${product?.slug}`);
        continue;
      }

      const ext = path.extname(src).toLowerCase();
      const destDir = targetCollectionPath;
      ensureDir(destDir);

      const destAbs = path.join(destDir, `${product.slug}${ext}`);
      fs.copyFileSync(src, destAbs);
      copied++;

      if (variants[0]) {
        variants[0].image = `/collection/${collectionSlug}/${product.slug}${ext}`;
      }
      continue;
    }

    // Multi-variant product: create a folder.
    const destProductDir = path.join(targetCollectionPath, product.slug);
    ensureDir(destProductDir);

    // For better variant matching, prefer using per-variant pool from product folder if present.
    const variantPool =
      sourceProductFolder && fs.existsSync(sourceProductFolder)
        ? walkFiles(sourceProductFolder)
        : pool;

    // When we can't distinguish variants (random filenames), use one "best" image for all.
    const sharedFallback = pickBestFile(variantPool, product, null);

    for (const variant of variants) {
      const src = pickBestFile(variantPool, product, variant) ?? sharedFallback;
      if (!src) {
        warnings.push(
          `No image found for ${product?.slug} variant ${variant?.id}`
        );
        continue;
      }

      const ext = path.extname(src).toLowerCase();
      const labelSlug = slugifyLabel(
        variant?.label ?? variant?.colorName ?? variant?.id
      );
      const fileName = labelSlug ? `${labelSlug}${ext}` : `main${ext}`;
      const destAbs = path.join(destProductDir, fileName);

      fs.copyFileSync(src, destAbs);
      copied++;

      variant.image = `/collection/${collectionSlug}/${product.slug}/${fileName}`;
    }
  }

  fs.writeFileSync(PRODUCTS_PATH, JSON.stringify(products, null, 2) + "\n");

  console.log(
    `Done. Copied ${copied} files into public/collection and updated data/products.json.`
  );
  if (warnings.length) {
    console.log("Warnings:");
    for (const w of warnings) console.log("-", w);
  }
}

run();
