import type { InputProps } from '../../types'
import styles from './style.module.scss'

type InputFormProps = InputProps & {
  edit?: boolean
}

export default function InputForm({
  name,
  label,
  id,
  type,
  defaultValue,
}: InputFormProps) {
  return (
    <>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        defaultValue={defaultValue}
        className={styles.input}
        placeholder="Type your task here.."
      />
    </>
  )
}
