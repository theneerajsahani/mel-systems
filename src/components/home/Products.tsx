import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";

interface ProductCategory {
  title: string;
  description: string;
  image: string;
  href: string;
  brands: string[];
}

const productCategories: ProductCategory[] = [
  {
    title: "Oil Conditioning",
    description: "Advanced oil quality monitoring and conditioning systems for optimal machinery performance and extended equipment life.",
    image: "/images/1.jpg", // Using the available image for now
    href: "/products/oil-conditioning",
    brands: ["Tandelta", "Filtertechnik", "Hydrotechnik", "Evamo"]
  },
  {
    title: "Systems",
    description: "Comprehensive safety and monitoring systems including crane cameras, digital monitors, and video control units.",
    image: "/images/1.jpg", // Using the available image for now
    href: "/products/systems",
    brands: ["Motec"]
  }
];

export default function ProductsSection() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-screen-xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Products
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of industrial solutions designed to enhance machinery performance, 
            extend equipment life, and optimize maintenance operations.
          </p>
        </div>

        {/* Product Categories Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {productCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Category Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute top-4 left-4">
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>
              </div>

              {/* Category Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {category.description}
                </p>

                {/* Brands */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Featured Brands:</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.brands.map((brand, brandIndex) => (
                      <span 
                        key={brandIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                      >
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <Link href={category.href}>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Explore {category.title}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
