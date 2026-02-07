"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function formatSegmentLabel(segment) {
  let decoded = segment;
  try {
    decoded = decodeURIComponent(segment);
  } catch {
    decoded = segment;
  }
  const spaced = decoded.replace(/[-_]+/g, " ");
  return spaced
    .split(" ")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function Breadcrumbs({ homeLabel = "Home", className = "" }) {
  const pathname = usePathname();

  if (!pathname || pathname === "/") return null;

  const segments = pathname.split("/").filter(Boolean);

  // Some routes use structural segments without an index page (e.g. /product/[slug]
  // has no /product page). Hide those segments from the UI.
  const hiddenSegments = new Set(["product"]);

  let href = "";
  const items = [];
  for (const segment of segments) {
    href += `/${segment}`;
    if (hiddenSegments.has(segment)) continue;
    items.push({
      href,
      label: formatSegmentLabel(segment),
    });
  }

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs opacity-80">
        <li>
          <Link href="/" className="hover:underline">
            {homeLabel}
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-x-2">
              <span aria-hidden="true" className="opacity-60">
                /
              </span>
              {isLast ? (
                <span aria-current="page" className="opacity-90">
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className="hover:underline">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
