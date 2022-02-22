import React from "react";
import { Text, View, StyleSheet, GestureResponderEvent } from "react-native";
import PhoneDialCodeFullDescription from "./PhoneDialCodeFullDescription";
const data = [
  {
    countryName: "a",
    countryCode: "123",
    countryFlag: "flag 1",
  },

  {
    countryName: "b",
    countryCode: "1234",
    countryFlag: "flag 2",
  },

  {
    countryName: "c",
    countryCode: "12345",
    countryFlag: "flag 3",
  },
];

function PhoneDialCodeShortDescription(): JSX.Element {
  const [
    isDisplayPhoneDialCodeFullDescription,
    setIsDisplayPhoneDialCodeFullDescription,
  ] = React.useState(false);

  const handleOnTouchStart = function (event: GestureResponderEvent) {
    setIsDisplayPhoneDialCodeFullDescription(
      !isDisplayPhoneDialCodeFullDescription
    );
  };

  return (
    <View>
      <View style={styles.membrane} onTouchStart={handleOnTouchStart}>
        <Text>{data[0].countryFlag}</Text>
        <Text>(+{data[0].countryCode})</Text>
      </View>
      <View>
        {isDisplayPhoneDialCodeFullDescription === true ? (
          <PhoneDialCodeFullDescription />
        ) : (
          <></>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  membrane: {
    borderWidth: 2,
    borderColor: "black",
    borderStyle: "solid",
    position: "relative",
    width: 80,
  },
});

export default PhoneDialCodeShortDescription;
