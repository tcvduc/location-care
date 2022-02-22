import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import PhoneDialCodeShortDescription from "./PhoneDialCodeShortDescription";
const PhoneDialCode = () => {
  const [phoneNumber, setPhoneNumber] = React.useState("");

  return (
    <View style={styles.membrane}>
      <PhoneDialCodeShortDescription />
      <TextInput
        style={styles.phoneNumberTextInput}
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  membrane: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  phoneNumberTextInput: {
    height: 40,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    width: 200,
  },
});

export default PhoneDialCode;
