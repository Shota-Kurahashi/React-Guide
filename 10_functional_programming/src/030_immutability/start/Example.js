const Example = () => {
  const num = { val: 2 };
  const double = ({ val }) => val * 2;

  const newNum = { val: double(num) };
  console.log("newNum" + newNum.val, "num.val" + num.val);
  console.log(newNum === num);
  return (
    <>
      <h3>不変性（Immutability）</h3>
      <p>引数で渡ってきたオブジェクトを変更しない！</p>
    </>
  );
};

export default Example;
