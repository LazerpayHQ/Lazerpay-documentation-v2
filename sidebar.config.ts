import { GuidesIcon, HomeIcon, PaymentsIcon, TransferIcon, UseCasesIcon } from "public/icons"
import React, { ElementType } from "react"

export interface SidebarItem {
  type: string
  icon?: ElementType | React.ReactNode
  route: string
  label: string
  collapsible?: boolean
  collapsed?: boolean
  items?: SidebarItem[]
}

const sidebar: SidebarItem[] = [
  {
    type: "docs",
    label: "Quick Start",
    icon: HomeIcon,
    route: "quick-start",
    items: [
      { type: "docs", label: "Introduction", route: "introduction" }
    ],
  },
  {
    type: "docs",
    label: "Payments",
    icon: PaymentsIcon,
    route: "payments",
    items: [
      { type: "docs", label: "Introduction", route: "introduction" }
    ],
  },
  {
    type: "docs",
    label: "Transfers",
    icon: TransferIcon,
    route: "transfers",
    items: [
      { type: "docs", label: "Introduction", route: "introduction" }
    ],
  },
  {
    type: "docs",
    label: "Use Cases",
    icon: UseCasesIcon,
    route: "use-cases",
    items: [
      { type: "docs", label: "Introduction", route: "introduction" }
    ],
  },
  {
    type: "docs",
    label: "Guides and Tutorials",
    icon: GuidesIcon,
    route: "guides",
    items: [
      { type: "docs", label: "Introduction", route: "introduction" }
    ],
  }
]

export default sidebar
