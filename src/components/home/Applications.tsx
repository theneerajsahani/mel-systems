"use client"

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { getFeaturedApplications } from "@/lib/applications";
import { ArrowRight, Factory, Anchor, Zap, Building, CheckCircle } from "lucide-react";

const applications = getFeaturedApplications();

// Icon mapping for different application categories
const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'energy': return Zap;
    case 'marine': return Anchor;
    case 'industrial': return Factory;
    default: return Building;
  }
};

export default function ApplicationsSection() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-16 bg-gradient-to-br from-white via-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-semibold mb-6">
            <Factory className="w-4 h-4" />
            Industry Applications
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-8 leading-tight tracking-tight">
            APPLICATIONS
            <span className="block bg-gradient-to-r from-cyan-600 via-blue-500 to-cyan-700 bg-clip-text text-transparent">
              ACROSS INDUSTRIES
            </span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed px-4">
            The industries around which our know-how revolves - delivering mission-critical solutions where failure is not an option.
          </p>
        </div>

        {/* Applications Carousel */}
        <div className="relative mb-20">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {applications.map((application) => {
                const CategoryIcon = getCategoryIcon(application.category);
                return (
                  <CarouselItem 
                    key={application.id} 
                    className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                  >
                    <div className="group relative h-96 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2">
                      {/* Background Image with Enhanced Gradient */}
                      <div className="absolute inset-0">
                        <div className={`absolute inset-0 bg-gradient-to-br ${application.gradient} opacity-90`}></div>
                        <Image
                          src={application.image}
                          alt={application.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700 mix-blend-overlay"
                        />
                      </div>

                      {/* Enhanced Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-800/30 to-transparent group-hover:from-slate-900/98 transition-all duration-300"></div>

                      {/* Floating Category Icon */}
                      <div className="absolute top-6 right-6 p-3 bg-white/20 backdrop-blur-md rounded-xl border border-white/30 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                        <CategoryIcon className="w-6 h-6 text-white" />
                      </div>

                      {/* Content */}
                      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                        {/* Industry Tags */}
                        <div className="flex flex-wrap gap-2 mb-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                          {application.industries.slice(0, 2).map((industry: string, index: number) => (
                            <span key={index} className="px-3 py-1 bg-white/20 backdrop-blur-sm text-xs rounded-full border border-white/30">
                              {industry}
                            </span>
                          ))}
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl font-bold mb-3 transform group-hover:translate-y-0 transition-transform duration-300 tracking-tight">
                          {application.title.toUpperCase()}
                        </h3>

                        {/* Description - Enhanced visibility */}
                        <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-200">
                          <p className="text-sm mb-4 leading-relaxed text-slate-200">
                            {application.description}
                          </p>

                          {/* Key Benefits with improved styling */}
                          <div className="space-y-2 mb-4">
                            {application.keyBenefits.slice(0, 3).map((benefit: string, index: number) => (
                              <div key={index} className="flex items-center text-xs">
                                <CheckCircle className="w-3 h-3 text-emerald-400 mr-2 flex-shrink-0" />
                                <span className="text-slate-300">{benefit}</span>
                              </div>
                            ))}
                          </div>

                          {/* Learn More Link */}
                          <div className="flex items-center text-sm font-semibold text-cyan-300 hover:text-cyan-200 transition-colors">
                            Learn More
                            <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>

            {/* Enhanced Navigation Buttons */}
            <CarouselPrevious className="hidden md:flex -left-12 bg-white/90 backdrop-blur-md border-slate-200 hover:bg-white text-slate-700 shadow-xl" />
            <CarouselNext className="hidden md:flex -right-12 bg-white/90 backdrop-blur-md border-slate-200 hover:bg-white text-slate-700 shadow-xl" />
          </Carousel>

          {/* Mobile Navigation Hint */}
          <div className="flex justify-center mt-6 md:hidden">
            <p className="text-sm text-slate-500 bg-white/70 px-4 py-2 rounded-full shadow-lg">
              Swipe to explore more applications →
            </p>
          </div>
        </div>

        {/* Enhanced Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-cyan-600 via-blue-600 to-blue-700 rounded-2xl p-12 text-white relative overflow-hidden shadow-2xl">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full transform -translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full transform translate-x-20 translate-y-20"></div>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight">Ready to Transform Your Industry?</h3>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Need a solution for your specific industry? Our experts understand the unique challenges across all industrial sectors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/applications" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-white text-blue-600 hover:bg-slate-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 group">
                  View All Applications
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300">
                  Contact Our Experts
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
