import { MdKeyboardArrowDown } from 'react-icons/md'

import type { InputProps } from '../../types'
import { options } from './optionsData'
import styles from './style.module.scss'

export default function SelectPriority({
  name,
  label,
  id,
  defaultValue,
}: InputProps) {
  return (
    <div className={`${styles.priority} wrap`}>
      <label htmlFor="priority-select" className="sr-only">
        {label}
      </label>
      <select
        defaultValue={defaultValue}
        id={id}
        name={name}
        className="priority__select"
      >
        <option value="">Priority</option>
        {options.map((option) => (
          <option key={option.value}>{option.value}</option>
        ))}
      </select>
      <div className={styles.priority__icon}>
        <MdKeyboardArrowDown />
      </div>
    </div>
  )
}
