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
  const [todos, setTodos] = useState(todosList);

  const addTodo = (value) => {
    setTodos([
      ...todos,
      { id: todos.length + 1, content: value, checked: false },
    ]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem todo={todo} deleteTodo={deleteTodo} key={todo.id} />
      ))}
      <TodoInput addTodo={addTodo} />
    </ul>
  );
};
