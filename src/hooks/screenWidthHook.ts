import { useEffect, useState } from "react";

export const useIsMobile = () => {
  const [width, setWidth] = useState(window.innerWidth);
  console.log(window.innerWidth, width);
  const handelWidthChange = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handelWidthChange);
    return () => {
      window.removeEventListener("resize", handelWidthChange);
    };
  }, [window.innerWidth]);

  if (width <= 425) {
    return true;
  } else return false;
};
