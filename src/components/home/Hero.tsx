"use client";

import { Button } from "../ui/button";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function HeroSection() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [showFallback, setShowFallback] = useState(true);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    console.log("🚀 Hero Performance Optimization v2.0 - Component Mounted");

    // Only load video after initial render to improve LCP
    const videoTimer = setTimeout(() => {
      if (videoRef.current && !videoLoaded) {
        console.log("📹 Loading video after 500ms delay for better LCP");
        videoRef.current.load();
        videoRef.current.play().catch(() => {
          console.log(
            "🔇 Autoplay blocked - video will play on user interaction",
          );
        });
      }
    }, 500);

    return () => {
      clearTimeout(videoTimer);
    };
  }, [videoLoaded]);

  return (
    <section className="relative flex flex-col px-6 md:px-12 lg:px-16 py-10 md:py-10 lg:py-20 items-center justify-center min-h-[90vh] md:min-h-[95vh] lg:min-h-screen overflow-hidden">
      {/* Fallback Black Background - Shows instantly */}
      {(showFallback || videoError) && (
        <div
          className="absolute inset-0 w-full h-full transition-opacity duration-500"
          style={{
            backgroundColor: "#000000",
            willChange: "opacity",
          }}
        />
      )}

      {/* Optimized Background Video - Final Version */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          videoLoaded && !videoError ? "opacity-100" : "opacity-0"
        }`}
        style={{
          filter: "brightness(0.7)",
          willChange: "opacity",
          transform: "translate3d(0,0,0)", // Hardware acceleration
        }}
        onLoadedData={() => {
          console.log(
            "✅ Video loaded successfully - Performance Opt Working!",
          );
          setVideoLoaded(true);
          setShowFallback(false);
          setVideoError(false);
        }}
        onCanPlayThrough={() => {
          console.log("🎬 Video can play through - Ready for smooth playback");
          setVideoLoaded(true);
          setShowFallback(false);
        }}
        onError={() => {
          console.log("❌ Video failed to load - Using fallback");
          setVideoError(true);
          setVideoLoaded(false);
          setShowFallback(true);
        }}
        onCanPlay={() => {
          console.log("▶️ Video can start playing");
          setVideoLoaded(true);
          setShowFallback(false);
        }}
      >
        {/* Responsive video sources - optimized for different screen sizes */}
        <source
          src="/hero-optimized.webm"
          type="video/webm"
          media="(min-width: 1024px)"
        />
        <source
          src="/hero-optimized.mp4"
          type="video/mp4"
          media="(min-width: 768px)"
        />
        <source
          src="/hero-mobile.mp4"
          type="video/mp4"
          media="(max-width: 767px)"
        />
        <source src="/hero-optimized.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Enhanced Gradient Overlay for Better Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-slate-900/40 to-black/70"></div>
      {/* Additional overlay for text contrast */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl w-full flex flex-col items-center justify-center text-center gap-8 md:gap-10">
        {/* Main Heading with Enhanced Animation */}
        <div className="space-y-4 md:space-y-6">
          <h1 className="text-[24px] md:text-[36px] lg:text-[48px] 2xl:text-[64px] font-bold text-white leading-tight tracking-tight drop-shadow-2xl">
            <span className="block opacity-0 animate-[fadeInUp_1s_ease-out_0.2s_forwards] bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              MEL SYSTEMS
            </span>
          </h1>
          <div className="w-24 sm:w-32 md:w-40 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full opacity-0 animate-[fadeIn_1s_ease-out_1s_forwards]"></div>
        </div>
        {/* Enhanced Description */}
        <div className="flex flex-col items-center gap-8 max-w-5xl px-4 opacity-0 animate-[fadeInUp_1s_ease-out_1.2s_forwards]">
          <p className="text-[16px] md:text-[24px] lg:text-[32px] xl:text-[32px] text-white font-bold leading-relaxed text-center drop-shadow-lg">
            OIL CONDITIONING & SAFETY SYSTEMS
          </p>
          <p className="text-[14px] md:text-[16px] lg:text-[20px] text-white font-medium leading-relaxed text-center drop-shadow-md">
            For Machines That Don't Get a Second Chance
          </p>
          <p className="text-[12px] md:text-[14px] lg:text-base text-slate-200 leading-relaxed max-w-3xl text-center drop-shadow-sm">
            We guarantee better management of industrial plants with optimized
            maintenance costs and full support for environmental sustainability
            by significantly reducing CO2 emissions.
          </p>
        </div>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 sm:px-0 opacity-0 animate-[fadeInUp_1s_ease-out_1.8s_forwards]">
          <Link href="/products" className="w-full sm:w-auto">
            <Button className="w-full sm:w-auto px-8 py-4 bg-black text-white font-semibold text-[12px] md:text-[14px] lg:text-base rounded-xl shadow-2xl hover:bg-neutral-900 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
              Explore Our Solutions
            </Button>
          </Link>
          <Link href="/contact" className="w-full sm:w-auto">
            <Button
              variant="outline"
              className="w-full sm:w-auto px-8 py-4 border-2 border-black text-black hover:bg-black hover:text-white font-semibold text-[12px] md:text-[14px] lg:text-base rounded-xl transition-all duration-300 backdrop-blur-sm bg-white"
            >
              Get Expert Consultation
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
