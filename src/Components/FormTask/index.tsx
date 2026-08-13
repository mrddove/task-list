import InputForm from './InputForm'

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
      </form>
    </section>
  )
}
