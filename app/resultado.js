import {
  StyleSheet,
  View,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
} from "react-native";
import { Text } from "react-native-elements";
import Logo from "../assets/favicon.png";
import { TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { Card } from "../components/Card";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SafeAreaView />

        <View style={styles.title}>
          <Image width={20} height={20} source={Logo} />
          <Text h3 style={{ color: "black" }}>
            RC Company
          </Text>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.cardsContent}>
          <Card title="Umidade AR" label="60"/>
          <Card title="Temperatura AR" label="27°C"/>
        </View>
      </View>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View style={styles.footer}>
          <Link href="/" asChild>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Sair</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0C4A6E",
    flex: 1,
  },

  header: {
    backgroundColor: "#4682B4",
    padding: 32,
  },

  title: {
    flexDirection: "row",
    gap: 16,
    justifyContent: "center",
    alignContent: "center",
  },

  content: {
    padding: 32,
    flex: 1,
    justifyContent: "space-between"
  },

  cardsContent: {
    justifyContent: "space-between",
    marginTop: 60,
    gap: 10
  },

  footer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40
  },

  button: {
    backgroundColor: "black",
    height: 50,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    width: 300,
  },

  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
