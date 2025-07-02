"use client";

import { motion } from "framer-motion";
import { Shield, Target, Zap, Clock, Globe, Award } from "lucide-react";

export default function WhyChooseUs() {
  const mainFeatures = [
    {
      title: "Partner That Shows Up",
      description:
        "Mel Systems delivers advanced solutions that cut maintenance costs—both routine and emergency—across industries like renewable energy, transport, industrial, agricultural, ports etc. We offer ESG solutions plant machinery like engines gear-boxes hydraulics turbines compressors.",
      details:
        "From wind turbines to diesel engines, compressors to cogeneration units, our smart sensors, gateways, and control panels give you full visibility and control over any machinery. With years of hands-on experience in power generation and large engine systems, our expertise runs deep—and delivers where it counts.",
      icon: Shield,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Every Industry. Every Element. Zero Excuses.",
      description:
        "Whatever you operate, wherever you are, we have the technology to protect it, monitor it, and optimize its performance.",
      details:
        "Explore your sector. Pinpoint your machinery. Let's solve the challenges that cost you time, money, and safety.",
      icon: Target,
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  const highlights = [
    {
      icon: Zap,
      title: "30+ Years Experience",
      description:
        "Deep technical expertise in lubrication and oil conditioning",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Always available when you need us most",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving clients across multiple industries worldwide",
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Delivering measurable improvements in performance",
    },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] xl:text-[64px] font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-4"
          >
            WHY CHOOSE US
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-16 sm:mb-20 rounded-full"
          />

          {/* Main Features */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 max-w-7xl mx-auto mb-16 sm:mb-20 md:mb-24">
            {mainFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 sm:p-10 md:p-12 h-full border border-gray-100 hover:border-blue-200 group-hover:scale-105">
                    <div className="flex justify-center mb-8">
                      <div
                        className={`p-4 rounded-2xl bg-gradient-to-r ${feature.gradient} shadow-lg group-hover:shadow-xl transition-all duration-300`}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] xl:text-[48px] font-bold text-gray-900 mb-6 group-hover:text-blue-600 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <div className="space-y-6 text-left">
                      <p className="text-base sm:text-lg md:text-lg xl:text-xl text-gray-700 leading-relaxed">
                        {feature.description}
                      </p>
                      <p className="text-sm sm:text-base md:text-lg xl:text-[20px] text-gray-600 leading-relaxed border-l-4 border-blue-200 pl-4 bg-blue-50 py-3 rounded-r-lg">
                        {feature.details}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Highlights Grid */}
          <div className="relative">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl md:text-[32px] xl:text-[48px] font-bold text-gray-900 mb-12 text-center"
            >
              Our Commitments
            </motion.h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
              {highlights.map((highlight, index) => {
                const IconComponent = highlight.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 text-center border border-gray-100 hover:border-blue-200 group-hover:scale-105 h-full">
                      <div className="flex justify-center mb-4">
                        <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <h4 className="text-lg sm:text-xl xl:text-[24px] font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                        {highlight.title}
                      </h4>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
