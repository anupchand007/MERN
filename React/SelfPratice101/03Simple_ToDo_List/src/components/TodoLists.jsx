import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../feature/TodoSlice';

const TodoLists = () => {
    const todoLists = useSelector((state) => state.Todos.todo);
    const dispatch = useDispatch();

    return (
        <div className='max-w-md mx-auto p-4'>
            {todoLists.length === 0 ? (
                <p className="text-center text-gray-500">No Todos Yet....</p>
            ) : (
                <ul className="space-y-2">
                    {todoLists.map((todo) => (
                        <li 
                            key={todo.id}
                            className="flex items-center justify-between p-3 rounded-lg shadow"
                        >
                            <span className="flex-1">{todo.task}</span>
                            <button 
                                onClick={() => dispatch(removeTodo(todo.id))}
                                className="ml-2 text-red-500 hover:text-red-700 transition-colors"
                                aria-label="Delete todo"
                            >
                                ❌
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default TodoLists