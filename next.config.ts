import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const repoName = 'personal-website'; // Replace with your GitHub repository name

const nextConfig: NextConfig = {
  output: 'export', // Required for static export
  basePath: isProd ? `/${repoName}` : '', // Base path for GitHub Pages
  assetPrefix: isProd ? `/${repoName}/` : '', // Asset prefix for GitHub Pages
  images: {
    unoptimized: true, // Required for static export with images
  },
  // Optional: Add trailing slash for GitHub Pages compatibility
  // trailingSlash: true,
  // Optional: Change the output directory
  // distDir: 'out',
};

export default nextConfig;