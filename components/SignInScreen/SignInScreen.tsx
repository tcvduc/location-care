import { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import dayIcon from "../../assets/images/logo-ver3.png";
import { appColors } from "../../config/global.variables";
import PhoneInput from "react-native-phone-input";

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
      <View style={styles.dayIconContainer}>
        <Image style={styles.dayIcon} source={dayIcon} />
      </View>
      <View style={styles.section}>
        <Text style={styles.appName}>Location Care</Text>
      </View>
      <View style={styles.section}>
        <PhoneInput style={styles.phoneInput} />
      </View>
      <View style={styles.section}>
        <TextInput style={styles.passwordField} textContentType="password" />
      </View>
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
  passwordField: {
    width: "70%",
    height: 30,
    marginTop: 12,
    borderWidth: 1,
    borderColor: "transparent",
    borderStyle: "solid",
    borderBottomColor: "#111",
  },
  phoneInput: {
    width: "70%",
    height: 30,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "transparent",
    borderBottomColor: "#111",
  },
  section: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "70%",
    // borderWidth: 5,
    // borderStyle: "solid",
    // borderColor: "#111",
  },
  dayIconContainer: {
    width: 60,
    height: 80,
  },
  dayIcon: {
    width: "auto",
    height: "100%",
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
