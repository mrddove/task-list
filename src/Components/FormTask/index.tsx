import type { EditState } from '../../App'
import type { TaskDataType } from '../../assets/taskData'
import Button from '../Button'
import DueDateInput from '../DueDateInput'
import InputForm from '../InputForm'
import SelectPriority from '../SelectPriority'

import styles from './style.module.scss'

type FormTaskProps = {
  onAddTask: (item: TaskDataType) => void
  editItem: EditState
}

export default function FormTask({ onAddTask }: FormTaskProps) {
  function handleAddTask(formData: FormData) {
    const task = formData.get('task')?.toString() ?? ''
    const priority = formData.get('priority')?.toString() ?? ''
    const dueDate = formData.get('dueDate')?.toString() ?? ''

    const newTask = {
      id: crypto.randomUUID(),
      title: task,
      completed: false,
      priority,
      dueDate,
    }

    onAddTask(newTask)
  }

  return (
    <section>
      <form action={handleAddTask}>
        <div className={styles.flexLayout}>
          <InputForm name="task" label="Add Task" id="task-input" type="text" />
          <Button type="submit" variant="primary">
            + Add
          </Button>
        </div>

        <fieldset className="fieldset">
          <legend className="sr-only">Task Details</legend>
          <SelectPriority
            name="priority"
            label="Priority"
            id="priority-select"
          />
          <DueDateInput
            name="dueDate"
            label="Due date"
            id="due-date-input"
            type="date"
          />
        </fieldset>
      </form>
    </section>
  )
}
