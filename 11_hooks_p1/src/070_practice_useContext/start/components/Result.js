import React from "react";
import { useCalcState } from "../context/CalcProvider";

export const Result = () => {
  const [state] = useCalcState();

  return <h3>結果：{state.result}</h3>;
};
