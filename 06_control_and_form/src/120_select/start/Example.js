import { useState } from "react";

const Example = () => {
  const [fruits, setFruits] = useState(["Apple", "Banana", "Cherry"]);
  const [selectedValue, setSelectedValue] = useState(fruits[0]);
  return (
    <div style={{ textAlign: "center" }}>
      startフォルダの内容が表示されます。
      <br />
      <select
        name="fruit"
        id=""
        value={selectedValue}
        onChange={(e) => setSelectedValue(e.target.value)}
      >
        {fruits.map((fruit) => (
          <option key={fruit} value={fruit}>
            {fruit}
          </option>
        ))}
      </select>
      <p>選択されているのは{selectedValue}です。</p>
    </div>
  );
};

export default Example;
