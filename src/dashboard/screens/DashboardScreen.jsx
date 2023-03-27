import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";

import Footer from "../components/Footer";
import Header from "../components/Header";

const DashboardScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      {/* Dashboard Content */}
      <View style={styles.content}>
        <Text style={styles.heading}>Tableau de bord</Text>
        <Text style={styles.text}>Bienvenue sur votre tableau de bord.</Text>
      </View>

      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#2f95dc",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default DashboardScreen;
