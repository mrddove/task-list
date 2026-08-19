import { MdKeyboardArrowDown } from 'react-icons/md'

import type { InputProps } from '../types'
import { options } from './optionsData'
import styles from './style.module.scss'

export default function SelectPriority({ name, label, id }: InputProps) {
  return (
    <div className={`${styles.priority} wrap`}>
      <label htmlFor="priority-select" className="sr-only">
        {label}
      </label>
      <select id={id} name={name} className="priority__select">
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.value}
          </option>
        ))}
      </select>
      <div className={styles.priority__icon}>
        <MdKeyboardArrowDown />
      </div>
    </div>
  )
}
