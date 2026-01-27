/** @type {import('next').NextConfig} */
const STRAPI_URL = process.env.STRAPI_URL || "http://localhost:1337";

const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${STRAPI_URL}/api/:path*`,
      },
      {
        source: "/uploads/:path*",
        destination: `${STRAPI_URL}/uploads/:path*`,
      },
    ];
  },
};

export default nextConfig;
