export type TaskDataType = {
  id: number
  title: string
  completed: boolean
  priority: string
  dueDate: string
}

export const taskData: TaskDataType[] = [
  {
    id: 1,
    title: 'Learn React',
    completed: false,
    priority: 'medium',
    dueDate: '2026-08-21',
  },
  {
    id: 2,
    title: 'Prototyping To-Do List',
    completed: true,
    priority: 'low',
    dueDate: '2026-08-17',
  },
  {
    id: 3,
    title: 'Push to Github',
    completed: false,
    priority: 'high',
    dueDate: '2026-08-15',
  },
  {
    id: 4,
    title: 'Write unit tests for auth module',
    completed: false,
    priority: 'high',
    dueDate: '2026-08-16',
  },
  {
    id: 5,
    title: 'Update README documentation',
    completed: false,
    priority: 'low',
    dueDate: '2026-08-28',
  },
  {
    id: 6,
    title: 'Review pull request #42',
    completed: true,
    priority: 'medium',
    dueDate: '2026-08-24',
  },
]
