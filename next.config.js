/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: '',  // 空文字列に
  assetPrefix: '',  // 空文字列に
}

module.exports = nextConfig
