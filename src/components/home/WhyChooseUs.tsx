"use client";

import React from "react";

export default function WhyChooseUs() {
  return (
    <section className="flex justify-center items-center min-h-[60vh] px-4 md:px-10 lg:px-[64px] py-20 lg:py-16 xl:py-20">
      <div
        className="relative w-full rounded-2xl lg:rounded-4xl overflow-hidden min-h-[320px] flex items-center py-16 lg:py-20 xl:py-[200px]"
        style={{ minHeight: 320 }}
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/Technician Walking in Solar Farm at Sunset.jpeg')",
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 sm:bg-black/50 "/>
        {/* Content */}
        <div className="relative z-10 p-4 md:px-16 lg:px-20 xl:px-[160px] text-center text-white">
          <h1 className="text-[24px] md:text-[32px] font-bold uppercase mb-4 sm:mb-6 leading-tight">
            Partner that shows up
          </h1>
          <p className="mb-3 sm:mb-4 text-[12px] md:text-[14px] lg:text-base">
            Mel Systems delivers advanced solutions that cut maintenance costs—both routine and emergency—across industries like renewable energy, transport, industrial, agricultural, ports etc. We offer ESG solutions plant machinery like engines gear-boxes hydraulics turbines compressors.
          </p>
          <p className="text-[12px] md:text-[14px] lg:text-base">
            From wind turbines to diesel engines, compressors to cogeneration units, our smart sensors, gateways, and control panels give you full visibility and control over any machinery. With years of hands-on experience in power generation and large engine systems, our expertise runs deep—and delivers where it counts.
          </p>
        </div>
      </div>
    </section>
  );
}
