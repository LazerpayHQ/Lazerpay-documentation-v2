import {
  GuidesIcon,
  HomeIcon,
  PaymentsIcon,
  TransferIcon,
  UseCasesIcon,
} from 'public/icons'
import React, { ElementType } from 'react'

export interface SidebarItem {
  type: string
  icon?: ElementType | React.ReactNode
  id: string
  label: string
  collapsible?: boolean
  collapsed?: boolean
  children?: SidebarItem[]
}

const sidebar: SidebarItem[] = [
  {
    type: 'docs',
    label: 'Quick Start',
    icon: <HomeIcon />,
    id: "quick-start"
  },
  {
    type: 'docs',
    label: 'Payments',
    icon: <PaymentsIcon />,
    id: "payments",
    children: [
      { type: "docs", label: "Get started", id: "get-started" },
      { type: "docs", label: "Accepts payments", id: "accepts-payments" },
      { type: "docs", label: "Verify payments", id: "verify-payments" },
      { type: "docs", label: "Webhooks", id: "webhooks" },
      { type: "docs", label: "Payment links", id: "payment-links" },
      { type: "docs", label: "Partial payments", id: "partial-payments" },
      { type: "docs", label: "Test payments", id: "test-payments" },
    ],
  },

  {
    type: 'docs',
    label: 'Transfers',
    icon: <TransferIcon />,
    id: "transfers",
    children: [
      { type: "docs", label: "Introduction", id: "introduction" }
    ],
  },
  {
    type: 'docs',
    label: 'Use Cases',
    icon: <UseCasesIcon />,
    id: "use-cases",
    children: [
      { type: "docs", label: "Introduction", id: "introduction" }
    ],
  },
  {
    type: 'docs',
    label: 'Guides and Tutorials',
    icon: <GuidesIcon />,
    id: "guides",
    children: [
      { type: "docs", label: "Introduction", id: "introduction" }
    ],
  }
]

export default sidebar
