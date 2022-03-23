import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import logo from "../../assets/images/logo-ver2.png";
import { appColors, centerForAlignItems } from "../../config/global.variables";
import React, { useState } from "react";
// import Canvas from "react-native-canvas";
import Canvas from "../Canvas/Canvas";

import PhoneDialCodeShortDescription from "../PhoneDialCode/PhoneDialCodeShortDescription";
import PhoneDialCodeFullDescription from "../PhoneDialCode/PhoneDialCodeFullDescription";
import PhoneDialCode from "../PhoneDialCode/PhoneDialCode";

const commonBorderRadiusValue = 5;
const commonButtonPaddingValue = 12;

type canvas = {
  getContext: () => {};
};

export default function Home(props: any) {
  const { navigation } = props;
  const [isOpenSignUp, setIsOpenSignUp] = useState(false);
  const [isOpenSignIn, setIsOpenSignIn] = useState(false);

  const handleSignInButtonOnPress = () => {
    setIsOpenSignIn(!isOpenSignIn);
  };

  const handleCanvas = (canvas: any) => {
    const c = canvas.getContext("2d");
    const w = canvas.width;
    const h = canvas.height;
    c.moveTo(0, 0);
    c.lineTo(w, h);
    c.stroke();
  };

  return (
    <View style={styles.membrane}>
      <Text>dsadasd</Text>
      <Canvas ref={handleCanvas} style={styles.canvas}></Canvas>
      {/* <Canvas ref={handleCanvas} style={styles.canvas}></Canvas> */}
    </View>
  );
}

const styles = StyleSheet.create({
  membrane: {
    backgroundColor: appColors.secondary,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // justifyContent: "center",
    paddingTop: "16%",
  },
  canvas: {
    height: 100,
    width: 200,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "black",
  },
  layouting: {
    borderWidth: 5,
    borderStyle: "solid",
    borderColor: "#111",
  },
  appName: {
    color: appColors.primary,
    fontFamily: "sans-serif",
    fontWeight: "600",
    // marginTop: 12,
    marginBottom: 28,
    fontSize: 32,
  },
  logo: {
    marginTop: 120,
    height: 80,
    width: 100,
    marginBottom: 24,
  },
});
