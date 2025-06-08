import React, { useState } from 'react'
import { addTodo } from '../feature/TodoSlice';
import { useDispatch } from 'react-redux';

const AddTodos = () => {
  const [inputTodo, setInputTodo] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (!inputTodo.trim()) {
      setError("Please enter a todo item");
      return;
    }
    dispatch(addTodo(inputTodo.trim()));
    setInputTodo("");
    setError("");
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };

  return (
    <div className='max-w-md mx-auto p-4'>
      <div className='flex flex-col gap-4'>
        <div className='relative'>
          <input 
            className='w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder='Enter your todo...'
            type="text" 
            value={inputTodo}
            onChange={(e) => {
              setInputTodo(e.target.value);
              setError("");
            }}
            onKeyPress={handleKeyPress}
          />
          {error && <p className='text-red-500 text-sm mt-1'>{error}</p>}
        </div>
        <button
          className='bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors'
          onClick={handleAddTodo}
        >
          Add Todo
        </button>
      </div>
    </div>
  )
}

export default AddTodos