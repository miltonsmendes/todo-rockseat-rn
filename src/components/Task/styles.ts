import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#262626",
    borderRadius: 8,
    marginBottom: 8,
    flexDirection: "row",
    flexWrap: "nowrap",
    padding: 12,
    alignItems: "center",
  },
  textContainer: {
    marginLeft: 10,
    width: 0,
    flexGrow: 1,
  },
  taskText: {
    color: "#F2F2F2",
    textDecorationLine: "line-through",
  },
  imageStyle: {
    width: 40,
    height: 40,
  },
});
