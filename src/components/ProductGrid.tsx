"use client";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Settings, Monitor, Zap } from "lucide-react";
import Image from "next/image";

interface ProductGridItem {
  name: string;
  description: string;
  image: string;
  href: string;
  category: string;
  features: string[];
}

interface ProductGridProps {
  products: ProductGridItem[];
  title?: string;
}

export default function ProductGrid({ products, title }: ProductGridProps) {
  return (
    <div className="space-y-6">
      {title && (
        <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {products.map((product, index) => (
          <Link key={product.name} href={product.href} className="block group">
            <Card className="relative overflow-hidden border border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 rounded-2xl bg-white cursor-pointer">
              <CardContent className="flex flex-col p-0">
                {/* Image Section */}
                <div className="flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 h-40 md:h-48 p-6 border-b border-gray-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={180}
                    height={120}
                    className="object-contain max-h-36 max-w-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                {/* Content Section */}
                <div className="flex flex-col flex-1 p-7 md:p-8 gap-3">
                  <div className="h-2" />{" "}
                  {/* Spacer between image and content */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-2 text-sm leading-relaxed line-clamp-2">
                    {product.description}
                  </p>
                  {/* Features Tags */}
                  {product.features && product.features.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-2">
                      {product.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-md hover:bg-gray-200 transition-colors duration-200"
                        >
                          <Zap className="w-3 h-3" />
                          {feature}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="mt-auto pt-4">
                    <span className="inline-flex items-center gap-2 text-blue-700 font-semibold group-hover:underline">
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
