import { useEffect } from 'react'
import Prism from 'prismjs'

import 'prismjs/components/prism-jsx.js'
import 'prismjs/plugins/line-numbers/prism-line-numbers.js'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import Styles from './index.module.scss'
import { snippets } from 'data/snippets'
import classNames from 'classnames'

interface IProps {
    id?: string;
    req?: string;
    lang?: string;
    className?: string;
    children?: React.ReactNode
}

const Label = ({ label }) => {
    const options = {
        'POST': 'bg-suc-100'
    }

    return (
        <div className={classNames(
            options[label],
            'uppercase text-neu-700 caption-s rounded-8 px-2.5 py-1')}>
            {label}
        </div>
    )
};

export default function CodeBlock({ id, lang = 'jsx', req = 'POST', className }: IProps) {
    const codeSnippet = snippets[id] || 'snippet not found';
    // const title = Object.keys(snippets).find(s => s === id);

  useEffect(() => {
    Prism.highlightAll()
  }, [])

    return (
        <div className={classNames(Styles.CodeBlock, 'flex font-code pb-2 bg-white flex-col')}>
            <div className='flex items-center px-10 py-4 space-x-5 bg-neu-50 head rounded-t-8'>
                <Label label={req} />
            </div>
            <code>
                <pre className={className + "!my-0 line-numbers"}>
                    <code className={classNames(`language-${lang}`)}>{codeSnippet}</code>
                </pre>
            </code>
        </div>
    )
};