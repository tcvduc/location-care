import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

function SignIn(props) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <View>
      <Text>dasds</Text>
      <TextInput
        style={styles.input}
        value={phoneNumber}
        name="phoneNumber"
        onChange={handlePhoneNumberChange}
      />

      <TextInput
        style={styles.input}
        value={password}
        name="password"
        onChange={handlePasswordChange}
        type="password"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: 100,
    borderColor: "#111",
    borderStyle: "solid",
    borderWidth: 1,
  },
});

export default SignIn;
