// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withContentlayer } = require('next-contentlayer')

module.exports = withContentlayer({
  experimental: {
    optimizeFonts: true,
    modern: true,
  },
  productionBrowserSourceMaps: true,
  redirects: require('./next-redirect'),
  reactStrictMode: true,
})
