import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderRadius: 25,
    marginTop: 40,
    borderTopColor: "#ddd",
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  tabButton: {
    padding: 7,
    margin: 2,
    borderRadius: 25,
    backgroundColor: "#BBE4FF",
  },
  activeTabButton: {
    color: "#fff",
  },
});

export default styles;
