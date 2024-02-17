import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByValue } from "../redux/features/counter/counterSlice";

const Counter = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch()

  return (
    <div>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <br />
      <button onClick={() => dispatch(incrementByValue(5))}>Increment by 5</button>
    </div>
  );
};

export default Counter;
