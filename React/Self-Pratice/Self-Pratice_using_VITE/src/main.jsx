import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Counter from './App.jsx'
import SwitchColor from './App.jsx'
import RandomPassword from './App.jsx'

createRoot(document.getElementById('root')).render(

    // <Counter />
    // <SwitchColor />
    <RandomPassword />

)
