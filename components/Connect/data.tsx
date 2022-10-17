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
      { title: 'Blog', link: 'https://lazerpay.finance/blog/' },
      { title: 'Telegram channel', link: 'https://t.me/lazerpay' },
      { title: 'Lazerpay Github', link: 'https://github.com/LazerPay-Finance' },
    ],
  },
  {
    icon: <CommunityIcon />,
    title: 'Social',
    options: [
      { title: 'Twitter', link: 'https://twitter.com/lazerpay' },
      {
        title: 'Youtube',
        link: 'https://www.youtube.com/channel/UC4vVYSFK--pbguoqsuuNowQ',
      },
      { title: 'Instagram', link: 'https://www.instagram.com/lazerpay/' },
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
      { title: 'Forums', link: 'https://forum.lazerpay.finance/' },
      { title: 'Support email', link: 'mailto:support@lazerpay.finance' },
    ],
  },
]
