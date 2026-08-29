import { useState } from 'react'
import { taskData as item } from './assets/taskData'
import EditForm from './Components/EditForm'
import FilterTask from './Components/FilterTask'
import FormTask from './Components/FormTask'
import Header from './Components/Header'
import Modal from './Components/Modal'
import ProgressBar from './Components/ProgressBar'
import TaskList from './Components/TaskList'
import type { EditState, Mode, TaskDataType, TFilters } from './types'

function App() {
  const [darkMode, setDarkMode] = useState<Mode>('light')

  const [taskData, setTaskData] = useState<TaskDataType[]>(item)

  const [editTask, setEditTask] = useState<EditState>({
    item: null,
    edit: false,
  })
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

  const taskLeft = taskData.filter((item) => !item.completed)

  function handleTheme() {
    setDarkMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
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

  function openEditModalForm(item: TaskDataType) {
    setEditTask({ item, edit: true })
  }

  function handleUpdateTask(editedItem: TaskDataType) {
    setTaskData((prevTaskData) =>
      prevTaskData.map((item) =>
        item.id === editedItem.id ? { ...item, ...editedItem } : item,
      ),
    )
    setEditTask({ item: null, edit: false })
  }

  function closeModalForm() {
    setEditTask({ item: null, edit: false })
  }

  // filters all, active, completed
  function handleFilters(filterId: TFilters) {
    setFilter(filterId)
  }

  return (
    <div className="container" data-theme={darkMode}>
      <input
        type="checkbox"
        checked={darkMode === 'dark'}
        className="theme-toggle"
        onChange={handleTheme}
      />

      <div className="taskApp">
        <Header handleTheme={handleTheme} />
        <ProgressBar
          taskData={taskData}
          completed={taskData.filter((item) => item.completed)}
        />
        <FormTask onAddTask={handleAddTask} editItem={editTask} />
        <FilterTask
          taskLeft={taskLeft}
          currentFilter={filter}
          onFilterChange={handleFilters}
        />
        <TaskList
          taskData={filteredTask}
          onDeleteTask={handleDeleteTask}
          onDoneTask={handleDoneTask}
          onEditModal={openEditModalForm}
        />
      </div>

      {editTask.edit && (
        <Modal headerText="Edit Task" onCloseModal={closeModalForm}>
          <EditForm
            editItem={editTask}
            onCloseModal={closeModalForm}
            onUpdateTask={handleUpdateTask}
          />
        </Modal>
      )}
    </div>
  )
}

export default App
