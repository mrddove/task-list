import type { TaskDataType } from '../../assets/taskData'
import { taskDueDate } from '../../utils/dueDate'
import Card from '../Card'

import styles from './style.module.scss'

type TaskItemProps = TaskDataType

export default function TaskItem({
  title,
  priority,
  dueDate,
  completed,
}: TaskItemProps) {
  const dueClass = taskDueDate(dueDate)

  return (
    <li className={styles.item}>
      <Card>
        {/* Checkbox */}
        <label className={styles.item__label}>
          <input type="checkbox" className={styles.item__checkbox} />
          <span
            className={[
              styles.item__customCheckbox,
              `${completed ? styles.checked : null}`,
            ].join(' ')}
            aria-hidden="true"
          ></span>
          {completed && (
            <span className="sr-only">Mark "{title}" as complete</span>
          )}
        </label>
        {/* Actual List */}
        <div className={styles.item__body}>
          <p
            className={[
              styles.item__text,
              `${completed ? styles.completed : null}`,
            ].join(' ')}
          >
            {title}
          </p>
          <div className={styles.item__meta}>
            <span
              className={`${styles.item__tag} ${styles[`tag-priority-${priority}`]}`}
            >
              {priority}
            </span>

            {completed ? (
              <span
                className={[styles.item__tag, styles['tag-done']].join(' ')}
              >
                Done
              </span>
            ) : (
              <span
                className={`${styles.item__tag} ${styles[`tag-${dueClass}`]}`}
              >
                due {dueClass}
              </span>
            )}
          </div>
        </div>
      </Card>
    </li>
  )
}
