import React, { useEffect } from 'react'
import Prism from 'prismjs'

// import 'prismjs/themes/prism.css'
// import { sample } from 'data/sample'
import 'prismjs/plugins/toolbar/prism-toolbar.min'
import 'prismjs/plugins/toolbar/prism-toolbar.min.css'
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min'

import classNames from 'classnames'
import { snippets } from 'data/snippets'
import { Label } from '.'

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

export const ResCodeBlock = ({
  id1: id,
  id2,
  lang,
  options,
  req1,
  req2,
  sideAct,
}: IProps) => {
  const Sample1 = snippets[id] || 'no code'
  const Sample2 = snippets[id2] || 'no code'
  
  const [sample, setSample] = React.useState(Sample1)

  const codeOpt = () => {
    if (req1) {
      setSample(Sample1)
    } else {
      setSample(sample)
    }
  }
  const codeOpt2 = () => {
    if (req2) {
      setSample(Sample2)
    }
  }

  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <code>
      {options ? (
        <>
          <nav className='bg-neu-50 grid uppercase font-code grid-cols-2 items-centere rounded-t-lg'>
            <div className='flex items-start ml-5 bg-neu-50 head col-span-1 space-x-5'>
              <button
                onClick={codeOpt}
                className='focus:border-b-4 border-pri-400 p-4'
              >
                {req1 || 'First Opt'}
              </button>
              <button
                onClick={codeOpt2}
                className='focus:border-b-4 border-pri-400 p-4'
              >
                {req2 || 'Second Opt'}
              </button>
            </div>
            <div className='col-span-1 flex justify-end p-4'>
              {sideAct || 'Hidden Actions'}
            </div>
          </nav>
          <pre className='!my-0'>
            <code className={classNames(`language-${lang}`)}>
              {/* {options && req1 ? Sample2 : Sample1} */}
              {sample}
            </code>
          </pre>
        </>
      ) : (
        <>
          <div className='flex items-center px-10 py-4 space-x-5 bg-neu-50 head rounded-t-8'>
            <Label label={req1} />
          </div>
          <pre className='!my-0'>
            <code className={classNames(`language-${lang}`)}>{Sample1}</code>
          </pre>
        </>
      )}
    </code>
  )
}
