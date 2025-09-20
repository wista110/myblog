import type { NextConfig } from "next"

const isProd = process.env.NODE_ENV === "production"

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  // GitHub Pages (project pages) �� /myblog �z���ɔz�u
  basePath: isProd ? "/myblog" : undefined,
  assetPrefix: isProd ? "/myblog/" : undefined,
  images: { unoptimized: true },
}

export default nextConfig
