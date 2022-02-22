import React from "react";
import { Text, View, StyleSheet } from "react-native";

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
];

const PhoneDialCodeFullDescription = () => {
  return (
    <View style={styles.membrane}>
      {data.map((d, i) => {
        return (
          <View key={i} style={[styles.phoneDialCode, styles.layouter]}>
            <Text>{d.countryFlag}</Text>
            <Text>{d.countryName}</Text>
            <Text>(+{d.countryCode})</Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  membrane: {
    width: 200,
    position: "absolute",
  },
  layouter: {
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "#111",
  },
  phoneDialCode: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
});

export default PhoneDialCodeFullDescription;
