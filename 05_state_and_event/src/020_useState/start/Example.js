import { useState } from "react";
const Example = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <input type="text" onChange={(e) => setInputValue(e.target.value)} />
      <span>={inputValue}</span>
    </>
  );
};

export default Example;
