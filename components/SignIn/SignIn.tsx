import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Platform } from "react-native";

function SignIn(props: any) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const handlePhoneNumberChange = (event: any) => {
    setPhoneNumber(event.target.value);
  };
  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
      />

      <TextInput
        style={styles.input}
        value={password}
        onChange={handlePasswordChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: 200,
    height: 50,
    borderColor: "#111",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 6,
    marginBottom: 6,
  },
});

export default SignIn;
