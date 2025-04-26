import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

function MyApp(){
    return (
        <div>
            <h1>Custome APP | ANUP CHAND</h1>
        </div>
    )
}

const anotherUser = "chai aur code"

const ReactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank'},
    'Click me to visit google',
    anotherUser
)

createRoot(document.getElementById('root')).render(

    ReactElement
    // <App />

)
