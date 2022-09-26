import Divider from 'components/Divider'
import LzLink from 'components/UI/link'
import ArrowRightIcon from 'public/icons/arrow-right-icon'

export interface ItemProp {
  type: string
  title: string
  desc: string
  link: string
  linkText?: string
}

export interface LibraryItemProps {
  items: ItemProp[]
}

const Item = (props: ItemProp) => {
  const { type, title, desc, link, linkText } = props

  return (
    <div className='sm:even:ml-11 mb-4 '>
      <h5 className='heading-5-sm'>{type}</h5>
      <p className='paragraph-2 font-semibold mt-6'>{title}</p>
      <p className='paragraph-2 mt-2'>{desc}</p>
      <div className='mt-4 flex items-center'>
        <ArrowRightIcon width={14} fill='#125bc9' />
        <LzLink className='paragraph-1-s text-pri-500 ml-2' to={link}>
          {linkText || 'View library'}
        </LzLink>
      </div>
      <Divider className='mt-6' />
    </div>
  )
}

const LibraryItem = (props: LibraryItemProps) => {
  const { items } = props
  return (
    <section className='grid md:grid-cols-2 items-center lg:flex-row w-full'>
      {items.map((item) => (
        <Item
          key={item.title}
          type={item.type}
          title={item.title}
          desc={item.desc}
          link={item.link}
          linkText={item.linkText}
        />
      ))}
    </section>
  )
}

export default LibraryItem
