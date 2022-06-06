import sidebar from "sidebar.config"

export function getPaginationData() {
  const result: { label: string; url: string }[] = []
  for (const group of sidebar) {
    if (group.type !== "category") continue
    const items = group.items.map((item) => ({
      label: item.label,
      url: item.route,
    }))
    result.push(...items)
  }
  return result
}

type PaginationData = { framework: string; current: string }

export function paginate({ current }: PaginationData) {
  const data = getPaginationData()
  const index = data.map((item) => item.url).indexOf(current)
  if (index === -1) return { prev: undefined, next: undefined }
  const prev = index > 0 ? data[index - 1] : undefined
  const next = index < data.length - 1 ? data[index + 1] : undefined
  return { prev, next }
}
