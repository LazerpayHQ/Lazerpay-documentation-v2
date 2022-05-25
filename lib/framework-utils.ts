import { SiReact } from "react-icons/si"

export const frameworks = {
  react: { icon: SiReact, label: "React" },
}

export const FRAMEWORKS = ["react"] as const

export type Framework = keyof typeof frameworks

export function isFramework(str: string): str is Framework {
  return FRAMEWORKS.includes(str as any)
}

export function getFrameworkIndex(str: string): number {
  return FRAMEWORKS.indexOf(str as any)
}
