"use client";
import { useState } from "react";
import { applications } from "@/lib/applications";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function ApplicationsPage() {
  const [search, setSearch] = useState("");

  const filteredApps = applications.filter((app) => {
    const searchLower = search.toLowerCase();
    return (
      app.title.toLowerCase().includes(searchLower) ||
      (app.additionalInfo?.toLowerCase().includes(searchLower) ?? false) ||
      app.industry.some((ind) => ind.toLowerCase().includes(searchLower))
    );
  });

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 px-4 md:px-8 lg:px-16 py-10">
      {/* Hero Heading Section */}
      <div className="max-w-screen-xl mx-auto text-center mb-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-white tracking-tight">
          Applications
        </h1>
        <p className="text-lg md:text-xl text-gray-400 dark:text-gray-400 max-w-2xl mx-auto font-normal">
          Discover how our advanced monitoring solutions serve diverse
          industries worldwide
        </p>
      </div>

      {/* Minimal Search Bar */}
      <div className="max-w-3xl mx-auto mb-12 relative">
        <input
          type="text"
          placeholder="Search applications..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 text-base focus:outline-none focus:border-b-2 focus:border-blue-400 transition placeholder-gray-400 dark:placeholder-gray-500 shadow-none"
        />
      </div>

      {/* Applications Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
          <AnimatePresence>
            {filteredApps.map((app, idx) => (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 24 }}
                transition={{ delay: idx * 0.05, duration: 0.4, type: "tween" }}
                className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden flex flex-col border border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 group cursor-pointer min-h-[340px]"
              >
                <Link
                  href={`/applications/${app.id}`}
                  className="block group h-full"
                >
                  <div className="relative h-48 bg-gray-100 dark:bg-gray-800 overflow-hidden">
                    <Image
                      src={app.images?.[0] || "/images/placeholder.jpg"}
                      alt={app.title}
                      fill
                      className="object-cover transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {app.title}
                    </h3>
                    <p className="text-gray-400 dark:text-gray-400 text-sm mb-5 line-clamp-3 min-h-[48px] font-light">
                      {app.additionalInfo || "No description available."}
                    </p>
                    <div className="mt-auto flex flex-wrap gap-1">
                      {app.industry.map((ind, i) => (
                        <span
                          key={i}
                          className="inline-block bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-xs font-normal px-2 py-0.5 rounded-full border border-gray-200 dark:border-gray-700"
                        >
                          {ind}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        {filteredApps.length === 0 && (
          <div className="text-center text-gray-300 mt-20 text-base">
            No applications found.
          </div>
        )}
      </div>
    </div>
  );
}
