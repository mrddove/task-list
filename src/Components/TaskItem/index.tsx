import type { TaskDataType } from '../../assets/taskData'
import Card from '../Card'

import styles from './style.module.scss'

type TaskItemProps = TaskDataType

export default function TaskItem({ text }: TaskItemProps) {
  return (
    <li className={styles.item}>
      <Card>{text}</Card>
    </li>
  )
}
