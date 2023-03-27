// import React from 'react';
// import { StyleSheet } from 'react-native';
// import { Appbar, BottomNavigation } from 'react-native-paper';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// import { faHome, faUser, faPlus, faFileAlt, faBell } from '@fortawesome/free-solid-svg-icons';

// const Footer = ({ navigation, index, routes }) => {
//   const handleNavigation = (route) => {
//     navigation.navigate(route);
//   };

//   return (
//     <BottomNavigation
//       navigationState={{ index, routes }}
//       onIndexChange={handleNavigation}
//       barStyle={styles.bottomNavigation}
//       shifting={false}
//     >
//       <BottomNavigation.Action
//         key="home"
//         icon={() => <FontAwesomeIcon icon={faHome} size={20} color="#FFFFFF" />}
//       />
//       <BottomNavigation.Action
//         key="user"
//         icon={() => <FontAwesomeIcon icon={faUser} size={20} color="#FFFFFF" />}
//       />
//       <BottomNavigation.Action
//         key="plus"
//         icon={() => <FontAwesomeIcon icon={faPlus} size={20} color="#FFFFFF" />}
//       />
//       <BottomNavigation.Action
//         key="rapport"
//         icon={() => <FontAwesomeIcon icon={faFileAlt} size={20} color="#FFFFFF" />}
//       />
//       <BottomNavigation.Action
//         key="notification"
//         icon={() => <FontAwesomeIcon icon={faBell} size={20} color="#FFFFFF" />}
//       />
//     </BottomNavigation>
//   );
// };

// const styles = StyleSheet.create({
//   bottomNavigation: {
//     backgroundColor: '#6200EE',
//   },
// });

// export default Footer;

// import React from 'react';
// import { StyleSheet, View } from 'react-native';
// import { IconButton } from 'react-native-paper';

// const Footer = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       <IconButton
//         icon="home"
//         color="#fffff"
//         size={28}
//         onPress={() => navigation.navigate('Home')}
//       />
//       <IconButton
//         icon="account"
//         color="#555"
//         size={28}
//         onPress={() => navigation.navigate('Profile')}
//       />
//       <IconButton
//         icon="plus"
//         color="#555"
//         size={28}
//         onPress={() => navigation.navigate('Create')}
//       />
//       <IconButton
//         icon="file-chart"
//         color="#555"
//         size={28}
//         onPress={() => navigation.navigate('Reports')}
//       />
//       <IconButton
//         icon="bell"
//         color="#555"
//         size={28}
//         onPress={() => navigation.navigate('Notifications')}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     justifyContent: 'space-evenly',
//     alignItems: 'center',
//     height: 50,
//     borderTopWidth: 1,
//     borderTopColor: '#ccc',
//     backgroundColor: "#2f95dc",
//     borderRadius: 25
//   },
// });

// export default Footer;

import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigationState } from "@react-navigation/native";

import styles from "./Footer_style";

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
        onPress={() => handlePress("user")}
        style={[
          styles.tabButton,
          isActiveTab("user") && styles.activeTabButton,
        ]}
      >
        <Ionicons
          name={isActiveTab("user") ? "person-sharp" : "person-outline"}
          size={25}
          color={isActiveTab("user") ? "#2196f3" : "#fff"}
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
