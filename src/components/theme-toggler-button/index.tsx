/* eslint-disable jsx-a11y/alt-text */
import { useContext } from "react";
import { ThemeContext, themes } from "../../contexts";
import { Button } from "./styles";

export const ThemeTogglerButton = () => {
  const { theme, setTheme } = useContext<any>(ThemeContext);
  localStorage.setItem("theme", JSON.stringify(theme));

  return (
    <Button
      onClick={() =>
        setTheme(theme === themes.light ? themes.dark : themes.light)
      }
    >
      <img src={theme.img} />
    </Button>
  );
};
