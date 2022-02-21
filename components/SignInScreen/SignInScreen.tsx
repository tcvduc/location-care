import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import SignIn from "../SignIn/SignIn";
import icon from "../../assets/icon.png";
import { appColors } from "../../config/app.color";
import { useState } from "react";
import SignUp from "../SignUp/SignUp";

const commonBorderRadiusValue = 5;
const commonButtonPaddingValue = 12;

export default function Home(props: any) {
  const { navigation } = props;
  const [isOpenSignUp, setIsOpenSignUp] = useState(false);
  const [isOpenSignIn, setIsOpenSignIn] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSignInButtonOnPress = () => {
    setIsOpenSignIn(!isOpenSignIn);
  };
  const handleSignUpButtonOnPress = () => {
    setIsOpenSignUp(!isOpenSignUp);
  };

  if (isOpenSignUp === true) {
    return <SignUp />;
  }

  if (isOpenSignIn === true) {
    return <SignIn />;
  }

  return (
    <View style={styles.container}>
      {/* <Image source={icon} style={styles.logo} /> */}
      <Text style={styles.appName}>Location Care</Text>

      <TextInput value="" />

      <View style={styles.groupButton}>
        <TouchableOpacity
          style={styles.signInButton}
          onPress={handleSignInButtonOnPress}
        >
          <Text style={styles.signInText}>Sign in</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.secondary,
    justifyContent: "center",
    alignItems: "center",
  },
  appName: {
    color: appColors.primary,
    fontFamily: "sans-serif",
    fontWeight: "500",
    fontSize: 36,
  },
  logo: {
    marginTop: 80,
    height: 80,
    width: 100,
    marginBottom: 24,
  },
  signInButton: {
    marginRight: 6,
    padding: commonButtonPaddingValue,
    borderRadius: commonBorderRadiusValue,
    backgroundColor: appColors.primary,

    //
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "#fff",
  },
  signInText: {
    color: appColors.secondary,
  },
  signUpButton: {
    marginLeft: 6,
    padding: commonButtonPaddingValue,
    borderRadius: commonBorderRadiusValue,
    backgroundColor: appColors.primary,
    color: appColors.secondary,
    //
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "#fff",
  },
  signUpText: {
    color: appColors.secondary,
  },
  groupButton: {
    marginTop: 100,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: 200,
  },
});
