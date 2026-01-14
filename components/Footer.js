import Link from "next/link";
import { collections } from "@/data/products";

export default function Footer() {
  const materialCollections = collections.filter(
    (collection) => collection.type === "material"
  );

  return (
    <footer className="bg-[var(--surface)] text-[var(--on-surface)] px-6 py-16">
      {/* Mobile (unchanged) */}
      <div className="lg:hidden">
        <div className="max-w-md mx-auto flex flex-col gap-10">
          {/* Enquiry */}
          <div>
            <p className="mb-2">
              Looking to enquire or collaborate?
              <br />
              Connect with us to explore collections, custom selections, or
              trade enquiries.
            </p>
            <Link href="/contact" className="underline font-medium">
              Enquire
            </Link>
          </div>

          <hr className="border-[var(--border)]" />

          {/* Shop */}
          <div>
            <h4 className="font-medium mb-2">Shop</h4>
            <ul className="space-y-1">
              <li>
                <Link href="/shop">All Products</Link>
              </li>
              <li>
                <Link href="/shop/indoor">Indoor Collection</Link>
              </li>
              <li>
                <Link href="/shop/dual-space">Dual-Space Collection</Link>
              </li>
              {materialCollections.map((collection) => (
                <li key={collection.id}>
                  <Link href={`/collections/${collection.slug}`}>
                    {collection.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <hr className="border-[var(--border)]" />

          {/* About */}
          <div>
            <h4 className="font-medium mb-2">About</h4>
            <ul className="space-y-1">
              <li>
                <Link href="/about">Our Story</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          <hr className="border-[var(--border)]" />

          {/* Address */}
          <div className="space-y-3 text-sm">
            <p>
              First Floor, Ram Apartments, A7 & 8, Raja Annamaalai Rd,
              Purasaivakkam, Chennai, Tamil Nadu, 600084
            </p>
            <p>📞 +91-8939328000</p>
          </div>

          <hr className="border-[var(--border)]" />

          {/* Support */}
          <div>
            <h4 className="font-medium mb-2">Support & Info</h4>
            <ul className="space-y-1">
              <li>
                <Link href="/info">Information</Link>
              </li>
              <li>
                <Link href="/shipping">Shipping & Delivery</Link>
              </li>
              <li>
                <Link href="/care">Care & Materials</Link>
              </li>
              <li>
                <Link href="/faqs">FAQs</Link>
              </li>
            </ul>
          </div>

          <hr className="border-[var(--border)]" />

          {/* Trade */}
          <div>
            <h4 className="font-medium mb-2">Trade & Projects</h4>
            <p className="text-sm mb-2">
              For architects, interior designers, and commercial spaces, we
              offer curated selections and project-based support.
            </p>
            <Link href="/contact" className="underline font-medium">
              Get in Touch
            </Link>
          </div>

          <hr className="border-[var(--border)]" />

          {/* Social Icons */}
          <div className="flex gap-4 text-xl">
            <span>📷</span>
            <span>💬</span>
            <span>📌</span>
          </div>

          {/* Copyright */}
          <div className="text-xs opacity-70">
            <p>© 2025 Aure Maison. All rights reserved.</p>
            <p>
              <Link href="/privacy">Privacy Policy</Link> ·{" "}
              <Link href="/terms">Terms of Use</Link>
            </p>
          </div>

          {/* Brand Lockup */}
          <div className="pt-10 text-center">
            <img
              src="/logo-mark.svg"
              alt="Aura Maison"
              className="mx-auto mb-3 h-10"
            />
            <p className="font-serif text-lg">Aurē Maison</p>
            <p className="text-sm opacity-70">Curated. Crafted. Yours.</p>
          </div>
        </div>
      </div>

      {/* Desktop (reworked) */}
      <div className="hidden lg:block">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-12 gap-x-16">
            <div className="col-span-4 pr-10">
              <div className="space-y-10">
                <div>
                  <p className="text-lg leading-relaxed mb-4">
                    Looking to enquire or collaborate?
                    <br />
                    Connect with us to explore collections, custom selections,
                    or trade enquiries.
                  </p>
                  <Link href="/contact" className="underline font-medium">
                    Enquire
                  </Link>
                </div>

                <div className="pt-10 border-t border-[var(--border)]">
                  <h4 className="font-medium mb-3">Trade & Projects</h4>
                  <p className="text-sm leading-relaxed mb-4">
                    For architects, interior designers, and commercial spaces,
                    we offer curated selections and project-based support.
                  </p>
                  <Link href="/contact" className="underline font-medium">
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-span-4 px-10 border-l border-[var(--border)]">
              <div className="space-y-10">
                <div>
                  <h4 className="font-medium mb-3">Shop</h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link href="/shop">All Products</Link>
                    </li>
                    <li>
                      <Link href="/shop/indoor">Indoor Collection</Link>
                    </li>
                    <li>
                      <Link href="/shop/dual-space">Dual-Space Collection</Link>
                    </li>
                    {materialCollections.map((collection) => (
                      <li key={collection.id}>
                        <Link href={`/collections/${collection.slug}`}>
                          {collection.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-10 border-t border-[var(--border)]">
                  <h4 className="font-medium mb-3">Support & Info</h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link href="/info">Information</Link>
                    </li>
                    <li>
                      <Link href="/shipping">Shipping & Delivery</Link>
                    </li>
                    <li>
                      <Link href="/care">Care & Materials</Link>
                    </li>
                    <li>
                      <Link href="/faqs">FAQs</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-span-4 pl-10 border-l border-[var(--border)]">
              <div className="space-y-10">
                <div>
                  <h4 className="font-medium mb-3">About</h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link href="/about">Our Story</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact Us</Link>
                    </li>
                  </ul>
                </div>

                <div className="pt-10 border-t border-[var(--border)]">
                  <p className="text-sm leading-relaxed">
                    First Floor, Ram Apartments, A7 & 8, Raja Annamaalai Rd,
                    Purasaivakkam, Chennai, Tamil Nadu, 600084
                  </p>
                  <p className="text-sm mt-3">📞 +91-8939328000</p>
                </div>

                <div className="pt-10 border-t border-[var(--border)]">
                  <div className="flex gap-4 text-xl mb-6">
                    <span>📷</span>
                    <span>💬</span>
                    <span>📌</span>
                  </div>
                  <div className="text-xs opacity-70 space-y-2">
                    <p>© 2025 Aure Maison. All rights reserved.</p>
                    <p>
                      <Link href="/privacy">Privacy Policy</Link> ·{" "}
                      <Link href="/terms">Terms of Use</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-12 border-t border-[var(--border)] text-center">
            <img
              src="/logo-mark.svg"
              alt="Aura Maison"
              className="mx-auto mb-4 h-10"
            />
            <p className="font-serif text-2xl">Aurē Maison</p>
            <p className="text-sm opacity-70 mt-2">Curated. Crafted. Yours.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
