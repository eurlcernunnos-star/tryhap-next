/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { serverActions: { allowedOrigins: ['tryhap.com', 'localhost:3000'] } },
};
module.exports = nextConfig;
