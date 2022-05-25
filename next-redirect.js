async function redirect() {
    return [
      {
        source: '/',
        destination: '/docs/quick-start',
        permanent: true,
      },
      {
        source: '/docs',
        destination: '/docs/quick-start',
        permanent: true,
      }
    ]
  }
  
  module.exports = redirect
  