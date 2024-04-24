/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["svgrepo.com",
                "images.pexels.com",
    ],
      },
      experimental: {
        serverActions: true,
      },
};

export default nextConfig;