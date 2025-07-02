"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Zap,
  Droplet,
  Filter,
  Leaf,
  Search,
  Star,
  Shield,
  TrendingUp,
  Clock,
  Phone,
  Mail,
  ExternalLink,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface ProductCategory {
  name: string;
  href: string;
  productCount: number;
  image: string;
  description: string;
}

interface Manufacturer {
  id: string;
  name: string;
  description: string;
  href: string;
  image: string;
  icon: React.ComponentType<any>;
  categories: ProductCategory[];
  featured: boolean;
}

const manufacturers: Manufacturer[] = [
  {
    id: "tandelta",
    name: "TanDelta",
    description:
      "Advanced real-time oil quality analysis sensors with molecular-level detection and FSH™ core technology.",
    href: "/products/oil-conditioning/tandelta",
    image:
      "/products/oil conditioning/Tandelta/OQSx-G2 Oil Quality Sensor/OQSx-G2 Oil Quality Sensor-1.jpg",
    icon: Zap,
    categories: [
      {
        name: "Oil Quality Sensors",
        href: "/products/oil-conditioning/tandelta/oqsx-g2-oil-quality-sensor",
        productCount: 3,
        image:
          "/products/oil conditioning/Tandelta/OQSx-G2 Oil Quality Sensor/OQSx-G2 Oil Quality Sensor-1.jpg",
        description:
          "Real-time oil condition monitoring with molecular-level precision",
      },
      {
        name: "Display Systems",
        href: "/products/oil-conditioning/tandelta/oqde-g2-display-express",
        productCount: 2,
        image:
          "/products/oil conditioning/Tandelta/OQDe-G2 Display Express/OQDe-G2 Display Express.png",
        description: "Intuitive displays for oil quality data visualization",
      },
      {
        name: "Gateway Systems",
        href: "/products/oil-conditioning/tandelta/gateway-oqtg",
        productCount: 3,
        image:
          "/products/oil conditioning/Tandelta/Gateway (OQTg)/Gateway (OQTg).jpg",
        description: "IoT connectivity for remote monitoring and control",
      },
      {
        name: "Mobile Test Kits",
        href: "/products/oil-conditioning/tandelta/mot-mobile-oil-test-kit",
        productCount: 1,
        image:
          "/products/oil conditioning/Tandelta/MOT – Mobile Oil Test Kit/MOT – Mobile Oil Test Kit.png",
        description: "Portable oil analysis for field testing",
      },
      {
        name: "Manifolds & Cables",
        href: "/products/oil-conditioning/tandelta/manifold",
        productCount: 3,
        image: "/products/oil conditioning/Tandelta/Manifold/Manifold.png",
        description: "Connection solutions for sensor integration",
      },
    ],
    featured: true,
  },
  {
    id: "hydrotechnik",
    name: "Hydrotechnik",
    description:
      "Comprehensive monitoring solutions for pressure, temperature, and flow with wireless connectivity.",
    href: "/products/oil-conditioning/hydrotechnik",
    image:
      "/products/oil conditioning/Hydrotechnik/Watchlog-USB/Wactchlog USB.png",
    icon: Droplet,
    categories: [
      {
        name: "Bluetooth Sensors",
        href: "/products/oil-conditioning/hydrotechnik",
        productCount: 3,
        image:
          "/products/oil conditioning/Hydrotechnik/Watchlog Bluetooth Sensors, Gauges and Mobile Apps/Watchlog Bluetooth Sensors, Gauges and Mobile Apps.png",
        description: "Wireless sensors for real-time monitoring",
      },
      {
        name: "Wireless Systems",
        href: "/products/oil-conditioning/hydrotechnik",
        productCount: 2,
        image:
          "/products/oil conditioning/Hydrotechnik/Watchlog Wireless Pressure, Temperature and Flow Sensors/Watchlog Wireless Pressure, Temperature and Flow Sensors.png",
        description: "Complete wireless monitoring solutions",
      },
      {
        name: "Remote Monitoring",
        href: "/products/oil-conditioning/hydrotechnik",
        productCount: 1,
        image:
          "/products/oil conditioning/Hydrotechnik/Watchlog Pro Remote Monitoring/Watchlog Pro Remote Monitoring.png",
        description: "Professional remote monitoring platform",
      },
      {
        name: "Data Loggers",
        href: "/products/oil-conditioning/hydrotechnik",
        productCount: 2,
        image:
          "/products/oil conditioning/Hydrotechnik/Watchlog-USB/Wactchlog USB.png",
        description: "USB data logging for offline analysis",
      },
    ],
    featured: true,
  },
  {
    id: "filtertechnik",
    name: "Filtertechnik",
    description:
      "Digital imaging particle counters and portable oil analysis solutions for precise contamination detection.",
    href: "/products/oil-conditioning/filtertechnik",
    image:
      "/products/oil conditioning/Filtertechnik/S120 Digital Imaging Particle Counter/S120 Digital Imaging Particle Counter.png",
    icon: Filter,
    categories: [
      {
        name: "Digital Particle Counters",
        href: "/products/oil-conditioning/filtertechnik/s120-digital-imaging-particle-counter",
        productCount: 1,
        image:
          "/products/oil conditioning/Filtertechnik/S120 Digital Imaging Particle Counter/S120 Digital Imaging Particle Counter.png",
        description: "Advanced digital imaging for particle analysis",
      },
      {
        name: "Particle Pal Series",
        href: "/products/oil-conditioning/filtertechnik/particle-pal",
        productCount: 8,
        image:
          "/products/oil conditioning/Filtertechnik/Particle Pal/Particle Pal.png",
        description: "Portable particle counting solutions",
      },
      {
        name: "Portable Analyzers",
        href: "/products/oil-conditioning/filtertechnik/particle-pal",
        productCount: 6,
        image:
          "/products/oil conditioning/Filtertechnik/Particle Pal/Particle Pal.png",
        description: "Field-ready contamination analysis tools",
      },
    ],
    featured: true,
  },
  {
    id: "evamo",
    name: "Evamo",
    description:
      "Sustainable oil conditioning solutions focused on environmental responsibility and eco-friendly approaches.",
    href: "/products/oil-conditioning/evamo",
    image:
      "/products/oil conditioning/Tandelta/Gateway (OQTg)/Gateway (OQTg).jpg",
    icon: Leaf,
    categories: [
      {
        name: "Eco-Friendly Solutions",
        href: "/products/oil-conditioning/evamo",
        productCount: 0,
        image:
          "/products/oil conditioning/Tandelta/Gateway (OQTg)/Gateway (OQTg).jpg",
        description: "Environmentally responsible oil conditioning",
      },
      {
        name: "Sustainable Systems",
        href: "/products/oil-conditioning/evamo",
        productCount: 0,
        image:
          "/products/oil conditioning/Tandelta/Gateway (OQTg)/Gateway (OQTg).jpg",
        description: "Green technology for oil management",
      },
    ],
    featured: false,
  },
];

