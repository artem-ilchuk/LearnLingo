import { createContext, useEffect } from "react";

const colorPairs = {
  "#FBE9BA": "#F4C550",
  "#CBDED3": "#9FBAAE",
  "#BFD6EA": "#9FB7CE",
  "#F2C0BD": "#E0A39A",
  "#F4C8BA": "#F0AA8D",
};

const primaryColors = Object.keys(colorPairs);

const ColorContext = createContext(null);

function getRandomPrimaryColor(exclude) {
  const filtered = primaryColors.filter((color) => color !== exclude);
  const index = Math.floor(Math.random() * filtered.length);
  return filtered[index];
}

export function ColorProvider({ children }) {
  useEffect(() => {
    const prevColor = localStorage.getItem("pageColor");
    const primary = getRandomPrimaryColor(prevColor);
    const secondary = colorPairs[primary];

    localStorage.setItem("pageColor", primary);
    document.documentElement.style.setProperty("--page-primecolor", primary);
    document.documentElement.style.setProperty(
      "--page-secondarycolor",
      secondary
    );
  }, []);

  return children;
}
