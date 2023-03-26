import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    footerContainer: {
      flexDirection: "row",
      backgroundColor: "#161CF9",
      borderTopWidth: 1,
      borderTopColor: "#ddd",
      borderRadius: 25,
    },
    tabButton: {
      flex: 1,
      alignItems: "center",
      paddingTop: 10,
      paddingBottom: 10,
      borderRadius: 50,
    },
    activeTabButton: {
      backgroundColor: "#2196f3",
    },
  });

export default styles;
  