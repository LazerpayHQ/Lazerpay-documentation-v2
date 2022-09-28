import { CommunityIcon, NewsPaperIcon, SupportIcon } from 'public/icons'
import React from 'react'

export interface IChannel {
  icon: React.ReactNode
  title: string
  options: { title: string; link: string }[]
}

export const channels: IChannel[] = [
  {
    icon: <NewsPaperIcon />,
    title: 'News',
    options: [
      //   { title: 'Developer Newsletter', link: '' },
      { title: 'Tech blog', link: 'https://lazerpay.finance/blog/' },
      { title: '_', link: '#' },
    ],
  },
  {
    icon: <CommunityIcon />,
    title: 'Social',
    options: [
      { title: 'Twitter', link: 'https://twitter.com/lazerpay' },
      {
        title: 'Developer Slack',
        link: 'https://join.slack.com/t/lazerpay/shared_invite/zt-1gw00chsy-ql5C2aQww6xidhAtpXZm9w',
      },
    ],
  },
  {
    icon: <SupportIcon />,
    title: 'Help',
    options: [
      { title: 'Forum', link: 'https://forum.lazerpay.finance/' },
      { title: '_', link: '#' },
      //   { title: 'FAQs', link: '' },
    ],
  },
]
