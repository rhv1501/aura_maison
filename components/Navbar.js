"use client";

import Link from "next/link";
import { useState } from "react";
import Sidebar from "./Sidebar";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--surface)]/80 backdrop-blur-sm">
        <div
          className="w-full"
          style={{ paddingLeft: "1.5rem", paddingRight: "1.5rem" }}
        >
          <div className="h-14 sm:h-16 flex items-center justify-between relative">
            {/* Left - Logo (extreme left) */}
            <div className="flex items-center flex-shrink-0 z-10">
              <Link href="/" className="flex items-center">
                <span className="text-xs sm:text-sm font-light uppercase tracking-[0.25em] text-[var(--on-surface-variant)]">
                  AM
                </span>
              </Link>
            </div>

            {/* Center - Brand name (absolute center of viewport) */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
              <Link href="/" className="flex items-center">
                <span className="text-base sm:text-lg md:text-xl font-light tracking-[0.35em] uppercase text-[var(--on-surface)] whitespace-nowrap">
                  Aura Maison
                </span>
              </Link>
            </div>

            {/* Right - Hamburger menu (extreme right) */}
            <div className="flex items-center flex-shrink-0 z-10">
              <button
                onClick={() => setSidebarOpen(true)}
                className="inline-flex items-center justify-center p-2 rounded-full text-[var(--on-surface)] hover:text-[var(--primary)] hover:bg-[var(--secondary-container)] transition-colors duration-200"
                aria-label="Open menu"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
}
