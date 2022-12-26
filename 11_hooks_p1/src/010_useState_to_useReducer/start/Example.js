import { useState, useReducer } from "react";
const Example = () => {
  const [state, setState] = useState(0);
  const [rstate, dispatch] = useReducer((prev, { type, step }) => {
    switch (type) {
      case "+":
        return prev + step;

      case "-":
        return prev - step;

      default:
        return prev;
    }
  }, 0);

  const increment = () => {
    setState((p) => p + 1);
  };

  const decrement = () => {
    setState((p) => p - 1);
  };

  const rIncrement = () => {
    dispatch({ type: "+", step: 3 });
  };

  const rDecrement = () => {
    dispatch({ type: "-", step: 2 });
  };
  return (
    <>
      <div>
        <h3>{state}</h3>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
      <div>
        <h3>{rstate}</h3>
        <button onClick={rIncrement}>+</button>
        <button onClick={rDecrement}>-</button>
      </div>
    </>
  );
};

export default Example;
