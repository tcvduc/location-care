import { LegacyRef, useState } from "react";
import { View, StyleSheet, createElement, TextInput } from "react-native";

const dotCSSInfo = {
  width: 10,
  height: 10,
  unit: "px",
};

const inputTypePasswordCSSInfo = {
  width: 100,
  height: 20,
  unit: "px",
};

function createOneAuroraDot() {
  return <View style={styles.dot}></View>;
}

const AuroraPasswordInputComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const attachShadow = (host: View): LegacyRef<View> | undefined => {
    return undefined;
  };
  const handleTextInputChange = (event: any) => {
    setInputValue(event.target.value);
  };
  let temporary = [];

  for (let i = 1; i <= 8; ++i) {
    temporary.push(0);
  }
  return (
    <View style={styles.membrane}>
      <TextInput
        onChange={handleTextInputChange}
        value={inputValue}
        style={styles.input_type_password}
      />

      <View style={styles.dots_container}>
        {temporary.map((e, index) => (
          <View key={index} style={styles.dot}></View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  membrane: {
    height: 20,
    width: 100,
    borderWidth: 1,
    borderColor: "#111",
    borderStyle: "solid",
  },
  input_type_password: {
    borderWidth: 1,
    borderColor: "#111",
    borderStyle: "solid",
    width: inputTypePasswordCSSInfo.width,
    height: inputTypePasswordCSSInfo.height,
    position: "relative",
    color: "#111",
  },
  dot: {
    height: dotCSSInfo.height,
    width: dotCSSInfo.width,
    backgroundImage: "linear-gradient(to right, #00FF2F, #34EFC3,#94FFDA)",
    clipPath: "circle(30%);",
  },
  dots_container: {
    borderRadius: 2,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    padding: 12,
    position: "absolute",
    // top: 2,
    top: 30,

    left: 0,
    zIndex: 10,
  },
});

export default AuroraPasswordInputComponent;
