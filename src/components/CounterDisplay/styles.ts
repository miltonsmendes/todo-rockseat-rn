import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  counterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  taskCreatedText: {
    color: "#4EA8DE",
    fontSize: 16,
    fontWeight: "700",
  },
  taskDoneText: {
    color: "#8284FA",
    fontSize: 16,
    fontWeight: "700",
  },
  counterDisplay: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,

    width: 25,
    height: 19,

    backgroundColor: "#333333",
    borderRadius: 8,
  },
  counterDisplayText: {
    color: "#fff",
    fontWeight: "700",
  },
  counterContainerRow: {
    flexDirection: "row",
    alignItems: "center",
  },
});
