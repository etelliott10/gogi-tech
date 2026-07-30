import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep the application deployable as plain HTML, CSS, and JavaScript.
  // Features that require a long-running Next.js server should not be added.
  output: "export",
};

export default nextConfig;
