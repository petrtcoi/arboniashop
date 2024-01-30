/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ['ru'],
    defaultLocale: 'ru',
  },
  async redirects() {
    return [
      {
        source: '/arbonia-radiators',
        destination: '/',
        permanent: true,
      },
      {
        source: '/catalog/2180-stock',
        destination: '/models/2180',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'cache-control',
            value: 'public, max-age=31536000, immutable',
          },
          // {
          //   key: 'X-DNS-Prefetch-Control',
          //   value: 'on'
          // },
          // {
          //   key: 'Strict-Transport-Security',
          //   value: 'max-age=63072000; includeSubDomains; preload'
          // },
          // {
          //   key: 'X-XSS-Protection',
          //   value: '1; mode=block'
          // },
          // {
          //   key: 'X-Frame-Options',
          //   value: 'SAMEORIGIN'
          // },
          // {
          //   key: 'Permissions-Policy',
          //   value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()'
          // },
          // {
          //   key: 'X-Content-Type-Options',
          //   value: 'nosniff'
          // },
          // {
          //   key: 'Referrer-Policy',
          //   value: 'origin-when-cross-origin'
          // }
        ],
      },
    ];
  },
};