export default function OilConditioningPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredManufacturers = manufacturers.filter((manufacturer) => {
    const matchesSearch =
      searchTerm === "" ||
      manufacturer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      manufacturer.description
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      manufacturer.categories.some((cat) =>
        cat.name.toLowerCase().includes(searchTerm.toLowerCase()),
      );

    const matchesCategory =
      selectedCategory === "all" ||
      (selectedCategory === "sensors" &&
        manufacturer.categories.some((cat) =>
          cat.name.toLowerCase().includes("sensor"),
        )) ||
      (selectedCategory === "monitoring" &&
        manufacturer.categories.some(
          (cat) =>
            cat.name.toLowerCase().includes("monitor") ||
            cat.name.toLowerCase().includes("bluetooth") ||
            cat.name.toLowerCase().includes("wireless"),
        )) ||
      (selectedCategory === "analysis" &&
        manufacturer.categories.some(
          (cat) =>
            cat.name.toLowerCase().includes("analysis") ||
            cat.name.toLowerCase().includes("counter") ||
            cat.name.toLowerCase().includes("test"),
        )) ||
      (selectedCategory === "eco-friendly" &&
        manufacturer.categories.some(
          (cat) =>
            cat.name.toLowerCase().includes("eco") ||
            cat.name.toLowerCase().includes("sustainable"),
        ));

    return matchesSearch && matchesCategory;
  });

  const categories = [
    { value: "all", label: "All Categories", count: manufacturers.length },
    {
      value: "sensors",
      label: "Sensors",
      count: manufacturers.filter((m) =>
        m.categories.some((cat) => cat.name.toLowerCase().includes("sensor")),
      ).length,
    },
    {
      value: "monitoring",
      label: "Monitoring",
      count: manufacturers.filter((m) =>
        m.categories.some(
          (cat) =>
            cat.name.toLowerCase().includes("monitor") ||
            cat.name.toLowerCase().includes("bluetooth") ||
            cat.name.toLowerCase().includes("wireless"),
        ),
      ).length,
    },
    {
      value: "analysis",
      label: "Analysis",
      count: manufacturers.filter((m) =>
        m.categories.some(
          (cat) =>
            cat.name.toLowerCase().includes("analysis") ||
            cat.name.toLowerCase().includes("counter") ||
            cat.name.toLowerCase().includes("test"),
        ),
      ).length,
    },
    {
      value: "eco-friendly",
      label: "Eco-Friendly",
      count: manufacturers.filter((m) =>
        m.categories.some(
          (cat) =>
            cat.name.toLowerCase().includes("eco") ||
            cat.name.toLowerCase().includes("sustainable"),
        ),
      ).length,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Gradient Background */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto relative">
          <div className="py-12 md:py-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-6">
                <Droplet className="w-6 h-6 text-primary" />
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Oil Conditioning
                <span className="block text-primary">Solutions</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
                Advanced oil quality monitoring and conditioning systems from
                leading manufacturers. Extend equipment life, reduce maintenance
                costs, and optimize performance with real-time analysis.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Oil Conditioning Companies & Products Section */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto pb-16">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Leading Oil Conditioning Technologies
          </h2>
          <p className="text-muted-foreground text-lg mb-6">
            Explore products and solutions from industry-leading technology
            providers
          </p>
        </div>

        {/* Company Sections */}
        <div className="space-y-16">
          {filteredManufacturers.map((manufacturer) => {
            const IconComponent = manufacturer.icon;
            const totalProducts = manufacturer.categories.reduce(
              (total, cat) => total + cat.productCount,
              0,
            );

            return (
              <div key={manufacturer.id} className="company-section">
                {/* Company Header */}
                <div className="flex items-start justify-between mb-8 p-6 bg-gradient-to-r from-white to-gray-50/50 rounded-2xl border border-gray-200/50 shadow-sm">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center shadow-sm">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                          {manufacturer.name}
                        </h3>
                        {manufacturer.featured && (
                          <Badge className="bg-gradient-to-r from-primary to-primary/80 text-white">
                            <Star className="w-3 h-3 mr-1" />
                            Featured Partner
                          </Badge>
                        )}
                      </div>
                      <p className="text-muted-foreground text-lg leading-relaxed mb-4 max-w-3xl">
                        {manufacturer.description}
                      </p>
                      <div className="flex items-center gap-6 text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Filter className="w-4 h-4 text-primary" />
                          <span>
                            {manufacturer.categories.length} Product Categories
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <TrendingUp className="w-4 h-4 text-green-500" />
                          <span>{totalProducts} Total Products</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Clock className="w-4 h-4 text-blue-500" />
                          <span>3-5 days delivery</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={manufacturer.href}>
                        View All Products
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Product Categories Carousel */}
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
                      {manufacturer.categories.map((category) => (
                        <CarouselItem
                          key={category.name}
                          className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                        >
                          <Link
                            href={category.href}
                            className="block h-full group"
                          >
                            <Card className="h-full border-2 hover:border-primary/50 transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1 overflow-hidden">
                              {" "}
                              {/* Product Image */}
                              <div className="relative h-48 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                                <Image
                                  src={category.image}
                                  alt={category.name}
                                  fill
                                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                {/* Category Badge */}
                                <div className="absolute top-3 right-3">
                                  <Badge
                                    variant={
                                      category.productCount > 0
                                        ? "default"
                                        : "secondary"
                                    }
                                    className="text-xs"
                                  >
                                    {category.productCount > 0
                                      ? `${category.productCount} Products`
                                      : "Coming Soon"}
                                  </Badge>
                                </div>
                              </div>
                              {/* Product Content */}
                              <div className="p-4">
                                <div className="flex items-start justify-between mb-2">
                                  <h4 className="font-semibold text-foreground text-sm leading-tight group-hover:text-primary transition-colors">
                                    {category.name}
                                  </h4>
                                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 ml-2" />
                                </div>

                                <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                                  {category.description}
                                </p>

                                <div className="flex items-center justify-between text-xs">
                                  <span className="flex items-center gap-1 text-muted-foreground">
                                    <IconComponent className="w-3 h-3" />
                                    {manufacturer.name}
                                  </span>
                                  {category.productCount > 0 && (
                                    <span className="font-medium text-primary">
                                      Explore →
                                    </span>
                                  )}
                                </div>
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

        {/* Show message if no results */}
        {filteredManufacturers.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-muted/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Search className="w-10 h-10 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              No companies found
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

        {/* Summary Section */}
        {filteredManufacturers.length > 0 && (
          <div className="mt-16 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Complete Oil Conditioning Portfolio
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">
                    {filteredManufacturers.length}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Technology Partners
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">
                    {filteredManufacturers.reduce(
                      (total, m) => total + m.categories.length,
                      0,
                    )}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Product Categories
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">
                    {filteredManufacturers.reduce(
                      (total, m) =>
                        total +
                        m.categories.reduce(
                          (catTotal, cat) => catTotal + cat.productCount,
                          0,
                        ),
                      0,
                    )}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Total Products
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">
                    {filteredManufacturers.filter((m) => m.featured).length}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Featured Partners
                  </div>
                </div>
              </div>
              {(searchTerm || selectedCategory !== "all") && (
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("all");
                  }}
                  className="mt-4"
                >
                  View All Companies
                </Button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Enhanced Key Benefits Section */}
      <div className="bg-gradient-to-br from-muted/20 via-background to-primary/5 py-20">
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-6">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why Choose Our Oil Conditioning Solutions?
            </h2>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
              Industry-leading technology for optimal equipment performance and
              significant cost savings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-white/70 backdrop-blur-sm border border-white/20 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-4 text-lg">
                Real-time Monitoring
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Continuous oil condition analysis with molecular-level detection
                and instant alerts for optimal performance
              </p>
              <div className="text-sm text-primary font-semibold">
                ✓ 24/7 monitoring ✓ Instant alerts ✓ Precise detection
              </div>
            </div>

            <div className="text-center p-8 rounded-2xl bg-white/70 backdrop-blur-sm border border-white/20 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="font-bold text-foreground mb-4 text-lg">
                Predictive Maintenance
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Forecast maintenance needs and extend equipment life with
                AI-powered data-driven insights
              </p>
              <div className="text-sm text-blue-500 font-semibold">
                ✓ AI predictions ✓ Extended life ✓ Cost optimization
              </div>
            </div>

            <div className="text-center p-8 rounded-2xl bg-white/70 backdrop-blur-sm border border-white/20 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-green-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Filter className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="font-bold text-foreground mb-4 text-lg">
                Significant Cost Reduction
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Reduce maintenance costs by 40-60% and extend oil life through
                precise monitoring and optimization
              </p>
              <div className="text-sm text-green-500 font-semibold">
                ✓ 60% cost savings ✓ Extended oil life ✓ ROI guaranteed
              </div>
            </div>
          </div>

          {/* Additional Benefits */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h4 className="font-semibold text-foreground mb-3 flex items-center">
                <Star className="w-5 h-5 text-yellow-500 mr-2" />
                Industry Recognition
              </h4>
              <p className="text-muted-foreground text-sm">
                Our solutions are trusted by Fortune 500 companies and have
                received multiple industry awards for innovation and
                reliability.
              </p>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h4 className="font-semibold text-foreground mb-3 flex items-center">
                <Shield className="w-5 h-5 text-green-500 mr-2" />
                Compliance & Safety
              </h4>
              <p className="text-muted-foreground text-sm">
                All products meet international safety standards and
                environmental regulations, ensuring peace of mind for your
                operations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced CTA Section */}
      <div className="py-20">
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-primary/90 to-primary/80 p-12 text-center text-white">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center p-3 bg-white/20 rounded-full mb-6">
                <Phone className="w-6 h-6" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Optimize Your Oil Conditioning?
              </h2>
              <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
                Contact our experts to find the perfect oil conditioning
                solution for your application. Get a free consultation and
                custom quote today.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Get Expert Consultation
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Request Quote
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-white/80">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Free 30-min consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  <span>No obligation quotes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  <span>Expert recommendations</span>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary CTA */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">
              Want to see our solutions in action? Explore our application
              examples
            </p>
            <Link
              href="/applications"
              className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
            >
              View Real-World Applications
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
