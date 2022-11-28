import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginTop: -58,
  },
  textInput: {
    flex: 1,
    height: 54,
    backgroundColor: "#262626",
    borderRadius: 6,
    padding: 16,
    borderWidth: 1,
    borderColor: "#0D0D0D",
  },
  buttonContainer: {
    height: 54,
    width: 54,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1E6F9F",
    borderRadius: 6,
    marginLeft: 4,
  },
  textButton: {
    color: "#fff",
  },
  buttonCircle: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
});
