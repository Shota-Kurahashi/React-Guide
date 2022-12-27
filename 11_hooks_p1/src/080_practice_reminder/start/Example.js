import Todo from "./components/Todo";
import { TodoProvider } from "./context/TodoProvider";

const Example = () => {
  return (
    <TodoProvider>
      <h3>練習問題</h3>
      <ul>
        <li>
          Listコンポーネント内の各項目をItemコンポーネントに分離しましょう。
        </li>
        <li>
          タイトルをダブルクリックするとタイトルを変更出来るようにしましょう
        </li>
        <li>ReducerとContextを使ってTodoをグローバルなステートにしましょう</li>
      </ul>
      <h2>Reminder</h2>
      <Todo />
    </TodoProvider>
  );
};

export default Example;
