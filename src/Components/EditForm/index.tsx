import type { EditState } from '../../App'
import type { TaskDataType } from '../../assets/taskData'
import Button from '../Button'
import DueDateInput from '../DueDateInput'
import InputForm from '../InputForm'
import SelectPriority from '../SelectPriority'

type EditFormProps = {
  editItem: EditState
  onCloseModal: () => void
  onUpdateTask: (editedItem: TaskDataType) => void
}

import styles from './style.module.scss'

export default function EditForm({ editItem, onCloseModal }: EditFormProps) {
  function handleUpdateTask() {}
  return (
    <section>
      <form action={handleUpdateTask}>
        <div className={styles.container}>
          <InputForm
            name="task"
            label="Add Task"
            id="task-input"
            type="text"
            defaultValue={editItem.item.title}
          />
        </div>
        <fieldset className="fieldset">
          <legend className="sr-only">Task Details</legend>
          <SelectPriority
            name="priority"
            label="Priority"
            id="priority-select"
            defaultValue={editItem.item.priority}
          />
          <DueDateInput
            name="dueDate"
            label="Due date"
            id="due-date-input"
            type="date"
            defaultValue={editItem.item.dueDate}
          />
        </fieldset>

        <div className={styles.action}>
          <Button type="button" onClick={onCloseModal}>
            Cancel
          </Button>
          <Button type="submit" variant="primary">
            Update
          </Button>
        </div>
      </form>
    </section>
  )
}
