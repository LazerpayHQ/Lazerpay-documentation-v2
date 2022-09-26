import { useEffect } from 'react'
import Prism from 'prismjs'
import { FaChevronDown } from 'react-icons/fa'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

import Styles from './index.module.scss'
import { snippets } from 'data/snippets'
import classNames from 'classnames'
import BlockWrapper from './BlockWrapper'

interface IProps {
  id?: string
  req?: string
  children?: React.ReactNode
}

export default function CodeBlock({ id }: IProps) {
  const code =
    snippets.find((snippet) => snippet.id[id] === id) || 'snippet not found'

  // const title = Object.keys(snippets).find(s => s === id);

  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <BlockWrapper>
      {snippets.map((codeSnippet) => {
        ;<div
          className={classNames(
            Styles.CodeBlock,
            'flex pb-2 bg-white flex-col',
          )}
        >
          <SyntaxHighlighter language={codeSnippet.lang} style={dark}>
            {code}
          </SyntaxHighlighter>
        </div>
      })}
    </BlockWrapper>
  )
}
