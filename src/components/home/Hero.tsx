import { Button } from "../ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col px-4 sm:px-6 md:px-8 lg:px-16 py-12 md:py-20 lg:py-25 items-start justify-center gap-4 min-h-[50vh] md:min-h-[70vh] lg:min-h-[80vh]">
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
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl 2xl:text-6xl font-bold uppercase text-white drop-shadow-lg leading-tight xl:leading-tight 2xl:leading-tight">
            Machinery Extended Life
          </h1>
          <div className="flex flex-col gap-3 sm:gap-4 lg:gap-5 xl:gap-6">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-white/95 drop-shadow leading-relaxed xl:leading-relaxed 2xl:leading-relaxed font-medium">
              Premium Oil Conditioning & Safety Systems for Machines That Don't Get a Second Chance.
            </p>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-white/90 drop-shadow leading-relaxed xl:leading-relaxed 2xl:leading-relaxed">
              We guarantee better management of the plant with relative optimization of maintenance costs and fully support environmental sustainability by significantly reducing CO2 emissions.
            </p>
          </div>
          <Button className="text-sm sm:text-base md:text-lg xl:text-xl 2xl:text-2xl bg-blue-500 hover:bg-blue-600 text-white shadow-lg w-fit px-4 sm:px-6 md:px-8 xl:px-10 2xl:px-12 py-2 sm:py-3 md:py-4 xl:py-5 2xl:py-6 mt-2 sm:mt-4 xl:mt-6 transition-all duration-300" variant="default">
            Explore our Solutions
          </Button>
        </div>
      </div>
    </section>
  );
}