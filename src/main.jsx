import ReactDOM from 'react-dom/client'
import React from 'react'
import './styles.css'
import { JournalApp } from './JournalAPP'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

<Provider store={store}>   

          <BrowserRouter>

                 <JournalApp />


          </BrowserRouter>

</Provider>

  </React.StrictMode>,
)
