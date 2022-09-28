import { useState, MouseEvent } from 'react'
import cn from 'classnames'

import { useCloseContext } from 'lib/use-close-context'
import { FaAngleDown } from 'react-icons/fa'
import Styles from './codeselect.module.scss'

export type SelectProps = {
  items: string[]
  onChange: (i: number) => void
}

const LzCodeSelect = (props: SelectProps) => {
  const { items, onChange } = props
  const [selected, setSelected] = useState<number>(0)
  const { ref, setVisible, visible } = useCloseContext()

  const onSelected = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault()
    const { dataset } = e.target as HTMLButtonElement
    setSelected(Number(dataset.value))
    onChange(Number(dataset.value))
    setVisible((prev) => !prev)
  }
  return (
    <div className='relative'>
      <button
        onClick={() => setVisible((prev) => !prev)}
        className='text-neu-700 caption-s rounded-8 px-2.5 py-1.5 text-xs flex items-center h-fit bg-neu-100 outline-none'
      >
        <span className='mr-1.5 leading-4'>{items[selected]}</span>
        <FaAngleDown />
      </button>
      <ul
        ref={ref}
        className={cn(
          Styles.select,
          { [Styles.selectActive]: visible },
          'list-none m-0 p-0 bg-neu-100 rounded-lg p-3.5 paragraph-1-s w-max absolute z-[6]',
        )}
      >
        {items.map((item, i) => (
          <li key={item} className='mb-1.5'>
            <button
              type='button'
              aria-label={item}
              data-value={i}
              onClick={onSelected}
              className={cn('w-full py-0.5 px-2.5 text-left rounded', {
                'bg-neu-700': i === selected,
                'text-white': i === selected,
              })}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LzCodeSelect
