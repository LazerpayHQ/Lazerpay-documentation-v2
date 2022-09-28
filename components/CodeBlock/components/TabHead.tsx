import { useState, MouseEvent } from 'react'
import cn from 'classnames'

export type TabProps = {
  items: string[]
  onChange: (i: number) => void
}

const TabHead = (props: TabProps) => {
  const { items, onChange } = props
  const [active, setActive] = useState<number>(0)

  const tabItemClassName = (i: number): string => {
    return cn('py-3.5 px-2.5 text-neu-400 paragraph-1-s relative mr-4', {
      'text-pri-600 paragraph-1-s': i === active,
    })
  }

  const onTabClicked = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault()
    const { dataset } = e.target as HTMLButtonElement
    setActive(Number(dataset.value))
    onChange(Number(dataset.value))
  }
  return (
    <div className='bg-white'>
      <ul className='flex items-center px-8 paragraph-1-s'>
        {items.map((title: string, i: number) => (
          <li key={title} className={tabItemClassName(i)}>
            <button
              type='button'
              aria-label={title}
              data-value={i}
              onClick={onTabClicked}
            >
              {title}
            </button>
            {i === active && (
              <div className='absolute bottom-0 left-0 w-full h-1 bg-pri-500 rounded-t-2xl'></div>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TabHead
