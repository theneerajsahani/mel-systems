import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight, CheckCircle, Zap, Shield, Settings } from "lucide-react";

interface ProductCategory {
  title: string;
  description: string;
  image: string;
  href: string;
  brands: string[];
  icon: any;
  features: string[];
  stats: { label: string; value: string }[];
}

const productCategories: ProductCategory[] = [
  {
    title: "Oil Conditioning",
    description: "Advanced oil quality monitoring and conditioning systems for optimal machinery performance and extended equipment life.",
    image: "/images/1.jpg",
    href: "/products/oil-conditioning",
    brands: ["Tandelta", "Filtertechnik", "Hydrotechnik", "Evamo"],
    icon: Zap,
    features: [
      "Real-time oil quality monitoring",
      "Predictive maintenance alerts",
      "Extended equipment lifespan",
      "Environmental sustainability"
    ],
    stats: [
      { label: "Equipment Life Extension", value: "Up to 300%" },
      { label: "Maintenance Cost Reduction", value: "40-60%" }
    ]
  },
  {
    title: "Systems",
    description: "Comprehensive safety and monitoring systems including crane cameras, digital monitors, and video control units for enhanced operational safety.",
    image: "/images/1.jpg",
    href: "/products/systems",
    brands: ["Motec"],
    icon: Shield,
    features: [
      "Advanced camera systems",
      "Digital monitoring solutions",
      "Video control units",
      "Enhanced safety protocols"
    ],
    stats: [
      { label: "Safety Improvement", value: "95%" },
      { label: "Operational Efficiency", value: "80%" }
    ]
  }
];

export default function ProductsSection() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-16 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
            <Settings className="w-4 h-4" />
            Our Product Solutions
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-8 leading-tight tracking-tight">
            Engineered for
            <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent">
              Maximum Performance
            </span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Discover our comprehensive range of industrial solutions designed to enhance machinery performance, 
            extend equipment life, and optimize maintenance operations across critical industries.
          </p>
        </div>

        {/* Product Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {productCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={index}
                className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-200"
              >
                {/* Category Image with Overlay */}
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-800/30 to-transparent"></div>
                  
                  {/* Floating Icon */}
                  <div className="absolute top-6 left-6 p-3 bg-white/20 backdrop-blur-md rounded-xl border border-white/30">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Category Title Overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">{category.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.brands.slice(0, 2).map((brand, brandIndex) => (
                        <span 
                          key={brandIndex}
                          className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-sm rounded-full border border-white/30"
                        >
                          {brand}
                        </span>
                      ))}
                      {category.brands.length > 2 && (
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-sm rounded-full border border-white/30">
                          +{category.brands.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Category Content */}
                <div className="p-8">
                  <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                    {category.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-slate-900 mb-4">Key Features</h4>
                    <div className="grid grid-cols-1 gap-3">
                      {category.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                          <span className="text-slate-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-100">
                    {category.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="text-center">
                        <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                        <div className="text-sm text-slate-600">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Link href={category.href} className="block">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 text-lg font-semibold rounded-xl group transition-all duration-300 shadow-xl hover:shadow-2xl">
                      Explore {category.title}
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 rounded-2xl p-12 text-white shadow-2xl">
          <h3 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight">Ready to Transform Your Operations?</h3>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Our experts are standing by to help you select the perfect solution for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-white text-blue-600 hover:bg-slate-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
                Get Expert Consultation
              </Button>
            </Link>
            <Link href="/products" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
