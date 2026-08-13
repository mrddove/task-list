import { useState } from 'react'
import Header from './Components/Header'
import ProgressBar from './Components/ProgressBar'

type Mode = 'light' | 'dark'

function App() {
  const [darkMode, setDarkMode] = useState<Mode>('light')

  function handleTheme() {
    setDarkMode(darkMode === 'light' ? 'dark' : 'light')
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
      </div>
    </div>
  )
}

export default App
