"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { useRef, useEffect } from "react";

// Counter component for individual stat animation
function CounterAnimation({
  target,
  suffix = "",
  duration = 2,
}: {
  target: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
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
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.span>{rounded}</motion.span>
      {suffix}
    </motion.span>
  );
}

export default function StatsSection() {
  const stats = [
    {
      target: 115,
      suffix: "+",
      label: "Countries",
    },
    {
      target: 5000,
      suffix: "+",
      label: "Satisfied Customers",
    },
    {
      target: 2000,
      suffix: "+",
      label: "Projects Done",
    },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[24px] sm:text-[30px] md:text-[36px] lg:text-[48px] xl:text-[64px] 2xl:text-[54px] font-bold text-gray-900 mb-12 sm:mb-16 md:mb-14 lg:mb-16 w-full">
            OUR IMPACT
          </h2>

          <div className="grid grid-cols-1 gap-8 sm:gap-12 md:gap-16 lg:gap-20 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[48px] xl:text-[64px] 2xl:text-[72px] font-bold text-gray-900 mb-2">
                  <CounterAnimation
                    target={stat.target}
                    suffix={stat.suffix}
                    duration={1.5 + index * 0.2}
                  />
                </div>
                <div className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[24px] xl:text-[32px] 2xl:text-[30px] text-gray-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
