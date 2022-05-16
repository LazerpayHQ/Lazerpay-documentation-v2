// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Lazerpay Documentation',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  plugins: [
    "docusaurus-plugin-sass",
    async function myPlugin() {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {
            to: '/quick-links',
            label: 'Quick Start',
            position: 'right',
          },
          {
            to: '/quick-links',
            label: 'APIs',
            position: 'right',
          },
          {
            to: '/quick-links',
            label: 'Support',
            position: 'right',
          },
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Lazerpay',
            items: [
              {
                label: 'About',
                href: 'https://lazerpay.finance/about-us',
              },
              {
                label: 'Products',
                href: 'https://lazerpay.finance',
              },
              {
                label: 'Pricing',
                href: 'https://lazerpay.finance/pricing',
              },
              {
                label: 'Careers',
                href: 'https://lazerpay.finance/careers',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Docs',
                to: '/docs',
              },
              {
                label: 'API Reference',
                to: '/docs',
              },
              {
                label: 'API Explorer',
                to: '/docs',
              },
              {
                label: 'Github',
                to: '/docs',
              },
              {
                label: 'SDK Reference',
                to: '/docs',
              },
              {
                label: 'Sample Apps',
                to: '/docs',
              },
            ],
          },
          {
            title: 'Support',
            items: [
              {
                label: 'Developer Forum',
                to: '/blog',
              },
              {
                label: 'Contact Support',
                href: 'https://github.com/facebook/docusaurus',
              },
              {
                label: 'Tech blog',
                href: 'https://github.com/facebook/docusaurus',
              },
              {
                label: 'Slack Community',
                href: 'https://github.com/facebook/docusaurus',
              },
              {
                label: 'YouTube',
                href: 'https://github.com/facebook/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/lazerpay',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
