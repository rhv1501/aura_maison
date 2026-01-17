import Link from "next/link";

export default function HomeStoryIntroSection() {
  return (
    <section className="px-6 py-20">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm leading-relaxed mb-8">
          Aure Maison curates sculptural décor pieces shaped by restraint,
          material honesty, and quiet detail. Each form is chosen to live like
          art — timeless, composed, and meant to elevate everyday spaces without
          excess.
        </p>

        <Link href="/about" className="text-sm italic text-[var(--primary)]">
          Read Our Story
        </Link>
      </div>
    </section>
  );
}
