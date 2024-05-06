import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableWithoutFeedback,
  TextInput,
  Keyboard,
} from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Logo from "./assets/favicon.png";
import { TouchableOpacity } from "react-native";

export default function App() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [loading, setLoading] = useState(false);

  const handlePress = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image width={20} height={20} source={Logo} />
        <Text h3 style={{ color: "#fff" }}>
          RC Company
        </Text>
      </View>

      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View style={styles.content}>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>E-mail</Text>
            <TextInput
              style={styles.inputContent}
              placeholder="Digite seu e-mail"
              placeholderTextColor="#fff"
              keyboardType="email-address"
              onChangeText={(value) => setEmail(value)}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Senha</Text>
            <TextInput
              style={styles.inputContent}
              placeholder="Digite seu senha"
              placeholderTextColor="#fff"
              secureTextEntry={true}
              onChangeText={(value) => setPassword(value)}
            />
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0C4A6E",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  content: {
    padding: 32,
  },
  inputContainer: {
    marginBottom: 20,
    width: 300
  },
  inputLabel: {
    fontSize: 18,
    color: "#fff",
  },
  inputContent: {
    paddingHorizontal: 8,
    paddingVertical: 10,
    borderRadius: 8,
    borderColor: "#fff",
    borderStyle: "solid",
    borderWidth: 1,
    color: "#fff",
  },
  button: {
    backgroundColor: 'black',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 20
  }
  
});
