import React from "react";
import { AnimalItem } from "./AnimalItem";

export const AnimalList = ({ animals }) => {
  if (animals.length === 0) return <h3>There is no animal.</h3>;
  return (
    <ul>
      {animals.map((animal) => (
        <AnimalItem key={animal} animal={animal} />
      ))}
    </ul>
  );
};
