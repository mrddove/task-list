import type { TaskDataType } from '../../types'
import TaskItem from '../TaskItem'
import styles from './style.module.scss'

type TaskListProps = {
  taskData: TaskDataType[]
  onDeleteTask: (item: string) => void
  onDoneTask: (item: string) => void
  onEditModal: (item: TaskDataType) => void
}

export default function TaskList({
  taskData,
  onDeleteTask,
  onDoneTask,
  onEditModal,
}: TaskListProps) {
  return (
    <section>
      <ul className={styles.task}>
        {taskData.map((task) => (
          <TaskItem
            key={task.id}
            taskItems={task}
            onDeleteTask={onDeleteTask}
            onDoneTask={onDoneTask}
            onEditModal={onEditModal}
          />
        ))}
      </ul>
    </section>
  )
}
