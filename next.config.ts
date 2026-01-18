import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL(`${process.env.IMG_URL}**`)],
  },
};

export default nextConfig;
