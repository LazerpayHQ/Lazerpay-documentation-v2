import { useScrollSpy } from "../lib/use-scrollspy"

type TOC = Array<{
  content: string
  slug: string
  lvl: number
}>

export function TableOfContents({ data = [] }: { data: TOC }) {
  const activeId = useScrollSpy(data.map((item) => `[id="${item.slug}"]`))

  return (
    <div className="toc">
      <ul>
        {data.map((item) => (
          <li
            data-selected={activeId === item.slug || undefined}
            key={item.slug}>
            <a href={`#${item.slug}`}>
              <span>{item.lvl > 2 ? "—" : null}</span>{" "}
              {item.content}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
