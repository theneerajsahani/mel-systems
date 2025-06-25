"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/lib/testimonials";

export default function Testimonials() {
  // Create enough copies for truly infinite scroll
  const infiniteTestimonials = [
    ...testimonials.slice(0, 10),
    ...testimonials.slice(0, 10),
    ...testimonials.slice(0, 10),
    ...testimonials.slice(0, 10),
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 2xl:py-36 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[48px] xl:text-[64px] 2xl:text-[54px] font-bold text-gray-900 mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-28 2xl:mb-32">
            TESTIMONIALS
          </h2>
        </motion.div>

        {/* CSS Keyframes for infinite scroll */}
        <style jsx>{`
          @keyframes scrollLeft {
            0% { transform: translateX(-25%); }
            100% { transform: translateX(-75%); }
          }
          
          @keyframes scrollRight {
            0% { transform: translateX(-75%); }
            100% { transform: translateX(-25%); }
          }
          
          .scroll-left {
            animation: scrollLeft 60s linear infinite;
          }
          
          .scroll-right {
            animation: scrollRight 60s linear infinite;
          }
          
          .testimonial-row {
            width: 400%;
          }
        `}</style>

        {/* First Row - Continuous Right to Left */}
        <div className="relative mb-6 xl:mb-8 2xl:mb-10">
          <div className="flex gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8 2xl:gap-10 scroll-left testimonial-row">
            {infiniteTestimonials.map((testimonial, index) => (
              <Card key={index} className="w-64 sm:w-72 md:w-80 lg:w-96 xl:w-[28rem] 2xl:w-[32rem] flex-shrink-0 border border-gray-200 hover:shadow-md transition-shadow duration-300 rounded-lg">
                <CardContent className="p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 2xl:p-9">
                  <div className="flex items-center mb-3 sm:mb-4 md:mb-5">
                    <div className="ml-0">
                      <h4 className="font-semibold text-gray-900 text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px]">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-600 text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px]">
                        {testimonial.position}
                      </p>
                      <p className="text-gray-500 text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] leading-relaxed">
                    {testimonial.content}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Second Row - Continuous Left to Right */}
        <div className="relative">
          <div className="flex gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8 2xl:gap-10 scroll-right testimonial-row">
            {infiniteTestimonials.map((testimonial, index) => (
              <Card key={index} className="w-64 sm:w-72 md:w-80 lg:w-96 xl:w-[28rem] 2xl:w-[32rem] flex-shrink-0 border border-gray-200 hover:shadow-md transition-shadow duration-300 rounded-lg">
                <CardContent className="p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 2xl:p-9">
                  <div className="flex items-center mb-3 sm:mb-4 md:mb-5">
                    <div className="ml-0">
                      <h4 className="font-semibold text-gray-900 text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px]">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-600 text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px]">
                        {testimonial.position}
                      </p>
                      <p className="text-gray-500 text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] leading-relaxed">
                    {testimonial.content}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
