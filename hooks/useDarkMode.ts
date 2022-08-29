import React, { useEffect, useState } from "react";

export default function useDarkMode() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const value = localStorage.getItem("theme");
      if (value !== null) {
        return value;
      } else {
        return "light";
      }
    }
  });

  useEffect(() => {
    const htmlEl = document.querySelector("html");
    if (theme === "dark") {
      htmlEl?.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      htmlEl?.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  }, [theme]);

  return { theme, setTheme };
}
