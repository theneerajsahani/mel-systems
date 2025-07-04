import { Suspense, lazy } from "react";
import HeroSection from "@/components/home/Hero";
import WhyChooseUs2 from "@/components/home/WhyChooseUs2";

// Lazy load non-critical sections
const ProductsSection = lazy(() => import("@/components/home/Products"));
const ApplicationsSection = lazy(
  () => import("@/components/home/Applications"),
);
const AboutUsPage = lazy(() => import("@/components/home/AboutUs"));
const StatsSection = lazy(() => import("@/components/home/StatsSection"));
const WhyChooseUs = lazy(() => import("@/components/home/WhyChooseUs"));
const Testimonials = lazy(() => import("@/components/home/Testimonials"));

// Loading skeleton component
const SectionSkeleton = () => (
  <div className="py-12 animate-pulse">
    <div className="container mx-auto px-4">
      <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-6"></div>
      <div className="space-y-4">
        <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
      </div>
    </div>
  </div>
);

export default function HomePage() {
  return (
    <>
      {/* Main Hero Section with Video - Load immediately */}
      <HeroSection />

      {/* Lazy load other sections for better performance */}
      <Suspense fallback={<SectionSkeleton />}>
        <ProductsSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <ApplicationsSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <AboutUsPage />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <StatsSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <WhyChooseUs />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <Testimonials />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <WhyChooseUs2 />
      </Suspense>
    </>
  );
}
