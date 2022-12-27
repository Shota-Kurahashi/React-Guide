import CounterResult from "./CounterResult";
import CounterButton from "./CounterButton";

const Counter = () => {
  return (
    <>
      <CounterResult />
      <CounterButton step={2} type="+" />
      <CounterButton step={2} type="-" />
    </>
  );
};
export default Counter;
