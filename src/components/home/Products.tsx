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
    image: "/products/oil conditioning/Tandelta/OQSx-G2 Oil Quality Sensor/OQSx-G2 Oil Quality Sensor-1.jpg",
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
    image: "/products/systems/Motec/Rear view cameras/MC3000B/MC3000B.png",
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
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-16 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm xl:text-base font-semibold mb-4 sm:mb-6">
            <Settings className="w-3 h-3 sm:w-4 sm:h-4" />
            Our Product Solutions
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[64px] 2xl:text-7xl font-bold text-slate-900 mb-4 sm:mb-6 lg:mb-8 leading-tight tracking-tight">
            Engineered for
            <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent">
              Maximum Performance
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed px-2 sm:px-0">
            Discover our comprehensive range of industrial solutions designed to enhance machinery performance, 
            extend equipment life, and optimize maintenance operations across critical industries.
          </p>
        </div>

        {/* Product Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {productCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl lg:rounded-2xl shadow-lg sm:shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 border border-white/20 flex flex-col h-full"
              >
                {/* Category Image with Overlay */}
                <div className="relative h-40 xs:h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-800/30 to-transparent"></div>
                  
                  {/* Floating Icon */}
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 lg:top-6 lg:left-6 p-1.5 sm:p-2 lg:p-3 bg-white/20 backdrop-blur-md rounded-md sm:rounded-lg lg:rounded-xl border border-white/30">
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white" />
                  </div>
                  
                  {/* Category Title Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 lg:bottom-6 lg:left-6 lg:right-6">
                    <h3 className="text-lg xs:text-xl sm:text-2xl lg:text-[24px] xl:text-[48px] font-bold text-white mb-1 sm:mb-2 lg:mb-3 tracking-tight">{category.title}</h3>
                  </div>
                </div>

                {/* Category Content */}
                <div className="p-3 xs:p-4 sm:p-5 md:p-6 lg:p-8 flex flex-col flex-1">
                  {/* Description - Fixed height */}
                  <div className="mb-3 sm:mb-4 lg:mb-6 h-14 xs:h-16 sm:h-18 md:h-20 xl:h-28 flex items-start overflow-hidden">
                    <p className="text-slate-600 leading-relaxed text-xs xs:text-sm sm:text-base lg:text-base xl:text-[20px] line-clamp-3 xl:line-clamp-4">
                      {category.description}
                    </p>
                  </div>

                  {/* Key Features - Responsive height */}
                  <div className="mb-3 sm:mb-4 lg:mb-6 min-h-28 xs:min-h-32 sm:min-h-34 md:min-h-40 lg:min-h-44">
                    <h4 className="text-sm xs:text-base lg:text-base xl:text-[20px] font-semibold text-slate-900 mb-2 sm:mb-3 lg:mb-4">Key Features</h4>
                    <div className="grid grid-cols-1 gap-1.5 xs:gap-2 sm:gap-3">
                      {category.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2 sm:gap-3">
                          <CheckCircle className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-emerald-500 flex-shrink-0" />
                          <span className="text-slate-700 text-xs md:text-sm xl:text-[18px] leading-tight">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-auto">
                    <Link href={category.href} className="block">
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-2.5 xs:py-3 sm:py-4 text-sm xs:text-base sm:text-lg xl:text-xl font-semibold rounded-md sm:rounded-lg lg:rounded-xl group transition-all duration-300 shadow-lg sm:shadow-xl hover:shadow-2xl">
                        Explore {category.title}
                        <ArrowRight className="ml-1.5 sm:ml-2 w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 rounded-lg sm:rounded-xl lg:rounded-2xl p-6 sm:p-8 lg:p-12 text-white shadow-xl sm:shadow-2xl mx-2 sm:mx-0">
          <h3 className="text-xl md:text-[32px] xl:text-[48px] font-bold mb-4 sm:mb-6 tracking-tight">Ready to Transform Your Operations?</h3>
          <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-[20px] mb-6 sm:mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            Our experts are standing by to help you select the perfect solution for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-white text-blue-600 hover:bg-slate-100 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base lg:text-lg xl:text-xl font-semibold rounded-lg sm:rounded-xl shadow-lg sm:shadow-xl hover:shadow-2xl transition-all duration-300">
                Get Expert Consultation
              </Button>
            </Link>
            <Link href="/products" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-white/20 backdrop-blur-sm border-2 border-white/40 text-white hover:bg-white hover:text-blue-600 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base lg:text-lg xl:text-xl font-semibold rounded-lg sm:rounded-xl transition-all duration-300">
                View All Products
                <ArrowRight className="ml-1.5 sm:ml-2 w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
