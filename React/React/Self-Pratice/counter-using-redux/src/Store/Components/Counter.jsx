import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  decrementByValue,
  increment,
  incrementByValue,
} from "../../State/CounterSlice";

const Counter = () => {
  const count = useSelector((state) => state.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>The Counter App</h1>
      <h2>Counter vaule: {count}</h2>
      <button onClick={() => dispatch(increment())}>Increment by 1</button>
      <button onClick={() => dispatch(incrementByValue(10))}>
        Increment by 10
      </button>
      <button onClick={() => dispatch(decrement())}>Decrement by 1</button>
      <button onClick={() => dispatch(decrementByValue(10))}>
        Decrement by 10
      </button>
    </div>
  );
};

export default Counter;
