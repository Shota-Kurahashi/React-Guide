let value = 0;

const Child = () => {
  value++;
  return <div>Child: {value}</div>;
};
const ChildPure = ({ value }) => {
  return <div>Child: {value}</div>;
};

const Example = () => {
  return (
    <>
      <div>
        <Child />
        <Child />
        <Child />
        <ChildPure value={++value} />
        <ChildPure value={++value} />
        <ChildPure value={++value} />
      </div>
    </>
  );
};

export default Example;
