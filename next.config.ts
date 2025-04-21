import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/personal-website',
  assetPrefix: '/personal-website/',
  images: {
    unoptimized: true,
  },
  trailingSlash: true, // Highly recommended for GitHub Pages
};

export default nextConfig;