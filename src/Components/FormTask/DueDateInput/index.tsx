import styles from './style.module.scss'

import { FiCalendar } from 'react-icons/fi'

export default function DueDateInput() {
  return (
    <div className={`${styles.date} wrap`}>
      <label htmlFor="due-date-input" className="sr-only">
        Due date
      </label>
      <input
        type="date"
        id="due-date-input"
        name="dueDate"
        className="date__input"
      />

      <div className={styles.date__icon}>
        <FiCalendar />
      </div>
    </div>
  )
}
