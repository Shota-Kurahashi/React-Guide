import { useState } from "react";
import { todoApi } from "../api/todo";
import { useDispatchTodos } from "../context/TodoContext";
const Form = ({ createTodo }) => {
  const [enteredTodo, setEnteredTodo] = useState("");
  const dispatch = useDispatchTodos();

  const addTodo = async (e) => {
    e.preventDefault();

    const newTodo = {
      id: Math.floor(Math.random() * 1e5),
      content: enteredTodo,
      editing: false,
    };
    const res = await todoApi.post(newTodo);
    dispatch({ type: "todo/add", todo: res });

    setEnteredTodo("");
  };
  return (
    <div>
      <form onSubmit={addTodo}>
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
