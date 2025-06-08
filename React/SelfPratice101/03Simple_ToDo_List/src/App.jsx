import AddTodos from './components/AddTodos'
import TodoLists from './components/TodoLists'

const App = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className='text-center text-3xl font-bold mb-8'>Todo App</h1>
      <AddTodos/>
      <TodoLists/>
    </div>
  )
}

export default App

