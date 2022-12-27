import { useCounter } from "../context/CounterProvider";

const CounterButton = ({ type, step, onClick }) => {
  const [, dispatch] = useCounter();
  const clickHandler = () => {
    dispatch({ type, step });
  };
  return (
    <button onClick={clickHandler}>
      {type}
      {step}
    </button>
  );
};
export default CounterButton;
