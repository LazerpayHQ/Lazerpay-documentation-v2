async function redirect() {
  return [
    {
      source: '/docs',
      destination: '/docs/getting-started',
      permanent: true,
    }
  ]
}

module.exports = redirect
