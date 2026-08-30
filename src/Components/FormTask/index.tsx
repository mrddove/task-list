import { useTasks } from '../../context/TaskContext'
import { validateForm } from '../../utils/validateForm'
import Button from '../Button'
import DueDateInput from '../DueDateInput'
import InputForm from '../InputForm'
import SelectPriority from '../SelectPriority'

import styles from './style.module.scss'

export default function FormTask() {
  const { handleAddTask } = useTasks()

  function onSubmitTaskAction(formData: FormData) {
    const task = formData.get('task')?.toString() ?? ''
    const priority = formData.get('priority')?.toString() ?? ''
    const dueDate = formData.get('dueDate')?.toString() ?? ''

    const { isValid, message: errrorMessage } = validateForm({
      task,
      dueDate,
    })

    if (isValid) {
      const newTask = {
        id: crypto.randomUUID(),
        title: task,
        completed: false,
        priority,
        dueDate,
      }

      handleAddTask(newTask)
    } else if (!isValid) {
      alert(JSON.stringify(errrorMessage, null, 2))
    }
  }

  return (
    <section>
      <form action={onSubmitTaskAction}>
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
