import { useState } from "react";

const Example = () => {
  const animals = ["Dog", null, "Cat", "Rat"];

  const [filterVal, setFilterVal] = useState("");

  return (
    <>
      <input
        type="text"
        value={filterVal}
        onChange={(e) => setFilterVal(e.target.value)}
      />
      <ul>
        {animals
          .filter((animal) => {
            const animalStr = animal ?? "nullまたはundefined";
            const isMatch = animalStr.indexOf(filterVal) !== -1;
            return isMatch;
          })
          .map((animal) => {
            return (
              <li key={animal}>
                {animal === "Dog"
                  ? `${animal}★`
                  : `${animal ?? "nullまたはundefined"}`}
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Example;
