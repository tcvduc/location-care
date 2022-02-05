import { StyleSheet, View, Image, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import SignIn from "../SignIn/SignIn";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.appName}>Location Care</Text>
      <SignIn />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  appName: {
    color: "#ef394e",
    fontFamily: "sans-serif",
    fontWeight: "400",
    fontSize: 46,
  },
  logo: {
    height: 80,
    width: 100,
    marginBottom: 24,
  },
});
