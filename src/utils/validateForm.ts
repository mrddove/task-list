export type TPriority = 'high' | 'medium' | 'low'

type TInputs = {
  task: string
  dueDate: string
  priority: TPriority
}

export function validateForm(inputs: TInputs) {
  const error = {
    taskError: '',
    dateError: '',
    priorityError: '',
  }

  const currentDueDate = new Date(inputs.dueDate).getTime()
  const currentDate = new Date().getTime()

  console.log('currentDueDate:', currentDueDate, 'currentDate:', currentDate)

  if (!inputs.task.trim()) {
    error.taskError = 'Task should not be empty'
  }

  if (!inputs.dueDate.trim()) {
    error.dateError = 'The date is invalid'
  } else if (currentDueDate < currentDate) {
    error.dateError = 'Due date cannot be in the past!'
  }

  if (!inputs.priority.trim()) {
    error.priorityError = 'Please choose a priority'
  }

  return {
    isValid:
      error.taskError === '' &&
      error.dateError === '' &&
      error.priorityError === '',
    message: error,
  }
}
