import { CommunityIcon, NewsPaperIcon, SupportIcon } from "public/icons";
import React from "react"

export interface IChannel {
    icon: React.ReactNode
    title: string
    options: { title: string; link: string }[]
}

export const channels:IChannel[] = [
    {
        icon: NewsPaperIcon,
        title: 'News',
        options: [
            {title: 'Developer Newsletter', link: ''},
            {title: 'Tech blog', link: ''},
        ]
    },
    {
        icon: CommunityIcon,
        title: 'Social',
        options: [
            {title: 'Slack', link: ''},
            {title: 'Developer Twitter', link: ''},
        ]
    },
    {
        icon: SupportIcon,
        title: 'Help',
        options: [
            {title: 'Slack', link: ''},
            {title: 'FAQs', link: ''},
        ]
    }
]