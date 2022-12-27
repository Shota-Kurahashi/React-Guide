import { useTheme } from "../context/ThemeContext";

const Main = () => {
  const { themeState } = useTheme();
  const [theme] = themeState();
  return (
    <main className={`content-${theme}`}>
      <h1>テーマの切り替え</h1>
    </main>
  );
};

export default Main;
