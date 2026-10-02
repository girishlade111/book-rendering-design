/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/book-rendering-design",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig