import React from "react";

export const TodoItem = ({ todo, deleteTodo }) => {
  return (
    <li>
      <button onClick={() => deleteTodo(todo.id)}>完了</button>
      {todo.content}
    </li>
  );
};
