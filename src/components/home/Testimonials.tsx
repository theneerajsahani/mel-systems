"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/lib/testimonials";

export default function Testimonials() {
  // Create a doubled array for seamless looping
  const doubledTestimonials = [...testimonials, ...testimonials];
  
  return (
    <section className="py-12 lg:py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What our clients say about us
          </h2>
        </motion.div>

        {/* First Row - Moving Right to Left */}
        <div className="relative mb-6">
          <motion.div
            className="flex gap-4"
            animate={{
              x: [0, -100 * testimonials.length / 2], // Move by half the total width
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
          >
            {doubledTestimonials.map((testimonial, index) => (
              <Card 
                key={`${testimonial.id}-${index}`} 
                className="flex-shrink-0 w-72 bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-5">
                  {/* Company Logo Placeholder */}
                  <div className="mb-4">
                    <div className="h-6 w-18 bg-gray-200 rounded flex items-center justify-center">
                      <span className="text-xs font-medium text-gray-500">LOGO</span>
                    </div>
                  </div>
                  
                  {/* Testimonial Text */}
                  <blockquote className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
                    {testimonial.content}
                  </blockquote>
                  
                  {/* Author Information */}
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-medium">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <cite className="font-semibold text-gray-900 not-italic text-sm">
                        {testimonial.name}
                      </cite>
                      <p className="text-xs text-gray-500">
                        {testimonial.position}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>

        {/* Second Row - Moving Left to Right (Opposite Direction) */}
        <div className="relative">
          <motion.div
            className="flex gap-4"
            animate={{
              x: [-100 * testimonials.length / 2, 0], // Move in opposite direction
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
          >
            {doubledTestimonials.reverse().map((testimonial, index) => (
              <Card 
                key={`${testimonial.id}-reverse-${index}`} 
                className="flex-shrink-0 w-72 bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-5">
                  {/* Company Logo Placeholder */}
                  <div className="mb-4">
                    <div className="h-6 w-18 bg-gray-200 rounded flex items-center justify-center">
                      <span className="text-xs font-medium text-gray-500">LOGO</span>
                    </div>
                  </div>
                  
                  {/* Testimonial Text */}
                  <blockquote className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
                    {testimonial.content}
                  </blockquote>
                  
                  {/* Author Information */}
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-medium">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <cite className="font-semibold text-gray-900 not-italic text-sm">
                        {testimonial.name}
                      </cite>
                      <p className="text-xs text-gray-500">
                        {testimonial.position}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
