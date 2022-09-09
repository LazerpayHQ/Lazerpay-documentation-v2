import React, { useEffect } from 'react'
import Prism from 'prismjs'

import 'prismjs/components/prism-jsx.js'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/plugins/toolbar/prism-toolbar.min'
import 'prismjs/plugins/toolbar/prism-toolbar.min.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers.js'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min'

import classNames from 'classnames'
import { snippets } from 'data/snippets'
import Styles from './index.module.scss'

interface IProps {
  req1?: any
  req2?: any
  id1?: string
  id2?: string
  lang?: string
  sideAct?: any
  options?: boolean
  className?: string
  children?: React.ReactNode
}

export const Label = ({ label }) => {
  const options = {
    POST: 'bg-suc-100',
  }

  return (
    <div
      className={classNames(
        options[label],
        'space-x-4 uppercase text-neu-700 caption-s rounded-8 px-2.5 py-1',
      )}
    >
      {label}
    </div>
  )
}

const TempLabel = ({ onClick, children }) => {
  let labelStyle =
    'focus:border-b-4 border-pri-400 focus:text-pri-700 bg-neu-100 paragraph-1-s p-2'
  return (
    <>
      <button onClick={onClick} className={labelStyle}>
        {children}
      </button>
    </>
  )
}

const CodeBlock = ({
  id1: id,
  id2,
  req1,
  req2,
  lang,
  sideAct,
  options,
  className,
}: IProps) => {
  const codeSnippet1 = snippets[id] || 'no code'
  const codeSnippet2 = snippets[id2] || codeSnippet1

  const [sample, setSample] = React.useState(codeSnippet1)

  const codeOpt = () => {
    if (req1) {
      setSample(codeSnippet1)
    } else {
      setSample(codeSnippet2)
    }
  }
  const codeOpt2 = () => {
    if (req2) {
      setSample(codeSnippet2)
    } else codeOpt()
  }

  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <div className='my-7'>
      {options ? (
        <div
          className={classNames(
            Styles.CodeBlock,
            'flex font-code  bg-white flex-col',
          )}
        >
          <nav className='grid grid-cols-2 paragraph-1-s items-center bg-neu-50 pt-2 my-0 rounded-t-lg'>
            <div className='flex items-center ml-5 bg-neu-50 col-span-1 pt-2 space-x-5'>
              <TempLabel onClick={codeOpt} children={req1 || ''} />
              <TempLabel onClick={codeOpt2} children={req2 || ''} />
            </div>
            <div className='col-span-1 flex justify-end p-2 '>
              {sideAct || ''}
            </div>
          </nav>
          <pre
            className={classNames(className + '!bg-neu-700 !my-0 line-numbers')}
          >
            <code className={classNames(`language-${lang} `)}>
              {sample}
            </code>
          </pre>
        </div>
      ) : (
        <div
          className={classNames(
            Styles.CodeBlock,
            'flex font-code pb-2 bg-white flex-col',
          )}
        >
          <div className='flex items-center px-10 py-4 space-x-5 bg-neu-50 head rounded-t-8'>
            <Label label={req1} />
          </div>

          <pre
            className={classNames(className + '!bg-neu-700 !my-0 line-numbers')}
          >
            <code className={classNames(`language-${lang || 'jsx'}`)}>
              {codeSnippet1}
            </code>
          </pre>
        </div>
      )}
    </div>
  )
}

export default CodeBlock
