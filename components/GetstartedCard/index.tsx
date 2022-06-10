import classNames from 'classnames'
import { FaLink } from 'react-icons/fa'
import { CgArrowLongRight } from 'react-icons/cg'
import Styles from './index.module.scss'
import { cardWithImageData } from './data'

export const LinkedCard = ({ desc, title }) => {
  return (
    <div className='my-2 '>
      <div className='bg-white text-sm mb-2 p-6 md:pt-9 drop-shadow-xs rounded-8 lg:rounded-8 lg:w-92'>
        <FaLink />
        <h5 className='text-pri-500 py-2 md:py-4 md:text-md font-bold'>
          {title}
        </h5>
        <p className=' paragraph-2'>{desc} </p>
        <span className='pt-3 flex text-xl justify-end'>
          <CgArrowLongRight />
        </span>
      </div>
    </div>
  )
}

export default function GetStarted(): JSX.Element {
  return (
    <section
      className={classNames(
        Styles.GetStarted,
        'grid md:grid-cols-2 lg:flex-row w-full lg:space-y-1 w-full lg:space-x-6',
      )}
    >
      {cardWithImageData.map(({ title, desc }) => {
        return <LinkedCard title={title} desc={desc} />
      })}
    </section>
  )
}
