import React, { useState } from "react";

export const TodoInput = ({ todoState }) => {
  const [todosList, setFilterTodo] = todoState;
  const [inputValue, setInputValue] = useState("");

  const addHandler = (e) => {
    setFilterTodo([
      ...todosList,
      { id: todosList.length + 1, content: inputValue, checked: false },
    ]);

    setInputValue("");
  };
  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addHandler}>追加</button>
    </>
  );
};
