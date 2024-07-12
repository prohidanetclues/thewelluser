/** @type {import('next').NextConfig} */
const nextConfig = {
  // output:"export",
  reactStrictMode: true,
  pageExtensions: ["js", "jsx"],
  images: {
    domains: ['localhost'], // Add other domains as needed
  },
};

export default nextConfig;
