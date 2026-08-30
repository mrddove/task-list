import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { TasKManagerProvider } from './context/TaskContext.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TasKManagerProvider>
      <App />
    </TasKManagerProvider>
  </StrictMode>,
)
