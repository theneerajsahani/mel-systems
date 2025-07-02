"use client";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import ProductBreadcrumb from "@/components/ProductBreadcrumb";

export default function FrontCameraSystemPage() {
  const breadcrumbItems = [
    { label: "Products", href: "/products" },
    { label: "Systems", href: "/products/systems" },
    { label: "Front Camera System" },
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
              Front Camera System
            </h1>
            <p className="text-lg text-muted-foreground">
              Advanced front-facing camera system for enhanced forward
              visibility and safety in industrial vehicles and heavy machinery
              operations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <Link href="/products/systems/motec/front-camera-system/mc3050b-4-vkms">
              <ProductCard
                image="/products/systems/Motec/Front camera system/MC3050B-4-VKMS/MC3050B-4-VKMS.jpg"
                name="MC3050B-4-VKMS"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
