/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [60, 75],
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.sanity.io",
      },
    ],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
