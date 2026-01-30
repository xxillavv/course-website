import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'

import App from './App.js'

import './index.css'

const rootElement = document.getElementById('root')
if (rootElement) {
  createRoot(rootElement).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
} else {
  console.error('Root element not found')
}