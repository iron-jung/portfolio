import React, { useEffect, useRef } from "react";
import styles from "../styles/DarkModeSwitch.module.css";
import { BsSun, BsMoonStarsFill } from "react-icons/bs";
import useDarkMode from "../hooks/useDarkMode";

const DarkModeSwitch: React.FC = () => {
  const checkboxRef = useRef<HTMLInputElement>(null);
  const { theme, setTheme } = useDarkMode();

  useEffect(() => {
    if (theme === "dark") {
      checkboxRef.current?.setAttribute("checked", "checked");
      setTheme("dark");
    } else {
      checkboxRef.current?.removeAttribute("checked");
      setTheme("light");
    }
  }, [theme, setTheme]);

  return (
    <div className={styles["toggle-switch"]} style={{ height: "30px" }}>
      <label>
        <input type="checkbox" ref={checkboxRef} onClick={click} />
        <span className="toggle-switch__slider"></span>
        <div>
          <BsSun />
          <BsMoonStarsFill />
        </div>
      </label>
    </div>
  );

  function click() {
    const isChecked = checkboxRef.current?.checked;

    if (isChecked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }
};

export default DarkModeSwitch;
