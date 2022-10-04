import classNames from 'classnames'
import LinkCard from 'components/LinkCard'

export type CardListProps = {
  items: CardListType[]
  icon: boolean
}

export type CardListType = {
  title: string
  desc: string
  route: string
}

const CardList = (props: CardListProps) => {
  const { items, icon } = props
  return (
    <section
      className={classNames(
        'grid md:grid-cols-2 items-center lg:flex-row w-full md:space-y-1 w-full md:gap-x-6 z-10',
      )}
    >
      {items.map(({ title, desc, route }) => {
        return (
          <LinkCard
            icon={icon}
            key={route}
            title={title}
            desc={desc}
            route={route}
          />
        )
      })}
    </section>
  )
}

export default CardList
