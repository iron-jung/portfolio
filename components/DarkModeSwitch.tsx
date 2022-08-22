import React from "react";
import styles from "../styles/DarkModeSwitch.module.css";

const DarkModeSwitch = () => {
  return (
    <div className="switch-wrapper">
      <input type="checkbox" className="switch" />
    </div>
  );
};

export default DarkModeSwitch;
