import Image from 'next/image'
import { tabsData } from './data'
import LzLink from 'components/UI/Link'
import Styles from './index.module.scss'
import classNames from 'classnames'
import { FaChevronRight } from 'react-icons/fa'

export default function QuickLinks():JSX.Element {
    return (
        <div className={classNames(Styles.Tabs, 'grid grid-cols-2 gap-5 gap-y-8')}>
            {
                tabsData.map(({ image, desc, title, route, label })=> (
                    <div key={route} className="max-w-sm">
                        <figure className='overflow-hidden rounded-8'>
                            <Image src={image} width={355} height={180} />
                        </figure>
                        <div className='my-3.5 max-w-xs'>
                            <h3 className='heading-6-s'>{title}</h3>
                            <p className='mt-2 paragraph-1 text-neu-800'>{desc}</p>
                        </div>
                        <LzLink className='flex items-center space-x-3 paragraph-1-s text-pri-500' to={route}>
                            <span>{label}</span>
                            <FaChevronRight className='h-3 text-pri-500' />
                        </LzLink>
                    </div>
                ))
            }
        </div>
    )
}