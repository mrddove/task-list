import type { InputProps } from '../../types'
import styles from './style.module.scss'

import { FiCalendar } from 'react-icons/fi'

export default function DueDateInput({
  name,
  label,
  id,
  type,
  defaultValue,
}: InputProps) {
  const today = new Date().toISOString().split('T')[0]

  return (
    <div className={`${styles.date} wrap`}>
      <label htmlFor="due-date-input" className="sr-only">
        {label}
      </label>
      <input
        defaultValue={defaultValue}
        type={type}
        id={id}
        name={name}
        className="date__input"
        min={today}
      />

      <div className={styles.date__icon}>
        <FiCalendar />
      </div>
    </div>
  )
}
