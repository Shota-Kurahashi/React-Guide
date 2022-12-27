import { useTheme } from "../context/ThemeContext";

const Header = () => {
  const { THEMES, themeState } = useTheme();
  const [theme, changeTheme] = themeState();

  return (
    <header className={`content-${theme}`}>
      {THEMES.map((t) => {
        return (
          <label key={t} htmlFor={t}>
            <input
              type="radio"
              id={t}
              value={t}
              checked={theme === t}
              onChange={(e) => changeTheme(e)}
            />
            {t}
          </label>
        );
      })}
    </header>
  );
};

export default Header;
