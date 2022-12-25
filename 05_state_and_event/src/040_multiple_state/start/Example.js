import { useState } from "react";

const Example = () => {
  console.log(<Example />);
  const [one, setOne] = useState(0);
  const [ten, setTen] = useState(10);
  const [oneHundred, setOneHundred] = useState(100);
  return (
    <>
      <div>
        <p>ぼたんAを{one}回押しました。</p>
        <button
          onClick={(e) => {
            setOne(one + 1);
          }}
        >
          ボタンA
        </button>
      </div>
      <div>
        <p>ぼたんBを{ten}回押しました。</p>
        <button
          onClick={(e) => {
            setTen(ten + 10);
          }}
        >
          ボタンA
        </button>
      </div>
      <div>
        <p>ぼたんCを{oneHundred}回押しました。</p>
        <button
          onClick={(e) => {
            setOneHundred(oneHundred + 100);
          }}
        >
          ボタンA
        </button>
      </div>
    </>
  );
};

export default Example;
