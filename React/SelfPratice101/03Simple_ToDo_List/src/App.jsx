import React from 'react'
import AddTodos from './components/AddTodos'
import TodoLists from './components/TodoLists'


const App = () => {``
  return (
    <>
    <h1 className='text-center text-3xl block p-2 '>This is a Todo App</h1>
    <AddTodos/>
    <TodoLists/>
    </>
  )
}

export default App
