import { useTodo } from "../context/TodoProvider";
import { ListItem } from "./ListItem";

const List = () => {
  const { todos } = useTodo();

  return (
    <div>
      {todos.map((todo) => {
        return <ListItem key={todo.id} todo={todo} />;
      })}
    </div>
  );
};

export default List;
