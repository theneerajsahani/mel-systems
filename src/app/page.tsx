// import HeroSection from "@/components/home/Hero";
import FirstHeroSection from "@/components/home/FirstHero";
import ProductsSection from "@/components/home/Products";
import SecondHeroSection from "@/components/home/SecondHero";
import ApplicationsSection from "@/components/home/Applications";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <FirstHeroSection />

      {/* Products Section */}
      <ProductsSection />

      {/* Second Hero Section */}
      <SecondHeroSection />
      
      {/* Applications Section */}
      <ApplicationsSection />

      {/* About Us Section */}
    </>
  );
}