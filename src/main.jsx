import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Coincntextprovider from './Context/Coinapi.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Coincntextprovider>
          <App />
      </Coincntextprovider>
    </BrowserRouter> 
  </React.StrictMode>,
)
