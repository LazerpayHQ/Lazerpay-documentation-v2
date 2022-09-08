import { useEffect, useState, MouseEvent } from 'react'
import Prism from 'prismjs';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import cn from 'classnames';


import 'prismjs/components/prism-jsx.js'
import 'prismjs/plugins/line-numbers/prism-line-numbers.js'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import Styles from './index.module.scss';
import { snippets } from 'data/snippets';

export type CodeTabType = {
    heading: string[];
    snippet: string[];
    lang: string[];
}

export type RequestType = {
    method: 'POST' | 'GET';
}

export type TabProps = {
    items: string[];
    onChange: (i: number) => void;
}

export type DataProp = {
    type: 'tab' | 'request',
    item: CodeTabType | RequestType
}
interface IProps {
    id?: string;
    req?: string;
    lang?: string;
    data?: DataProp;
    children?: React.ReactNode
}

const Label = ({ label }) => {
    const options = {
        'POST': 'bg-suc-100'
    }

    return (
        <div className={cn(
            options[label],
            'uppercase text-neu-700 caption-s rounded-8 px-2.5 py-1')}>
            {label}
        </div>
    )
};

const TabHead = (props: TabProps) => {
    const { items, onChange } = props;
    const [active, setActive] = useState<number>(0);

    const tabItemClassName = (i: number): string => {
        return cn('py-3.5 px-2.5 text-neu-400 relative', { 'text-pri-600': i === active })
    }

    const onTabClicked = (e: MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        const { dataset } = e.target as HTMLButtonElement;
        setActive(Number(dataset.value));
        onChange(Number(dataset.value))
    }
    return (
        <div className='bg-white'>
            <ul className='flex items-center px-8'>
                {items.map((title: string, i: number) => (
                    <li key={title} className={tabItemClassName(i)}>
                        <button type='button' aria-label={title} data-value={i} onClick={onTabClicked}>{title}</button>
                        {i === active && (
                            <div className='absolute bottom-0 left-0 w-full h-1 bg-pri-500 rounded-t-2xl'></div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )
}

const RequestHead = (props: RequestType) => {
    const { method } = props;
    const options = {
        'POST': 'bg-suc-100',
        'GET': ''
    }

    return (
        <div className='bg-neu-50'>
            <div className='px-8 py-2.5'>
                <span className={cn('uppercase text-neu-700 caption-s rounded-8 px-2.5 py-1 text-xs', options[method])}>{method}</span>
            </div>
        </div>
    )
}

export default function CodeBlock(props: IProps) {
    const { data } = props;
    const { type, item } = data as DataProp;

    const [codeSnippet, setCodeSnippet] = useState<string>("");
    const [language, setLanguage] = useState<string>("jsx");
    const [copied, setCopied] = useState<boolean>(false);

    const onTabSwitch = (i: number): void => {
        setCodeSnippet(snippets[(item as CodeTabType).snippet[i]]);
        setLanguage((item as CodeTabType).lang[i])
    }

    const onCopy = (): void => {
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 2000)
    }

    useEffect(() => {
        if (type === 'tab') {
            setCodeSnippet(snippets[(item as CodeTabType).snippet[0]])
            setLanguage((item as CodeTabType).lang[0])
        }
    }, [])

    useEffect(() => {
        if (typeof window !== undefined) {
            Prism.highlightAll()
        }
    }, [codeSnippet])

    return (
        <div className={cn(Styles.CodeBlock, 'flex font-code pb-2 bg-white flex-col')}>
            {type === 'tab' && <TabHead items={(item as CodeTabType).heading} onChange={onTabSwitch} />}
            {type === 'request' && <RequestHead method={(item as RequestType).method} />}
            <div className='Code p-0 relative'>
                <CopyToClipboard onCopy={onCopy} text={codeSnippet}>
                    <button
                        type='button'
                        className='text-xs text-white py-1 px-2.5 bg-neu-800 rounded-lg absolute right-8 top-4 z-10 font-proxima'
                    >{copied ? 'Copied' : 'Copy'}</button>
                </CopyToClipboard>
                <pre className="!my-0 line-numbers">
                    <code className={`language-${language} code`}>{codeSnippet}</code>
                </pre>
            </div>
        </div>
    )
};