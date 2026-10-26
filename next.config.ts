import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  async redirects() {
    return [
      { source: "/process", destination: "/", permanent: false },
      {
        source: "/services/stain-removal",
        destination: "/services/pressure-washing",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
