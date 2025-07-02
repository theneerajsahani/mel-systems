import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable experimental features for better performance
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  output: 'export',
  
  // Image optimization settings
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year
    unoptimized: true,
  },
  
  // Compression and caching
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  
  // Headers for video optimization and caching
  // async headers() {
  //   return [
  //     {
  //       source: '/hero-optimized.(mp4|webm)',
  //       headers: [
  //         {
  //           key: 'Cache-Control',
  //           value: 'public, max-age=31536000, immutable',
  //         },
  //         {
  //           key: 'Accept-Ranges',
  //           value: 'bytes',
  //         },
  //       ],
  //     },
  //     {
  //       source: '/hero-mobile.mp4',
  //       headers: [
  //         {
  //           key: 'Cache-Control',
  //           value: 'public, max-age=31536000, immutable',
  //         },
  //         {
  //           key: 'Accept-Ranges',
  //           value: 'bytes',
  //         },
  //       ],
  //     },
  //     // Cache static assets
  //     {
  //       source: '/products/:path*',
  //       headers: [
  //         {
  //           key: 'Cache-Control',
  //           value: 'public, max-age=86400, s-maxage=86400', // 24 hours
  //         },
  //       ],
  //     },
  //   ];
  // },
};

export default nextConfig;
