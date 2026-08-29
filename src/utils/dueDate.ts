export function taskDueDate(dueDateInput: string): string {
  const dueDate: Date = new Date(dueDateInput)
  const today: Date = new Date()

  //   Subtracting the milliseconds returned by getTime()
  const timeDiff: number = dueDate.getTime() - today.getTime()
  // (1000 * 60 * 60 * 24) equals 86,400,000 (the number of milliseconds in one single day).
  const diffInDays: number = Math.ceil(timeDiff / (1000 * 60 * 60 * 24))

  if (diffInDays === 1) return 'tomorrow'
  if (diffInDays === 0) return 'today'
  if (diffInDays < 0) return 'overdue'
  if (diffInDays === 5) return '5 days from now'

  return dueDate.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}
