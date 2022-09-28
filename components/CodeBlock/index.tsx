import { useEffect, useState, FC } from 'react'
import Prism from 'prismjs'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import cn from 'classnames'

import 'prismjs/components/prism-jsx.js'
import 'prismjs/plugins/line-numbers/prism-line-numbers.js'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

import Styles from './index.module.scss'
import { snippets } from 'data/snippets'

import { RequestHead, ResponseHead, TabHead } from './components'
import { ItemType, RequestType, RequestData, DataProp } from './types'
import { initializePrism } from './configurePrism'
import useStateSnippet from './hooks/useStateSnippet'

initializePrism(Prism)

export interface CodeBlockProps<DataProp> {
  responseTheme?: 'default' | 'red'
  responseTitle?: string
  data: DataProp
  codeClassName?: string
}

const CodeBlock: FC<CodeBlockProps<DataProp>> = (props) => {
  const { data, responseTheme, responseTitle, codeClassName } = props
  const { type, item } = data as DataProp

  const { codeSnippet, language, updateSnippet } = useStateSnippet({
    type,
    item,
  })
  const [copied, setCopied] = useState<boolean>(false)
  const [showResponse, setShowResponse] = useState<boolean>(false)

  const onCodeSwitch = (i: number, items: ItemType | RequestType): void => {
    updateSnippet(
      snippets[(items as ItemType).snippet[i]],
      (items as ItemType).lang[i],
    )
  }

  const onCopy = (): void => {
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  const responseThemeClassname = (): string => {
    if (type === 'response') {
      return responseTheme === 'default' ? 'code--default' : 'code--red'
    }
    return 'code'
  }

  const codeBg = (): string => {
    return type === 'response' ? 'response' : 'default'
  }

  const hasResponseData = () => {
    if (!item) return false
    const hasKey = 'responseData' in item
    const hasName = Array.isArray((item as RequestData).responseData?.name)
    return hasKey && hasName
  }

  useEffect(() => {
    if (typeof window !== undefined) {
      Prism.highlightAll()
    }
  }, [codeSnippet])

  return (
    <div>
      <div
        className={cn(
          Styles.CodeBlock,
          'flex font-code overflow-hidden bg-white flex-col',
        )}
      >
        {type === 'tab' && (
          <TabHead
            items={(item as ItemType).name}
            onChange={(i: number) => onCodeSwitch(i, item as ItemType)}
          />
        )}
        {type === 'request' && (
          <RequestHead
            showResponse={showResponse}
            toggleResponse={(state: boolean) => setShowResponse(state)}
            {...(item as RequestData)}
            onChange={(i: number) =>
              onCodeSwitch(i, (item as RequestData).requestData)
            }
          />
        )}
        {type === 'response' && (
          <ResponseHead
            title={responseTitle}
            item={item as ItemType}
            onChange={(i: number) => onCodeSwitch(i, item as ItemType)}
          />
        )}
        <div className='Code p-0 relative'>
          <CopyToClipboard onCopy={onCopy} text={codeSnippet}>
            <button
              type='button'
              className='text-xs text-white py-1 px-2.5 bg-neu-800 rounded-lg absolute right-8 top-4 z-[5] font-proxima'
            >
              {copied ? 'Copied' : 'Copy'}
            </button>
          </CopyToClipboard>
          <pre className={cn(`!my-0 line-numbers`, codeBg())}>
            <code
              className={cn(
                `language-${language} font-code`,
                responseThemeClassname(),
                codeBg(),
              )}
            >
              {codeSnippet}
            </code>
          </pre>
        </div>
      </div>
      {type === 'request' && hasResponseData() && showResponse && (
        <div className='mt-5'>
          <CodeBlock
            responseTheme={responseTheme}
            responseTitle={responseTitle}
            data={{
              type: 'response',
              item: (item as RequestData).responseData,
            }}
          />
        </div>
      )}
    </div>
  )
}

export default CodeBlock
