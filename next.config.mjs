/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "emersonbroga.com",
      },
    ],
  },
};

export default nextConfig;
