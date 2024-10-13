import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Reset from './assets/Styles/Reset.js'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Reset />
    <App />
  </React.StrictMode>,
)