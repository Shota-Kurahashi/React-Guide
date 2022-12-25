import React, { useState } from "react";

export const TodoInput = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div>
      <input type="text" onChange={(e) => setInputValue(e.target.value)} />
      <button
        onClick={() => {
          addTodo(inputValue);
          setInputValue("");
        }}
      >
        追加
      </button>
    </div>
  );
};
