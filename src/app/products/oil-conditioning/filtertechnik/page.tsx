"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Filter,
  Star,
  Microscope,
  BarChart3,
  Clock,
  Phone,
  Mail,
  ExternalLink,
  Search,
  Grid,
  List,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { allOilConditioningProducts } from "@/lib/oil-conditioning-products";

// Dynamically filter products for Filtertechnik
const filtertechnikProducts = allOilConditioningProducts.filter(
  (product) => product.subcategory === "filtertechnik",
);

const categories = [
  { name: "All Products", value: "all", count: filtertechnikProducts.length },
  {
    name: "Particle Counters",
    value: "counters",
    count: filtertechnikProducts.filter(
      (p) => p.category === "Particle Counters",
    ).length,
  },
  {
    name: "Digital Imaging",
    value: "imaging",
    count: filtertechnikProducts.filter((p) => p.category === "Digital Imaging")
      .length,
  },
];

export default function FiltertechnikPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredProducts = filtertechnikProducts.filter((product) => {
    const matchesSearch =
      searchTerm === "" ||
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (product.description &&
        product.description
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase())) ||
      (product.features &&
        product.features.some((feature) =>
          feature.toLowerCase().includes(searchTerm.toLowerCase()),
        ));

    const matchesCategory =
      selectedCategory === "all" ||
      (selectedCategory === "counters" &&
        product.category === "Particle Counters") ||
      (selectedCategory === "imaging" &&
        product.category === "Digital Imaging");

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-green-500/10 via-background to-emerald-500/5">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto relative">
          <div className="py-12 md:py-16">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-green-500/10 rounded-2xl flex items-center justify-center">
                    <Filter className="w-8 h-8 text-green-500" />
                  </div>
                  <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                      Filtertechnik
                    </h1>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge className="bg-gradient-to-r from-green-500 to-green-600 text-white">
                        <Microscope className="w-3 h-3 mr-1" />
                        Particle Analysis
                      </Badge>
                      <Badge variant="secondary">Contamination Control</Badge>
                    </div>
                  </div>
                </div>

                <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed mb-8">
                  Precision particle counting and contamination analysis
                  solutions for hydraulic and lubrication systems. Advanced
                  digital imaging technology for accurate contamination
                  monitoring and control.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button
                    size="lg"
                    className="bg-black text-white hover:bg-neutral-900"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Contact Filtertechnik Expert
                  </Button>
                  <Button variant="outline" size="lg" className="bg-white text-black hover:bg-neutral-100">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visit Filtertechnik Website
                  </Button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-white/20">
                    <div className="text-2xl font-bold text-green-500 mb-1">
                      {filtertechnikProducts.length}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Products
                    </div>
                  </div>
                  <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-white/20">
                    <div className="text-2xl font-bold text-green-500 mb-1">
                      Digital
                    </div>
                    <div className="text-sm text-muted-foreground">Imaging</div>
                  </div>
                  <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-white/20">
                    <div className="text-2xl font-bold text-green-500 mb-1">
                      Portable
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Analysis
                    </div>
                  </div>
                  <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-white/20">
                    <div className="text-2xl font-bold text-green-500 mb-1">
                      Precision
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Counting
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto py-8">
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col md:flex-row gap-4 flex-1">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search Filtertechnik products..."
                  className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <Button
                    key={category.value}
                    variant={
                      selectedCategory === category.value
                        ? "default"
                        : "outline"
                    }
                    size="sm"
                    onClick={() => setSelectedCategory(category.value)}
                    className={selectedCategory === category.value ? "bg-black text-white hover:bg-neutral-900" : ""}
                  >
                    {category.name}
                    <Badge variant="secondary" className="ml-2 text-xs">
                      {category.count}
                    </Badge>
                  </Button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className={viewMode === "grid" ? "bg-black text-white hover:bg-neutral-900" : ""}
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
                className={viewMode === "list" ? "bg-black text-white hover:bg-neutral-900" : ""}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto pb-16">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Filtertechnik Products
          </h2>
          <p className="text-muted-foreground">
            Showing {filteredProducts.length} of {filtertechnikProducts.length}{" "}
            products
          </p>
        </div>

        {/* Grid View */}
        {viewMode === "grid" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                className="overflow-hidden group shadow-md border-0"
              >
                <Link
                  href={product.href ? product.href : `/products/oil-conditioning/filtertechnik/${product.id}`}
                  className="block"
                >
                  <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                    <Image
                      src={
                        product.images && product.images[0]
                          ? product.images[0].src
                          : ""
                      }
                      alt={
                        product.images && product.images[0]
                          ? product.images[0].alt
                          : product.name
                      }
                      width={300}
                      height={225}
                      className="object-contain w-full h-full p-4"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">{product.category}</Badge>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {product.description && product.description[0]}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {(product.features || []).map((feature, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        )}

        {/* List View */}
        {viewMode === "list" && (
          <div className="space-y-4">
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                href={product.href ? product.href : `/products/oil-conditioning/filtertechnik/${product.id}`}
                className="block group"
              >
                <Card className="border-2 hover:border-green-500/50 transition-all duration-300 group-hover:shadow-lg overflow-hidden">
                  <div className="flex items-center gap-6 p-6">
                    <div className="relative w-24 h-24 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={
                          product.images && product.images[0]
                            ? product.images[0].src
                            : ""
                        }
                        alt={
                          product.images && product.images[0]
                            ? product.images[0].alt
                            : product.name
                        }
                        fill
                        className="object-contain p-2"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-bold text-foreground group-hover:text-green-500 transition-colors">
                            {product.name}
                          </h3>
                          <Badge variant="secondary" className="text-xs mt-1">
                            {product.category}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2">
                          <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-green-500 group-hover:translate-x-1 transition-all" />
                        </div>
                      </div>

                      <p className="text-muted-foreground text-sm mb-3">
                        {product.description}
                      </p>

                      {/* Key Features removed for linter safety; handled in grid above */}
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        )}

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-muted/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Search className="w-10 h-10 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              No products found
            </h3>
            <p className="text-muted-foreground text-lg mb-6">
              Try adjusting your search terms or filters
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-green-500/5 to-emerald-500/5 py-16">
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Need Precise Contamination Analysis?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Our Filtertechnik experts can help you choose the right particle
            counting solution for your contamination control needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-black text-white hover:bg-neutral-900"
            >
              <Phone className="w-4 h-4 mr-2" />
              Speak with Filtertechnik Expert
            </Button>
            <Button variant="outline" size="lg" className="bg-white text-black hover:bg-neutral-100">
              <Mail className="w-4 h-4 mr-2" />
              Request Technical Documentation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
