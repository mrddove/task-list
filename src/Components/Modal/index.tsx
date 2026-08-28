import { IoClose } from 'react-icons/io5'

import styles from './style.module.scss'

type ModalProps = {
  children: React.ReactNode
  onCloseModal: () => void
  headerText?: string
}

export default function Modal({
  children,
  headerText = 'Header Text',
  onCloseModal,
}: ModalProps) {
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
