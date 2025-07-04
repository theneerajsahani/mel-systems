"use client";

import React from "react";

export default function WhyChooseUs2() {
  return (
    <section className="flex justify-center items-center min-h-[60vh] px-4 md:px-10 lg:px-[64px] py-20 lg:py-16 xl:py-20 mb-[100px]">
      <div
        className="relative w-full rounded-2xl lg:rounded-4xl overflow-hidden min-h-[320px] flex items-center py-16 lg:py-[200px]"
        style={{ minHeight: 320 }}
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/pexels-500photos-com-15338-93398.jpg')",
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 sm:bg-black/50 "/>
        {/* Content */}
        <div className="flex flex-row relative z-10 p-4 md:px-16 lg:px-20 xl:px-[160px] text-center text-white gap-8">
          <div className="w-full text-[24px] lg:text-[32px] font-bold uppercase lg:flex flex-col gap-4 items-start">
            <h1>Every Industry.</h1>
            <h1>Every Element.</h1>
            <h1>Zero Excuses.</h1>
          </div>
          <div className="flex flex-col text-left w-full text-[12px] lg:text-base gap-2 lg:gap-4">
            <p>Whatever you operate, wherever you are, we have the technology to protect it, monitor it, and optimize its performance.</p>
            <p>Explore your sector. Pinpoint your machinery. Let’s solve the challenges that cost you time, money, and safety.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
