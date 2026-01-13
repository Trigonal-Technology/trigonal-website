import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable standalone output for Docker
  output: 'standalone',

  // Optimize images
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cms.trigonal.technology',
      },
    ],
  },

  // Experimental features
  experimental: {
    // Enable CSS optimization
    optimizeCss: true,
  },

  // Security headers are handled in vercel.json
  // but we add some basic ones here for local dev
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
        ],
      },
    ];
  },
};

export default nextConfig;
