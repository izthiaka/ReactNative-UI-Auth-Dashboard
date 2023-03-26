import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

import styles from "../../styles/auth_style";

const ForgotPasswordScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSendOTP = () => {
    // Ici, vous devrez écrire du code pour envoyer un OTP au numéro de téléphone de l'utilisateur
    // Vous pouvez utiliser une API de messagerie comme Twilio ou Nexmo pour cela

    // Une fois que l'OTP a été envoyé, naviguez vers l'écran de vérification OTP
    navigation.navigate("VerifyOTP", { phoneNumber });
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../../../assets/logo.png")}
          style={styles.logo}
        />
      </View>
      <Text style={styles.heading}>Mot de passe oublié ?</Text>
      <Text style={styles.subheading}>
        Entrez votre numéro de téléphone pour récupérer votre compte
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Numéro de téléphone"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleSendOTP}>
        <Text style={styles.buttonText}>Envoyer un OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgotPasswordScreen;

// 01052741335
