/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },

  // ★ GitHub Pages 用に追加
  basePath: '/skin-diving-opus4',
  assetPrefix: isProd ? '/skin-diving-opus4/' : '',
};

module.exports = nextConfig;
