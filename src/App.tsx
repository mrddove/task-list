import { useState } from 'react'
import FormTask from './Components/FormTask'
import Header from './Components/Header'
import ProgressBar from './Components/ProgressBar'
import TaskList from './Components/TaskList'
import { taskData as item, type TaskDataType } from './assets/taskData'

type Mode = 'light' | 'dark'

function App() {
  const [darkMode, setDarkMode] = useState<Mode>('light')

  const [taskData, setTaskData] = useState<TaskDataType[]>(item)

  function handleTheme() {
    setDarkMode(darkMode === 'light' ? 'dark' : 'light')
  }

  function handleAddTask(item: TaskDataType) {
    setTaskData((prevTaskData) => [...prevTaskData, item])
  }

  function handleDeleteTask(id: string) {
    setTaskData((prevTaskData) => prevTaskData.filter((item) => item.id != id))
  }

  function handleDoneTask(id: string) {
    setTaskData((prevTaskData) =>
      prevTaskData.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      ),
    )
  }

  return (
    <div className="container" data-theme={darkMode}>
      <input
        type="checkbox"
        checked={darkMode === 'dark'}
        className="theme-toggle hey"
        onChange={handleTheme}
      />

      <div className="taskApp">
        <Header handleTheme={handleTheme} />
        <ProgressBar />
        <FormTask onAddTask={handleAddTask} />
        <TaskList
          taskData={taskData}
          onDeleteTask={handleDeleteTask}
          onDoneTask={handleDoneTask}
        />
      </div>
    </div>
  )
}

export default App
