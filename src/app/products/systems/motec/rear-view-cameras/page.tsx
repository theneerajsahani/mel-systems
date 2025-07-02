"use client";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import ProductBreadcrumb from "@/components/ProductBreadcrumb";

export default function RearViewCamerasPage() {
  const breadcrumbItems = [
    { label: "Products", href: "/products" },
    { label: "Systems", href: "/products/systems" },
    { label: "Rear View Cameras" },
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
              Rear View Cameras
            </h1>
            <p className="text-lg text-muted-foreground">
              Professional rear view camera systems for industrial vehicles and
              heavy machinery providing enhanced safety and visibility.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            <Link href="/products/systems/motec/rear-view-cameras/mc3000b-heavy-duty-camera">
              <ProductCard
                image="/products/systems/Motec/Rear view cameras/MC3000B/MC3000B.jpg"
                name="MC3000B"
              />
            </Link>
            <Link href="/products/systems/motec/rear-view-cameras/mc3000b-va-heavy-duty-stainless-steel-camera">
              <ProductCard
                image="/products/systems/Motec/Rear view cameras/MC3000B-VA/MC3000B-VA.jpg"
                name="MC3000B-VA"
              />
            </Link>
            <Link href="/products/systems/motec/rear-view-cameras/mc3000c-ir-wl-night-vision-compatible-heavy-duty-infrared-camera-with-built-in-light">
              <ProductCard
                image="/products/systems/Motec/Rear view cameras/MC3000C-IR & WL/MC3000C-IR & WL.jpg"
                name="MC3000C-IR & WL"
              />
            </Link>
            <Link href="/products/systems/motec/rear-view-cameras/mc4000a-heavy-duty-camera">
              <ProductCard
                image="/products/systems/Motec/Rear view cameras/MC4000A/MC4000A.jpg"
                name="MC4000A"
              />
            </Link>
            <Link href="/products/systems/motec/rear-view-cameras/mc4000a-ir-wl-night-vision-compatible-heavy-duty-infrared-camera-with-built-in-light">
              <ProductCard
                image="/products/systems/Motec/Rear view cameras/MC4000A-IR & WL/MC4000A-IR & WL.jpg"
                name="MC4000A-IR & WL"
              />
            </Link>
            <Link href="/products/systems/motec/rear-view-cameras/mc6000d-sturdy-universal-camera">
              <ProductCard
                image="/products/systems/Motec/Rear view cameras/MC6000D/MC6000D.jpg"
                name="MC6000D"
              />
            </Link>
            <Link href="/products/systems/motec/rear-view-cameras/mc7000c-series-heavy-duty-camera">
              <ProductCard
                image="/products/systems/Motec/Rear view cameras/MC7000C Series/MC7000C Series.jpg"
                name="MC7000C Series"
              />
            </Link>
            <Link href="/products/systems/motec/rear-view-cameras/mc7180n-wide-angle-camera">
              <ProductCard
                image="/products/systems/Motec/Rear view cameras/MC7180N/MC7180N.jpg"
                name="MC7180N"
              />
            </Link>
            <Link href="/products/systems/motec/rear-view-cameras/mc7000b-mh1-heavy-duty-camera">
              <ProductCard
                image="/products/systems/Motec/Rear view cameras/MC7000B-MH1/MC7000B-MH1.jpg"
                name="MC7000B-MH1"
              />
            </Link>
            <Link href="/products/systems/motec/rear-view-cameras/mc7000b-mh2-heavy-duty-camera">
              <ProductCard
                image="/products/systems/Motec/Rear view cameras/MC7000B-MH2/MC7000B-MH2.jpg"
                name="MC7000B-MH2"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
