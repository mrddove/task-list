import Card from '../Card'

import styles from './style.module.scss'

export default function ProgressBar() {
  return (
    <section className={styles.progressbar}>
      <Card>
        <div className={styles.progressbar__info}>
          <span>1 of 3 completed</span>
          <span className={styles.progressbar__percent}>33%</span>
        </div>
        <div
          className={styles.progressbar__track}
          role="progressbar"
          aria-valuenow={0}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-labelledby="progress-label"
        >
          <div className={styles.progressbar__fill}></div>
        </div>
      </Card>
    </section>
  )
}
