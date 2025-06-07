import React, { useState } from 'react'
import { addTodo } from '../feature/TodoSlice';
import { useDispatch } from 'react-redux';

const AddTodos = () => {
  const [inputTodo, setInputTodo] = useState("");
  const dispatch = useDispatch()
  return (
    <>
    <div className=' flex flex-col justify-center items-center p-5 gap-5'>
      <input 
    className='border p-2 rounded-sm '
    placeholder='Enter your Todos...'
    type="text" 
    value={inputTodo}
    onChange={(e) => setInputTodo(e.target.value)}
    />
    <button
    className='border p-2 rounded-full hover:bg-green-500'
    onClick={() => dispatch(addTodo)}
    >Add Todo</button>
    </div>
    </>
  )
}

export default AddTodos