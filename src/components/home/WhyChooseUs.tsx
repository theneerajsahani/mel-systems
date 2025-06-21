"use client";

import { motion } from "framer-motion";
import { Shield, Target, Zap, Clock, Globe, Award } from "lucide-react";

export default function WhyChooseUs() {
  const mainFeatures = [
    {
      title: "Support/Partner That Shows Up",
      description: "Mel Systems delivers advanced solutions that cut maintenance costs—both routine and emergency—across industries like renewable energy, transport, industrial, agricultural, ports etc. We offer ESG solutions plant machinery like engines gear-boxes hydraulics turbines compressors.",
      details: "From wind turbines to diesel engines, compressors to cogeneration units, our smart sensors, gateways, and control panels give you full visibility and control over any machinery. With years of hands-on experience in power generation and large engine systems, our expertise runs deep—and delivers where it counts.",
      icon: Shield,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Every Industry. Every Element. Zero Excuses.",
      description: "Whatever you operate, wherever you are, we have the technology to protect it, monitor it, and optimize its performance.",
      details: "Explore your sector. Pinpoint your machinery. Let's solve the challenges that cost you time, money, and safety.",
      icon: Target,
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  const highlights = [
    {
      icon: Zap,
      title: "30+ Years Experience",
      description: "Deep technical expertise in lubrication and oil conditioning"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Always available when you need us most"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving clients across multiple industries worldwide"
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Delivering measurable improvements in performance"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Delivering advanced solutions with proven expertise and unwavering commitment
          </p>
        </motion.div>

        {/* Main Features */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {mainFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-50 rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-1"></div>
                
                <div className="relative p-8 lg:p-10">
                  <div className="flex items-start gap-6 mb-6">
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${feature.gradient} shadow-lg`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">
                        {feature.title}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed font-medium">
                      {feature.description}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.details}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="bg-white rounded-xl p-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">
                    {highlight.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
