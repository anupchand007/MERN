import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { Toggle } from './Feature/ShowSlice';

function App() {
  
  const msg = useSelector((state) => state.Message.msg);
  const isVisible = useSelector((state) => state.Message.isVisible);
  const dispatch = useDispatch();
  return isVisible ?
  <div>
    <div className='block font-bold text-3xl p-5'>{msg}</div>
    <button
    onClick={() => dispatch(Toggle())}
    >Hide the Damn Message</button>
  </div>
  
  :
  <button
  onClick={() => dispatch(Toggle())}
  >Show me the Damn Message</button>
}

export default App
