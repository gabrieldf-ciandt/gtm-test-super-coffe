/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Tells Next to build static HTML
  basePath: '/super-coffee', // Required for GitHub Pages
  images: {
    unoptimized: true, // Required because GitHub Pages doesn't have an Image Optimization server
  },
};

export default nextConfig;