import { FlexAlignType } from "react-native";

const countryCodes = [
  {
    countryName: "",
    countryCode: "",
  },
];

const commonBorderRadiusValue = 5;

const appColors = {
  primary: "#ed1c24",
  secondary: "#fff",
  tertiary: "#e6e3e3",
  quaternary: "#5e5e5e",
  transparent: "transparent",

  // "linear-gradient(90deg, rgba(60,140,218,1) #3c8cda%, rgba(67,162,218,1) 35%, rgba(72,179,218,1) 100%)",
};

const centerForAlignItems: FlexAlignType | undefined = "center";
const flexForDisplay = "flex";

const numbers = {
  zero: 0,
  three: 3,
};

export {
  countryCodes,
  commonBorderRadiusValue,
  appColors,
  centerForAlignItems,
  flexForDisplay,
  // centerForJustifyContent,
  numbers,
};
