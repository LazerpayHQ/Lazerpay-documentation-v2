import sidebar from "sidebar.config";

export type PaginationType = {
  label: string;
  url: string;
  path: string;
}

export function getPaginationData() {
  const result: PaginationType[] = []
  for (const group of sidebar) {
    if (group.type !== "category") {
      result.push({ label: group.label, url: group.id, path: group.id })
    } else {
      const childrens = group.children.map(({ label, id }) => ({
        label: label,
        url: id,
        path: `${group.id}/${id}`
      }))
      result.push(...childrens)
    }
  }
  return result;
}

type PaginationData = { framework: string; current: string }

export function paginate({ current }: PaginationData) {
  const data: PaginationType[] = getPaginationData();
  let currentPage: string = "";
  data.forEach((child: PaginationType) => {
    if (current.includes(child.path)) currentPage = child.path;
  })
  const index: number = data.map((child: PaginationType) => child.path).indexOf(currentPage);
  if (index === -1) return { prev: undefined, next: undefined };
  const prev: PaginationType | undefined = index > 0 ? data[index - 1] : undefined;
  const next: PaginationType | undefined = index < data.length - 1 ? data[index + 1] : undefined;
  return { prev, next };
}
