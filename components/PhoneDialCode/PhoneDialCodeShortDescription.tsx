import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  appColors,
  centerForAlignItems,
  commonBorderRadiusValue,
  flexForDisplay,
  numbers,
} from "../../config/global.variables";
import PhoneDialCodeFullDescription from "./PhoneDialCodeFullDescription";
import { phoneDialCodeShortDescriptionWidth } from "./PhoneDialCodeVariables";

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

  const handleOnTouchStart = function () {
    setIsDisplayPhoneDialCodeFullDescription(
      !isDisplayPhoneDialCodeFullDescription
    );
  };

  return (
    <View>
      <View style={styles.membrane} onTouchStart={handleOnTouchStart}>
        <Text>{data[0].countryFlag}</Text>
        <View style={styles.triangle} />
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
    borderColor: appColors.tertiary,
    borderRadius: commonBorderRadiusValue,
    borderTopRightRadius: numbers.zero,
    borderBottomRightRadius: numbers.zero,
    borderStyle: "solid",
    position: "relative",
    zIndex: 5,
    width: phoneDialCodeShortDescriptionWidth,
    height: 40,
    backgroundColor: appColors.tertiary,
    display: flexForDisplay,
    flexDirection: "row",
    alignItems: centerForAlignItems,
    justifyContent: "center",
  },
  triangle: {
    borderWidth: 6,
    borderLeftWidth: numbers.three,
    borderRightWidth: numbers.three,
    position: "relative",
    top: 4,
    left: numbers.three,

    borderLeftColor: appColors.transparent,
    borderRightColor: appColors.transparent,
    borderBottomColor: appColors.transparent,

    backgroundColor: appColors.transparent,
  },
});

export default PhoneDialCodeShortDescription;
