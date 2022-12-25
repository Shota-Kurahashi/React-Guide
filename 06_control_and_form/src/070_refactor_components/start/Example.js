import { useState } from "react";
import { AnimalFilter } from "./components/AnimalFilter";
import { AnimalList } from "./components/AnimalList";
const animals = ["Dog", "Cat", "Rat"];

const Example = () => {
  const [filterAnimals, setFilterAnimals] = useState(animals);

  const filterHandler = (e) => {
    setFilterAnimals(
      animals.filter((animal) => animal.includes(e.target.value))
    );
  };

  return (
    <>
      <AnimalFilter filterHandler={filterHandler} />
      <AnimalList animals={filterAnimals} />
    </>
  );
};

export default Example;
