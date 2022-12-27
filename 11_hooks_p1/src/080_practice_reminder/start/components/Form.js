import { useState } from "react";
import { useTodo } from "../context/TodoProvider";
const Form = () => {
  const { createTodo, enteredTodo, setEnteredTodo } = useTodo();
  return (
    <div>
      <form onSubmit={createTodo}>
        <input
          type="text"
          value={enteredTodo}
          onChange={(e) => setEnteredTodo(e.target.value)}
        />
        <button>追加</button>
      </form>
    </div>
  );
};

export default Form;
