"use client";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import ProductBreadcrumb from "@/components/ProductBreadcrumb";

export default function ForkCamerasPage() {
  const breadcrumbItems = [
    { label: "Products", href: "/products" },
    { label: "Systems", href: "/products/systems" },
    { label: "Fork Cameras" },
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
              Fork Cameras
            </h1>
            <p className="text-lg text-muted-foreground">
              Specialized cameras designed for forklift and material handling
              equipment to provide enhanced visibility and safety during lifting
              operations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <Link href="/products/systems/motec/fork-cameras/mc9000">
              <ProductCard
                image="/products/systems/Motec/Fork Camera/MC9000/MC9000.jpg"
                name="MC9000"
              />
            </Link>
            <Link href="/products/systems/motec/fork-cameras/mc9150b">
              <ProductCard
                image="/products/systems/Motec/Fork Camera/MC9150B/MC9150B.jpg"
                name="MC9150B"
              />
            </Link>
            <Link href="/products/systems/motec/fork-cameras/mc9250">
              <ProductCard
                image="/products/systems/Motec/Fork Camera/MC9250/MC9250.jpg"
                name="MC9250"
              />
            </Link>
            <Link href="/products/systems/motec/fork-cameras/mc925c">
              <ProductCard
                image="/products/systems/Motec/Fork Camera/MC925C/MC925C.jpg"
                name="MC925C"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
