import type { NextConfig } from "next"

const isProd = process.env.NODE_ENV === "production"

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  // GitHub Pages (project pages) ‚Å /myblog ”z‰º‚É”z’u
  basePath: isProd ? "/myblog" : undefined,
  assetPrefix: isProd ? "/myblog/" : undefined,
  images: { unoptimized: true },
}

export default nextConfig
