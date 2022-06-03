# Welcome to Lazerpay Official Documentation 👋

This is the repository for the Lazerpay documentation site
[docs.lazerpay.finance][wi]. Lazerpay Documentation accepts contributions via GitHub pull requests. This document outlines some contributing guidelines,
contact points, and other resources to make it easier to contribute to
lazerpay-documentation-v2.

If you've run into a problem or have a suggestion, browse the open [issues][is]
before opening a new one. We use the following [label system][la] to organize
our issues.

- ![][cr] for typos, broken links, and other quick fixes
- ![][tr] for additions to the FAQ and Troubleshooting sections
- ![][im] for revisions, rewrites, and larger improvements
- ![][fe] for feedback on structure & content
- ![][qu] for questions that can't be answered via documentation
- ![][fi] for improvements and fixups related to the look and feel of the docs
  site

### Best practices for managing contributions

- If a question is asked more than twice in the documenttion channel, it should be
  added as an outstanding ![][tr] issue. If a resolution is found, it should be
  captured in the issue before it's closed or in a following pull request.
  Those involved in the support process should contribute to the documentation
  (i.e. if you answered the question, be sure to capture the outcome in the
  relevant documentation).

- If a piece of unaddressed feedback is given more than three times, a ![][fe]
  issue should be created and added to the [Feedback Hub][fh] to be prioritized
  in the following weekly sync.

- Issues will be reviewed on a rolling basis and triaged weekly by
  @MeisterJustice and @Frontend-io

# How to Contribute

- [Get Started](#get-started)
- [Editing Content](#editing-content)
- [Contributing](#contributing)

## Get Started

- Create a fork of the documentation, install neccessary dependencies by running `yarn`
- To start your server, run `yarn dev` and you'll have your development server running on **localhost:3000**

## Editing Content
To add a new content, eg page, please note this is a NextJS app, a knowledge of NextJS is required to work with files and how pages are routed. 

- All new pages should go to the `content/docs` folder accrodingly. The pages are writting in markdown (MDX - an extension of MD). 
- MDX allows you to use JSX components in the same file. If you have a section of the page that is written in JSX, please create that component and include it to the existing [mdx-component object](https://github.com/LazerPay-Finance/Lazerpay-documentation-v2/blob/main/components/mdx-components.tsx) so it is properly mapped when rendering. Don't forget to export the component in the entry `index.ts` file before importing anywhere else.
### Editing an existing docs page
- Make your changes to the neccessary files, create your PR following the issue guideline

### Adding a new docs page to an existing sidebar
- The sidebar is quite comprehensive, after creating your page, update the `sidebar.config.ts` file to include your new route/page if it's not already there. Each sidebar option has a nested structure, so if you are working on a nested link under a particular sidebar item, add that page route in the `items` array of the sidebar config

## Contributing

Contributions to lazerpay-documentation-v2 can be made via pull requests on GitHub. If opening a PR, please tag any associated parties,
@MeisterJustice and @Frontend-io for visibility

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

## Contributors ✨

Thanks to Chakra-UI team for making their [Zag Docs](https://github.com/chakra-ui/zag-docs) documentation Open source and free to use. 

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://twitter.com/frontend_io"><img src="https://avatars.githubusercontent.com/u/32682002?v=4?s=32" width="32px;" alt=""/><br /><sub><b>Jefferson Iyobosa</b></sub></a><br /><a href="#maintenance-frontend-io" title="Maintenance">🚧</a> <a href="https://github.com/LazerPay-Finance/Lazerpay-documentation-v2/commits?author=Frontend-io" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the
[all-contributors](https://github.com/all-contributors/all-contributors)
specification. Contributions of any kind welcome!

[cr]: https://img.shields.io/badge/-fixup-critical
[cs]: https://docs.github.com/en/github/authenticating-to-github/managing-commit-signature-verification/signing-commits
[fe]: https://img.shields.io/badge/-feedback-%23DD0BE1
[fh]: https://github.com/LazerPay-Finance/Lazerpay-documentation-v2/projects/1
[fi]: https://img.shields.io/badge/-ui-1d76db
[im]: https://img.shields.io/badge/-improvement-blueviolet
[is]: https://github.com/LazerPay-Finance/Lazerpay-documentation-v2/issues
[la]: https://github.com/LazerPay-Finance/Lazerpay-documentation-v2/labels
[qu]: https://img.shields.io/badge/-question-C0EE59
[tr]: https://img.shields.io/badge/-troubleshooting-%23FBCA04
[wi]: https://docs.lazerpay.finance/home/


