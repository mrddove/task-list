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
    <div className="taskApp">
      <input
        type="checkbox"
        checked={darkMode === 'dark'}
        className="theme-toggle"
        onChange={handleTheme}
      />
      <Header handleTheme={handleTheme} />
      <ProgressBar />
    </div>
  )
}

export default App
