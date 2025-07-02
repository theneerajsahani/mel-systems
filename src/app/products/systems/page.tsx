"use client";
import Link from "next/link";
import Image from "next/image";
import { Monitor, Camera, Video, ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  motecCategoryData,
  rearViewCamerasCategoryData,
  frontCameraSystemCategoryData,
  digitalCamerasCategoryData,
  monitorsCategoryData,
  digitalMonitorsCategoryData,
  forkCamerasCategoryData,
  videoControlUnitsCategoryData,
  craneCamerasCategoryData,
  transmissionsCategoryData,
  systemsProductMapping,
} from "@/lib/systems-products";

const motecCategories = [
  rearViewCamerasCategoryData,
  frontCameraSystemCategoryData,
  digitalCamerasCategoryData,
  monitorsCategoryData,
  digitalMonitorsCategoryData,
  forkCamerasCategoryData,
  videoControlUnitsCategoryData,
  craneCamerasCategoryData,
  transmissionsCategoryData,
];

const getCategoryIcon = (slug: string) => {
  if (slug.includes("monitor")) return Monitor;
  if (slug.includes("camera")) return Camera;
  if (slug.includes("video")) return Video;
  return Camera;
};

const getProductsForCategory = (categoryData: any) => {
  if (!categoryData.categoryProductIds) return [];
  return categoryData.categoryProductIds
    .map((id: any) => {
      // Find the product in systemsProductMapping by id
      const product = Object.values(systemsProductMapping).find(
        (p) => p.id === id,
      );
      if (!product) return null;
      return {
        name: product.name,
        image: product.images?.[0]?.src || "",
        href: `/products/systems/motec/${categoryData.subsubcategory || categoryData.subcategory || categoryData.name.toLowerCase()}/${id}`,
        description: product.description?.[0] || "",
        brand: product.brand,
        productCharacteristics: product.productCharacteristics,
      };
    })
    .filter(Boolean);
};

export default function SystemsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto relative">
          <div className="py-12 md:py-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-6">
                <Monitor className="w-6 h-6 text-primary" />
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Camera & Monitoring
                <span className="block text-primary">Systems</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
                Professional camera and monitoring systems for industrial
                applications. Enhance safety, visibility, and operational
                efficiency with advanced technology.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* System Categories & Products Section */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto pb-16">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Leading Camera & Monitoring Technologies
          </h2>
          <p className="text-muted-foreground text-lg mb-6">
            Explore systems and solutions from industry-leading technology
            providers
          </p>
        </div>

        {/* Category Sections */}
        <div className="space-y-16">
          {motecCategories.map((category) => {
            const IconComponent = getCategoryIcon(
              category.subsubcategory ||
                category.subcategory ||
                category.name.toLowerCase(),
            );
            const products = getProductsForCategory(category);
            return (
              <div key={category.id} className="company-section">
                {/* Category Header */}
                <div className="flex items-start justify-between mb-8 p-6 bg-gradient-to-r from-white to-gray-50/50 rounded-2xl border border-gray-200/50 shadow-sm">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center shadow-sm">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                        {category.name}
                      </h3>
                      <div className="flex items-center gap-6 text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Badge variant="secondary">
                            {products.length} Products
                          </Badge>
                        </div>
                      </div>
                      {category.description && (
                        <p className="text-muted-foreground text-base mt-2">
                          {category.description[0]}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Product Carousel */}
                <div className="relative">
                  <Carousel
                    opts={{
                      align: "start",
                      loop: false,
                      slidesToScroll: 1,
                    }}
                    className="w-full"
                  >
                    <CarouselContent className="-ml-4">
                      {products.map((product: any) => (
                        <CarouselItem
                          key={product.name}
                          className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                        >
                          <Link
                            href={product.href}
                            className="block h-full group"
                          >
                            <Card className="h-full border-2 hover:border-primary/50 transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1 overflow-hidden">
                              <div className="relative h-48 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                                {product.image && (
                                  <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                                  />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                              </div>
                              <div className="p-4">
                                <div className="flex items-start justify-between mb-2">
                                  <h4 className="font-semibold text-foreground text-sm leading-tight group-hover:text-primary transition-colors">
                                    {product.name}
                                  </h4>
                                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 ml-2" />
                                </div>
                                <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                                  {product.description}
                                </p>
                                {product.productCharacteristics &&
                                  product.productCharacteristics.length > 0 && (
                                    <ul className="text-xs text-gray-500 list-disc pl-4">
                                      {product.productCharacteristics
                                        .slice(0, 3)
                                        .map((char: any, idx: any) => (
                                          <li key={idx}>{char}</li>
                                        ))}
                                    </ul>
                                  )}
                              </div>
                            </Card>
                          </Link>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <div className="hidden md:block">
                      <CarouselPrevious className="absolute -left-6 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 border-2 shadow-lg" />
                      <CarouselNext className="absolute -right-6 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 border-2 shadow-lg" />
                    </div>
                  </Carousel>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
