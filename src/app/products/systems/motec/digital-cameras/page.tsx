"use client";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import ProductBreadcrumb from "@/components/ProductBreadcrumb";

export default function DigitalCamerasPage() {
  const breadcrumbItems = [
    { label: "Products", href: "/products" },
    { label: "Systems", href: "/products/systems" },
    { label: "Digital Cameras" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
        <div className="py-6">
          <ProductBreadcrumb items={breadcrumbItems} />
        </div>

        <div className="py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-4">
              Digital Cameras
            </h1>
            <p className="text-lg text-muted-foreground">
              Advanced digital camera systems with high-resolution imaging and
              intelligent features for professional vehicle monitoring
              applications.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <Link href="/products/systems/motec/digital-cameras/mcdb7000a">
              <ProductCard
                image="/products/systems/Motec/Digital camera/MCDB7000A/MCDB7000A.jpg"
                name="MCDB7000A"
              />
            </Link>
            <Link href="/products/systems/motec/digital-cameras/mcde3000">
              <ProductCard
                image="/products/systems/Motec/Digital camera/MCDE3000/MCDE3000.jpg"
                name="MCDE3000"
              />
            </Link>
            <Link href="/products/systems/motec/digital-cameras/mcdl7000a">
              <ProductCard
                image="/products/systems/Motec/Digital camera/MCDL7000A/MCDL7000A.jpg"
                name="MCDL7000A"
              />
            </Link>
            <Link href="/products/systems/motec/digital-cameras/mcde7000a">
              <ProductCard
                image="/products/systems/Motec/Digital camera/MCDE7000A/MCDE7000A.jpg"
                name="MCDE7000A"
              />
            </Link>
            <Link href="/products/systems/motec/digital-cameras/mcde5200">
              <ProductCard
                image="/products/systems/Motec/Digital camera/MCDE5200/MCDE5200.jpg"
                name="MCDE5200"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
