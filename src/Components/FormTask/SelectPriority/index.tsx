import { MdKeyboardArrowDown } from 'react-icons/md'

import { options } from './optionsData'
import styles from './style.module.scss'

export default function SelectPriority() {
  return (
    <div className={`${styles.priority} wrap`}>
      <label htmlFor="priority-select" className="sr-only">
        Priority
      </label>
      <select id="priority-select" name="priority" className="priority__select">
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
