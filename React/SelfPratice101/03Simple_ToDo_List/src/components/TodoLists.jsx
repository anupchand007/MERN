import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../feature/TodoSlice';

const TodoLists = () => {
    const todoLists = useSelector((state) => state.Todos.todo);
    const dispatch = useDispatch();

  return (
    <>
    <div className='border p-3 flex flex-col justify-center items-center '>
        {todoLists.map((todos) => {(
            <li key={todos.id}>
                {todos.task}
                <button 
                onClick={() => dispatch(removeTodo(todos.id))}
                >❌</button>
            </li>
        )})}
    </div>
    </>
  )
}

export default TodoLists