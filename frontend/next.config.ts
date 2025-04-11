import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tailwindcss.com',
        port: '',
        pathname: '/plus-assets/img/**',
        search: '',
      },
    ],
  }
};

const withNextIntl = createNextIntlPlugin()
export default withNextIntl(nextConfig);
