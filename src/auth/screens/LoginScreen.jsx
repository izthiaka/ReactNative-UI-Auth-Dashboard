import React, { useState } from "react";
import { View, Image, Text, TextInput, TouchableOpacity } from "react-native";

import styles from "../../styles/auth_style";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // TODO: Handle login
  };

  const handleForgotPassword = () => {
    navigation.navigate("ForgotPassword");
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../../../assets/logo.png")}
          style={styles.logo}
        />
      </View>
      <TextInput
        style={styles.input}
        keyboardType="phone-pad"
        placeholder="Num. téléphone"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Se connecter</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.forgotPassword}
        onPress={handleForgotPassword}
      >
        <Text style={styles.forgotPasswordText}>Mot de passe oublié ?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
