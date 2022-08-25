
import LzLink from 'components/UI/link'
import LinkIcon from 'public/icons/link-icon'
import ArrowRightIcon from 'public/icons/arrow-right-icon'
import classNames from 'classnames'

interface MyProps {
  desc?: string
  title?: string
  route?: string
  icon?: boolean
  customIcom?: Object
  className?: string
  children?: React.ReactNode,
}

// card with Icon component
const LinkedCard = ({ icon, desc, title, route, }: MyProps) => {
  const frameStyle =
    'bg-white mb-2 p-6 md:pt-9 h-[210px] drop-shadow-xs rounded-8 lg:rounded-8 lg:w-92 z-10'

  return (
    <div key={route}>
      <LzLink className='my-2' to={route}>
        <div
          key={route}
          className={
            icon
              ? frameStyle
              : 'bg-white mb-2 p-6 drop-shadow-xs rounded-8 h-[185px] lg:rounded-8 lg:w-92 z-10'
          }
        >
          {icon ? <LinkIcon /> : ''}
          <h5 className='py-2 text-pri-500 md:py-4 paragraph-2 md:paragraph-3-s'>
            {title}
          </h5>
          <p className='mr-6 paragraph-1'> {desc} </p>
          <span className='flex justify-end pt-3'>
            <ArrowRightIcon />
          </span>
        </div>
      </LzLink>
    </div>
  )
}

export default LinkedCard

// card with choice Icon
export const PlainCard = ({ desc, title, route, customIcom, className }: MyProps) => {
  return (
    <>
      <div key={route}>
        <LzLink className='my-2' to={route}>
          <div
            key={route}
            className={classNames('z-10 px-5 mb-2 bg-white md:pt-4 drop-shadow-xs rounded-8 lg:rounded-8 sm:w-auto lg:w-92', className)}
            >
            {customIcom ? customIcom : ''}
            <h5 className='py-2 text-pri-500 md:py-4 paragraph-2 md:paragraph-3-s'>
              {title}
            </h5>
            <p className='h-12 mr-6 paragraph-1'>{desc} </p>
            <span className='flex justify-end py-5 pb-5'>
              <ArrowRightIcon />
            </span>
          </div>
        </LzLink>
      </div>
    </>
  )
}