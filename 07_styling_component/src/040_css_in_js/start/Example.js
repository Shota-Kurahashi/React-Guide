import { useState } from "react";
import styled from "styled-components";

console.dir(styled);

const StyledButton = styled.button`
  margin: auto;
  border-radius: 9999px;
  border: none;
  display: block;
  width: 120px;
  height: 60px;
  font-weight: bold;
  cursor: pointer;
  background-color: ${({ isSelected }) => (isSelected ? "pink" : "")};
  transition: all 0.3s ease-in-out;

  @media screen and (min-width: 768px) {
    width: 240px;
  }
`;

const OrangeButton = styled(StyledButton)`
  background-color: ${({ isSelected }) => (isSelected ? "orange" : "")};
  :hover {
    background-color: orange;
  }

  span {
    font-size: 2rem;
  }
`;

const Example = () => {
  const [isSelected, setIsSelected] = useState(false);

  const clickHandler = () => setIsSelected((prev) => !prev);

  return (
    <>
      <StyledButton onClick={clickHandler} isSelected={isSelected}>
        ボタン
      </StyledButton>
      <OrangeButton onClick={clickHandler} isSelected={isSelected}>
        <span>ボタン</span>
      </OrangeButton>
      <button
        className={`btn ${isSelected ? "selected" : ""}`}
        onClick={clickHandler}
      >
        ボタン
      </button>
      <div style={{ textAlign: "center" }}>
        {isSelected && "クリックされました。"}
      </div>
    </>
  );
};

export default Example;
