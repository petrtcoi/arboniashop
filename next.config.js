/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  async headers() {
    return [{
      source: "/(.*?)",
      headers: [
        {
          key: 'cache-control',
          value: 'max-age=31536000',
        }
      ]
    }]
  }
}
