import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {},
  },
  images: {
    domains: ['placehold.co', 'i.ytimg.com'], // 허용된 이미지 도메인
  },
}

export default nextConfig
