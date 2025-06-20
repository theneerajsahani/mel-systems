import { applications, getAllCategories, getApplicationsByCategory } from "@/lib/applications";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

export default function ApplicationsPage() {
  const categories = getAllCategories();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-screen-xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Applications
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Discover how our advanced monitoring solutions serve diverse industries worldwide
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 md:px-8 lg:px-16 bg-white border-b">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            <Badge variant="default" className="px-4 py-2 text-sm cursor-pointer">
              All Categories
            </Badge>
            {categories.map((category) => (
              <Badge 
                key={category} 
                variant="outline" 
                className="px-4 py-2 text-sm cursor-pointer hover:bg-blue-50 capitalize"
              >
                {category.replace('-', ' ')}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Grid */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {applications.map((application) => (
              <Card key={application.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${application.gradient}`}>
                    <Image
                      src={application.image}
                      alt={application.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 mix-blend-overlay"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/20 text-white border-white/30 capitalize">
                      {application.category.replace('-', ' ')}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg mb-1">
                      {application.title}
                    </h3>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <CardDescription className="text-gray-600 mb-4 line-clamp-3">
                    {application.description}
                  </CardDescription>
                  
                  <div className="space-y-3">
                    {/* Industries */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Industries:</h4>
                      <div className="flex flex-wrap gap-1">
                        {application.industries.slice(0, 2).map((industry) => (
                          <Badge key={industry} variant="secondary" className="text-xs">
                            {industry}
                          </Badge>
                        ))}
                        {application.industries.length > 2 && (
                          <Badge variant="secondary" className="text-xs">
                            +{application.industries.length - 2} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Key Benefits */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Benefits:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {application.keyBenefits.slice(0, 3).map((benefit, index) => (
                          <li key={index} className="flex items-start">
                            <div className="w-1 h-1 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                            <span className="line-clamp-1">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Related Products */}
                    {application.relatedProducts && (
                      <div>
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Related Products:</h4>
                        <div className="text-sm text-blue-600">
                          {application.relatedProducts.slice(0, 2).join(', ')}
                          {application.relatedProducts.length > 2 && ` +${application.relatedProducts.length - 2} more`}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mt-6 pt-4 border-t">
                    <Link href={`/applications/${application.id}`}>
                      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors duration-200 text-sm font-medium">
                        Learn More
                      </button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Don't See Your Industry?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Our solutions are adaptable to various industries. Contact our experts to discuss your specific monitoring needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200">
              Contact Our Experts
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <Link href="/products">
              <button className="inline-flex items-center px-8 py-3 border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-800 font-medium rounded-lg transition-colors duration-200">
                Browse Products
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
