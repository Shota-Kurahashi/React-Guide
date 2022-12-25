const Example = () => {
  const clickHandler = () => {
    alert("クッリクされました");
  };

  const clickHandler2 = () => {
    console.log("クッリクされました");
  };
  return (
    <>
      <button onClick={clickHandler}>クリックしてね</button>
      <button onClick={clickHandler2}>クリックしてね</button>
    </>
  );
};

export default Example;
