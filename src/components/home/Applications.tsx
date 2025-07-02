"use client";

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
import { applications } from "@/lib/applications";
import {
  ArrowRight,
  Factory,
  Anchor,
  Zap,
  Building,
  CheckCircle,
} from "lucide-react";

const featuredApplications = applications.slice(0, 8); // or filter as needed

// Icon mapping for different application categories
const getCategoryIcon = (category: string) => {
  switch (category) {
    case "energy":
      return Zap;
    case "marine":
      return Anchor;
    case "industrial":
      return Factory;
    default:
      return Building;
  }
};

export default function ApplicationsSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-16 bg-gradient-to-br from-white via-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 sm:top-20 right-4 sm:right-10 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute bottom-10 sm:bottom-20 left-4 sm:left-10 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-xs sm:text-sm xl:text-base font-semibold mb-4 sm:mb-6">
            <Factory className="w-3 h-3 sm:w-4 sm:h-4" />
            Industry Applications
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[64px] 2xl:text-7xl font-bold text-slate-900 mb-4 sm:mb-6 lg:mb-8 leading-tight tracking-tight">
            APPLICATIONS
            <span className="block bg-gradient-to-r from-cyan-600 via-blue-500 to-cyan-700 bg-clip-text text-transparent">
              ACROSS INDUSTRIES
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-ls xl:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed px-2 sm:px-4">
            The industries around which our know-how revolves - delivering
            mission-critical solutions where failure is not an option.
          </p>
        </div>

        {/* Applications Carousel */}
        <div className="relative mb-12 sm:mb-16 lg:mb-20">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-1 sm:-ml-2 md:-ml-4">
              {featuredApplications.map((application) => {
                const CategoryIcon = getCategoryIcon(
                  application.industry[0] || "",
                );
                return (
                  <CarouselItem
                    key={application.id}
                    className="pl-1 sm:pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/4"
                  >
                    <div className="group relative h-72 xs:h-80 sm:h-88 md:h-96 lg:h-72 xl:h-80 rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-1 sm:hover:-translate-y-2">
                      {/* Background Image with Enhanced Gradient */}
                      <div className="absolute inset-0">
                        <div
                          className={`absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-700 opacity-90`}
                        ></div>
                        <Image
                          src={
                            application.images?.[0] || "/images/placeholder.jpg"
                          }
                          alt={application.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700 mix-blend-overlay"
                        />
                      </div>

                      {/* Enhanced Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-800/30 to-transparent group-hover:from-slate-900/98 transition-all duration-300"></div>

                      {/* Floating Category Icon */}
                      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 lg:top-4 lg:right-4 xl:top-6 xl:right-6 p-2 sm:p-2.5 lg:p-2 xl:p-3 bg-white/20 backdrop-blur-md rounded-md sm:rounded-lg lg:rounded-xl border border-white/30 group-hover:scale-110 transition-transform duration-300 shadow-lg sm:shadow-xl">
                        <CategoryIcon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6 text-white" />
                      </div>

                      {/* Content */}
                      <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-4 md:p-5 lg:p-4 xl:p-6 text-white">
                        {/* Industry Tags */}
                        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-2 sm:mb-3 lg:mb-2 xl:mb-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                          {application.industry
                            .slice(0, 2)
                            .map((industry: string, index: number) => (
                              <span
                                key={index}
                                className="px-2 sm:px-3 lg:px-2 xl:px-3 py-1 bg-white/20 backdrop-blur-sm text-xs rounded-full border border-white/30"
                              >
                                {industry}
                              </span>
                            ))}
                        </div>

                        {/* Title */}
                        <h3 className="text-lg xs:text-xl sm:text-xl md:text-2xl lg:text-lg xl:text-2xl font-bold mb-2 sm:mb-3 lg:mb-2 xl:mb-3 transform group-hover:translate-y-0 transition-transform duration-300 tracking-tight">
                          {application.title.toUpperCase()}
                        </h3>

                        {/* Description - Enhanced visibility */}
                        <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-200">
                          <p className="text-xs sm:text-sm lg:text-xs xl:text-sm mb-2 sm:mb-3 lg:mb-2 xl:mb-4 leading-relaxed text-slate-200">
                            {typeof application.additionalInfo === "string"
                              ? application.additionalInfo
                              : application.additionalInfo?.content?.join(
                                  " ",
                                ) || ""}
                          </p>

                          {/* Key Benefits with improved styling */}
                          <div className="space-y-1.5 sm:space-y-2 lg:space-y-1 xl:space-y-2 mb-2 sm:mb-3 lg:mb-2 xl:mb-4">
                            {(application.benefits || [])
                              .slice(0, 3)
                              .map((benefit: string, index: number) => (
                                <div
                                  key={index}
                                  className="flex items-center text-xs"
                                >
                                  <CheckCircle className="w-3 h-3 text-emerald-400 mr-1.5 sm:mr-2 lg:mr-1.5 flex-shrink-0" />
                                  <span className="text-slate-300">
                                    {benefit}
                                  </span>
                                </div>
                              ))}
                          </div>

                          {/* Learn More Link */}
                          <div className="flex items-center text-xs sm:text-sm lg:text-xs xl:text-sm font-semibold text-cyan-300 hover:text-cyan-200 transition-colors">
                            Learn More
                            <ArrowRight className="ml-1 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>

            {/* Enhanced Navigation Buttons */}
            <CarouselPrevious className="hidden md:flex -left-8 lg:-left-12 bg-white/90 backdrop-blur-md border-slate-200 hover:bg-white text-slate-700 shadow-lg sm:shadow-xl" />
            <CarouselNext className="hidden md:flex -right-8 lg:-right-12 bg-white/90 backdrop-blur-md border-slate-200 hover:bg-white text-slate-700 shadow-lg sm:shadow-xl" />
          </Carousel>

          {/* Mobile Navigation Hint */}
          <div className="flex justify-center mt-4 sm:mt-6 md:hidden">
            <p className="text-xs sm:text-sm text-slate-500 bg-white/70 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-lg">
              Swipe to explore more applications →
            </p>
          </div>
        </div>

        {/* Enhanced Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-cyan-600 via-blue-600 to-blue-700 rounded-lg sm:rounded-xl lg:rounded-2xl p-6 sm:p-8 lg:p-12 text-white relative overflow-hidden shadow-lg sm:shadow-2xl mx-2 sm:mx-0">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-16 sm:w-24 lg:w-32 h-16 sm:h-24 lg:h-32 bg-white rounded-full transform -translate-x-8 sm:-translate-x-12 lg:-translate-x-16 -translate-y-8 sm:-translate-y-12 lg:-translate-y-16"></div>
            <div className="absolute bottom-0 right-0 w-20 sm:w-30 lg:w-40 h-20 sm:h-30 lg:h-40 bg-white rounded-full transform translate-x-10 sm:translate-x-15 lg:translate-x-20 translate-y-10 sm:translate-y-15 lg:translate-y-20"></div>
          </div>

          <div className="relative z-10">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] xl:text-[48px] font-bold mb-4 sm:mb-6 tracking-tight">
              Ready to Transform Your Industry?
            </h3>
            <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-[20px] mb-6 sm:mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
              Need a solution for your specific industry? Our experts understand
              the unique challenges across all industrial sectors.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link href="/applications" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-white text-blue-600 hover:bg-slate-100 hover:text-blue-700 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base lg:text-lg xl:text-xl font-semibold rounded-lg sm:rounded-xl shadow-lg sm:shadow-xl hover:shadow-2xl transition-all duration-300 group">
                  View All Applications
                  <ArrowRight className="ml-1.5 sm:ml-2 w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-white/20 backdrop-blur-sm border-2 border-white/40 text-white hover:bg-white hover:text-blue-600 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base lg:text-lg xl:text-xl font-semibold rounded-lg sm:rounded-xl transition-all duration-300">
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
