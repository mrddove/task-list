import ToogleSwitch from '../ToggleSwitch'
import styles from './style.module.scss'

type HeaderProps = {
  handleTheme: () => void
}

export default function Header({ handleTheme }: HeaderProps) {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.header__title}>My Tasks</h1>
        <ToogleSwitch onChangeTheme={handleTheme} />
      </header>
    </>
  )
}
