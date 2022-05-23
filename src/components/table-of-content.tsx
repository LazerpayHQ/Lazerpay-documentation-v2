import * as React from 'react'
import { useScrollSpy } from 'hooks/use-scrollspy'
import { LzLink } from '.'

function TableOfContent(props: any) {
  const { headings, ...rest } = props
  const activeId = useScrollSpy(
    headings.map(({ id }) => `[id="${id}"]`),
    {
      rootMargin: '0% 0% -24% 0%',
    },
  )
  
  return (
    <nav {...rest}>
      <h2 id='toc-title'>
        Table of content
      </h2>
      <ol>
        {headings.map(({ id, text, level }) => (
          <li key={id} title={text}>
            <LzLink
              to={`#${id}`}>
              {text}
            </LzLink>
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default TableOfContent
