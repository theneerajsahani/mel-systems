import HeroSection from "@/components/home/Hero";
import ProductsSection from "@/components/home/Products";
import ApplicationsSection from "@/components/home/Applications";
import AboutUsPage from "@/components/home/AboutUs";
import StatsSection from "@/components/home/StatsSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";

export default function HomePage() {
  return (
    <>
      {/* Main Hero Section with Video */}
      <HeroSection />

      {/* Products Section - Dedicated section for products */}
      <ProductsSection />
      
      {/* Applications Section - Dedicated section for applications */}
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