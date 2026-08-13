import styles from './style.module.scss'

type TaskInputProps = {
  name: string
}

export default function InputForm({ name }: TaskInputProps) {
  return (
    <div className={styles.task}>
      <label htmlFor="task-input" className="sr-only">
        Add Task
      </label>
      <input
        type="text"
        name={name}
        className={styles.task__input}
        placeholder="Type your task here.."
      />
      <button type="submit" className={styles.task__btn}>
        + Add
      </button>
    </div>
  )
}
