/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*", // Frontend က /api/xxx လို့ခေါ်ရင်
        destination: "http://143.198.197.70:1338/api/:path*", // Strapi ဆီ လှမ်းပို့မယ်
      },
      {
        source: "/uploads/:path*", // ပုံတွေအတွက်
        destination: "http://143.198.197.70:1338/uploads/:path*",
      },
    ];
  },
};

export default nextConfig;
