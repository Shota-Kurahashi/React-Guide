import { add } from "./add";

const Example = () => {
  import("./add").then((module) => console.log(module.add));
  console.log(add(1, 2));
  return <></>;
};

export default Example;
