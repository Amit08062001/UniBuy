import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HashRouter } from 'react-router-dom'
import Context from './Context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
 
   <Context>
      <HashRouter>
      <App />
      </HashRouter>
    </Context> 
    
  
)
