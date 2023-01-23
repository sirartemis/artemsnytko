/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["fiverr-res.cloudinary.com","images.squarespace-cdn.com","cdn.pixabay.com"],
  },
};

module.exports = nextConfig;
