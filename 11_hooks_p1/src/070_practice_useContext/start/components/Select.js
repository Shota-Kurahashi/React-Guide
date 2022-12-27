import React from "react";
import { useCalcState } from "../context/CalcProvider";
const CALC_OPTIONS = ["add", "minus", "divide", "multiply"];

export const Select = () => {
  const [state, dispatch] = useCalcState();

  return (
    <div>
      <select
        value={state.type}
        name="type"
        onChange={(e) => {
          dispatch({
            type: e.target.value,
          });
        }}
      >
        {CALC_OPTIONS.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
};
