const animals = ["Dog", "Cat", "Rat"];

const Example = () => {
  return (
    <>
      <h3>配列の操作</h3>
      <ul>
        {animals.map((animal, index) => (
          <li key={index}>{animal}</li>
        ))}
      </ul>
    </>
  );
};

export default Example;
