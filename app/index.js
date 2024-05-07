import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/configFirebase";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableWithoutFeedback,
  TextInput,
  Keyboard,
  TouchableOpacity,
  Text,
  Alert,
} from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  
  const handleSignIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      navigation.navigate('resultado');
    } catch (error) {
      Alert.alert("Sign In Failed", error.message);
      console.error("Sign In Error:", error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image
            style={styles.logoImage}
            source={require("../assets/favicon.png")}
          />
          <Text style={styles.logoText}>RC Company</Text>
        </View>

        <View style={styles.content}>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>E-mail</Text>
            <TextInput
              style={styles.inputContent}
              placeholder="Digite seu e-mail"
              placeholderTextColor="#fff"
              keyboardType="email-address"
              value={email}
              onChangeText={(value) => setEmail(value)}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Senha</Text>
            <TextInput
              style={styles.inputContent}
              placeholder="Digite sua senha"
              placeholderTextColor="#fff"
              secureTextEntry={true}
              value={password}
              onChangeText={(value) => setPassword(value)}
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={handleSignIn}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0C4A6E",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  logoImage: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  logoText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  content: {
    width: "80%",
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 5,
  },
  inputContent: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#fff",
    color: "#fff",
  },
  button: {
    backgroundColor: "black",
    height: 50,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
