"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useRef } from "react";

function normalizeLabel(label) {
  if (!label) return "";
  return String(label).replace(/\s+Collection\s*$/i, "");
}

function isActivePath(pathname, href) {
  if (!pathname || !href) return false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function CollectionCategorySlider({ collections = [] }) {
  const pathname = usePathname();
  const scrollerRef = useRef(null);

  const items = useMemo(() => {
    const safeCollections = Array.isArray(collections) ? collections : [];

    const spaceHrefBase = pathname?.startsWith("/shop")
      ? "/shop"
      : "/collections";

    const spaceCollections = safeCollections.filter((c) => c?.type === "space");
    const materialCollections = safeCollections.filter(
      (c) => c?.type !== "space"
    );

    return [
      { href: "/shop", label: "All Products", kind: "category" },
      ...spaceCollections.map((c) => ({
        href: `${spaceHrefBase}/${c.slug}`,
        label: normalizeLabel(c.title) || c.slug,
        kind: "category",
      })),
      { href: "/collections", label: "All Collections", kind: "collection" },
      ...materialCollections.map((c) => ({
        href: `/collections/${c.slug}`,
        label: normalizeLabel(c.title) || c.slug,
        kind: "collection",
      })),
    ];
  }, [collections, pathname]);

  const scrollBy = (delta) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <div className="mt-10 mb-10">
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => scrollBy(-320)}
          className="hidden sm:inline-flex h-10 w-10 items-center justify-center rounded border border-[var(--border)] bg-[var(--surface)] text-[var(--on-surface)] hover:shadow-[var(--shadow-sm)] transition-all duration-200"
          aria-label="Scroll left"
        >
          <span aria-hidden>‹</span>
        </button>

        <nav
          ref={scrollerRef}
          className="flex-1 overflow-x-auto"
          aria-label="Collections and categories"
        >
          <div className="flex gap-2 min-w-max">
            {items.map((item) => {
              const active = isActivePath(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    "inline-flex items-center justify-center rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 " +
                    (active
                      ? "border-[var(--primary)] bg-[var(--primary)] text-[var(--surface)]"
                      : "border-[var(--border)] bg-[var(--surface)] text-[var(--on-surface)] hover:shadow-[var(--shadow-sm)]")
                  }
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>

        <button
          type="button"
          onClick={() => scrollBy(320)}
          className="hidden sm:inline-flex h-10 w-10 items-center justify-center rounded border border-[var(--border)] bg-[var(--surface)] text-[var(--on-surface)] hover:shadow-[var(--shadow-sm)] transition-all duration-200"
          aria-label="Scroll right"
        >
          <span aria-hidden>›</span>
        </button>
      </div>

      <p className="mt-3 text-xs text-[var(--on-surface-variant)]">
        Swipe/scroll to explore collections and categories.
      </p>
    </div>
  );
}
