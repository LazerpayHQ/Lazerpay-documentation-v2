const baseUrl = 'https://github.com/'

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()}. All Rights Reserved.`,
  repo: {
    url: baseUrl,
    editUrl: `${baseUrl}/edit/main/website/pages`,
    blobUrl: `${baseUrl}/blob/main`,
  },
  seo: {
    title: 'Lazerpay Finance',
    titleTemplate: '%s - Lazerpay Finance',
    description:'Official Lazerpay Documentation',
    siteUrl: 'https://lazerpay.finance',
    twitter: {
      handle: '@lazerpay',
      site: '@lazerpay',
      cardType: 'summary_large_image',
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://lazerpay.finance',
      title: 'Lazerpay Finance',
      description:
        '',
      site_name:
        '',
      images: [
        {
          url: '',
          width: 1240,
          height: 480,
          alt: '',
        }
      ],
    },
  },
}

export default siteConfig
