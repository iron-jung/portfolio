import React, { useEffect, useState } from "react";
import throttle from "lodash/throttle";

const useIsScroll = () => {
  const [isScroll, setIsScroll] = useState(false);

  function isScrollEvent() {
    if (window.scrollY > 1) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  }

  useEffect(() => {
    document.addEventListener("scroll", throttle(isScrollEvent, 300));

    return () => {
      document.removeEventListener("scroll", throttle(isScrollEvent, 300));
    };
  }, []);

  return isScroll;
};

export default useIsScroll;
