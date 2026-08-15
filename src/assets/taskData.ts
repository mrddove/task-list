export type TaskDataType = {
  id: number
  text: string
  completed: boolean
  priority: string
  createdAt: string
  dueDate?: string | null
}

export const taskData: TaskDataType[] = [
  {
    id: 1,
    text: 'Learn React',
    completed: false,
    priority: 'medium',
    createdAt: '2026-07-28T09:15:00Z',
  },
  {
    id: 2,
    text: 'Prototyping To-Do List',
    completed: true,
    priority: 'low',
    dueDate: null,
    createdAt: '2026-07-25T14:30:00Z',
  },
  {
    id: 3,
    text: 'Push to Github',
    completed: false,
    priority: 'high',
    dueDate: '2026-08-01',
    createdAt: '2026-07-29T16:45:00Z',
  },
  {
    id: 4,
    text: 'Write unit tests for auth module',
    completed: false,
    priority: 'high',
    dueDate: '2026-08-03',
    createdAt: '2026-07-30T10:00:00Z',
  },
  {
    id: 5,
    text: 'Update README documentation',
    completed: false,
    priority: 'low',
    dueDate: '2026-08-06',
    createdAt: '2026-07-31T08:20:00Z',
  },
  {
    id: 6,
    text: 'Review pull request #42',
    completed: true,
    priority: 'medium',
    dueDate: null,
    createdAt: '2026-07-27T13:10:00Z',
  },
]
