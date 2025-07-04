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
          <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 bg-gray-100 rounded-full text-[10px] md:text-[12px] font-semibold mb-4 sm:mb-6">
            <Factory className="w-3 h-3 sm:w-4 sm:h-4" />
            Industry Applications
          </div>
          <h2 className="text-[24px] md:text-[32px] lg:text-[48px] font-bold text-slate-900 mb-4 sm:mb-6 lg:mb-8 leading-tight tracking-tight">
            Applications
            <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent">
              Across Industries
            </span>
          </h2>
          <p className="text-[12px] md:text-base text-slate-600 max-w-3xl mx-auto leading-relaxed px-2 sm:px-4">
            The industries around which our know-how revolves - delivering
            mission-critical solutions where failure is not an option.
          </p>
        </div>

        {/* Applications Carousel */}
        <div className="relative mb-12 lg:mb-20">
          <Carousel
            opts={{
              align: "start",
              loop: false,
            }}
            className="w-full"
          >
            <CarouselContent className="">
              {featuredApplications.map((application) => {
                const CategoryIcon = getCategoryIcon(
                  application.industry[0] || "",
                );
                return (
                  <CarouselItem
                    key={application.id}
                    className="basis-1/2 md:basis-1/3 lg:basis-1/4"
                  >
                    <div className="group relative h-40 md:h-60 lg:h-72 xl:h-80 rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-1 sm:hover:-translate-y-2">
                      {/* Background Image with Enhanced Gradient */}
                      <div className="absolute inset-0">
                        <div
                          className={`absolute inset-0`}
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

                      {/* Card Title at Bottom */}
                      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent px-3 py-2 sm:px-4 sm:py-3 md:px-5 lg:px-4 xl:px-6 rounded-b-lg sm:rounded-b-xl lg:rounded-b-2xl z-20">
                        <h3 className="text-[10px] md:text-[12px] lg:text-[16px] font-bold text-white tracking-tight text-center whitespace-normal break-words">
                          {application.title.toUpperCase()}
                        </h3>
                      </div>

                      {/* Content */}
                      <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-4 md:p-5 lg:p-4 xl:p-6 text-white pb-12">
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

                        {/* Description - Enhanced visibility */}
                        <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-200">
                          <p className="text-xs sm:text-sm lg:text-xs xl:text-sm mb-2 sm:mb-3 lg:mb-2 xl:mb-4 leading-relaxed text-slate-200">
                            {application.additionalInfo?.map(info => info.content?.join(" ")).join(" | ") || ""}
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
            <p className="text-[10px] sm:text-sm text-slate-500 bg-white/70 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-lg">
              Swipe to explore more applications →
            </p>
          </div>
        </div>

        {/* Enhanced Bottom CTA */}
        <div className="text-center bg-white rounded-lg sm:rounded-xl lg:rounded-2xl p-6 sm:p-8 lg:p-12 text-slate-900 relative overflow-hidden shadow-lg sm:shadow-2xl mx-2 sm:mx-0">
          {/* Optional: Subtle background pattern for light effect */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute top-0 left-0 w-32 h-32 bg-pink-100 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-100 rounded-full translate-x-1/3 translate-y-1/3"></div>
          </div>

          <div className="relative z-10">
            <h3 className="text-[18px] md:text-[32px] font-bold mb-4 sm:mb-6 tracking-tight text-slate-900">
              Ready to Transform Your Industry?
            </h3>
            <p className="text-[12px] md:text-[14px] lg:text-[16px] mb-6 sm:mb-8 text-slate-600 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
              Need a solution for your specific industry? Our experts understand
              the unique challenges across all industrial sectors.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link href="/contact">
                <Button className="w-full sm:w-auto bg-black text-white hover:bg-neutral-900 px-6 sm:px-8 py-3 sm:py-4 text-[12px] md:text-[14px] lg:text-[16px] font-semibold rounded-lg sm:rounded-xl shadow-lg sm:shadow-xl transition-all duration-300">
                  Get Expert Consultation
                </Button>
              </Link>
              <Link href="/applications">
                <Button variant="outline" className="w-full sm:w-auto bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 px-6 sm:px-8 py-3 sm:py-4 text-[12px] md:text-[14px] lg:text-[16px] font-semibold rounded-lg sm:rounded-xl shadow-lg sm:shadow-xl transition-all duration-300 group">
                  View All Applications
                  <ArrowRight className="ml-1.5 sm:ml-2 w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
