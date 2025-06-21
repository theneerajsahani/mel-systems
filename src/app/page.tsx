// import HeroSection from "@/components/home/Hero";
import FirstHeroSection from "@/components/home/FirstHero";
import ProductsSection from "@/components/home/Products";
import SecondHeroSection from "@/components/home/SecondHero";
import ApplicationsSection from "@/components/home/Applications";
import AboutUsPage from "@/components/home/AboutUs";
import StatsSection from "@/components/home/StatsSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";

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
      <AboutUsPage />
      
      {/* Stats Section */}
      <StatsSection />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Testimonials Section */}
      <Testimonials />

    </>
  );
}