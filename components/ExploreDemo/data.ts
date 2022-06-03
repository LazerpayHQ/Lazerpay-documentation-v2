import { MoneyIcon, PurchaseIcon } from "public/icons"
import React from "react"

export interface IDemo {
    icon?: React.ReactNode
    title: string
    link?: string
    repo?: {
        title: string
        link: string
    }
    apiUsed?: IDemo[]    
}

export const demos:IDemo[] = [
    {
        icon: MoneyIcon,
        title: 'Receive Donations',
        repo: {
            title: 'LazerpayOSS/sample-donation-link',
            link: ''
        },
        apiUsed: [
            {
                title: 'Accept payments',
                link: ''
            },
            {
                title: 'Verify payments',
                link: ''
            }
        ]
    },
    {
        icon: PurchaseIcon,
        title: 'Online Purchase',
        repo: {
            title: 'LazerpayOSS/botega-express-pay',
            link: ''
        },
        apiUsed: [
            {
                title: 'Accept payments',
                link: ''
            },
            {
                title: 'Verify payments',
                link: ''
            }
        ]
    }
]