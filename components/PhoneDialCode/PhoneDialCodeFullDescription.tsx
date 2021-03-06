import { ScrollView, StyleSheet, Text, View } from "react-native";
import { appColors } from "../../config/global.variables";

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
      <ScrollView>
        <Text>main</Text>
      </ScrollView>
      <View style={styles.content}>
        <>
          {data.map((d, i) => {
            return (
              <View key={i} style={styles.phoneDialCode}>
                <Text>{d.countryFlag}</Text>
                <Text>{d.countryName}</Text>
                <Text>(+{d.countryCode})</Text>
              </View>
            );
          })}
        </>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  membrane: {
    position: "relative",
    top: "-50%",
    left: "-50%",
    zIndex: 10,
    borderStyle: "solid",
    borderColor: appColors.tertiary,
    borderTopWidth: 0,
    borderWidth: 2,
    height: "100%",
    width: "100%",
    backgroundColor: "black",
  },
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: "pink",
    marginHorizontal: 20,
  },
  content: {},
  layouter: {
    borderStyle: "solid",
    borderColor: "#111",
    borderWidth: 2,
  },
  phoneDialCode: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
});

export default PhoneDialCodeFullDescription;
// export default PhoneDialCodeFullDescription2;
