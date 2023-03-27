import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar, IconButton } from 'react-native-paper';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Avatar.Image
          size={40}
          source={require('../../../assets/icon.png')}
        />
        <Text style={styles.title}>Admin</Text>
      </View>
      <TouchableOpacity>
        <IconButton icon="cog" size={30} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    // backgroundColor: "#161CF9",
    borderRadius: 25,
    marginTop: 30,
    borderTopColor: "#ddd",
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    marginLeft: 10,
    fontSize: 18,
    // color: "red",
    fontWeight: 'bold',
  },
});

export default Header;
