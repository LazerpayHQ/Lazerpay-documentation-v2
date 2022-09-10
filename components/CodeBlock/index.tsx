import { useEffect, useState } from 'react'
import Prism from 'prismjs';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import cn from 'classnames';

import 'prismjs/components/prism-jsx.js'
import 'prismjs/plugins/line-numbers/prism-line-numbers.js'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import Styles from './index.module.scss';
import { snippets } from 'data/snippets';

import { RequestHead, ResponseHead, TabHead } from './components';
import { ItemType, RequestType, RequestData, DataProp } from './types';
import { initializePrism } from './configurePrism';

initializePrism(Prism);
export interface CodeBlockProps {
    responseTheme?: 'default' | 'red';
    responseTitle?: string;
    lang?: string;
    data: DataProp;
}

export default function CodeBlock(props: CodeBlockProps) {
    const { data, responseTheme, responseTitle } = props;
    const { type, item } = data as DataProp;

    const [codeSnippet, setCodeSnippet] = useState<string>("");
    const [language, setLanguage] = useState<string>("jsx");
    const [copied, setCopied] = useState<boolean>(false);
    const [showResponse, setShowResponse] = useState<boolean>(true);

    const onCodeSwitch = (i: number, items: ItemType | RequestType): void => {
        setCodeSnippet(snippets[(items as ItemType).snippet[i]]);
        setLanguage((items as ItemType).lang[i])
    }

    const onCopy = (): void => {
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 2000)
    }

    const responseThemeClassname = (): string => {
        if (type === 'response') {
            return responseTheme === 'default' ? 'code--default' : 'code--red';
        }
        return 'code';
    }

    const codeBg = (): string => {
        return type === 'response' ? 'response' : 'default'
    }

    useEffect(() => {
        if (type === 'tab') {
            setCodeSnippet(snippets[(item as ItemType).snippet[0]])
            setLanguage((item as ItemType).lang[0])
        }
        if (type === 'request') {
            const { requestData } = item as RequestData
            setCodeSnippet(snippets[(requestData as RequestType).snippet[0]])
            setLanguage((requestData as RequestType).lang[0])
        }
        if (type === 'response') {
            setCodeSnippet(snippets[(item as ItemType).snippet[0]])
            setLanguage('json')
        }
    }, [])

    useEffect(() => {
        if (typeof window !== undefined) {
            Prism.highlightAll()
        }
    }, [codeSnippet])

    return (
        <div>
            <div className={cn(Styles.CodeBlock, 'flex font-code pb-2 bg-white flex-col')}>
                {type === 'tab' && <TabHead items={(item as ItemType).name} onChange={(i: number) => onCodeSwitch(i, item as ItemType)} />}
                {type === 'request' && <RequestHead showResponse={showResponse} toggleResponse={(state: boolean) => setShowResponse(state)} {...item as RequestData} onChange={(i: number) => onCodeSwitch(i, (item as RequestData).requestData)} />}
                {type === 'response' && <ResponseHead title={responseTitle} item={(item as ItemType)} onChange={(i: number) => onCodeSwitch(i, (item as ItemType))} />}
                <div className='Code p-0 relative'>
                    <CopyToClipboard onCopy={onCopy} text={codeSnippet}>
                        <button
                            type='button'
                            className='text-xs text-white py-1 px-2.5 bg-neu-800 rounded-lg absolute right-8 top-4 z-[5] font-proxima'
                        >{copied ? 'Copied' : 'Copy'}</button>
                    </CopyToClipboard>
                    <pre className={cn('!my-0 line-numbers', codeBg())}>
                        <code className={cn(`language-${language}`, responseThemeClassname(), codeBg())}>{codeSnippet}</code>
                    </pre>
                </div>
            </div>
            {(type === 'request' && showResponse) && <div className='mt-5'><CodeBlock responseTheme={responseTheme} responseTitle={responseTitle} data={{ type: 'response', item: (item as RequestData).responseData }} /></div>}
        </div>
    )
};