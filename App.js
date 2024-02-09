import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import ScanScreen from "./screens/ScanScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <ScanScreen/>
      <StatusBar style="dark" backgroundColor="#af9" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"row",
    backgroundColor: "#af9",
    alignItems: "center",
    justifyContent: "center",
  }
});

