import { useState } from "react";

const Example = () => {
  const numArray = [1, 2, 3, 4, 5];

  const [array, setArray] = useState(numArray);
  const shuffle = () => {
    setArray((prev) => {
      const newArray = [...prev];

      for (let i = 0; i < newArray.length; i++) {
        const j = Math.floor(Math.random() * newArray.length);
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
      }
      return newArray;
    });
  };
  return (
    <>
      <h1>{array}</h1>
      <button onClick={shuffle}>shuffle</button>
    </>
  );
};

export default Example;
