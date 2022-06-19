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
      },
      {
        source: '/docs/payments',
        destination: '/docs/payments/get-started',
        permanent: true,
      },

    ]
  }
  
  module.exports = redirect
  