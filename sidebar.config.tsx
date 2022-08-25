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
  redirect?: string,
  label: string
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
    redirect: "payments/get-started",
    children: [
      { type: "docs", label: "Get started", id: "get-started" },
      { type: "docs", label: "Accepts payments", id: "accepts-payments" },
      { type: "docs", label: "Verify payments", id: "verify-payments" },
      { type: "docs", label: "Webhooks", id: "webhooks" },
      { type: "docs", label: "Payment links", id: "payment-links" },
      { type: "docs", label: "Partial payments", id: "partial-payments" },
      { type: "docs", label: "Test payments", id: "make-test-payments" },
    ],
  },
  {
    type: 'docs',
    label: 'Transfers',
    icon: <TransferIcon />,
    id: "transfers",
    children: [
      { type: "docs", label: "Get started", id: "get-started" },
      { type: "docs", label: "Crypto Transfer", id: "crypto-transfers" },
      { type: "docs", label: "Bank Transfer", id: "bank-transfers" },
      { type: "docs", label: "Webhooks", id: "webhooks" },
    ],
  },
  {
    type: 'docs',
    label: 'Use Cases',
    icon: <UseCasesIcon />,
    id: "use-cases",
    children: [],
  },
  {
    type: 'docs',
    label: 'Guides and Tutorials',
    icon: <GuidesIcon />,
    id: "guides",
    children: [],
  }
]

export default sidebar
