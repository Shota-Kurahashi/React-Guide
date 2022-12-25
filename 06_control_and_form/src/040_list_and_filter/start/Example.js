import { useState } from "react";

const animals = ["Dog", "Cat", "Rat"];

const Example = () => {
  const [animalsArray, setAnimalsArray] = useState(animals);

  const handleChange = (e) => {
    if (e.target.value === "") {
      setAnimalsArray(animals);
      return;
    }
    setAnimalsArray(
      animals.filter((animal) => animal.includes(e.target.value))
    );
  };
  return (
    <>
      <h3>配列のフィルター</h3>
      <input type="text" onChange={handleChange} />
      <ul>
        {animalsArray.map((animal) => (
          <li key={animal}>{animal}</li>
        ))}
      </ul>
    </>
  );
};

export default Example;
