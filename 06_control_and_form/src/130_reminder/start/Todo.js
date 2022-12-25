import { useState } from "react";
import { TodoInput } from "./components/TodoInput";
import { TodoItem } from "./components/TodoItem";

export const Todo = () => {
  const todosList = [
    {
      id: 1,
      content: "店予約する",
      checked: false,
    },
    {
      id: 2,
      content: "卵買う",
      checked: false,
    },
    {
      id: 3,
      content: "郵便出す",
      checked: false,
    },
  ];
  const [filterTodo, setFilterTodo] = useState(todosList);

  return (
    <>
      <ul>
        {filterTodo.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            todoState={[filterTodo, setFilterTodo]}
          />
        ))}
      </ul>
      <TodoInput todoState={[filterTodo, setFilterTodo]} />
    </>
  );
};
