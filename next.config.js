const { withContentlayer } = require("next-contentlayer")

/**
 * @type {import('next').NextConfig}
 */
module.exports = withContentlayer({
  swcMinify: true,
  redirects: async function redirects() {
    return [
      {
        source: '/docs/getting-started',
        destination: '/docs/quick-start',
        permanent: true,
      }
    ]
  },
})
