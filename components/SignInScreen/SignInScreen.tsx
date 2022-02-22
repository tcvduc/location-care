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
import { appColors } from "../../config/app.color";
import React, { useState } from "react";

import PhoneDialCodeShortDescription from "../PhoneDialCode/PhoneDialCodeShortDescription";
import PhoneDialCodeFullDescription from "../PhoneDialCode/PhoneDialCodeFullDescription";
import PhoneDialCode from "../PhoneDialCode/PhoneDialCode";

const commonBorderRadiusValue = 5;
const commonButtonPaddingValue = 12;

export default function Home(props: any) {
  const { navigation } = props;
  const [isOpenSignUp, setIsOpenSignUp] = useState(false);
  const [isOpenSignIn, setIsOpenSignIn] = useState(false);

  const handleSignInButtonOnPress = () => {
    setIsOpenSignIn(!isOpenSignIn);
  };

  return (
    <View style={[styles.membrane, styles.layouting]}>
      <Image source={logo} style={styles.logo} />

      <Text style={styles.appName}>LOCATION CARE</Text>

      <PhoneDialCode />
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
    paddingTop: "30%",
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
    marginTop: 12,
    marginBottom: 24,
    fontSize: 32,
  },
  logo: {
    marginTop: 120,
    height: 80,
    width: 100,
    marginBottom: 24,
  },
  signInButton: {
    marginRight: 6,
    padding: commonButtonPaddingValue,
    borderRadius: commonBorderRadiusValue,
    backgroundColor: appColors.primary,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "#fff",
    width: 200,
  },
  signInText: {
    color: appColors.secondary,
  },
  signUpText: {
    color: appColors.secondary,
  },
});
