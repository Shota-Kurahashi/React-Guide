import { useReducer } from "react";

const CALC_OPTIONS = ["add", "minus", "divide", "multiply"];

const reducer = (prev, { type, payload }) => {
  switch (type) {
    case "change":
      return { ...prev, [payload.name]: payload.value };
    case "add":
      return { ...prev, result: prev.a + prev.b, type };
    case "minus":
      return { ...prev, result: prev.a - prev.b, type };
    case "divide":
      return { ...prev, result: prev.a / prev.b, type };
    case "multiply":
      return { ...prev, result: prev.a * prev.b, type };

    default:
      throw new Error("不明なactionです。");
  }
};

const Example = () => {
  const initState = {
    type: "minus",
    a: 1,
    b: 2,
    result: 3,
  };

  const [state, dispatch] = useReducer(reducer, initState);

  const calculate = (e) => {
    dispatch({ type: e.target.value });
  };

  const numChangeHandler = (e) => {
    dispatch({
      type: "change",
      payload: { name: e.target.name, value: +e.target.value },
    });
  };

  console.log(state);

  return (
    <>
      <h3>練習問題</h3>
      <p>useReducerを使って完成コードと同じ機能を作成してください。</p>
      <div>
        a:
        <input
          type="number"
          name="a"
          value={state.a}
          onChange={numChangeHandler}
        />
      </div>
      <div>
        b:
        <input
          type="number"
          name="b"
          value={state.b}
          onChange={numChangeHandler}
        />
      </div>
      <select value={state.type} onChange={calculate}>
        {CALC_OPTIONS.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <h1>結果：{state.result}</h1>
    </>
  );
};

export default Example;
