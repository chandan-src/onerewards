import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  basePath: "",
  assetPrefix: "/",
  distDir: "dist",
  experimental: {
    serverActions: {
      allowedOrigins: ["localhost:3000"]
    }
  }
};

export default nextConfig;
