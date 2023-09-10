import React from 'react'
import { createRoot } from 'react-dom/client'
import './popup.css'

const App: React.FC = () => {
  return (
    <div className="popup">
      <h1>Popup</h1>
    </div>
  )
}

const root = document.createElement('div')
document.body.appendChild(root)
createRoot(root).render(<App />)
