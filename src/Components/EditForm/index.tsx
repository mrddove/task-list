import { useActionState } from 'react'
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

type ActionState = string | null
type ActionPayload = FormData

export default function EditForm({
  editItem,
  onCloseModal,
  onUpdateTask,
}: EditFormProps) {
  const [error, dispatchAction, isPending] = useActionState<
    ActionState,
    ActionPayload
  >(handleUpdateTask, null)

  async function handleUpdateTask(prevState: ActionState, formData: FormData) {
    await new Promise((res) => setTimeout(res, 1000))

    const title = formData.get('task')?.toString() ?? ''
    const priority = formData.get('priority')?.toString() ?? ''
    const dueDate = formData.get('dueDate')?.toString() ?? ''

    const updatedTask = {
      ...editItem.item,
      title,
      priority,
      dueDate,
    }

    onUpdateTask(updatedTask)

    return prevState
  }

  return (
    <section>
      <form action={dispatchAction}>
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
            {isPending ? 'Updating...' : 'Update'}
          </Button>
        </div>
        {error && error}
      </form>
    </section>
  )
}
