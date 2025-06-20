"use client"

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { getFeaturedApplications } from "@/lib/applications";

const applications = getFeaturedApplications();

export default function ApplicationsSection() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-screen-xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            APPLICATIONS
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            The industries around which our know-how revolves:
          </p>
        </div>

        {/* Applications Carousel */}
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {applications.map((application) => (
                <CarouselItem 
                  key={application.id} 
                  className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <div className="group relative h-80 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
                    {/* Background Image with Gradient Fallback */}
                    <div 
                      className={`absolute inset-0 bg-gradient-to-br ${application.gradient}`}
                    >
                      <Image
                        src={application.image}
                        alt={application.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500 mix-blend-overlay"
                      />
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-all duration-300"></div>

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                      {/* Title */}
                      <h3 className="text-2xl font-bold mb-3 transform group-hover:translate-y-0 transition-transform duration-300">
                        {application.title.toUpperCase()}
                      </h3>

                      {/* Description - Hidden by default, shows on hover */}
                      <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <p className="text-sm mb-4 leading-relaxed">
                          {application.description}
                        </p>

                        {/* Key Benefits */}
                        <div className="space-y-1">
                          {application.keyBenefits.map((benefit: string, index: number) => (
                            <div key={index} className="flex items-center text-xs">
                              <div className="w-1 h-1 bg-white rounded-full mr-2"></div>
                              <span>{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation Buttons */}
            <CarouselPrevious className="hidden md:flex -left-12 bg-white border-gray-300 hover:bg-gray-50 text-gray-700" />
            <CarouselNext className="hidden md:flex -right-12 bg-white border-gray-300 hover:bg-gray-50 text-gray-700" />
          </Carousel>

          {/* Mobile Navigation Hint */}
          <div className="flex justify-center mt-6 md:hidden">
            <p className="text-sm text-gray-500">Swipe to explore more applications</p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Need a solution for your specific industry?
          </p>
          <button className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200">
            Contact Our Experts
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
