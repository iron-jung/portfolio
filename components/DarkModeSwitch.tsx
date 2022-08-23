import React, { useEffect, useRef } from "react";
import styles from "../styles/DarkModeSwitch.module.css";
import { BsSun, BsMoonStarsFill } from "react-icons/bs";

const DarkModeSwitch: React.FC = () => {
  const checkboxRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const htmlEl = document.querySelector("html");
    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
      htmlEl?.classList.add("dark");
      checkboxRef.current?.setAttribute("checked", "checked");
    } else {
      htmlEl?.classList.remove("dark");
      checkboxRef.current?.removeAttribute("checked");
    }
  }, []);

  return (
    <div className={styles["toggle-switch"]}>
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
    const htmlEl = document.querySelector("html");

    if (isChecked) {
      htmlEl?.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      htmlEl?.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }
};

export default DarkModeSwitch;
