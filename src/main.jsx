import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './01-useState/CounterUseState'
import './index.css'
import {CounterWithCustomHook} from "./01-useState/CounterWithCustomHook"
import { SimpleForm } from './02-useEffect/SimpleForm.'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SimpleForm />
  </React.StrictMode>
)
