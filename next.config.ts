// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 85], // Add this line
  },
};

export default nextConfig;