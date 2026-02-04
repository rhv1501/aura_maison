"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { collections } from "@/data/products";
import Image from "next/image";

export default function Sidebar({ isOpen, onClose }) {
  const [shopOpen, setShopOpen] = useState(false);
  const [collectionsOpen, setCollectionsOpen] = useState(false);

  const closeSidebar = useCallback(() => {
    setShopOpen(false);
    setCollectionsOpen(false);
    onClose();
  }, [onClose]);

  // Close sidebar on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        closeSidebar();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, closeSidebar]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-[color:var(--on-surface)]/20 z-30 transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={closeSidebar}
        aria-hidden="true"
      />

      {/* Sidebar - slides from LEFT */}
      <div
        className={`fixed top-14 sm:top-16 left-0 h-[calc(100vh-3.5rem)] sm:h-[calc(100vh-4rem)] w-80 bg-[var(--surface)] z-40 transition-transform duration-300 ease-in-out transform overflow-y-auto border-r border-[var(--border)] ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close button */}
        <div className="flex justify-end items-center p-6">
          <button
            onClick={closeSidebar}
            className="text-[var(--on-surface)] hover:text-[var(--primary)] transition-colors duration-300 p-3 rounded-full hover:bg-[var(--secondary-container)]"
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="px-6">
          <ul className="space-y-3">
            {/* Shop Dropdown */}
            <li>
              <button
                onClick={() => setShopOpen(!shopOpen)}
                className="w-full flex items-center justify-between px-6 py-5 text-[var(--on-surface)] hover:text-[var(--primary)] hover:bg-[var(--secondary-container)] transition-all duration-200 rounded-lg text-left"
              >
                <span className="font-normal text-lg">Shop</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-200 ${
                    shopOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {shopOpen && (
                <ul className="mt-3 space-y-3 pl-6">
                  <li>
                    <Link
                      href="/shop/indoor"
                      onClick={closeSidebar}
                      className="block px-6 py-4 text-[var(--on-surface-variant)] hover:text-[var(--primary)] hover:bg-[var(--secondary-container)] transition-all duration-200 rounded-lg text-base"
                    >
                      Indoor Planters
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/shop/dual-space"
                      onClick={closeSidebar}
                      className="block px-6 py-4 text-[var(--on-surface-variant)] hover:text-[var(--primary)] hover:bg-[var(--secondary-container)] transition-all duration-200 rounded-lg text-base"
                    >
                      Dual Space Planters
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Collections Dropdown */}
            <li>
              <button
                onClick={() => setCollectionsOpen(!collectionsOpen)}
                className="w-full flex items-center justify-between px-6 py-5 text-[var(--on-surface)] hover:text-[var(--primary)] hover:bg-[var(--secondary-container)] transition-all duration-200 rounded-lg text-left"
              >
                <span className="font-normal text-lg">Collections</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-200 ${
                    collectionsOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {collectionsOpen && (
                <ul className="mt-3 space-y-3 pl-6">
                  {collections.map((collection) => (
                    <li key={collection.id}>
                      <Link
                        href={`/collections/${collection.slug}`}
                        onClick={closeSidebar}
                        className="block px-6 py-4 text-[var(--on-surface-variant)] hover:text-[var(--primary)] hover:bg-[var(--secondary-container)] transition-all duration-200 rounded-lg text-base"
                      >
                        {collection.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* About */}
            <li>
              <Link
                href="/about"
                onClick={closeSidebar}
                className="block px-6 py-5 text-[var(--on-surface)] hover:text-[var(--primary)] hover:bg-[var(--secondary-container)] transition-all duration-200 rounded-lg font-normal text-lg"
              >
                About
              </Link>
            </li>

            {/* Contact and Enquire */}
            <li>
              <Link
                href="/contact"
                onClick={closeSidebar}
                className="block px-6 py-5 text-[var(--on-surface)] hover:text-[var(--primary)] hover:bg-[var(--secondary-container)] transition-all duration-200 rounded-lg font-normal text-lg"
              >
                Contact & Enquire
              </Link>
            </li>
          </ul>
        </nav>

        {/* Divider */}
        <div className="border-t border-[var(--border)] mx-6 my-8" />

        {/* Logo section */}
        <div className="px-6 pb-8 flex justify-center">
          <Link href="/" onClick={closeSidebar} aria-label="Home">
            <div className="relative h-16 w-[280px] overflow-hidden">
              <Image
                src="/full.png"
                alt="Aura Maison"
                fill
                sizes="280px"
                className="object-contain scale-[2.6] origin-center drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)]"
              />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
