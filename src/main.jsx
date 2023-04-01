import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './CounterUseState'
import './index.css'
import {CounterWithCustomHook} from "./CounterWithCustomHook"



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterWithCustomHook />
  </React.StrictMode>
)
