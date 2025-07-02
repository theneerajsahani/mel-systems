"use client";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import ProductBreadcrumb from "@/components/ProductBreadcrumb";

export default function CraneCamerasPage() {
  const breadcrumbItems = [
    { label: "Products", href: "/products" },
    { label: "Systems", href: "/products/systems" },
    { label: "Crane Cameras" },
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
              Crane Cameras
            </h1>
            <p className="text-lg text-muted-foreground">
              Heavy-duty camera systems specifically designed for crane
              operations providing operators with enhanced visibility and
              precision control.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <div className="cursor-pointer">
              <Link href="/products/systems/motec/crane-cameras/mws">
                <ProductCard
                  image="/products/systems/Motec/Crane Camera/MWS/MWS.jpg"
                  name="MWS"
                />
              </Link>
            </div>
            <div className="cursor-pointer">
              <Link href="/products/systems/motec/crane-cameras/mc5201">
                <ProductCard
                  image="/products/systems/Motec/Crane Camera/MC5201/MC5201.jpg"
                  name="MC5201"
                />
              </Link>
            </div>
            <div className="cursor-pointer">
              <Link href="/products/systems/motec/crane-cameras/mcde5200">
                <ProductCard
                  image="/products/systems/Motec/Crane Camera/MCDE5200/MCDE5200.jpg"
                  name="MCDE5200"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
