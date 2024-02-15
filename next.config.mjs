/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
    ],
  },
  webpack: (config) => {
    config.resolve.fallback = {
      'mongodb-client-encryption': false,
      aws4: false,
    };

    return config;
  },
};

export default nextConfig;
