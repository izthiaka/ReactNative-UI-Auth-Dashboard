import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    footerContainer: {
      flexDirection: "row",
      backgroundColor: "#000000",
      borderTopWidth: 1,
      borderTopColor: "#ddd",
      borderRadius: 50,
      marginBottom: 30,
      marginLeft: 10,
      marginRight: 10
    },
    tabButton: {
      flex: 1,
      alignItems: "center",
      paddingTop: 25,
      margin: 2,
      paddingBottom: 25,
      borderRadius: 50,
    },
    activeTabButton: {
      backgroundColor: "#fff",
    },
  });

export default styles;
  