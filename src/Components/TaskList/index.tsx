import type { TaskDataType } from '../../assets/taskData'
import TaskItem from '../TaskItem'
import styles from './style.module.scss'

type TaskListProps = {
  taskData: TaskDataType[]
  onDeleteTask: (item: string) => void
  onDoneTask: (item: string) => void
}

export default function TaskList({
  taskData,
  onDeleteTask,
  onDoneTask,
}: TaskListProps) {
  return (
    <section>
      <ul className={styles.task}>
        {taskData.map((task) => (
          <TaskItem
            key={task.id}
            {...task}
            onDeleteTask={onDeleteTask}
            onDoneTask={onDoneTask}
          />
        ))}
      </ul>
    </section>
  )
}
