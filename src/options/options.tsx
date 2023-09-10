import React from 'react'
import { createRoot } from 'react-dom/client'
import './options.css'

const App: React.FC = () => {
  return (
    <div className="options">
      <h1>Options</h1>
    </div>
  )
}

const root = document.createElement('div')
document.body.appendChild(root)
createRoot(root).render(<App />)
