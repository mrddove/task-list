import type { TaskDataType } from '../../types'
import Card from '../Card'

import styles from './style.module.scss'

type ProgressBarProps = {
  taskData: TaskDataType[]
  completed: TaskDataType[]
}

export default function ProgressBar({ taskData, completed }: ProgressBarProps) {
  const percent = Math.round((completed.length / taskData.length) * 100)
  return (
    <section className={styles.progressbar}>
      <Card>
        <div className={styles.progressbar__info}>
          <span>
            {completed.length} of {taskData.length} completed
          </span>
          <span className={styles.progressbar__percent}>{percent}%</span>
        </div>
        <div
          className={styles.progressbar__track}
          role="progressbar"
          aria-valuenow={0}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-labelledby="progress-label"
        >
          <div
            className={styles.progressbar__fill}
            style={{ width: `${percent}%` }}
          ></div>
        </div>
      </Card>
    </section>
  )
}
