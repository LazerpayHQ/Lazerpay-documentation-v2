import sidebar from "sidebar.config"

export function getPaginationData() {
  const result: { label: string; url: string }[] = []
  for (const group of sidebar) {
    if (group.type !== "category") continue
    const childrens = group.children.map(({ label, id }) => ({
      label: label,
      url: id,
    }))
    result.push(...childrens)
  }
  return result
}

type PaginationData = { framework: string; current: string }

export function paginate({ current }: PaginationData) {
  const data = getPaginationData()
  const index = data.map((child) => child.url).indexOf(current)
  if (index === -1) return { prev: undefined, next: undefined }
  const prev = index > 0 ? data[index - 1] : undefined
  const next = index < data.length - 1 ? data[index + 1] : undefined
  return { prev, next }
}
