import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigationState } from "@react-navigation/native";

import styles from "../../styles/Footer_style";

const Footer = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState("home");
  const navigationState = useNavigationState((state) => state);

  const handlePress = (tabName) => {
    setActiveTab(tabName);
    // navigation.navigate(tabName);
  };

  //   const handleNavigation = (route) => {
  //     navigation.navigate(route);
  //   };

  const isActiveTab = (tabName) => activeTab === tabName;

  return (
    <View style={styles.footerContainer}>
      <TouchableOpacity
        onPress={() => handlePress("home")}
        style={[
          styles.tabButton,
          isActiveTab("home") && styles.activeTabButton,
        ]}
      >
        <Ionicons
          name={isActiveTab("home") ? "home-sharp" : "home-outline"}
          size={25}
          color={isActiveTab("home") ? "#2196f3" : "#fff"}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handlePress("cash")}
        style={[
          styles.tabButton,
          isActiveTab("cash") && styles.activeTabButton,
        ]}
      >
        <Ionicons
          name={isActiveTab("cash") ? "cash" : "cash-outline"}
          size={25}
          color={isActiveTab("cash") ? "#2196f3" : "#fff"}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handlePress("plus")}
        style={[
          styles.tabButton,
          isActiveTab("plus") && styles.activeTabButton,
        ]}
      >
        <Ionicons
          name={isActiveTab("plus") ? "game-controller" : "game-controller-outline"}
          size={25}
          color={isActiveTab("plus") ? "#2196f3" : "#fff"}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handlePress("report")}
        style={[
          styles.tabButton,
          isActiveTab("report") && styles.activeTabButton,
        ]}
      >
        <Ionicons
          name={isActiveTab("report") ? "pie-chart" : "pie-chart-outline"}
          size={25}
          color={isActiveTab("report") ? "#2196f3" : "#fff"}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handlePress("notification")}
        style={[
          styles.tabButton,
          isActiveTab("notification") && styles.activeTabButton,
        ]}
      >
        <Ionicons
          name={
            isActiveTab("notification")
              ? "notifications-sharp"
              : "notifications-outline"
          }
          size={25}
          color={isActiveTab("notification") ? "#2196f3" : "#fff"}
        />
      </TouchableOpacity>
    </View>
  );
};
export default Footer;
