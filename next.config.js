/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cms-studio.alfabyte.xyz',
      },
    ],
  },
}

module.exports = nextConfig
