import type { InputProps } from '../types'
import styles from './style.module.scss'

export default function InputForm({ name, label, id, type }: InputProps) {
  return (
    <div className={styles.task}>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        className={styles.task__input}
        placeholder="Type your task here.."
      />
      <button type="submit" className={styles.task__btn}>
        + Add
      </button>
    </div>
  )
}
