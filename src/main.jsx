import ReactDOM from 'react-dom/client'
import React from 'react'
import './styles.css'
import { JournalApp } from './JournalAPP'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
          <BrowserRouter>
                 <JournalApp />

          </BrowserRouter>

  </React.StrictMode>,
)
