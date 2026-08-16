export type TaskDataType = {
  id: number
  text: string
  completed: boolean
  priority: string
  createdAt: string
}

export const taskData: TaskDataType[] = [
  {
    id: 1,
    text: 'Learn React',
    completed: false,
    priority: 'medium',
    createdAt: '2026-08-25',
  },
  {
    id: 2,
    text: 'Prototyping To-Do List',
    completed: true,
    priority: 'low',
    createdAt: '2026-08-22',
  },
  {
    id: 3,
    text: 'Push to Github',
    completed: false,
    priority: 'high',
    createdAt: '2026-08-26',
  },
  {
    id: 4,
    text: 'Write unit tests for auth module',
    completed: false,
    priority: 'high',
    createdAt: '2026-08-27',
  },
  {
    id: 5,
    text: 'Update README documentation',
    completed: false,
    priority: 'low',
    createdAt: '2026-08-28',
  },
  {
    id: 6,
    text: 'Review pull request #42',
    completed: true,
    priority: 'medium',
    createdAt: '2026-08-24',
  },
]
