import { IoClose } from 'react-icons/io5'

import { useTasks } from '../../context/TaskContext'
import styles from './style.module.scss'

type ModalProps = {
  children: React.ReactNode

  headerText?: string
}

export default function Modal({
  children,
  headerText = 'Header Text',
}: ModalProps) {
  const { closeModalForm: onCloseModal } = useTasks()
  return (
    <div className={[styles.modal, styles.overlay].join(' ')} role="dialog">
      <div className={styles.modal__dialog}>
        <div className={styles.modal__header}>
          <h2 id="edit-task-1-title" className="modal-title">
            {headerText}
          </h2>
          <IoClose onClick={onCloseModal} />
        </div>
        {children}
      </div>
    </div>
  )
}
