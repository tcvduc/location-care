import { LegacyRef, useEffect, useState } from "react";
import { View, StyleSheet, createElement, TextInput, Text } from "react-native";
import { initArray } from "../../util/3.array.util";

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

let interval1: any;
let interval2: any;

const AuroraPasswordInputComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const [countAuroraDot, setCountAuroraDot] = useState<Array<Number>>([]);
  const [onOffCaret, setOnOffCaret] = useState(false);
  const [isOnCaretHandler, setIsOnCaretHandler] = useState(false);

  const handleTextInputChange = (event: any) => {
    setInputValue(event.target.value);
    const arrayTemporary = initArray(event.target.value.length);
    setCountAuroraDot(arrayTemporary);

    clearInterval(interval1);
    clearInterval(interval2);
    setOnOffCaret(true);

    setTimeout(() => {
      setIsOnCaretHandler(!isOnCaretHandler);
    }, 200);
  };

  const caretOnOffHandler = () => {
    interval1 = setInterval(() => {
      setOnOffCaret(false);
    }, 530);
    interval2 = setInterval(() => {
      setOnOffCaret(true);
    }, 1060);
  };

  useEffect(() => {
    caretOnOffHandler();
  }, [isOnCaretHandler]);

  return (
    <View style={styles.membrane}>
      <TextInput
        onChange={handleTextInputChange}
        value={inputValue}
        style={styles.input_type_password}
      />

      <View style={styles.dots_container}>
        {countAuroraDot.map((e, index) => (
          <View key={index} style={styles.dot}></View>
        ))}
        {onOffCaret === true ? (
          <View style={styles.caret}></View>
        ) : (
          <Text></Text>
        )}
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
  caret: {
    width: 0.4,
    height: 10,
    backgroundImage: "linear-gradient(to right, #00FF2F, #34EFC3,#94FFDA)",
  },
});

export default AuroraPasswordInputComponent;
