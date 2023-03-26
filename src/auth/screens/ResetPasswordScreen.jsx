import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

import styles from "../../styles/auth_style";

const ResetPasswordScreen = ({ navigation }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleResetPassword = () => {
    // Ici, vous devrez écrire du code pour valider le mot de passe
    // et confirmer la réinitialisation du mot de passe dans la base de données
    navigation.navigate("Dashboard");
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../../../assets/logo.png")}
          style={styles.logo}
        />
      </View>
      <Text style={styles.heading}>Réinitialiser le mot de passe</Text>
      <TextInput
        style={styles.input}
        placeholder="Nouveau mot de passe"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirmer le mot de passe"
        secureTextEntry={true}
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleResetPassword}
        disabled={!password || password !== confirmPassword}
      >
        <Text style={styles.buttonText}>Réinitialiser le mot de passe</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ResetPasswordScreen;
