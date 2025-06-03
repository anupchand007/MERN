import { useState } from 'react';
import './App.css'

function App() {
  // let count  = 5;

  let [count, setCounter] = useState(5) 
  // [count, setCounter] are variables names, we can keep anythign we want
  
  const addValue = () => {
    // count = count + 1;

    if(count == 20 ){
      console.log('Stop Now!!', count);
    }else{
      setCounter(count + 1)
    }
  }

  const removeValue = () => {
    // count = count - 1;
    if(count == 0 ){
      console.log('Stop Now!!');
    }else{
      setCounter(count - 1)
    }
  }

  return (
    <>
  <h2>Chai wity Anup</h2>
  <h2>Counter value : {count}</h2>

  <button 
  onClick={addValue}
  >ADD VALUE {count}</button>
  <br />
  <button 
  onClick={removeValue}
  >REMOVE VALUE {count}</button>

  <footer>Footer: {count}</footer>
    </>


  )
}

export default App
