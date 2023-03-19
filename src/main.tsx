import React from 'react'
import ReactDOM from 'react-dom/client'

import "./style.css"

//components
import Header from './header'
import Welcome from './welcome'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Header />
    <Welcome />
  </React.StrictMode>,
)
