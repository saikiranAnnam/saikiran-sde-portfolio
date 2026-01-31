/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [],
    unoptimized: false,
  },
  // Optimize for production
  compress: true,
  poweredByHeader: false,
}

module.exports = nextConfig
