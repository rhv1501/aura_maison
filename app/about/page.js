import Image from "next/image";

export default function AboutPage() {
  const contactPhoneDisplay = "+91-8939328000";
  const contactPhoneHref = "tel:+918939328000";
  const contactEmail = "info@hocc.in";
  const contactAddress =
    "First Floor, Ram Apartments, A7 & 8, Raja Annamaalai Rd, Purasaivakkam, Chennai, Tamil Nadu, 600084";
  const mapSrc =
    "https://www.google.com/maps?q=" +
    encodeURIComponent(contactAddress) +
    "&output=embed";

  return (
    <main className="bg-[var(--surface)] text-[var(--on-surface)]">
      {/* Mobile layout (unchanged) */}
      <div className="md:hidden">
        {/* Sculptural Objects */}
        <section className="bg-[var(--surface)] px-6 py-20">
          <div className="max-w-6xl mx-auto grid gap-12">
            <Image
              src="/collection/earthcast/noxen.png"
              alt="Sculptural planters"
              width={1200}
              height={800}
              unoptimized
              className="w-full h-auto object-cover"
            />

            <div className="max-w-3xl">
              <h2 className="text-3xl mb-4 font-serif">
                Objects with Presence
              </h2>
              <p className="text-lg leading-relaxed">
                Our collection brings together sculptural forms crafted in
                <strong> polyresin</strong>, <strong>clay</strong>, and
                <strong> magnesium</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* A Quiet Beginning */}
        <section className="px-6 py-16">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <Image
              src="/collection/earthcast/terrone.jpeg"
              alt="Outdoor planter setting"
              width={900}
              height={1100}
              unoptimized
              className="w-full h-auto object-cover"
            />

            <div>
              <h2 className="text-4xl font-serif mb-6">A Quiet Beginning</h2>
              <p className="text-lg leading-relaxed">
                Founded on <strong>November 2, 2025</strong>, Aura Maison was
                created with a simple intention — to curate décor objects that
                feel considered, enduring, and quietly luxurious.
              </p>
            </div>
          </div>
        </section>
        {/* Intro Quote */}
        <section className="px-6 py-0 max-w-4xl mx-auto text-center">
          <p className="text-xl leading-relaxed">
            Each piece is selected not to follow trends,
            <br />
            but to belong effortlessly in well-lived spaces.
          </p>
        </section>

        {/* Designed to Belong */}
        <section className="bg-[var(--surface)] px-6 py-16">
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
        <section className="px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <Image
              src="/collection/earthcast/bucephalus.png"
              alt="Indoor lifestyle planter"
              width={1200}
              height={900}
              unoptimized
              className="w-full h-auto object-cover"
            />
          </div>
        </section>

        {/* Design Philosophy */}
        <section className="bg-[var(--surface)] px-6 py-16">
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
              Every product reflects a focus on craftsmanship, purity of form,
              and a sophisticated finish — designed to complement both
              contemporary and classic interiors.
            </p>
          </div>
        </section>

        {/* Closing Section */}
        <section className="px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg mb-6">
              Materials are chosen for their refined texture, strength, and
              ability to age beautifully.
            </p>

            <p className="text-lg mb-12">
              These are objects meant to be noticed, without asking for
              attention.
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

            {/* Contact details + map */}
            <div className="mt-10 pt-8 border-t border-[var(--border)]">
              <p className="text-xs tracking-[0.18em] uppercase opacity-70 mb-4">
                Contact
              </p>
              <div className="space-y-2 text-base">
                <p>
                  <a href={contactPhoneHref} className="underline">
                    {contactPhoneDisplay}
                  </a>
                </p>
                <p>
                  <a href={`mailto:${contactEmail}`} className="underline">
                    {contactEmail}
                  </a>
                </p>
                <p className="opacity-90">{contactAddress}</p>
              </div>

              <div className="mt-6 overflow-hidden rounded-2xl border border-[var(--border)] bg-white/40">
                <div className="relative w-full aspect-[4/3]">
                  <iframe
                    title="Aura Maison location"
                    src={mapSrc}
                    className="absolute inset-0 h-full w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Desktop layout (creative) */}
      <div className="hidden md:block">
        <section className="relative">
          {/* Soft backdrop */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Image
              src="/collection/earthcast/noxen.png"
              alt=""
              fill
              unoptimized
              className="object-cover blur-xl scale-110 opacity-30"
              priority
            />
            <div className="absolute inset-0 bg-[var(--surface)]/80" />
          </div>

          <div className="relative max-w-7xl mx-auto px-10 py-20">
            <div className="grid grid-cols-12 gap-10 items-start">
              {/* Sticky narrative rail */}
              <aside className="col-span-4 sticky top-24">
                <h1 className="text-5xl font-serif leading-tight mb-6">
                  Aura Maison
                </h1>
                <p className="text-lg leading-relaxed max-w-sm">
                  Each piece is selected not to follow trends, but to belong
                  effortlessly in well-lived spaces.
                </p>

                <div className="mt-10 border-t border-[var(--border)] pt-6">
                  <p className="text-xs opacity-70 mb-3">Explore</p>
                  <nav className="space-y-3 text-sm">
                    <a href="#objects" className="block hover:underline">
                      Objects with Presence
                    </a>
                    <a href="#beginning" className="block hover:underline">
                      A Quiet Beginning
                    </a>
                    <a href="#belong" className="block hover:underline">
                      Designed to Belong
                    </a>
                    <a href="#philosophy" className="block hover:underline">
                      Design Philosophy
                    </a>
                    <a href="#invite" className="block hover:underline">
                      A Gentle Invitation
                    </a>
                  </nav>
                </div>
              </aside>

              {/* Story column */}
              <div className="col-span-8 space-y-12">
                {/* Portrait frame hero */}
                <div className="grid grid-cols-12 gap-8 items-end">
                  <div className="col-span-7">
                    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-[var(--border)] bg-black/5 shadow-2xl">
                      <Image
                        src="/collection/earthcast/noxen.png"
                        alt="Sculptural planters"
                        fill
                        unoptimized
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="col-span-5 pb-4">
                    <div className="grid grid-cols-1 gap-5">
                      <div className="rounded-2xl border border-[var(--border)] bg-white/55 backdrop-blur-sm px-7 py-8 min-h-[140px] flex flex-col justify-between">
                        <p className="text-xs tracking-[0.18em] uppercase opacity-70">
                          Materials
                        </p>
                        <p className="text-base leading-relaxed">
                          Polyresin, clay, magnesium — refined and enduring.
                        </p>
                      </div>
                      <div className="rounded-2xl border border-[var(--border)] bg-white/55 backdrop-blur-sm px-7 py-8 min-h-[140px] flex flex-col justify-between">
                        <p className="text-xs tracking-[0.18em] uppercase opacity-70">
                          Aesthetic
                        </p>
                        <p className="text-base leading-relaxed">
                          Calm, sculptural forms with quiet luxury.
                        </p>
                      </div>
                      <div className="rounded-2xl border border-[var(--border)] bg-white/55 backdrop-blur-sm px-7 py-8 min-h-[140px] flex flex-col justify-between">
                        <p className="text-xs tracking-[0.18em] uppercase opacity-70">
                          Intent
                        </p>
                        <p className="text-base leading-relaxed">
                          Design that stays.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Objects */}
                <section
                  id="objects"
                  className="scroll-mt-28 rounded-3xl border border-[var(--border)] bg-white/30 p-10"
                >
                  <div className="grid grid-cols-12 gap-8 items-center">
                    <div className="col-span-7">
                      <h2 className="text-4xl font-serif mb-4">
                        Objects with Presence
                      </h2>
                      <p className="text-lg leading-relaxed">
                        Our collection brings together sculptural forms crafted
                        in <strong>polyresin</strong>, <strong>clay</strong>,
                        and
                        <strong> magnesium</strong>.
                      </p>
                    </div>
                    <div className="col-span-5">
                      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-[var(--border)]">
                        <Image
                          src="/collection/earthcast/bucephalus.png"
                          alt="Indoor lifestyle planter"
                          fill
                          unoptimized
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </section>

                {/* Beginning */}
                <section
                  id="beginning"
                  className="scroll-mt-28 grid grid-cols-12 gap-8 items-center"
                >
                  <div className="col-span-5">
                    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-[var(--border)]">
                      <Image
                        src="/collection/earthcast/terrone.jpeg"
                        alt="Outdoor planter setting"
                        fill
                        unoptimized
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="col-span-7">
                    <h2 className="text-5xl font-serif mb-6">
                      A Quiet Beginning
                    </h2>
                    <p className="text-lg leading-relaxed">
                      Founded on <strong>November 2, 2025</strong>, Aura Maison
                      was created with a simple intention — to curate décor
                      objects that feel considered, enduring, and quietly
                      luxurious.
                    </p>
                  </div>
                </section>

                {/* Belong */}
                <section
                  id="belong"
                  className="scroll-mt-28 rounded-3xl border border-[var(--border)] bg-white/30 p-10"
                >
                  <h2 className="text-5xl font-serif mb-6">
                    Designed to Belong
                  </h2>
                  <p className="text-lg leading-relaxed mb-8 max-w-3xl">
                    Aura Maison pieces are made for modern homes, open spaces,
                    and thoughtful interiors. Placed indoors or outdoors, they
                    create a sense of calm, character, and intention.
                  </p>
                  <p className="text-2xl font-medium italic">
                    Not decoration, but <strong>design that stays.</strong>
                  </p>
                </section>

                {/* Philosophy */}
                <section
                  id="philosophy"
                  className="scroll-mt-28 grid grid-cols-12 gap-8 items-start"
                >
                  <div className="col-span-7">
                    <h2 className="text-5xl font-serif mb-8">
                      Design Philosophy
                    </h2>
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
                      Every product reflects a focus on craftsmanship, purity of
                      form, and a sophisticated finish — designed to complement
                      both contemporary and classic interiors.
                    </p>
                  </div>
                  <div className="col-span-5">
                    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-[var(--border)]">
                      <Image
                        src="/collection/earthcast/merine.jpeg"
                        alt="Materials and texture"
                        fill
                        unoptimized
                        className="object-cover"
                      />
                    </div>
                  </div>
                </section>

                {/* Invitation */}
                <section
                  id="invite"
                  className="scroll-mt-28 rounded-3xl border border-[var(--border)] bg-white/40 p-10"
                >
                  <p className="text-lg mb-6">
                    Materials are chosen for their refined texture, strength,
                    and ability to age beautifully.
                  </p>
                  <p className="text-lg mb-12">
                    These are objects meant to be noticed, without asking for
                    attention.
                  </p>
                  <div className="flex items-end justify-between gap-10">
                    <div>
                      <h3 className="text-5xl font-serif mb-4">
                        A Gentle Invitation
                      </h3>
                      <p className="text-lg">
                        For collaborations, curated selections, or custom
                        enquiries, we invite you to connect with us.
                      </p>
                    </div>
                    <a
                      href="/contact"
                      className="shrink-0 inline-block px-8 py-3 border border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition-colors"
                    >
                      Contact Us
                    </a>
                  </div>

                  {/* Contact details + map */}
                  <div className="mt-10 pt-8 border-t border-[var(--border)]">
                    <div className="grid grid-cols-12 gap-10 items-start">
                      <div className="col-span-5">
                        <p className="text-xs tracking-[0.18em] uppercase opacity-70 mb-5">
                          Contact
                        </p>
                        <div className="space-y-3 text-lg">
                          <p>
                            <a href={contactPhoneHref} className="underline">
                              {contactPhoneDisplay}
                            </a>
                          </p>
                          <p>
                            <a
                              href={`mailto:${contactEmail}`}
                              className="underline"
                            >
                              {contactEmail}
                            </a>
                          </p>
                          <p className="text-base opacity-90 leading-relaxed">
                            {contactAddress}
                          </p>
                        </div>
                      </div>

                      <div className="col-span-7">
                        <div className="overflow-hidden rounded-3xl border border-[var(--border)] bg-white/40">
                          <div className="relative w-full aspect-[16/9]">
                            <iframe
                              title="Aura Maison location"
                              src={mapSrc}
                              className="absolute inset-0 h-full w-full"
                              loading="lazy"
                              referrerPolicy="no-referrer-when-downgrade"
                              allowFullScreen
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
