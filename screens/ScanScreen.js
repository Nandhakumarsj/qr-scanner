import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera/next";

export default function ScanScreen() {
  function toggleCameraFacing() {
    const [facing, setFacing] = useState("back");
    const [permission, requestPermission] = useCameraPermissions();
    setFacing((current) => (current === "back" ? "front" : "back"));
  }
  return (
    <View>
      <CameraView
        style={styles.cam}
        barcodeScannerSettings={{
          barCodeTypes: ["qr"],
        }}
      >
        <View style={styles.btn}>
          <TouchableOpacity
            onPress={toggleCameraFacing}
          >
            <Text style={styles.buttonText}>Flip Camera</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#af2",
    width: 120,
    height: 50,
    padding: 5,
    borderRadius: 10,
    borderColor: "#034f48",
    color: "#204",
    justifyContent: "center",
    alignContent: "center",
  },
  cam: {
    flex: 1,
    width: "100%",
  },
  buttonText: {
    fontSize: 21,
    color: "rgb(0,122,255)",
  }
});
