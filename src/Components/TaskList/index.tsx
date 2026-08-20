import type { TaskDataType } from '../../assets/taskData'
import TaskItem from '../TaskItem'
import styles from './style.module.scss'

type TaskListProps = {
  taskData: TaskDataType[]
}

export default function TaskList({ taskData }: TaskListProps) {
  return (
    <section>
      <ul className={styles.task}>
        {taskData.map((task) => (
          <TaskItem key={task.id} {...task} />
        ))}
      </ul>
    </section>
  )
}
