import { Input } from "./components/Input";
import { Result } from "./components/Result";
import { Select } from "./components/Select";
import { CalcProvider } from "./context/CalcProvider";

const Example = () => {
  return (
    /* 完成系のJSX */
    // <CalcProvider>
    //   <Input name="a"/>
    //   <Input name="b" />
    //   <Select />
    //   <Result />
    // </CalcProvider>
    <CalcProvider>
      <Input name="a" />
      <Input name="b" />
      <Select />
      <Result />
    </CalcProvider>
  );
};

export default Example;
