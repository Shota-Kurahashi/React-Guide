import React, { useState } from "react";

export const TodoItem = ({ todo, todoState }) => {
  const [todosList, setFilterTodo] = todoState;
  const removeHandler = (id) => {
    const newTodos = todosList.filter((todo) => todo.id !== id);

    setFilterTodo(newTodos);
  };
  return (
    <div>
      <button onClick={() => removeHandler(todo.id)}>完了</button>
      {!todo.checked && todo.content}
    </div>
  );
};
