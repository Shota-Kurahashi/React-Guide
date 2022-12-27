import Header from "./components/Header";
import Main from "./components/Main";
import { ThemeContext } from "./context/ThemeContext";
import "./Example.css";

const Example = () => {
  return (
    <ThemeContext>
      <Header />
      <Main />
    </ThemeContext>
  );
};

export default Example;
