import { useEffect, useState } from "react";
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { initArray } from "../../util/3.array.util";

// const auroraColor = "linear-gradient(to bottom, #88F29C, #34EFC3,#94FFDA)";
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
  const [isTextInputOnFocus, setIsTextInputOnFocus] = useState(false);

  const handleTextInputOnFocus = () => {
    console.log("is focus");

    setIsTextInputOnFocus(isTextInputOnFocus);
  };

  const handleTextInputOnChange = (event: any) => {
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

  const handleDotsContainerOnTouchStart = (event: GestureResponderEvent) => {
    event.stopPropagation();
  };

  useEffect(() => {
    caretOnOffHandler();
  }, [isOnCaretHandler]);

  return (
    <View style={styles.membrane}>
      <Text>dasdas</Text>
      <View style={styles.virtual_text_input_top_border}></View>
      <TextInput
        focusable={false}
        onChange={handleTextInputOnChange}
        onFocus={handleTextInputOnFocus}
        value={inputValue}
        style={styles.input_type_password}
      />
      <View style={styles.virtual_text_input_left_border}></View>

      <View style={styles.virtual_text_input_bottom_border}></View>

      <View style={styles.virtual_text_input_right_border}></View>

      <View
        onTouchStart={handleDotsContainerOnTouchStart}
        style={styles.dots_container}
      >
        {countAuroraDot.map((element, key) => (
          <View key={key} style={styles.dot} data-dot={element}></View>
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
    position: "relative",
  },
  virtual_text_input_top_border: {
    width: inputTypePasswordCSSInfo.width,
    height: 3,
    backgroundColor: "#fff",
    position: "absolute",
    top: 0,
  },
  virtual_text_input_bottom_border: {
    width: inputTypePasswordCSSInfo.width,
    height: 3,
    backgroundColor: "#fff",
    position: "absolute",
    bottom: -1,
  },
  virtual_text_input_left_border: {
    width: 4,
    height: inputTypePasswordCSSInfo.height,
    backgroundColor: "#fff",
    position: "absolute",
    left: 0,
  },

  virtual_text_input_right_border: {
    width: 4,
    height: inputTypePasswordCSSInfo.height,
    backgroundColor: "#fff",
    position: "absolute",
    right: -1,
  },
  input_type_password: {
    shadowColor: "transparent",

    borderWidth: 1,
    borderColor: "red",
    borderStyle: "solid",
    width: inputTypePasswordCSSInfo.width,
    height: inputTypePasswordCSSInfo.height,
    // position: "relative",
    paddingLeft: 12,
  },

  dot: {
    height: dotCSSInfo.height,
    width: dotCSSInfo.width,
    backgroundColor: "red",
  },
  dots_container: {
    borderRadius: 2,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    padding: 12,
    position: "absolute",
    top: 2,
    // top: 30,

    left: 0,
    zIndex: 10,
  },
  caret: {
    width: 0.4,
    height: 10,
  },
});

export default AuroraPasswordInputComponent;
