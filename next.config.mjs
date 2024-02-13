/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "emersonbroga.com",
      },
      {
        hostname: "raw.githubusercontent.com",
      },
    ],
  },
};

export default nextConfig;
