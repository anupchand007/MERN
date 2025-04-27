import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {

    let [color, setColor] = useState("black")

  return (
    <>
    <div className='w-screen h-screen duration-200'
    style={{backgroundColor: color}} >

      <div className="fixed flex flex-wrap justify-center
      bottom-30 inset-x-0 px-2 ">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button 
          onClick={() => setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "red"}}
          >Red</button>

          <button 
          onClick={() => setColor("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "green"}}
          >Green</button>

          <button 
          onClick={() => setColor("lavender")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "lavender"}}
          >Lavender</button>

          <button 
          onClick={() => setColor("Purple")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "purple"}}
          >Purple</button>

          <button 
          onClick={() => setColor("skyblue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "skyblue"}}
          >Sky Blue</button>
        </div>
      </div>

    </div>
    </>
  )
}

export default App
