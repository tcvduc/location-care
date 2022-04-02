import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  NativeTouchEvent,
  NativeSyntheticEvent,
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
      colors={["#243170", "rgba(44, 60, 137, 0.3)"]}
    >
      <View style={styles.section}>
        <Text style={styles.appName}>Stephen</Text>
      </View>
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

      <View style={styles.groupButton}>
        <Button onPress={handleButtonSignInOnpress} title="Sign in"></Button>
        <Button onPress={handleButtonSignInOnpress} title="Sign up"></Button>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    padding: 20,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "16%",
  },
  groupButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "40%",
    marginTop: 32,
  },

  passwordField: {
    width: inputFieldWidth,
    height: inputFieldHeight,
    marginTop: 40,
    borderWidth: 1,
    borderColor: "transparent",
    borderStyle: "solid",
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
    color: appColors.primary,
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
