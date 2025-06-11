import { createContext, useContext, useState, useEffect } from "react";

const colors = [
  "var(--c1)",
  "var(--c2)",
  "var(--c3)",
  "var(--c4)",
  "var(--c5)",
  "var(--c6)",
  "var(--c7)",
  "var(--c8)",
  "var(--c9)",
  "var(--c10)",
];

const ColorContext = createContext();

function getRandomColor(excludeColor) {
  const filtered = colors.filter((c) => c !== excludeColor);
  const randomIndex = Math.floor(Math.random() * filtered.length);
  return filtered[randomIndex];
}

export function ColorProvider({ children }) {
  const [color, setColor] = useState(null);

  useEffect(() => {
    const prevColor = localStorage.getItem("pageColor");

    const newColor = getRandomColor(prevColor);

    localStorage.setItem("pageColor", newColor);

    document.documentElement.style.setProperty("--page-color", newColor);

    setColor(newColor);
  }, []);

  return (
    <ColorContext.Provider value={color}>{children}</ColorContext.Provider>
  );
}

export function usePageColor() {
  return useContext(ColorContext);
}
