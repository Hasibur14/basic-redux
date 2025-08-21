import { useDispatch } from "react-redux";
import "./App.css";
import { decrement, increment } from "./redux/features/counter/counterSlice";
import { useAppSelector } from "./redux/hooks";

function App() {
  const dispatch = useDispatch();

  const { count } = useAppSelector((state) => state.counter);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <h2>BASIC REDUX</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button>{count}</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default App;
