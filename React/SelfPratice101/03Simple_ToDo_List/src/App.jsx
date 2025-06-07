import { useEffect } from 'react'
import AddTodos from './components/AddTodos'
import TodoLists from './components/TodoLists'
import { useDispatch } from 'react-redux'
import { addTodo } from './feature/TodoSlice'


const App = () => {

  const dispatch = useDispatch()
  
  useEffect(() => {
    const prevTodos = JSON.parse(localStorage.getItem("todos") || [] );
    prevTodos.map((todo) => {
      dispatch(addTodo(todo.task))
    })
  }, 
  [dispatch])
  return (
    <>
    <h1 className='text-center text-3xl block p-2 '>This is a Todo App</h1>
    <AddTodos/>
    <TodoLists/>
    </>
  )
}

export default App

