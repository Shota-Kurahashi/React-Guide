import { useState } from "react";

const Example = () => {
  const [isSelected, setIsSelected] = useState(false);

  const clickHandler = () => setIsSelected((prev) => !prev);

  const style = {
    width: "120px",
    height: "60px",
    display: "block",
    fontWeight: "bold",
    borderRadius: "50%",
    cursor: "pointer",
    border: "none",
    margin: "0 auto",
    background: isSelected ? "pink" : "",
  };

  return (
    <>
      <button onClick={clickHandler} style={style}>
        ボタン
      </button>
      <div>{isSelected && "クリックされました。"}</div>
    </>
  );
};

export default Example;
