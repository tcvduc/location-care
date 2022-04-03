import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  NativeTouchEvent,
  NativeSyntheticEvent,
  Pressable,
} from "react-native";
import { appColors } from "../../config/global.variables";
import PhoneInput from "react-native-phone-input";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
// const commonBorderRadiusValue = 5;
// const commonButtonPaddingValue = 12;

const inputFieldHeight = 40;
const inputFieldWidth = "80%";

export default function Home() {
  const [] = useState();

  const handleButtonSignInOnpress =
    function () // event: NativeSyntheticEvent<NativeTouchEvent>
    {
      alert("touched");
    };

  const handleButtonSignUpOnpress = function () {
    alert("touched");
  };
  return (
    <LinearGradient
      style={styles.linearGradient}
      colors={["#badcf9", "#bdebf5"]}
    >
      <View style={styles.section}>
        <Text style={styles.appName}>Stephen</Text>
      </View>
      <View style={styles.middleScreenWrap}>
        <View style={styles.section}>
          <PhoneInput
            style={styles.phoneInput}
            textProps={{ placeholder: "Phone number" }}
          />
        </View>
        <View style={styles.section}>
          <TextInput
            style={styles.passwordField}
            placeholder="Password"
            secureTextEntry={true}
          />
        </View>

        <View style={styles.signInButtonWrap}>
          <Pressable
            style={styles.signInButton}
            onPress={handleButtonSignInOnpress}
          >
            <Text>Sign in</Text>
          </Pressable>
        </View>

        <View style={styles.dontHaveAccountWrap}>
          <Text style={styles.dontHaveAccountText}>Don't have an account?</Text>
          <Pressable
            style={styles.signUpButton}
            onPress={handleButtonSignInOnpress}
          >
            <Text>Sign up</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.privacyText}>Privacy Notice</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  signUpButton: {
    borderColor: "#111",
    borderStyle: "solid",
    borderBottomColor: "#111",
    width: "30%",
  },
  dontHaveAccountText: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  dontHaveAccountWrap: {
    backgroundColor: "transparent",
    marginTop: 32,
    width: "58%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  middleScreenWrap: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  signInButton: {
    backgroundColor: "#70b9f6",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    padding: 12,
    borderRadius: 5,
  },
  signInButtonWrap: {
    marginTop: 40,
    width: "56%",
  },
  privacyText: {
    marginTop: 70,
  },
  linearGradient: {
    padding: 20,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "16%",
  },

  // "#badcf9", "#bdebf5"
  passwordField: {
    width: inputFieldWidth,
    height: inputFieldHeight,
    marginTop: 40,
    borderWidth: 1,
    borderColor: "transparent",
    borderStyle: "solid",
    color: "#111",
    borderBottomColor: "#111",
  },
  phoneInput: {
    width: inputFieldWidth,
    height: inputFieldHeight,
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
    // color: appColors.primary,
    color: "#0a90f5",
    fontFamily: "sans-serif",
    fontWeight: "600",
    marginTop: 72,
    marginBottom: 72,
    fontSize: 32,
  },
  logo: {
    marginTop: 120,
    height: 80,
    width: 100,
    marginBottom: 24,
  },
});
