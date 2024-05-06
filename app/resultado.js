import {
  StyleSheet,
  View,
  Image,
  TouchableWithoutFeedback,
  TextInput,
  Keyboard,
} from "react-native";
import { Text } from "react-native-elements";
import Logo from "../assets/favicon.png";
import { TouchableOpacity } from "react-native";
import { Link } from "expo-router";


export default function App() {
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
          <Link href="/" asChild>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Voltar</Text>
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
    width: 300,
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
    backgroundColor: "black",
    height: 50,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    width: 200
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
