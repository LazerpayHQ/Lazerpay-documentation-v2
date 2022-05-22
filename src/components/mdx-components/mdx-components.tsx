import * as React from 'react'
import CodeBlock from './codeblock/codeblock'
import ComponentLinks from './component-links'
import { Anchor } from 'components/mdx-components/anchor'
import { InlineCode } from 'components/mdx-components/inline-code'
import { Pre } from 'components/mdx-components/pre'
import { TData, THead, Table } from 'components/mdx-components/table'
import { Divider } from '..'

export const MDXComponents = {
  h1: (props) => <h1 {...props} />,
  h2: (props) => <h2 {...props} />,
  h3: (props) => <h3 {...props} />,
  h4: (props) => <h4 {...props} />,
  hr: (props) => <Divider {...props} />,
  strong: (props) => <div className='font-bold' {...props} />,
  code: InlineCode,
  pre: (props) => {
    if (typeof props.children === 'string') return <Pre {...props} />
    if (props.children.props.type === 'tutorial') {
      const className = props.children.props.className || ''
      const code = props.children.props.children.trim() || ''
      const language = className.replace(/language-/, '')
      return (
        <div>code</div>
      )
    }
    return <CodeBlock {...props} />
  },
  table: Table,
  th: THead,
  td: TData,
  a: Anchor,
  p: (props) => <p {...props} />,
  ul: (props) => <ul {...props} />,
  ol: (props) => <ol {...props} />,
  li: (props) => <li pb='4px' {...props} />,
  blockquote: (props) => (
    <div {...props} />
  ),
  ComponentLinks,
}
