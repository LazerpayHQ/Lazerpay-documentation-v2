import { useEffect, useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'

import Styles from './index.module.scss'
import classNames from 'classnames'

interface IProps {
  apiType?: string
  labelType?: string
  lang?: string
  children?: React.ReactNode
}

const Label = ({ apiType, label }) => {
  const [activeTab, setActiveTab] = useState(1)

  const tabs = [
    { language: 'JAVASCRIPT', href: '#', current: 'false' },
    { language: 'HTML', href: '#', current: 'true' },
  ]
  const options = {
    POST: 'bg-suc-100',
    GET: ' bg-pri-500',
  }
  if (apiType === 'ApiReq') {
    return (
      <div
        className={classNames(
          options[label],
          'uppercase text-neu-700 caption-s rounded-8 px-2.5 py-1',
        )}
      >
        {label}
      </div>
    )
  } else if (apiType === 'ApiRes') {
    return <div className='capitalize text-neu-600 '>{label}</div>
  } else {
    return <div>''</div>
    // return (
    //   <div>
    //     <div className='sm:hidden'>
    //       <select
    //         id='tabs'
    //         name='tabs'
    //         className='block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md'
    //         defaultValue={tabs.find((tab) => tab.current).language}
    //       >
    //         {tabs.map((tab) => (
    //           <option key={tab.language}>{tab.language}</option>
    //         ))}
    //       </select>
    //     </div>
    //     <div className='hidden sm:block'>
    //       <div className='border-b border-gray-200'>
    //         <nav className='-mb-px flex space-x-8' aria-label='Tabs'>
    //           {tabs.map((tab) => (
    //             <a
    //               key={tab.language}
    //               href={tab.href}
    //               className={classNames(
    //                 tab.current
    //                   ? 'border-indigo-500 text-indigo-600'
    //                   : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
    //                 'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm',
    //               )}
    //               aria-current={tab.current ? 'page' : undefined}
    //             >
    //               {tab.language}
    //             </a>
    //           ))}
    //         </nav>
    //       </div>
    //     </div>
    //     {tabs.map((tab) => {
    //         <div className=''>
    //       </div>
    //     })}
    //   </div>
    // )
  }
}

export default function BlockWrapper({ apiType, labelType, lang }: IProps) {
  return (
    <div className='flex items-center px-10 py-4 space-x-5 bg-neu-50 head rounded-t-8'>
      <Label apiType={apiType} label={labelType} />
      {apiType === 'ApiReq' ? (
        <select>
          <option key={lang} value={lang}>
            {lang}
          </option>
        </select>
      ) : (
        ''
      )}
    </div>
  )
}
