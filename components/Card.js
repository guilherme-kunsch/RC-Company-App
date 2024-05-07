import { View } from "react-native";
import { Text } from "react-native-elements";

export function Card({ title, label }) {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        borderColor: "#E7ECF3",
        borderWidth: 1,
        borderStyle: "solid",
        padding: 32,
        borderRadius: 8
      }}
    >
      <Text
        style={{
          fontSize: 40,
          fontWeight: "bold",
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          fontSize: 25,
          fontWeight: "bold"
        }}
      >
        {label}
      </Text>
    </View>
  );
}
