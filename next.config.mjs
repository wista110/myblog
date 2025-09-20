const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: isProd ? '/myblog' : undefined,
  assetPrefix: isProd ? '/myblog/' : undefined,
  images: { unoptimized: true },
}

export default nextConfig
