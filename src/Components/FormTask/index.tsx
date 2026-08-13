import DueDateInput from './DueDateInput'
import InputForm from './InputForm'
import SelectPriority from './SelectPriority'

import styles from './style.module.scss'

export default function FormTask() {
  function handleAddTask(formData: FormData) {
    const task = formData.get('task')
    const priority = formData.get('priority')

    console.log(task, priority)
  }

  return (
    <section>
      <form action={handleAddTask}>
        <InputForm name="task" />
        <fieldset className={styles.fieldset}>
          <legend className="sr-only">Task Details</legend>
          <SelectPriority />
          <DueDateInput />
        </fieldset>
      </form>
    </section>
  )
}
