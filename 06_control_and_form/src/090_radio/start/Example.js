import { useState } from "react";

const Example = () => {
  const [fruit, setFruit] = useState("Apple");
  const RadioValue = [
    { value: "Apple", label: "りんご" },
    { value: "Orange", label: "みかん" },
    { value: "Banana", label: "バナナ" },
  ];
  return (
    <p style={{ textAlign: "center" }}>
      startフォルダの内容が表示されます。
      <br />
      {RadioValue.map((radio) => (
        <label key={radio.value}>
          <input
            type="radio"
            value={radio.value}
            checked={fruit === radio.value}
            onChange={(e) => setFruit(e.target.value)}
          />
          {radio.label ?? radio.value}
        </label>
      ))}
    </p>
  );
};

export default Example;
