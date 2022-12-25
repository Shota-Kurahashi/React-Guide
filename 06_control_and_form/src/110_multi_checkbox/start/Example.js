import { Fragment, useState } from "react";

const Example = () => {
  const [fruits, setFruits] = useState([
    { label: "Apple", value: 100, checked: false },
    { label: "Banana", value: 200, checked: false },
    { label: "Cherry", value: 300, checked: false },
  ]);

  const [sum, setSum] = useState(0);

  const changeHandler = (e) => {
    const newFruits = fruits.map((fruit) => {
      return e.target.id === fruit.label
        ? {
            ...fruit,
            checked: !fruit.checked,
          }
        : fruit;
    });

    setFruits(newFruits);

    const newValue = newFruits
      .filter((value) => value.checked)
      .reduce((sum, fruit) => sum + fruit.value, 0);

    setSum(newValue);
  };

  return (
    <div>
      {fruits.map((fruit) => (
        <p key={fruit.value}>
          <label htmlFor={fruit.label}>
            {fruit.label}:{fruit.value}
          </label>
          <input
            id={fruit.label}
            type="checkbox"
            value={fruit.value}
            checked={fruit.checked}
            onChange={changeHandler}
          />
        </p>
      ))}
      <div>合計：{sum}</div>
    </div>
  );
};

export default Example;
