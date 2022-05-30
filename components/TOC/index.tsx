import classNames from "classnames"
import { useScrollSpy } from "../../lib/use-scrollspy"
import Styles from './index.module.scss'

type TOC = Array<{
  content: string
  slug: string
  lvl: number
}>

export function TableOfContents({ data = [] }: { data: TOC }) {
  const activeId = useScrollSpy(data.map((item) => `[id="${item.slug}"]`))

  return (
    <div className={classNames(Styles.TOC)}>
      <h4 className="paragraph-2-s text-neu-900">On this page</h4>
      <ul className="mt-5 text-right">
        {data.map((item) => (
          <li
            className="py-2 border-l paragraph-1 text-neu-800 border-pri-50 first-letter:capitalize"
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
