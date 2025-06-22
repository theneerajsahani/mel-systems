'use client';

import { Button } from "../ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col px-6 md:px-12 lg:px-16 items-center justify-center min-h-[90vh] md:min-h-[95vh] lg:min-h-screen -mt-16 md:-mt-20 pt-16 md:pt-20 overflow-hidden">
      {/* Optimized Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover scale-105"
        style={{ filter: 'brightness(0.7)' }}
      >
        <source src="/Mel Systems - Hero.mp4" type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        <div className="absolute inset-0 bg-slate-900"></div>
      </video>

      {/* Enhanced Gradient Overlay for Better Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-slate-900/40 to-black/70"></div>
      {/* Additional overlay for text contrast */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl w-full flex flex-col items-center justify-center text-center gap-8 md:gap-12">
        {/* Main Heading with Enhanced Animation */}        <div className="space-y-4 md:space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight tracking-tight drop-shadow-2xl">
            <span className="block opacity-0 animate-[fadeInUp_1s_ease-out_0.2s_forwards]">MEL SYSTEMS</span>
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent opacity-0 animate-[fadeInUp_1s_ease-out_0.6s_forwards] drop-shadow-lg">
              INDUSTRIAL SOLUTIONS
            </span>
          </h1>
          <div className="w-24 sm:w-32 md:w-40 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full opacity-0 animate-[fadeIn_1s_ease-out_1s_forwards]"></div>
        </div>        {/* Enhanced Description */}
        <div className="flex flex-col items-center gap-4 md:gap-6 max-w-5xl px-4 opacity-0 animate-[fadeInUp_1s_ease-out_1.2s_forwards]">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-bold leading-relaxed text-center drop-shadow-lg">
            Premium Oil Conditioning & Safety Systems
          </p>
          <p className="text-lg sm:text-xl md:text-2xl text-cyan-100 font-medium leading-relaxed text-center drop-shadow-md">
            For Machines That Don't Get a Second Chance
          </p>
          <p className="text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed max-w-4xl text-center drop-shadow-sm">
            We guarantee better management of industrial plants with optimized maintenance costs and full support for environmental sustainability by significantly reducing CO2 emissions.
          </p>
        </div>

        {/* Key Features Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-4xl px-4 opacity-0 animate-[fadeInUp_1s_ease-out_1.4s_forwards]">
          <div className="flex flex-col items-center text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <div className="text-2xl md:text-3xl font-bold text-cyan-300 mb-1">300%</div>
            <div className="text-sm md:text-base text-white/90">Equipment Life Extension</div>
          </div>
          <div className="flex flex-col items-center text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <div className="text-2xl md:text-3xl font-bold text-blue-300 mb-1">60%</div>
            <div className="text-sm md:text-base text-white/90">Cost Reduction</div>
          </div>
          <div className="flex flex-col items-center text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <div className="text-2xl md:text-3xl font-bold text-cyan-300 mb-1">24/7</div>
            <div className="text-sm md:text-base text-white/90">Real-time Monitoring</div>
          </div>
          <div className="flex flex-col items-center text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <div className="text-2xl md:text-3xl font-bold text-blue-300 mb-1">95%</div>
            <div className="text-sm md:text-base text-white/90">Safety Improvement</div>
          </div>
        </div>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6 md:mt-8 w-full sm:w-auto px-4 sm:px-0 opacity-0 animate-[fadeInUp_1s_ease-out_1.8s_forwards]">
          <Link href="/products" className="w-full sm:w-auto">
            <Button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold text-lg rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
              Explore Our Solutions
            </Button>
          </Link>
          <Link href="/contact" className="w-full sm:w-auto">
            <Button variant="outline" className="w-full sm:w-auto px-8 py-4 border-2 border-white/80 text-white hover:bg-white hover:text-slate-900 font-semibold text-lg rounded-xl transition-all duration-300 backdrop-blur-sm bg-white/10">
              Get Expert Consultation
            </Button>
          </Link>
        </div>
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 animate-[fadeInBounce_1s_ease-out_2.2s_forwards]">
          <div className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center backdrop-blur-sm">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}