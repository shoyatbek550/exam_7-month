/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  images: {
    domains: ["207.154.221.44"], // Add your image domain(s) here
    unoptimized: true 
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },

  distDir: "build",
  output: 'export',
};

module.exports = nextConfig;
