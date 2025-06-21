"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect } from "react";

// Counter component for individual stat animation
function CounterAnimation({ target, suffix = "", duration = 2 }: { target: number; suffix?: string; duration?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, target, { duration, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, count, target, duration]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <motion.span>{rounded}</motion.span>{suffix}
    </motion.span>
  );
}

export default function StatsSection() {
  const stats = [
    {
      target: 115,
      suffix: "+",
      label: "Countries"
    },
    {
      target: 5000,
      suffix: "+",
      label: "Satisfied Customers"
    },
    {
      target: 2000,
      suffix: "+",
      label: "Projects Done"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="flex flex-col items-center gap-8 sm:gap-12 lg:gap-16 text-center max-w-sm sm:max-w-md lg:max-w-lg mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-1 sm:mb-2">
                <CounterAnimation 
                  target={stat.target} 
                  suffix={stat.suffix}
                  duration={2 + index * 0.3}
                />
              </div>
              <div className="text-base sm:text-lg lg:text-xl text-gray-600">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}