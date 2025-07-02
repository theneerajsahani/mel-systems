"use client";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";

export default function ParticlePalPage() {
  const breadcrumbItems = [
    { label: "Products", href: "/products" },
    { label: "Oil Conditioning", href: "/products/oil-conditioning" },
    {
      label: "Filtertechnik",
      href: "/products/oil-conditioning/filtertechnik",
    },
    { label: "Particle Pal" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
        <div className="py-8 md:py-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2">
            Particle Pal Series
          </h1>
          <p className="text-sm md:text-base text-muted-foreground">
            Portable particle counters for oil condition monitoring
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-border"></div>

      {/* Main Content */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
        <div className="py-8">
          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6">
            Particle Pal Products
          </h2>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <Link href="/products/oil-conditioning/filtertechnik/particle-pal/laser-portable">
              <ProductCard
                image="/products/oil conditioning/Filtertechnik/Particle Pal/Particle Pal - Laser Portable Particle Counter/Particle Pal - Laser Portable Particle Counter.jpg"
                name="Particle Pal - Laser Portable"
              />
            </Link>
            <Link href="/products/oil-conditioning/filtertechnik/particle-pal/water-sensor">
              <ProductCard
                image="/products/oil conditioning/Filtertechnik/Particle Pal/Particle Pal + Water Sensor - Laser Portable Particle Counter/Particle Pal + Water Sensor - Laser Portable Particle Counter-1.jpg"
                name="Particle Pal + Water Sensor"
              />
            </Link>
            <Link href="/products/oil-conditioning/filtertechnik/particle-pal/water-density-sensor">
              <ProductCard
                image="/products/oil conditioning/Filtertechnik/Particle Pal/Particle Pal + Water & Density Sensor - Laser Portable Particle Counter/Particle Pal + Water & Density Sensor - Laser Portable Particle Counter.jpg"
                name="Particle Pal + Water & Density"
              />
            </Link>
            <Link href="/products/oil-conditioning/filtertechnik/particle-pal/plus-digital">
              <ProductCard
                image="/products/oil conditioning/Filtertechnik/Particle Pal/Particle Pal Plus Digital Imaging Portable Particle Counter/Particle Pal Plus Digital Imaging Portable Particle Counter.jpg"
                name="Particle Pal Plus Digital"
              />
            </Link>
            <Link href="/products/oil-conditioning/filtertechnik/particle-pal/plus-water-ppm">
              <ProductCard
                image="/products/oil conditioning/Filtertechnik/Particle Pal/Particle Pal Plus + Water PPM Digital Imaging Portable Particle Counter/Particle Pal Plus + Water PPM Digital Imaging Portable Particle Counter.jpg"
                name="Particle Pal Plus + Water PPM"
              />
            </Link>
            <Link href="/products/oil-conditioning/filtertechnik/particle-pal/plus-water-rh">
              <ProductCard
                image="/products/oil conditioning/Filtertechnik/Particle Pal/Particle Pal Plus + Water RH Digital Imaging Portable Particle Counter/Particle Pal Plus + Water RH Digital Imaging Portable Particle Counter.jpg"
                name="Particle Pal Plus + Water RH"
              />
            </Link>
            <Link href="/products/oil-conditioning/filtertechnik/particle-pal/plus-high-viscosity">
              <ProductCard
                image="/products/oil conditioning/Filtertechnik/Particle Pal/Particle Pal Plus High Viscosity Digital Imaging Portable Particle Counter/Particle Pal Plus High Viscosity Digital Imaging Portable Particle Counter.jpg"
                name="Particle Pal Plus High Viscosity"
              />
            </Link>
            <Link href="/products/oil-conditioning/filtertechnik/particle-pal/pro-digital">
              <ProductCard
                image="/products/oil conditioning/Filtertechnik/Particle Pal/Particle Pal Pro - Digital Imaging Portable Particle Counter/Particle Pal Pro - Digital Imaging Portable Particle Counter.jpg"
                name="Particle Pal Pro Digital"
              />
            </Link>
            <Link href="/products/oil-conditioning/filtertechnik/particle-pal/pro-viscosity">
              <ProductCard
                image="/products/oil conditioning/Filtertechnik/Particle Pal/Particle Pal Pro + Viscosity - Digital Imaging Portable Particle Counter/Particle Pal Pro + Viscosity - Digital Imaging Portable Particle Counter.jpg"
                name="Particle Pal Pro + Viscosity"
              />
            </Link>
            <Link href="/products/oil-conditioning/filtertechnik/particle-pal/pro-life">
              <ProductCard
                image="/products/oil conditioning/Filtertechnik/Particle Pal/Particle Pal Pro Life - Digital Imaging Portable Particle Counter Including water and remaining oil life sensor/Particle Pal Pro Life - Digital Imaging Portable Particle Counter Including water and remaining oil life sensor.jpg"
                name="Particle Pal Pro Life"
              />
            </Link>
            <Link href="/products/oil-conditioning/filtertechnik/particle-pal/oil-life-kit">
              <ProductCard
                image="/products/oil conditioning/Filtertechnik/Particle Pal/Remaining Oil Life Portable Test Kit/Remaining Oil Life Portable Test Kit.jpg"
                name="Remaining Oil Life Kit"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
