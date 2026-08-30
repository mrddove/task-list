import { useState } from 'react'
import EditForm from './Components/EditForm'
import FilterTask from './Components/FilterTask'
import FormTask from './Components/FormTask'
import Header from './Components/Header'
import Modal from './Components/Modal'
import ProgressBar from './Components/ProgressBar'
import TaskList from './Components/TaskList'
import { useTasks } from './context/TaskContext'
import type { Mode } from './types'

function App() {
  const { editTask } = useTasks()

  const [darkMode, setDarkMode] = useState<Mode>('light')

  function handleTheme() {
    setDarkMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
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
        <ProgressBar />
        <FormTask />
        <FilterTask />
        <TaskList />

        {editTask.edit && (
          <Modal headerText="Edit Task">
            <EditForm editItem={editTask} />
          </Modal>
        )}
      </div>
    </div>
  )
}

export default App
