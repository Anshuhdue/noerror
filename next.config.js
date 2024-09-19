

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint:{
    ignoreDuringBuilds:true,
  },
  experimental: {
    // Add experimental features if needed
  },
  optimizeFonts: false,
  images: {
    domains: ["user-images.githubusercontent.com", "cdn.hashnode.com", "github.com"],
  },
  // Ensure all keys are supported and correctly used
};

module.exports = nextConfig;