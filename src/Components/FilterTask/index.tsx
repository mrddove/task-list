import { useTasks } from '../../context/TaskContext'
import type { TFilters } from '../../types'
import styles from './style.module.scss'

export default function FilterTask() {
  const filters: { value: TFilters }[] = [
    { value: 'all' },
    { value: 'active' },
    { value: 'completed' },
  ]

  const {
    taskLeft,
    filter: currentFilter,
    handleFilters: onFilterChange,
  } = useTasks()

  
  return (
    <nav className={styles.filter} aria-label="Task filters">
      <ul className={styles.filter__container}>
        {filters.map((filter) => (
          <li key={filter.value}>
            <button
              type="button"
              className={`${styles.filter__tab} ${currentFilter === filter.value ? styles.active : ''}`}
              onClick={() => onFilterChange(filter.value)}
            >
              {filter.value}
            </button>
          </li>
        ))}
      </ul>
      <span className={styles.taskLeft} role="status">
        {taskLeft.length} {taskLeft.length <= 1 ? 'task' : 'tasks'} left
      </span>
    </nav>
  )
}
