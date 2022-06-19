/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
const images = {
  loader: 'akamai',
  path: '/',
}

 const eslint =  {
  // Warning: This allows production builds to successfully complete even if
  // your project has ESLint errors.
  ignoreDuringBuilds: true,
}
module.exports = {nextConfig,images,eslint}
