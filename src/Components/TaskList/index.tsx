import { taskData } from '../../assets/taskData'
import TaskItem from '../TaskItem'
import styles from './style.module.scss'

export default function TaskList() {
  return (
    <section>
      <ul className={styles.task}>
        {taskData.map((task) => (
          <TaskItem {...task} />
        ))}
      </ul>
    </section>
  )
}
