import React, { useState } from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import Footer from "../components/Footer";
import Header from "../components/Header";
import StatsCard from "../components/StatsCard";
import ListGamer from "../components/ListGamer";

import styles from "../../styles/dashboard_style";

const DashboardScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      {/* Dashboard Content */}
      <View style={styles.content}>
        <Text style={styles.heading}>Tableau de bord</Text>
        <StatsCard/>
        <ListGamer/>
        <Text style={styles.text}>Bienvenue sur votre tableau de bord.</Text>
      </View>

      <Footer />
    </View>
  );
};

export default DashboardScreen;
