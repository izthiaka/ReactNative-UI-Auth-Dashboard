import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
    },
    col: {
      flex: 1,
    },
    card: {
      backgroundColor: "#fff",
      borderRadius: 10,
      margin: 5
    },
    cardContent: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    cardIcon: {
      backgroundColor: "#BBE4FF",
      padding: 10,
      borderRadius: 50,
    },
    cardTitle: {
      fontSize: 16,
      fontWeight: "bold",
      marginBottom: 5,
    },
    cardValue: {
      fontSize: 18,
      fontWeight: "300",
    },
  });
  
  export default styles;