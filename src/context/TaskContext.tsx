import { createContext, useContext, useState, type ReactNode } from 'react'
import { taskData as item } from '../assets/taskData'
import type { EditState, TaskDataType, TFilters } from '../types'
import type { TTaskContext } from './contextType'

const TaskContext = createContext<TTaskContext | null>(null)

type TasKManagerProps = {
  children: ReactNode
}

export function TasKManagerProvider({ children }: TasKManagerProps) {
  const [taskData, setTaskData] = useState<TaskDataType[]>(item)

  const [editTask, setEditTask] = useState<EditState>({
    item: null,
    edit: false,
  })

  const taskLeft = taskData.filter((item) => !item.completed)

  const [filter, setFilter] = useState<TFilters>('all')

  const filteredTask = taskData.filter((item) => {
    if (filter === 'active') {
      return !item.completed
    }

    if (filter === 'completed') {
      return item.completed
    }

    return item
  })

  // filters all, active, completed
  function handleFilters(filterId: TFilters) {
    setFilter(filterId)
  }

  function handleAddTask(item: TaskDataType) {
    setTaskData((prevTaskData) => [...prevTaskData, item])
  }

  function handleDeleteTask(id: string) {
    setTaskData((prevTaskData) => prevTaskData.filter((item) => item.id !== id))
  }

  function handleDoneTask(id: string) {
    setTaskData((prevTaskData) =>
      prevTaskData.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      ),
    )
  }

  function handleUpdateTask(editedItem: TaskDataType) {
    setTaskData((prevTaskData) =>
      prevTaskData.map((item) =>
        item.id === editedItem.id ? { ...item, ...editedItem } : item,
      ),
    )

    setEditTask({ item: null, edit: false })
  }

  // open and close modal
  function openEditModalForm(item: TaskDataType) {
    setEditTask({ item, edit: true })
  }

  function closeModalForm() {
    setEditTask({ item: null, edit: false })
  }

  return (
    <TaskContext.Provider
      value={{
        taskData,
        editTask,
        taskLeft,
        filteredTask,
        filter,
        handleAddTask,
        handleDeleteTask,
        handleDoneTask,
        handleUpdateTask,
        handleFilters,
        openEditModalForm,
        closeModalForm,
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}

// custom hook right away here at contextfile
/* eslint-disable react-refresh/only-export-components */
export function useTasks() {
  const context = useContext(TaskContext)
  if (!context) {
    throw new Error('useTasks must be used within a TaskProvider')
  }

  return context
}
