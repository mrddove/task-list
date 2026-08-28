import styles from './style.module.scss'

type ButtonProps = {
  children: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
  variant?: 'primary'
  onClick?: () => void
}

export default function Button({
  children,
  type = 'button',
  variant,
  onClick,
}: ButtonProps) {
  const btnClass = [styles.btn, styles[`${variant}`]].join(' ')
  return (
    <button type={type} className={btnClass} onClick={onClick}>
      {children}
    </button>
  )
}
