import React from 'react'
import { useSelector } from 'react-redux'

const TodoLists = () => {
    const todoLists = useSelector((state) => state.Todos);
    
  return (
    <>
    <div className='border p-3 flex flex-col justify-center items-center'>
        {todoLists.map((todos) => {
            <li key={todos.id}>
                {todos.task}
            </li>
        })}
    </div>
    </>
  )
}

export default TodoLists