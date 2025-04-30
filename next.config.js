/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {},
  },
  images: {
    domains: ['placehold.co', 'i.ytimg.com'], // 허용된 이미지 도메인
  },
}

module.exports = nextConfig
