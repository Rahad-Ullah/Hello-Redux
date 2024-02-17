import { useSelector } from "react-redux";

const Counter = () => {
  const { count } = useSelector((state) => state.counter);

  console.log(count)

  return (
    <div>
      <button>Decrement</button>
      <h1>{count}</h1>
      <button>Increment</button>
    </div>
  );
};

export default Counter;
