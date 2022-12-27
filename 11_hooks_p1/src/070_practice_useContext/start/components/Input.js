import React from "react";
import { useCalcState } from "../context/CalcProvider";

export const Input = ({ name }) => {
  const [state, dispatch] = useCalcState();

  return (
    <>
      <div>
        {name}:
        <input
          type="number"
          name={name}
          value={state[name]}
          onChange={(e) => {
            dispatch({
              type: "change",
              payload: { name: e.target.name, value: e.target.value },
            });
          }}
        />
      </div>
    </>
  );
};
