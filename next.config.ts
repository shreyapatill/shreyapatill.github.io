import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const repoName = 'personal-website'; // Must match your GitHub repo name exactly

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true, // Highly recommended for GitHub Pages
};

export default nextConfig;