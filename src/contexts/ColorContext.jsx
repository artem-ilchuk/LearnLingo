import { createContext, useEffect } from "react";

const colorPairs = {
  "#FBE9BA": "#F4C550",
  "#CBDED3": "#9FBAAE",
  "#BFD6EA": "#9FB7CE",
  "#F2C0BD": "#E0A39A",
  "#F4C8BA": "#F0AA8D",
};

const gradients = {
  "#FBE9BA": "linear-gradient(180deg, #eeb055 0%, #d08f38 100%)",
  "#CBDED3": "linear-gradient(180deg, #295761 0%, #183e49 100%)",
  "#BFD6EA": "linear-gradient(180deg, #314b6e 0%, #1f385a 100%)",
  "#F2C0BD": "linear-gradient(180deg, #b03f3e 0%, #982a27 100%)",
  "#F4C8BA": "linear-gradient(180deg, #e17650 0%, #ca5b38 100%)",
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
    const gradient = gradients[primary];

    localStorage.setItem("pageColor", primary);
    document.documentElement.style.setProperty("--page-primecolor", primary);
    document.documentElement.style.setProperty(
      "--page-secondarycolor",
      secondary
    );
    document.documentElement.style.setProperty(
      "--page-gradientcolor",
      gradient
    );
  }, []);

  return children;
}
