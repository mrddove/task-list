import { useTasks } from '../../context/TaskContext'
import TaskItem from '../TaskItem'
import styles from './style.module.scss'

export default function TaskList() {
  const { filteredTask } = useTasks()

  return (
    <section>
      <ul className={styles.task}>
        {filteredTask.map((task) => (
          <TaskItem key={task.id} taskItems={task} />
        ))}
      </ul>
    </section>
  )
}
