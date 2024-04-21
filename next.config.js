/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    URL_BASE: process.env.URL_BASE,
    URL_API: process.env.URL_API,
    URL_MEDIA: process.env.URL_MEDIA,
    KEY_API: process.env.KEY_API,
    KEY_API_POST: process.env.KEY_API_POST,
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "warm-retreat-17098-a953289b7d41.herokuapp.com",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
