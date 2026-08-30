import type { EditState, TaskDataType, TFilters } from '../types'

export type TTaskContext = {
  taskData: TaskDataType[]
  editTask: EditState
  taskLeft: TaskDataType[]
  filteredTask: TaskDataType[]
  filter: TFilters

  handleAddTask: (item: TaskDataType) => void
  handleDeleteTask: (id: string) => void
  handleDoneTask: (id: string) => void
  handleUpdateTask: (editItem: TaskDataType) => void

  handleFilters: (id: TFilters) => void

  openEditModalForm: (editItem: TaskDataType) => void
  closeModalForm: () => void
}
