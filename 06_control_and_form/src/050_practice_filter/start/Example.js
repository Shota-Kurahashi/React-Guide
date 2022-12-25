import { useState } from "react";
import Profile from "./components/Profile";

const persons = [
  {
    name: "Geo",
    age: 18,
    hobbies: ["sports", "music"],
  },
  {
    name: "Tom",
    age: 25,
    hobbies: ["movie", "music"],
  },
  {
    name: "Lisa",
    age: 21,
    hobbies: ["sports", "travel", "game"],
  },
];

const Example = () => {
  const [filterPersons, setFilterPersons] = useState(persons);

  const filterHandler = (e) => {
    setFilterPersons(
      persons.filter((person) => {
        return person.name.includes(e.target.value);
      })
    );
  };
  return (
    <>
      <h3>練習問題</h3>
      <p>
        入力欄を設置して、入力値と名前が一致したもののみ表示する仕組みを作成してください。
      </p>
      <input type="text" onChange={filterHandler} />
      <ul>
        {filterPersons.map((person) => (
          <li key={person.name}>
            <Profile {...person} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Example;
