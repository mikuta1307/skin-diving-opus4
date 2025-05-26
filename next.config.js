/** @type {import('next').NextConfig} */
const isGitHub = process.env.TARGET_ENV === 'github';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },

  // ★ GitHub Pages 用に追加
  basePath: isGitHub ? '/skin-diving-opus4' : '',
  assetPrefix: isGitHub ? '/skin-diving-opus4/' : '',
};

module.exports = nextConfig;
