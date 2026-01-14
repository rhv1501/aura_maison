import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-[var(--surface)] text-[var(--on-surface)]">
      {/* Intro Quote */}
      <section className="px-6 py-16 max-w-4xl mx-auto text-center">
        <p className="text-xl leading-relaxed">
          Each piece is selected not to follow trends,
          <br />
          but to belong effortlessly in well-lived spaces.
        </p>
      </section>

      {/* Sculptural Objects */}
      <section className="bg-[var(--surface)] px-6 py-20">
        <div className="max-w-6xl mx-auto grid gap-12">
          <Image
            src="/about/objects.svg"
            alt="Sculptural planters"
            width={1200}
            height={800}
            unoptimized
            className="w-full h-auto object-cover"
          />

          <div className="max-w-3xl">
            <h2 className="text-3xl mb-4 font-serif">Objects with Presence</h2>
            <p className="text-lg leading-relaxed">
              Our collection brings together sculptural forms crafted in
              <strong> polyresin</strong>, <strong>clay</strong>, and
              <strong> magnesium</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* A Quiet Beginning */}
      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <Image
            src="/about/quiet-beginning.svg"
            alt="Outdoor planter setting"
            width={900}
            height={1100}
            unoptimized
            className="w-full h-auto object-cover"
          />

          <div>
            <p className="text-sm mb-2 opacity-70">Home → About Us</p>
            <h2 className="text-4xl font-serif mb-6">A Quiet Beginning</h2>
            <p className="text-lg leading-relaxed">
              Founded on <strong>November 2, 2025</strong>, Aura Maison was
              created with a simple intention — to curate décor objects that
              feel considered, enduring, and quietly luxurious.
            </p>
          </div>
        </div>
      </section>

      {/* Designed to Belong */}
      <section className="bg-[var(--surface)] px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif mb-6">Designed to Belong</h2>
          <p className="text-lg leading-relaxed mb-8">
            Aura Maison pieces are made for modern homes, open spaces, and
            thoughtful interiors. Placed indoors or outdoors, they create a
            sense of calm, character, and intention.
          </p>

          <p className="text-xl font-medium italic">
            Not decoration, but <strong>design that stays.</strong>
          </p>
        </div>
      </section>

      {/* Lifestyle Image */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <Image
            src="/about/lifestyle.svg"
            alt="Indoor lifestyle planter"
            width={1200}
            height={900}
            unoptimized
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="bg-[var(--surface)] px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif mb-8">Design Philosophy</h2>

          <p className="text-lg leading-relaxed mb-6">
            At Aura Maison, we believe elegance lives
            <br />
            <strong>in restraint.</strong>
            <br />
            <strong>In balance.</strong>
            <br />
            <strong>In details you discover slowly.</strong>
          </p>

          <p className="text-lg leading-relaxed">
            Every product reflects a focus on craftsmanship, purity of form, and
            a sophisticated finish — designed to complement both contemporary
            and classic interiors.
          </p>
        </div>
      </section>

      {/* Closing Section */}
      <section className="px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg mb-6">
            Materials are chosen for their refined texture, strength, and
            ability to age beautifully.
          </p>

          <p className="text-lg mb-12">
            These are objects meant to be noticed, without asking for attention.
          </p>

          <h3 className="text-4xl font-serif mb-4">A Gentle Invitation</h3>
          <p className="text-lg">
            For collaborations, curated selections, or custom enquiries,
            <br />
            <a
              href="/contact"
              className="underline font-medium text-[var(--primary)]"
            >
              we invite you to connect with us.
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
