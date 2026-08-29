export type TaskDataType = {
  id: string
  title: string
  completed: boolean
  priority: string
  dueDate: string
}

export type InputProps = {
  name: string
  label: string
  type?: string
  id: string
  defaultValue?: string
}

export type Mode = 'light' | 'dark'
export type TFilters = 'all' | 'active' | 'completed'

export type EditState = {
  item: TaskDataType
  edit: boolean
}
