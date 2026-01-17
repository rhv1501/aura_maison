import Image from "next/image";
import Link from "next/link";

export default function HomePageLayout() {
  return (
    <main className="bg-[var(--background)] text-[var(--on-surface)]">
      {/* Bottom Dual CTA */}
      <section className="px-6 pb-24">
        <div className="grid grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="text-center">
            <Image
              src="/collection/indoor/card.png"
              alt=""
              width={600}
              height={600}
              className="w-full h-auto object-cover mb-4"
            />
            <Link
              href="/collections/indoor"
              className="text-sm italic text-[var(--primary)]"
            >
              Explore Indoor
            </Link>
          </div>

          <div className="text-center">
            <Image
              src="/collection/dual-space/card.jpeg"
              alt=""
              width={600}
              height={600}
              className="w-full h-auto object-cover mb-4"
            />
            <Link
              href="/collections/dual-space"
              className="text-sm italic text-[var(--primary)]"
            >
              Explore Dual-Space
            </Link>
          </div>
        </div>
      </section>
      {/* MetalAura Section */}
      <section className="px-6 pt-20 pb-16">
        <div className="max-w-3xl mx-auto">
          <Image
            src="/collection/metalaura/orian.jpeg"
            alt=""
            width={1200}
            height={800}
            className="w-full h-auto object-cover mb-10"
          />

          <p className="text-sm leading-relaxed mb-8">
            MetalAura explores reflection, gloss, and modern restraint. Defined
            by clean silhouettes and refined finishes, the collection introduces
            ceramic forms that add quiet sophistication to contemporary
            interiors.
          </p>

          <Link
            href="/collections/metalaura"
            className="block text-center text-sm italic text-[var(--primary)]"
          >
            Explore MetalAura
          </Link>
        </div>
      </section>
      {/* TimberCraft Image Section */}
      <section className="relative">
        <Image
          src="/collection/timbercraft/bosco.png"
          alt=""
          width={1400}
          height={900}
          className="w-full h-auto object-cover"
        />

        <div className="absolute inset-0 flex items-end bg-black/20">
          <div className="p-6">
            <p className="text-sm text-white mb-2">
              Earthy textures shaped by craft, inspired by natural form.
            </p>
            <h2 className="text-3xl font-serif text-white">
              TimberCraft Collection
            </h2>
          </div>
        </div>
      </section>

      {/* Indoor Collection Section */}
      <section className="px-6 pb-20">
        <div className="max-w-3xl mx-auto">
          <Image
            src="/collection/earthcast/elysia.png"
            alt=""
            width={1200}
            height={900}
            className="w-full h-auto object-cover mb-10"
          />

          <p className="text-sm leading-relaxed mb-8">
            The Indoor Collection is curated for spaces where form and
            atmosphere matter most. Sculptural vases and planters designed to
            sit effortlessly within modern and classic interiors — bringing
            texture, balance, and understated luxury to everyday living.
          </p>

          <Link
            href="/collections/indoor"
            className="block text-center text-sm italic text-[var(--primary)]"
          >
            Explore Indoor Collection
          </Link>
        </div>
      </section>
    </main>
  );
}
