import { useActionState } from 'react'
import Button from '../Button'
import DueDateInput from '../DueDateInput'
import InputForm from '../InputForm'
import SelectPriority from '../SelectPriority'

import { useTasks } from '../../context/TaskContext'
import type { EditState } from '../../types'
import { validateForm, type TPriority } from '../../utils/validateForm'
import styles from './style.module.scss'

type ActionState = string | null
type ActionPayload = FormData

type EditFormProps = {
  editItem: EditState
}

export default function EditForm({ editItem }: EditFormProps) {
  const { handleUpdateTask: onUpdateTask } = useTasks()

  const [error, dispatchAction, isPending] = useActionState<
    ActionState,
    ActionPayload
  >(onSubmitEditAction, null)

  // action prop function
  async function onSubmitEditAction(
    prevState: ActionState,
    formData: FormData,
  ): Promise<ActionState> {
    //  Guard clause: Ensure editItem.item is not null
    if (!editItem.item) return prevState

    await new Promise((res) => setTimeout(res, 1000))

    const title = formData.get('task')?.toString() ?? ''
    const priority = (formData.get('priority')?.toString() ?? '') as TPriority
    const dueDate = formData.get('dueDate')?.toString() ?? ''

    const { isValid, message: errorMessage } = validateForm({
      task: title,
      dueDate,
      priority,
    })

    if (isValid) {
      const updatedTask = {
        ...editItem.item,
        title,
        priority,
        dueDate,
      }

      onUpdateTask(updatedTask)
    } else if (!isValid) {
      alert(JSON.stringify(errorMessage, null, 2))
    }

    return prevState
  }

  return (
    <section>
      <form action={dispatchAction} noValidate>
        <div className={styles.container}>
          <InputForm
            name="task"
            label="Add Task"
            id="task-input"
            type="text"
            defaultValue={editItem?.item?.title}
          />
        </div>
        <fieldset className="fieldset">
          <legend className="sr-only">Task Details</legend>
          <SelectPriority
            name="priority"
            label="Priority"
            id="priority-select"
            defaultValue={editItem?.item?.priority}
          />
          <DueDateInput
            name="dueDate"
            label="Due date"
            id="due-date-input"
            type="date"
            defaultValue={editItem?.item?.dueDate}
          />
        </fieldset>

        <div className={styles.action}>
          <Button type="button">Cancel</Button>
          <Button type="submit" variant="primary">
            {isPending ? 'Updating...' : 'Update'}
          </Button>
        </div>
        {error && error}
      </form>
    </section>
  )
}
