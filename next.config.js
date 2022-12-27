/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const withSass = require('@zeit/next-sass');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
module.exports = withBundleAnalyzer({})
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ['@acme/ui', 'lodash-es'],
  images: {
    domains: ["images.unsplash.com"],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '3001',
        pathname: '/uploads/**'
      }
    ]
  },
  experimental: {
    appDir: true,
    images: {
      allowFutureImage: true,
    },
  },
  env: {
      SERVER_URL: 'https://my-json-server.typicode.com/solrachix/podcastr',
      NEXT_PUBLIC_SITE_URL: 'http://localhost:3000'
    }
}
const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  swcMinify: true,
  skipTrailingSlashRedirect: true,
  experimental: {
    hostname: ['s3-us-west-2.amazonaws.com', 'https://cdn.skypack.dev'],
  },
  images: {
    formats: ['image/avif', 'image/webp']
  },
  pwa: {
    disable: process.env.NODE_ENV === 'development',
      dest: 'public',
      register: true,
      sw: '/sw.js'
  }
})

module.exports = withSass({
    cssModules: false,
    cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: '[local]___[hash:base64:5]',
    },
});

module.exports = nextConfig
