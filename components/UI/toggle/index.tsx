import { useState, ChangeEvent } from 'react'
import cn from 'classnames'
import Styles from './Toggle.module.scss'

export type ToggleProps = {
  state?: boolean
  onChange: (e: boolean) => void
}

const LzToggle = (props: ToggleProps) => {
  const { state, onChange } = props
  const [checked, setChecked] = useState<boolean>(state || false)
  const onToggle = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked: inputChecked } = e.target as HTMLInputElement
    setChecked(!inputChecked)
    onChange(!inputChecked)
  }

  return (
    <label
      className={cn(Styles.toggle, {
        'bg-neu-200': !checked,
        'bg-suc-500': checked,
      })}
      onClick={() => setChecked((prev) => !prev)}
    >
      <input
        type='checkbox'
        className='toggle'
        id='toggle'
        onChange={onToggle}
        checked={checked}
      />
      <span className={Styles.slider}></span>
    </label>
  )
}

export default LzToggle
