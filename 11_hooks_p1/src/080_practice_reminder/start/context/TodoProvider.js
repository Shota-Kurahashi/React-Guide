import React, { createContext, useContext, useState } from "react";
const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const todosList = [
    {
      id: 1,
      content: "店予約する",
      isDoubleClick: false,
    },
    {
      id: 2,
      content: "卵買う",
      isDoubleClick: false,
    },
    {
      id: 3,
      content: "郵便出す",
      isDoubleClick: false,
    },
  ];
  const [todos, setTodos] = useState(todosList);
  const [enteredTodo, setEnteredTodo] = useState("");
  const [editTodo, setEditTodo] = useState("");

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(newTodos);
  };

  const clearEnteredTodo = () => {
    setEnteredTodo("");
  };

  const createTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Math.floor(Math.random() * 1e5),
      content: enteredTodo,
      isDoubleClick: false,
    };
    setTodos([...todos, newTodo]);
    clearEnteredTodo();
  };

  const updateTodo = (e, id) => {
    e.preventDefault();
    const updateTodo = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          content: editTodo,
          isDoubleClick: false,
        };
      }
      return todo;
    });

    setTodos(updateTodo);
  };

  const updateDoubleClick = (id, content) => {
    const updateTodo = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isDoubleClick: true };
      }

      return todo;
    });

    setEditTodo(content);
    setTodos(updateTodo);
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        deleteTodo,
        createTodo,
        enteredTodo,
        setEnteredTodo,
        updateTodo,
        updateDoubleClick,
        editTodo,
        setEditTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => useContext(TodoContext);
