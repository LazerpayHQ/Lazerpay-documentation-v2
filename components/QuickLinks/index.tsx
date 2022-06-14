import Image from 'next/image'
import classNames from 'classnames'
import { FaChevronRight } from 'react-icons/fa'

import { tabsData } from './data'
import LzLink from 'components/UI/Link'
import Styles from './index.module.scss'

export default function QuickLinks():JSX.Element {
    return (
        <div className={classNames(Styles.Tabs, 'grid break-keep-all grid-cols-1 md:grid-cols-2 gap-5 gap-y-10 lg:gap-y-8')}>
            {
                tabsData.map(({ image, desc, title, route, label })=> (
                    <div key={route} className="w-full md:max-w-sm">
                        <figure className='overflow-hidden rounded-8'>
                            <Image src={image} width={455} height={220} />
                        </figure>
                        <div className='my-3.5 max-w-xs'>
                            <h3 className='heading-6-s'>{title}</h3>
                            <p className='mt-2 whitespace-normal paragraph-1 text-neu-800'>{desc}</p>
                        </div>
                        <LzLink to={route} className='flex items-center mt-6 space-x-3 lg:mt-0 paragraph-1-s text-pri-500'>
                            <span>{label}</span>
                            <FaChevronRight className='h-3 text-pri-500' />
                        </LzLink>
                    </div>
                ))
            }
        </div>
    )
}