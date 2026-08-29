type TInputs = {
  task: string
  dueDate: string
}

export function validateForm(inputs: TInputs) {
  const error = {
    taskError: '',
    dateError: '',
  }

  if (!inputs.task.trim()) {
    error.taskError = 'Task should not be empty'
  }
  if (!inputs.dueDate.trim()) {
    error.dateError = 'The date is invalid'
  }

  return {
    isValid: error.taskError === '' && error.dateError === '',
    message: error,
  }
}
