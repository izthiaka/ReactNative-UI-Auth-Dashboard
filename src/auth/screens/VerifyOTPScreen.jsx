import React, { useState, useEffect } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

import styles from "../../styles/auth_style";

const VerifyOTPScreen = ({ route, navigation }) => {
  const { phoneNumber } = route.params;
  const [otp, setOTP] = useState("");
  const [timeLeft, setTimeLeft] = useState(120);

  useEffect(() => {
    if (timeLeft === 0) {
      // Ici, vous devrez écrire du code pour renvoyer un nouveau OTP au numéro de téléphone de l'utilisateur
      // Vous pouvez utiliser une API de messagerie comme Twilio ou Nexmo pour cela
    } else {
      // Compter à rebours de 1 seconde jusqu'à ce que le temps soit écoulé
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const handleVerifyOTP = () => {
    // Ici, vous devrez écrire du code pour vérifier si le code OTP entré est correct
    // Si c'est le cas, naviguez vers l'écran Dashboard
    // Sinon, affichez un message d'erreur à l'utilisateur
    navigation.navigate("ChangePassword");
  };

  const handleResendOTP = () => {
    // Ici, vous devrez écrire du code pour renvoyer un OTP au numéro de téléphone de l'utilisateur
    // Vous pouvez utiliser une API de messagerie comme Twilio ou Nexmo pour cela
    setTimeLeft(120);
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../../../assets/logo.png")}
          style={styles.logo}
        />
      </View>
      <Text style={styles.heading}>Entrez le code reçu par SMS</Text>
      <Text style={styles.subheading}>
        Un code de vérification a été envoyé au{" "}
        <Text style={styles.phoneNumber}>{phoneNumber}</Text>
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Code de vérification"
        keyboardType="numeric"
        value={otp}
        onChangeText={(text) => setOTP(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleVerifyOTP}>
        <Text style={styles.buttonText}>Vérifier le code</Text>
      </TouchableOpacity>
      <View style={styles.timerContainer}>
        {timeLeft !== 0 ? (
          <Text style={styles.timer}>
            Renvoyer un nouveau code dans {minutes}:
            {seconds < 10 ? `0${seconds}` : seconds}
          </Text>
        ) : (
          <TouchableOpacity
            style={styles.forgotPassword}
            onPress={handleResendOTP}
            disabled={timeLeft !== 0}
          >
            <Text style={styles.forgotPasswordText}>Renvoyer un code</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default VerifyOTPScreen;
