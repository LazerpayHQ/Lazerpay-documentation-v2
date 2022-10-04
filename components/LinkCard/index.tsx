import LzLink from 'components/UI/link'
import LinkIcon from 'public/icons/link-icon'
import ArrowRightIcon from 'public/icons/arrow-right-icon'

interface MyProps {
  desc: string
  title: string
  route: string
  icon?: boolean
}

const LinkCard = (props: MyProps) => {
  const { desc, title, route, icon } = props
  return (
    <div key={route} className='mt-0'>
      <LzLink className='my-2' to={route}>
        <div
          key={route}
          className='bg-white mb-2 p-6 md:pt-9 drop-shadow-xs rounded-8 lg:rounded-8 h-[166px] lg:w-92 z-10'
        >
          {icon && <LinkIcon />}
          <h5 className='py-2 text-pri-500 md:py-4 paragraph-2 md:paragraph-3-s'>
            {title}
          </h5>
          <p className='mr-6 paragraph-1'>{desc} </p>
          <span className='flex justify-end pt-3'>
            <ArrowRightIcon />
          </span>
        </div>
      </LzLink>
    </div>
  )
}

export default LinkCard
