import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

import styles from "../../styles/Header_style";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Avatar.Image size={40} source={require("../../../assets/icon.png")} />
        <Text style={styles.title}>GLORIA</Text>
      </View>
      <TouchableOpacity style={styles.tabButton}>
        <Ionicons name="cog" size={35} color="#2196f3" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
