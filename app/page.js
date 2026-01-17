import dynamic from "next/dynamic";
import HomeStoryIntroSection from "@/components/HomeStoryIntroSection";
import HomeEditorialSection from "@/components/HomeEditorialSection";

const HeroSlider = dynamic(() => import("@/components/heroSlide"), {
  loading: () => (
    <section className="relative h-screen w-full overflow-hidden bg-black" />
  ),
});

export default function Home() {
  return (
    <>
      <HeroSlider />
      <HomeStoryIntroSection />
      <HomeEditorialSection />
    </>
  );
}
