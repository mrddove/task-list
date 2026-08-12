import { IoSunny } from 'react-icons/io5'
import { WiMoonWaningCrescent3 } from 'react-icons/wi'

import styles from './style.module.scss'

type ToogleSwitchProps = {
  onChangeTheme: () => void
}

export default function ToogleSwitch({ onChangeTheme }: ToogleSwitchProps) {
  return (
    <label
      htmlFor="theme-toggle"
      className={styles.switch}
      aria-label="Toggle light and dark mode"
      onClick={onChangeTheme}
    >
      <span className={styles.switch__icon} aria-hidden="true">
        <IoSunny />
      </span>
      <span className={styles.switch__track}>
        <span className={styles.thumb}></span>
      </span>
      <span className={styles.switch__icon} aria-hidden="true">
        <WiMoonWaningCrescent3 />
      </span>
    </label>
  )
}
