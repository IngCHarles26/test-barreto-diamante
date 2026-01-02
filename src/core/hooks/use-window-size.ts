import { useState, useEffect } from "react";

type Size = { width: number; height: number };

function getWindowSize(): Size {
  if (typeof window === "undefined") return { width: 0, height: 0 };
  return { width: window.innerWidth, height: window.innerHeight };
}

export default function useWindowSize(): Size {
  const [size, setSize] = useState<Size>(getWindowSize);

  useEffect(() => {
    function handleResize() {
      setSize(getWindowSize());
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}