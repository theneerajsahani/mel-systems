import { Button } from "../ui/button";
import Image from "next/image";

export default function FirstHeroSection() {
  return (
    <section className="relative flex flex-col px-4 md:px-8 lg:px-16 items-center justify-center min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] -mt-16 md:-mt-20 pt-16 md:pt-20">
      {/* Optimized Background Image */}
      <Image
        src="/images/1.jpg"
        alt="Industrial machinery background"
        fill
        className="object-cover object-center"
        priority
        quality={75}
        sizes="100vw"
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-screen-xl w-full flex flex-col items-start justify-center gap-4">
        <h1 className="text-[20px] md:text-[32px] lg:text-[48px] font-bold text-white uppercase">
          Machinery Extended Life
        </h1>
        <div className="flex flex-col items-start gap-2 max-w-3xl">
          <p className="text-[14px] lg:text-[16px] text-white">
            Premium Oil Conditioning & Safety Systems for Machines That Don't Get a Second Chance.
          </p>
          <p className="text-[14px] lg:text-[16px] text-white">
            We guarantee better management of the plant with relative optimization of maintenance costs and fully support environmental sustainability by significantly reducing CO2 emissions.
          </p>
        </div>
      </div>
    </section>
  );
}