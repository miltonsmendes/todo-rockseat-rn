import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
    paddingTop: 32,
  },
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
  counterContainerRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  lineDivisor: {
    borderColor: "#333333",
    borderTopWidth: 1,
    width: "100%",
    marginTop: 20,
    marginBottom: 48,
  },
  listEmptyContainer: {
    alignItems: "center",
  },
  listContainer: {
    marginTop: 20,
  },
  imageStyle: {
    marginBottom: 16,
  },
  listMessage: {
    color: "#808080",
    fontWeight: "700",
    fontSize: 16,
  },
  listSubMessage: {
    color: "#808080",
    fontWeight: "400",
    fontSize: 16,
  },
});
