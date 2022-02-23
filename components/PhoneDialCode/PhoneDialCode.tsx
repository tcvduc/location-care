import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import PhoneDialCodeShortDescription from "./PhoneDialCodeShortDescription";
import { commonBorderRadiusValue } from "../../config/global.variables";
import { appColors } from "../../config/global.variables";
import { phoneDialCodeTextInputWidth } from "./PhoneDialCodeVariables";

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
    borderWidth: 2,
    padding: 10,
    width: phoneDialCodeTextInputWidth,
    borderRadius: commonBorderRadiusValue,
    borderLeftWidth: 0,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderColor: appColors.tertiary,
  },
});

export default PhoneDialCode;
