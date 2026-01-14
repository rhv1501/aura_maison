import Link from "next/link";
import { collections } from "@/data/products";
import CollectionCard from "@/components/CollectionCard";

export default function Home() {
  const featuredCollections = collections.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[var(--secondary-container)] py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[var(--on-surface)] mb-6 leading-tight">
            Cultivate Beauty,
            <br />
            Nurture Balance
          </h1>
          <p className="text-lg md:text-xl text-[var(--on-surface-variant)] max-w-2xl mx-auto mb-8 leading-relaxed">
            Premium planters that harmonize nature and design, crafted to
            elevate your living spaces with timeless elegance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/collections"
              className="bg-[var(--primary)] text-[var(--surface)] px-8 py-3 rounded hover:bg-[var(--secondary)] transition-colors duration-200 font-medium"
            >
              Explore Collections
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-[var(--primary)] text-[var(--primary)] px-8 py-3 rounded hover:bg-[var(--primary)] hover:text-[var(--surface)] transition-all duration-200 font-medium"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Philosophy */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--on-surface)] mb-4">
              Our Philosophy
            </h2>
            <p className="text-lg text-[var(--on-surface-variant)] max-w-3xl mx-auto leading-relaxed">
              At Aura Maison, we believe in the transformative power of bringing
              nature indoors. Each planter is thoughtfully designed to create
              harmony between your space and the living world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--secondary-container)] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-[var(--primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--on-surface)] mb-2">
                Nature
              </h3>
              <p className="text-[var(--on-surface-variant)] text-sm leading-relaxed">
                Inspired by organic forms and earthy materials that connect us
                to the natural world.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--secondary-container)] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-[var(--primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--on-surface)] mb-2">
                Design
              </h3>
              <p className="text-[var(--on-surface-variant)] text-sm leading-relaxed">
                Clean lines and timeless aesthetics that complement any interior
                style.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--secondary-container)] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-[var(--primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--on-surface)] mb-2">
                Balance
              </h3>
              <p className="text-[var(--on-surface-variant)] text-sm leading-relaxed">
                Crafted to create visual harmony and bring tranquility to your
                living spaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Shop by Space */}
      <section className="py-16 md:py-24 bg-[var(--secondary-container)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--on-surface)] mb-4">
              Shop by Space
            </h2>
            <p className="text-lg text-[var(--on-surface-variant)]">
              Find the perfect planter for your environment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link
              href="/shop/indoor"
              className="group relative bg-[var(--surface)] border border-[var(--border)] rounded-lg overflow-hidden hover:shadow-[var(--shadow-lg)] transition-all duration-300 p-12 text-center"
            >
              <div className="mb-6">
                <svg
                  className="w-20 h-20 mx-auto text-[var(--primary)] opacity-80"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-[var(--on-surface)] mb-2 group-hover:text-[var(--primary)] transition-colors duration-200">
                Indoor Planters
              </h3>
              <p className="text-[var(--on-surface-variant)]">
                Designed for interior spaces, bringing nature to your home
              </p>
            </Link>

            <Link
              href="/shop/dual-space"
              className="group relative bg-[var(--surface)] border border-[var(--border)] rounded-lg overflow-hidden hover:shadow-[var(--shadow-lg)] transition-all duration-300 p-12 text-center"
            >
              <div className="mb-6">
                <svg
                  className="w-20 h-20 mx-auto text-[var(--primary)] opacity-80"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-[var(--on-surface)] mb-2 group-hover:text-[var(--primary)] transition-colors duration-200">
                Dual Space Planters
              </h3>
              <p className="text-[var(--on-surface-variant)]">
                Versatile designs for both indoor and outdoor environments
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--on-surface)] mb-4">
              Featured Collections
            </h2>
            <p className="text-lg text-[var(--on-surface-variant)]">
              Curated selections for every aesthetic
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {featuredCollections.map((collection) => (
              <CollectionCard key={collection.id} collection={collection} />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/collections"
              className="inline-block text-[var(--primary)] hover:text-[var(--secondary)] font-medium border-b-2 border-[var(--primary)] hover:border-[var(--secondary)] transition-colors duration-200"
            >
              View All Collections →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[var(--primary)] text-[var(--surface)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Get in touch with us to discuss your planter needs and bring your
            vision to life.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--surface)] text-[var(--primary)] px-8 py-3 rounded hover:bg-[var(--secondary-container)] transition-colors duration-200 font-medium"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
