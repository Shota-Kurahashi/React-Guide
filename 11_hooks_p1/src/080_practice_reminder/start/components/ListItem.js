import React from "react";
import { useTodo } from "../context/TodoProvider";

export const ListItem = ({ todo }) => {
  const { deleteTodo, updateDoubleClick, updateTodo, editTodo, setEditTodo } =
    useTodo();

  return (
    <div>
      <button onClick={() => deleteTodo(todo.id)}>完了</button>
      {todo.isDoubleClick ? (
        <form
          style={{ display: "inline-block" }}
          onSubmit={(e) => updateTodo(e, todo.id)}
        >
          <input
            type="text"
            value={editTodo}
            onChange={(e) => setEditTodo(e.target.value)}
          />
        </form>
      ) : (
        <span onDoubleClick={() => updateDoubleClick(todo.id, todo.content)}>
          {todo.content}
        </span>
      )}
    </div>
  );
};
