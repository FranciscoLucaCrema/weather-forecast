import { useEffect, useState } from "react";
import styles from "./Switch.module.scss";
import { Themes } from "@/models/ThemeChange";

function Switch() {
  const [theme, setTheme] = useState<Themes>(Themes.light);

  useEffect(() => {
    document.body.classList.toggle("light-theme", theme === Themes.light);
    document.body.classList.toggle("dark-theme", theme === Themes.dark);
  }, [theme]);

  function handleThemeChange() {
    if (theme === Themes.light) setTheme(Themes.dark);
    else setTheme(Themes.light);
  }

  return (
    <label
      htmlFor={`theme-toggler`}
      tabIndex={-1}
      className={styles.labelSwitch}
    >
      <input
        type="checkbox"
        id={`theme-toggler`}
        className={styles.inputSwitch}
        onChange={handleThemeChange}
      />
      <span className={styles.switch}></span>
    </label>
  );
}

export default Switch;
