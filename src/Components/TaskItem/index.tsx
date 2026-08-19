import type { TaskDataType } from '../../assets/taskData'
import { taskDueDate } from '../../utils/dueDate'
import Card from '../Card'

import styles from './style.module.scss'

type TaskItemProps = TaskDataType

export default function TaskItem({ title, priority, dueDate }: TaskItemProps) {
  const dueClass = taskDueDate(dueDate)

  return (
    <li className={styles.item}>
      <Card>
        <div className={styles.item__body}>
          <p className={styles.item__text}>{title}</p>
          <div className={styles.item__meta}>
            <span
              className={`${styles.item__tag} ${styles[`tag-priority-${priority}`]}`}
            >
              {priority}
            </span>
            <span
              className={`${styles.item__tag} ${styles[`tag-${dueClass}`]}`}
            >
              due {dueClass}
            </span>
          </div>
        </div>
      </Card>
    </li>
  )
}
