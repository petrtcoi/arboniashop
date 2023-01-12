/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ['ru'],
    defaultLocale: 'ru',
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: 'cache-control',
            value: 'public, max-age=31536000, immutable',
          }
        ]
      }
    ]
  }
}
