"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  const slides = useMemo(
    () => [
      {
        type: "brand",
      },
      {
        image: "/hero/slide-1.jpg",
        subtitle: "Where form meets calm, and spaces breathe.",
        title: "Aure Maison",
        cta: "Discover More",
        link: "/about",
      },
      {
        image: "/collection/earthcast/noxen.png",
        subtitle: "Designed to anchor a space.",
        title: "Noxen",
        cta: "Discover Earthcast Collection",
        link: "/collections/earthcast",
      },
      {
        image: "/collection/metalaura/celven.jpeg",
        subtitle: "Designed to bridge indoors and beyond.",
        title: "Celven",
        cta: "Discover Dual-Space Pieces",
        link: "/collections/dual-space",
      },
    ],
    []
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-black">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Brand Slide */}
          {slide.type === "brand" && (
            <div className="flex flex-col items-center justify-center h-full bg-[var(--background)] text-[var(--primary)]">
              <Image
                src="/logo-mark.svg"
                alt="Aurē Maison"
                width={80}
                height={80}
                className="mb-4"
              />
              <h1 className="text-lg font-serif">Aurē Maison</h1>
              <p className="text-xs mt-1 italic">Curated. Crafted. Yours.</p>
            </div>
          )}

          {/* Image Slides */}
          {slide.image && (
            <>
              {/* Backdrop (fills screen) */}
              <Image
                src={slide.image}
                alt=""
                fill
                priority={i === 1}
                sizes="100vw"
                className="object-cover scale-110 blur-md opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/70" />

              {/* Foreground portrait frame */}
              <div className="relative z-10 flex h-full items-end md:items-center">
                <div className="w-full px-5 pb-10 md:px-10 md:pb-0">
                  <div className="mx-auto w-full max-w-[520px] md:max-w-6xl md:grid md:grid-cols-12 md:items-center md:gap-10">
                    {/* Image */}
                    <div className="md:col-span-7 md:order-2">
                      <div className="relative mx-auto aspect-[4/5] w-full max-w-[520px] overflow-hidden rounded-2xl border border-white/10 bg-black/20 shadow-2xl">
                        <Image
                          src={slide.image}
                          alt={slide.title ?? ""}
                          fill
                          sizes="(max-width: 768px) 92vw, 520px"
                          className="object-cover"
                        />
                      </div>
                    </div>

                    {/* Copy */}
                    <div className="mt-6 text-white md:col-span-5 md:order-1 md:mt-0">
                      <p className="text-xs md:text-sm opacity-90 mb-2">
                        {slide.subtitle}
                      </p>
                      <h2 className="text-3xl md:text-5xl font-serif mb-5 leading-tight">
                        {slide.title}
                      </h2>
                      <Link
                        href={slide.link}
                        className="inline-block px-6 py-2 border border-white/80 text-sm hover:bg-white hover:text-black transition-colors"
                      >
                        {slide.cta}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      ))}
    </section>
  );
}
