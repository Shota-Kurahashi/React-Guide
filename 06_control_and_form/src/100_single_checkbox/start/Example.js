import { useState } from "react";

const Example = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div style={{ textAlign: "center" }}>
      startフォルダの内容が表示されます。
      <br />
      <label htmlFor="check">チェック</label>
      <input
        id="check"
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
      <p>{checked ? "チェックされています。" : "チェックされていません。"}</p>
    </div>
  );
};

export default Example;
